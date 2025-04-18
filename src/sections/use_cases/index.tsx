"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { tabs } from "@/data/use_cases/tabs";
import Tab from "./Tab";

export default function UseCases() {
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

  return (
    <div className="mobile_padding">
      <div className="bg-light-grey lg:rounded-[80px] rounded-[40px] lg:p-[60px] p-[30px] lg:-mx-[60px] mt-[180px]">
        <div className="">
          <div className="flex flex-col gap-[30px]">
            <Tag className="bg-[#f468ff]">Use cases</Tag>
            <h1 className="text-[36px] lg:text-5xl font-bold mb-5 max-w-[649px]">
              Animate for social media, ads, marketing, brand, product, and more
            </h1>
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <p className="text-lg max-w-[420px]">
                The best brands use motion across all platforms to capture
                attention, tell powerful stories, and drive more engagement.
              </p>
              <Button className="text-lg">Read customer stories</Button>
            </div>
          </div>
        </div>

        <div className="mt-[60px] flex lg:flex-col flex-col-reverse gap-2.5">
          <div className="w-full lg:w-2/5 space-y-2.5">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                {...tab}
                isActive={tab.id === activeTab}
                setActiveTab={setActiveTab}
                progress={tab.id === activeTab ? progress : 0}
              />
            ))}
          </div>
          <div className="w-full flex-1 flex items-center justify-center bg-white">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="w-full h-full">
                    {tab.id === activeTab && (
                      <video
                        ref={videoRef}
                        src={tab.media.props.src}
                        muted
                        playsInline
                        className="w-full h-full"
                        key={tab.id}
                      />
                    )}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
