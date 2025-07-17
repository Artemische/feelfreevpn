import React, { ReactNode } from "react";

interface WavesProps {
  children?: ReactNode;
}

const Waves: React.FC<WavesProps> = ({ children }) => (
  <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
    <div
      style={{
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      pointerEvents: "none",
      border: "none",
      }}
    >
      <svg
  viewBox="0 0 1440 420"
  preserveAspectRatio="none"
  style={{ width: "100%", height: "100%", display: "block" }}
>
  <g className="wave">
    <path
      d="M0,120 C360,200 1080,40 1440,120"
      fill="none"
      stroke="#2ACAFE"
      strokeWidth={2}
      opacity={0.2}
    >
      <animate
        attributeName="d"
        dur="5s"
        repeatCount="indefinite"
        values="
          M0,120 C360,200 1080,40 1440,120;
          M0,100 C360,160 1080,80 1440,100;
          M0,140 C360,240 1080,0 1440,140;
          M0,120 C360,200 1080,40 1440,120"
      />
    </path>
    <path
      d="M0,180 C300,260 1140,100 1440,180"
      fill="none"
      stroke="#2ACAFE"
      strokeWidth={2}
      opacity={0.2}
    >
      <animate
        attributeName="d"
        dur="7s"
        repeatCount="indefinite"
        values="
          M0,180 C300,260 1140,100 1440,180;
          M0,150 C300,220 1140,140 1440,150;
          M0,200 C300,300 1140,60 1440,200;
          M0,180 C300,260 1140,100 1440,180"
      />
    </path>
    <path
      d="M0,240 C400,320 1040,160 1440,240"
      fill="none"
      stroke="#2ACAFE"
      strokeWidth={2}
      opacity={0.2}
    >
      <animate
        attributeName="d"
        dur="9s"
        repeatCount="indefinite"
        values="
          M0,240 C400,320 1040,160 1440,240;
          M0,220 C400,280 1040,200 1440,220;
          M0,250 C400,360 1040,120 1440,250;
          M0,240 C400,320 1040,160 1440,240"
      />
    </path>
    <path
      d="M0,300 C500,380 940,220 1440,300"
      fill="none"
      stroke="#2ACAFE"
      strokeWidth={2}
      opacity={0.2}
    >
      <animate
        attributeName="d"
        dur="11s"
        repeatCount="indefinite"
        values="
          M0,300 C500,380 940,220 1440,300;
          M0,270 C500,340 940,260 1440,270;
          M0,320 C500,420 940,180 1440,320;
          M0,300 C500,380 940,220 1440,300"
      />
    </path>
  </g>
</svg>

    </div>
    <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>{children}</div>
  </div>
);

export default Waves;