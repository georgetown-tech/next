import React, { ReactElement } from "react";

export function DotBackground({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`pattern-cross pattern-slate-100 pattern-bg-white 
      pattern-size-6 pattern-opacity-100 ${className}`}
    >
      {children}
    </div>
  );

  return (
    <div
      className={`bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ${className}`}
    >
      {children}
    </div>
  );
}
