import useAnimateEffortlessly from "@/hooks/what_we_offer/useAnimateEffortlessly";

export default function AnimateEffortlessly() {

    const {refs} = useAnimateEffortlessly()

    return (
        <div ref={refs.scope} className="relative flex flex-col items-center mt-10 h-96 transform-3d">
            <div className="effortless-card absolute will-change-transform">
                <div className="bg-[#A9DBFF] text-white text-2xl px-6 py-4 rounded-full">
                    Freeze
                </div>
            </div>
            <div className="effortless-card absolute will-change-transform translate-z-[30px] translate-y-[111px]">
                <div className="bg-[#A9DBFF] text-white text-2xl px-6 py-4 rounded-full">
                    Slide down
                </div>
            </div>
            <div className="effortless-card absolute will-change-transform">
                <div className="bg-[#A9DBFF] text-white text-2xl px-6 py-4 rounded-full">
                    Bounce
                </div>
            </div>
        </div>
    )
}