"use client";

import { tabs } from "@/data/use_cases/tabs";
import {useEffect, useMemo, useRef, useState} from "react";
import {useWindowWidth} from "@react-hook/window-size/throttled";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import { Draggable } from "gsap/Draggable";

export default function useVideoSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const tabCount = tabs.length;
  const [hasRendered, setHasRendered] = useState(false);
  const width = useWindowWidth()
  const isMobile = useMemo(() => width < 1024, [width]);

  const cardWidth = useMemo(() => Math.min(width, 400) - 80, [width])
  const cardGap = 20;

  useEffect(() => {
    setHasRendered(true)
  }, []);

  const {contextSafe} = useGSAP(() => {
    const mm = gsap.matchMedia()

    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress(video.currentTime / video.duration);
      }
    };
    const handleVideoEnded = () => {
      const newActiveTab = (activeTab + 1) % tabCount;

      setActiveTab(newActiveTab);
      setProgress(0);

      mm.add("(max-width: 1023px)", () => {
        gsap.to(".mobile-use-cases", {
          x: newActiveTab * -(cardWidth + 20)
        })
      })
    };


    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleVideoEnded);

    setProgress(0);

    if (video.paused) {
      video.play();
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleVideoEnded);
      mm.revert()
    };
  }, [activeTab, tabCount]);

  const moveTo = contextSafe((index: number) => {
    setProgress(0);
    setActiveTab(index)

    gsap.to(".mobile-use-cases", {
      x: index * -(cardWidth + cardGap)
    })
  })

  const updateActiveTab = (x: number) => {
    const newActiveTab = Math.abs(Math.round(x / (cardWidth + cardGap)));
    if (newActiveTab !== activeTab) {
      setActiveTab(newActiveTab);
      setProgress(0);

      // Reset video if needed
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        if (video.paused) {
          video.play();
        }
      }
    }
  };

  // Mobile animation
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(max-width: 1023px)", () => {
      const video = videoRef.current;
      if (!video || !draggableRef.current) return;

      const minX = (tabCount - 1) * -(cardWidth + cardGap);
      const maxX = 0;

      Draggable.create(".mobile-use-cases", {
        type: "x",
        bounds: { minX, maxX },
        inertia: true,
        snap: {
          x: (endValue) => Math.round(endValue / (cardWidth + cardGap)) * (cardWidth + cardGap)
        },
        onThrowComplete: function() {
          updateActiveTab(this.endX);
        }
      });
    })

    return () => {
      mm.revert()
    }
  }, [isMobile, cardWidth, tabCount, activeTab])

  return {
    refs: {
      videoRef,
      draggableRef,
    },
    state: {
      progress,
      activeTab,
      hasRendered,
      width,
      cardWidth
    },
    actions: {
      setActiveTab,
      moveTo
    },
  };
}
