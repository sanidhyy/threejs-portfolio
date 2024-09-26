import type { PropsWithChildren } from "react";

import { cn } from "../lib/utils";

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  isBeam?: boolean;
  containerClass?: string;
}

export const Button = ({
  onClick,
  href,
  children,
  isBeam = false,
  containerClass,
}: PropsWithChildren<ButtonProps>) => {
  if (href)
    return (
      <a href={href} className={cn("btn hover:opacity-85", containerClass)}>
        {isBeam && (
          <span className="relative flex size-3">
            <div className="btn-ping" />
            <div className="btn-ping_dot" />
          </span>
        )}

        {children}
      </a>
    );

  return (
    <button
      onClick={onClick}
      className={cn("btn hover:opacity-85", containerClass)}
    >
      {isBeam && (
        <span className="relative flex size-3">
          <div className="btn-ping" />
          <div className="btn-ping_dot" />
        </span>
      )}

      {children}
    </button>
  );
};
