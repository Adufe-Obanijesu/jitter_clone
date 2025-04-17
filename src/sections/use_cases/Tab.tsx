import { Dispatch, ReactNode, SetStateAction } from "react";

interface TabContent {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export default function Tab({
  id,
  title,
  description,
  isActive,
  setActiveTab,
}: TabContent) {
  return (
    <div
      key={id}
      className={`cursor-pointer p-[50px] bg-white transition-color`}
      onClick={() => setActiveTab(id)}
    >
      <h3
        className={`text-xl font-medium mb-2 text-dark ${
          isActive ? "opacity-100" : "opacity-50"
        }`}
      >
        {title}
      </h3>

      {isActive && description && (
        <p className="text-[#c3c3c6]">{description}</p>
      )}
    </div>
  );
}
