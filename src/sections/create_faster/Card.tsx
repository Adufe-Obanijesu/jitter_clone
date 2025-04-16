import { ReactNode } from "react";

interface CardProps {
  media: ReactNode;
  heading: string;
  icon: ReactNode;
  body: string;
}

export default function Card({ media, heading, icon, body }: CardProps) {
  return (
    <div className="space-y-6">
      <div className="bg-light-grey flex items-center justify-center">
        {media}
      </div>

      <div>
        <div className="flex justify-center item-center gap-4">
          {icon}
          <p className="font-semibold text-lg">{heading}</p>
        </div>
        <p className="text-gray-400">{body}</p>
      </div>
    </div>
  );
}
