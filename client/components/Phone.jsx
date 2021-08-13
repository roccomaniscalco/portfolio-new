import styles from "../styles/components/phone.module.css";

function Phone({ cursor }) {
  return (
    <div id={styles.phoneContainer}>
      <img id={styles.bubble} src="/bubble.png" alt="text message bubble" />
      <img id={styles.chart} src="/chart.png" alt="pie chart" />
      <img id={styles.bell} src="/bell.png" alt="notification bell" />
      <svg
        id={styles.phoneGlass}
        width={292}
        height={579}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#phone-glass_svg__filter0_bd)">
          <path
            d="M108.729 7.805c0-4.8.5-7-7-7-39-5.5-43 18.5-45.5 32l-55.5 458.5c-4.5 25.5 13 37.5 21.5 39.5l155.5 39c32 10 40-13.5 41-27.5l64-493c4.8-32.8-11-42-37.5-42-10-.5-13.208-.5-13.5 3-1.2 14.4-13.166 17.333-19 17l-85.5-4c-17.6-.4-18.5-7.5-18.5-15.5z"
            fill="url(#phone-glass_svg__paint0_linear)"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <linearGradient
            id="phone-glass_svg__paint0_linear"
            x1={141.793}
            y1={0.464}
            x2={141.793}
            y2={572.213}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F3F4F5" stopOpacity={0.1} />
            <stop offset={1} stopColor="#F3F4F5" stopOpacity={0.3} />
          </linearGradient>
          <filter
            id="phone-glass_svg__filter0_bd"
            x={-9.999}
            y={-10}
            width={303.583}
            height={592.213}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation={5} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={8} dy={6} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.952941 0 0 0 0 0.956863 0 0 0 0 0.960784 0 0 0 0.4 0" />
            <feBlend in2="effect1_backgroundBlur" result="effect2_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <img
        src="/phone-shell.png"
        id={styles.phoneShell}
        alt="smart phone casing"
      />
    </div>
  );
}

export default Phone;
