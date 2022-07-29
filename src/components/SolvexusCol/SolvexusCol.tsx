import React from "react";

interface IBcCol {
  children: React.ReactNode;
  size?: number;
  className?: string;
  innerStyle?: React.CSSProperties;
  id?: string;
}

const SolvexusCol = ({
  children,
  size,
  className,
  innerStyle,
  id,
}: IBcCol): JSX.Element | null => {
  const sizeCol = size ?? 100;

  return sizeCol ? (
    <div
      id={id}
      className={`bc-col ${className}`}
      style={{
        flex: `0 0 ${sizeCol}%`,
        maxWidth: `${sizeCol}%`,
        ...(innerStyle ?? {}),
      }}
    >
      {children}
    </div>
  ) : null;
};

export default SolvexusCol;
