"use client";

import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { tabs } from "@/data/use_cases/tabs";
import Tab from "./Tab";
import { useState } from "react";

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="bg-light-grey rounded-[80px] p-[60px] -mx-[60px] mt-[180px]">
      <div className="">
        <div className="flex flex-col gap-[30px]">
          <Tag className="bg-[#f468ff]">Use cases</Tag>
          <h1 className="text-5xl font-bold mb-5 max-w-[649px]">
            Animate for social media, ads, marketing, brand, product, and more
          </h1>

          <div className="flex justify-between gap-4">
            <p className="text-lg max-w-[420px]">
              The best brands use motion across all platforms to capture
              attention, tell powerful stories, and drive more engagement.
            </p>
            <Button className="text-lg">Read customer stories</Button>
          </div>
        </div>
      </div>

      <div className="mt-[60px] flex flex-col gap-2.5 md:flex-row">
        <div className="w-full md:w-2/5 space-y-2.5">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              {...tab}
              isActive={tab.id === activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        <div className="w-full flex-1 flex items-center justify-center bg-white">
          {tabs.map(
            (tab) => activeTab === tab.id && <div key={tab.id}>{tab.media}</div>
          )}
        </div>
      </div>
    </div>
  );
}
