"use client";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { tabs } from "@/data/use_cases/tabs";
import Tab from "./Tab";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

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
    <div className="bg-light-grey rounded-[80px] p-6 md:p-[60px] -mx-4 md:-mx-[60px] mt-[100px] md:mt-[180px]">
      <div className="">
        <div className="flex flex-col gap-4 md:gap-[30px]">
          <Tag className="bg-[#f468ff]">Use cases</Tag>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-5 max-w-full md:max-w-[649px]">
            Animate for social media, ads, marketing, brand, product, and more
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <p className="text-base md:text-lg max-w-full md:max-w-[420px]">
              The best brands use motion across all platforms to capture
              attention, tell powerful stories, and drive more engagement.
            </p>
            <Button className="text-base md:text-lg">
              Read customer stories
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-[60px] flex flex-col md:flex-row gap-2.5">
        {/* Video Section - Full width on mobile, right side on desktop */}
        <div className="w-full order-1 md:order-2 md:w-3/5 md:flex-1 flex items-center justify-center bg-white mb-4 md:mb-0">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className="w-full h-full">
                  <video
                    ref={videoRef}
                    src={tab.media.props.src}
                    muted
                    playsInline
                    className="w-full h-full"
                    key={tab.id}
                  />
                </div>
              ),
          )}
        </div>

        {/* Tabs Section */}
        <div className="w-full order-2 md:order-1 md:w-2/5">
          {/* Desktop: Show all tabs in a column */}
          <div className="hidden md:flex md:flex-col gap-2.5">
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

          {/* Mobile: Only show active tab */}
          <div className="flex md:hidden">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={tab.id === activeTab ? "block w-full" : "hidden"}
              >
                <Tab
                  {...tab}
                  isActive={true}
                  setActiveTab={setActiveTab}
                  progress={progress}
                />

                {/* Mobile Tab Navigation */}
                <div className="flex justify-between items-center mt-2 px-2">
                  <button
                    onClick={() =>
                      setActiveTab((prev) => (prev > 1 ? prev - 1 : tabCount))
                    }
                    className="p-2 text-dark"
                  >
                    <FaArrowLeft />
                  </button>

                  <div className="flex space-x-1">
                    {tabs.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                          idx + 1 === activeTab ? "bg-dark" : "bg-gray-300"
                        }`}
                        onClick={() => setActiveTab(idx + 1)}
                      ></span>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setActiveTab((prev) => (prev % tabCount) + 1)
                    }
                    className="p-2 text-dark"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
