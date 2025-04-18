import { PiChatFill } from "react-icons/pi";

export default function Chat() {
  return (
    <div className="z-50 fixed bottom-6 right-6 bg-dark w-12 h-12 rounded-full text-white flex justify-center items-center cursor-pointer">
      <PiChatFill className="text-2xl" />
    </div>
  );
}
