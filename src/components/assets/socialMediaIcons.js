import React from "react"

export const GlobeIcon = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <title>globe-icon</title>
    <path
      d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Z"
      style={{
        fill: "none",
        stroke: fill,
        strokeMiterLimit: 10,
        strokeWidth: "32px",
      }}
    />
    <path
      d="M256,48c-58.07,0-112.67,93.13-112.67,208S197.93,464,256,464s112.67-93.13,112.67-208S314.07,48,256,48Z"
      style={{
        fill: "none",
        stroke: fill,
        strokeMiterLimit: 10,
        strokeWidth: "32px",
      }}
    />
    <path
      d="M117.33,117.33c38.24,27.15,86.38,43.34,138.67,43.34s100.43-16.19,138.67-43.34"
      style={{
        fill: "none",
        stroke: fill,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "32px",
      }}
    />
    <path
      d="M394.67,394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43,16.19-138.67,43.34"
      style={{
        fill: "none",
        stroke: fill,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "32px",
      }}
    />
    <line
      x1="256"
      y1="48"
      x2="256"
      y2="464"
      style={{
        fill: "none",
        stroke: fill,
        strokeMiterLimit: 10,
        strokeWidth: "32px",
      }}
    />
    <line
      x1="464"
      y1="256"
      x2="48"
      y2="256"
      style={{
        fill: "none",
        stroke: fill,
        strokeMiterLimit: 10,
        strokeWidth: "32px",
      }}
    />
  </svg>
)

export const LinkedInIcon = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <title>linkedin-icon</title>
    <path
      style={{
        fill: fill,
      }}
      d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
    />
  </svg>
)

export const RssIcon = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <title>rss-icon</title>
    <path
      style={{
        fill: fill,
      }}
      d="M108.56,342.78a60.34,60.34,0,1,0,60.56,60.44A60.63,60.63,0,0,0,108.56,342.78Z"
    />
    <path
      style={{
        fill: fill,
      }}
      d="M48,186.67v86.55c52,0,101.94,15.39,138.67,52.11s52,86.56,52,138.67h86.66C325.33,312.44,199.67,186.67,48,186.67Z"
    />
    <path
      style={{
        fill: fill,
      }}
      d="M48,48v86.56c185.25,0,329.22,144.08,329.22,329.44H464C464,234.66,277.67,48,48,48Z"
    />
  </svg>
)

export const TwitterIcon = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <title>twitter-icon</title>
    <path
      style={{
        fill: fill,
      }}
      d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
    />
  </svg>
)

export const GithubIcon = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <title>github-icon</title>
    <path
      style={{
        fill: fill,
      }}
      d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
    />
  </svg>
)

export const CodepenIcon = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <title>codepen-icon</title>
    <path
      style={{
        fill: fill,
      }}
      d="M241.24,303.94c-15.32-10.36-30.74-20.57-46.06-30.93-2-1.38-3.43-1.48-5.5,0L150.8,299.13C182,319.9,244,361.32,244,361.32V307.53C244,306.31,242.45,304.75,241.24,303.94Z"
    />
    <path
      style={{
        fill: fill,
      }}
      d="M195.09,240.67q23.19-15.24,46.11-30.86a7.54,7.54,0,0,0,2.8-5.34v-51.7s-62,41.12-93.26,61.94c13.7,9.16,26.67,17.91,39.78,26.44C191.54,241.81,193.92,241.43,195.09,240.67Z"
    />
    <path
      style={{
        fill: fill,
      }}
      d="M269.84,209.35q23.71,16.07,47.63,31.82a4.3,4.3,0,0,0,3.83,0l39.76-26.47L268,152.48v53.35A4.79,4.79,0,0,0,269.84,209.35Z"
    />
    <path
      style={{
        fill: fill,
      }}
      d="M258.11,230.37a5.27,5.27,0,0,0-4.74.17c-4.82,3-9.47,6.2-14.17,9.35-8.25,5.53-25.35,17-25.35,17l38.84,25.86a6.18,6.18,0,0,0,6.26.11l39-26S263.88,234.2,258.11,230.37Z"
    />
    <polygon
      style={{
        fill: fill,
      }}
      points="141 237.12 141 276.73 170.62 256.89 141 237.12"
    />
    <path
      style={{
        fill: fill,
      }}
      d="M256,32C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32ZM395,297c0,5.78-2.65,9.86-7.51,13.09q-61.71,41-123.29,82.19c-5.85,3.92-11.17,3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14,2.52-10.34,7.62-13.72,40.91-27.13,81.94-54.36,122.73-81.68,5.82-3.89,11.09-4,16.94-.09q61.54,41.21,123.26,82.19c4.68,3.11,7.45,6.95,7.45,12.66Z"
    />
    <path
      style={{
        fill: fill,
      }}
      d="M316.25,273.23q-22.59,15.34-45.39,30.34c-2.41,1.58-2.89,3.31-2.86,6.19V361.1l93-62-38.53-25.88C320.17,271.61,318.58,271.65,316.25,273.23Z"
    />
    <polygon
      style={{
        fill: fill,
      }}
      points="370 276.68 370 237.06 340.41 256.93 370 276.68"
    />
  </svg>
)
