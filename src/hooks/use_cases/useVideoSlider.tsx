"use client";

import { tabs } from "@/data/use_cases/tabs";
import { useCallback, useMemo, useRef, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function useVideoSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const tabCount = tabs.length;
  const width = useWindowWidth();
  const isMobile = useMemo(() => width < 1024, [width]);

  const cardWidth = useMemo(() => {
    if (isMobile) {
      return Math.min(width, 400) - 40;
    }

    return Math.min(width, 400) - 80;
  }, [width, isMobile]);

  const { contextSafe } = useGSAP(() => {
    const mm = gsap.matchMedia();

    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress(video.currentTime / video.duration);
      }
    };

    const handleVideoEnded = () => {
      video.currentTime = 0;
      setActiveTab(() => {
        const newActiveTab = (activeTab + 1) % tabCount;

        mm.add("(max-width: 1023px)", () => {
          gsap.to(".mobile-use-cases", {
            x: newActiveTab * -cardWidth,
          });
        });

        return newActiveTab;
      });
      setProgress(0);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleVideoEnded);

    setProgress(0);
    video.currentTime = 0;

    // Only play when in view
    const st = ScrollTrigger.create({
      trigger: video,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        video.play().catch(() => {});
      },
      onLeaveBack: () => {
        video.pause();
      },
      onLeave: () => {
        video.pause();
      },
      onEnterBack: () => {
        video.play().catch(() => {});
      },
    });

    gsap.delayedCall(0.5, () => {
      ScrollTrigger.refresh();
    });

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleVideoEnded);
      mm.revert();
      st.kill();
    };
  }, [tabCount, activeTab, videoRef.current, isMobile]);

  const moveTo = contextSafe((index: number) => {
    setProgress(0);
    setActiveTab(index);

    gsap.to(".mobile-use-cases", {
      x: index * -cardWidth,
    });
  });

  const updateActiveTab = useCallback(
    (x: number) => {
      const newActiveTab = Math.abs(Math.round(x / cardWidth));
      if (newActiveTab !== activeTab) {
        setActiveTab(newActiveTab);
        setProgress(0);

        const video = videoRef.current;
        if (video) {
          video.currentTime = 0;
          if (video.paused) {
            video.play().catch(() => {});
          }
        }
      }
    },
    [activeTab, cardWidth],
  );

  // Mobile animation
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(max-width: 1023px)", () => {
      const video = videoRef.current;
      if (!video || !draggableRef.current) return;

      const minX = (tabCount - 1) * -cardWidth;
      const maxX = 0;

      Draggable.create(".mobile-use-cases", {
        type: "x",
        bounds: { minX, maxX },
        inertia: true,
        snap: {
          x: (endValue) => Math.round((endValue / cardWidth) * cardWidth),
        },
        onThrowComplete: function () {
          updateActiveTab(this.endX);
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, [isMobile, cardWidth, tabCount, activeTab]);

  // Add this new useGSAP hook for managing non-active videos on mobile
  useGSAP(() => {
    if (!isMobile) return;

    // Find all video elements and manage their state
    const allVideos = document.querySelectorAll(".mobile-use-cases video");

    allVideos.forEach((video, index) => {
      const videoElement = video as HTMLVideoElement;

      if (index !== activeTab) {
        // Pause and reset non-active videos
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    });
  }, [activeTab, isMobile]);

  return {
    refs: {
      videoRef,
      draggableRef,
    },
    state: {
      progress,
      activeTab,
      width,
      cardWidth,
      isMobile,
    },
    actions: {
      setActiveTab,
      moveTo,
    },
  };
}
