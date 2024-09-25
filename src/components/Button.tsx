import type { PropsWithChildren } from "react";

import { cn } from "../lib/utils";

type ButtonProps = {
  href?: string;
  isBeam?: boolean;
  containerClass: string;
};

export const Button = ({
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
    <button className={cn("btn hover:opacity-85", containerClass)}>
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
