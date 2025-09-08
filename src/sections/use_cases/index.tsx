"use client";

import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { tabs } from "@/data/use_cases/tabs";
import Tab from "./Tab";
import useVideoSlider from "@/hooks/use_cases/useVideoSlider";
import Image from "next/image";
import {cn} from "@/utils/tailwind";

export default function UseCases() {
  const { refs, state, actions } = useVideoSlider();

  return (
    <section className="lg:max-w-[860px] max-w-[400px] mx-auto mobile_padding">
      <div id="use-cases" className="invisible bg-light-grey lg:rounded-[80px] rounded-[20px] py-5 lg:p-[60px] lg:-mx-[60px] mt-[180px]">
        <div className="px-5 lg:px-0">
          <div className="flex flex-col gap-[30px]">
            <Tag className="bg-[#f468ff]">Use cases</Tag>
            <h2 className="text-[36px] lg:text-5xl font-bold mb-5 max-w-[649px]">
              Animate for social media, ads, marketing, brand, product, and more
            </h2>
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <p className="text-lg max-w-[420px]">
                The best brands use motion across all platforms to capture
                attention, tell powerful stories, and drive more engagement.
              </p>
              <Button className="text-lg">Read customer stories</Button>
            </div>
          </div>
        </div>

        {/* Desktop Screen */}
        <div className="mt-[60px] hidden lg:flex flex-row gap-2.5">
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
                        <div
                            key={tab.id} className="w-full relative aspect-square">
                          <Image
                              src={tab.media.imageSrc}
                              width={1200}
                              height={1200}
                              className="w-full"
                              alt="video preview"
                          />
                          <div className="absolute left-0 top-0 w-full h-full px-10 lg:px-0 flex items-center z-0">
                            <video
                                ref={refs.videoRef}
                                src={tab.media.videoSrc}
                                muted
                                playsInline
                                autoPlay
                                aria-hidden="true"
                                className="w-full h-full z-1"
                            />
                          </div>
                        </div>
                    )}
                  </div>
                ),
            )}
          </div>
        </div>

        {/*  Mobile Screen */}
              <div className="overflow-x-hidden">
                <div ref={refs.draggableRef} className="mobile-use-cases flex">
                  {tabs.map((tab) => {
                      return (
                          <div
                              key={tab.id}
                              className="mt-[60px] lg:hidden flex flex-col gap-2.5 max-w-[360px] px-5 w-[calc(100vw-40px)]">
                              <div className="w-full flex-1 flex items-center justify-center bg-white">
                                  <div className="w-full relative aspect-square max-h-[400px] h-[calc(100vw-80px)]">
                                      <Image
                                          src={tab.media.imageSrc}
                                          width={1200}
                                          height={1200}
                                          className="w-full"
                                          alt="video preview"
                                      />
                                      <div
                                          className="absolute left-0 top-0 w-full h-full flex items-center z-0">
                                        <video
                                            ref={(tab.id === state.activeTab && state.isMobile) ? refs.videoRef : undefined}
                                            src={tab.media.videoSrc}
                                            muted
                                            playsInline
                                            autoPlay={tab.id === state.activeTab} // Only autoplay if active
                                            preload="none"
                                            aria-hidden="true"
                                            className="w-full h-full z-1"
                                            onLoadedData={(e) => {
                                              if (tab.id !== state.activeTab) {
                                                const video = e.currentTarget;
                                                video.pause();
                                                video.currentTime = 0;
                                              }
                                            }}
                                        />
                                      </div>
                                  </div>
                              </div>

                              <div className="w-full lg:w-2/5 space-y-2.5">
                                  <Tab
                                      {...tab}
                                      isActive={tab.id === state.activeTab}
                                      setActiveTab={actions.setActiveTab}
                                      progress={tab.id === state.activeTab ? state.progress : 0}
                                  />
                              </div>

                          </div>
                      )
                  })}
                </div>

                <div className="flex justify-center gap-2 mt-6 lg:hidden">
                  {
                    new Array(tabs.length).fill(0).map((_, i) => (
                        <div key={i} className={cn("w-2 h-2 rounded-full bg-gray-300 cursor-pointer", {"bg-gray-500": state.activeTab === i})} onClick={() => actions.moveTo(i)} />
                    ))
                  }
                </div>
              </div>
      </div>
    </section>
  );
}
