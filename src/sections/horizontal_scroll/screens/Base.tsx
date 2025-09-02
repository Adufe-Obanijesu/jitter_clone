import Image from "next/image";
import {cn} from "@/utils/tailwind";

export default function Base() {

    return (
        <div className="h-screen flex items-center justify-center w-screen bg-blue-100 shrink-0 overflow-hidden">
            <div className="zoom-el w-full aspect-[1.777/1] relative flex justify-center py-[67px] lg:max-w-[860px] max-w-[400px]">
                <Image src="/images/horizontal_scroll/dashboard.webp" width={1280} height={720} className="lg:max-w-[860px] max-w-[400px] absolute top-0 left-0 w-full shadow-lg" alt="base" />
                <div className="relative z-10 grid grid-cols-3 gap-4 grid-rows-3 h-[243px]">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div key={index} className={cn("w-[110px] h-[70px] px- flex justify-center items-center", {"left-item": index % 3 === 0}, {"right-item": index % 3 === 2}, {"top-item": index < 3}, {"bottom-item": index > 5})}>
                            <div className="w-full h-full bg-gray-500 rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
