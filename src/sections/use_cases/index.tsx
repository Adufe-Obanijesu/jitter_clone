"use client";

import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { tabs } from "@/data/use_cases/tabs";
import Tab from "./Tab";
import useVideoSlider from "@/hooks/use_cases/useVideoSlider";

export default function UseCases() {
  const { refs, state, actions } = useVideoSlider();

  return (
    <div className="lg:max-w-[860px] max-w-[400px] mx-auto mobile_padding">
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

        <div className="mt-[60px] flex lg:flex-row flex-col-reverse gap-2.5">
          <div className="w-full lg:w-2/5 space-y-2.5">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                {...tab}
                isActive={tab.id === state.activeTab}
                setActiveTab={actions.setActiveTab}
                progress={tab.id === state.activeTab ? state.progress : 0}
              />
            ))}
          </div>
          <div className="w-full flex-1 flex items-center justify-center bg-white">
            {tabs.map(
              (tab) =>
                state.activeTab === tab.id && (
                  <div key={tab.id} className="w-full h-full">
                    {tab.id === state.activeTab && (
                      <video
                        ref={refs.videoRef}
                        src={tab.media.props.src}
                        muted
                        playsInline
                        className="w-full h-full"
                        key={tab.id}
                      />
                    )}
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
