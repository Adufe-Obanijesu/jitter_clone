import { useWindowSize } from "@react-hook/window-size";
import { Dispatch, SetStateAction } from "react";

interface TabContent {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  setActiveTab: Dispatch<SetStateAction<number>>;
  progress?: number;
}

export default function Tab({
  id,
  title,
  description,
  isActive,
  setActiveTab,
  progress = 0,
}: TabContent) {
  const [width] = useWindowSize();

  return (
    <div
      key={id}
      className={`cursor-pointer p-4 md:p-[50px] bg-white transition-colors relative transition_item ${
        isActive ? "shadow-md md:shadow-none" : ""
      }`}
      onClick={() => setActiveTab(id)}
    >
      <h3
        className={`text-lg md:text-xl font-medium mb-1 md:mb-2 text-dark transition_item ${
          isActive ? "opacity-100" : "opacity-50"
        }`}
      >
        {title}
      </h3>
      {(isActive || width < 768) && description && (
        <p
          className={`text-[#c3c3c6] text-sm md:text-base ${
            isActive ? "block" : "hidden md:block"
          }`}
        >
          {description}
        </p>
      )}
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white">
          <div
            className="h-full bg-dark transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
