import { ButtonHTMLAttributes, ReactNode, forwardRef, useRef } from "react";
import {cn} from "@/utils/tailwind";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ariaId?: string;
  animateOnHover?: boolean;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, rightIcon, animateOnHover=true, ariaId, className = "", ...rest }, ref) => {

    const scope = useRef<HTMLDivElement>(null)
    const timeline = useRef<gsap.core.Timeline>(null)

    const {contextSafe} = useGSAP(() => {
      if (!animateOnHover) return;
      timeline.current = gsap.timeline({paused: true, defaults: {ease: "back.out(2.5)"}})
    .add(gsap.effects.scaleEffect("button", {direction: "up"}))
    }, {scope})

    const onHover = contextSafe(() => {
      timeline.current?.play()
    })
  
    const onLeave = contextSafe(() => {
      timeline.current?.reverse()
    })

    return (
      <div ref={scope}>
      <button
        ref={ref}
        {...(!rest["aria-label"] && !rest["aria-labelledby"]
          ? { "aria-labelledby": ariaId }
          : {})}
        {...rest}
        className={cn(
          "py-4 px-8 font-semibold bg-primary text-white rounded-full flex items-center justify-center gap-2",
          className,
        )}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <span id={ariaId} className="shrink-0">{children}</span>
        {rightIcon && <span>{rightIcon}</span>}
      </button>
      </div>
    );
  },
);

Button.displayName = "Button";

export default Button;
