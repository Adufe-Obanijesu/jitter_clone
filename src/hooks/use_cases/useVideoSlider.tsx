"use client";

import { tabs } from "@/data/use_cases/tabs";
import { useEffect, useRef, useState } from "react";

export default function useVideoSlider() {
  const [activeTab, setActiveTab] = useState(1);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const tabCount = tabs.length;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress(video.currentTime / video.duration);
      }
    };

    const handleVideoEnded = () => {
      setActiveTab((prev) => (prev % tabCount) + 1);
      setProgress(0);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleVideoEnded);

    setProgress(0);

    if (video.paused) {
      video.play().catch((error) => console.error("Video play error:", error));
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleVideoEnded);
    };
  }, [activeTab, tabCount]);

  return {
    refs: {
      videoRef,
    },
    state: {
      progress,
      activeTab,
    },
    actions: {
      setActiveTab,
    },
  };
}
