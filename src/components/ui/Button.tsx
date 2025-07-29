import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import {cn} from "@/utils/tailwind";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, rightIcon, className = "", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(
          "py-4 px-8 font-semibold bg-primary text-white rounded-full flex items-center justify-center gap-2",
          className,
        )}
      >
        <span className="shrink-0">{children}</span>
        {rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
