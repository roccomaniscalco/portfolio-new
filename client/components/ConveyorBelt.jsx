import TechBadge from "./TechBadge";

import styles from "../styles/components/conveyorBelt.module.css";

const TechBadges = () => {
  const techBadges = [
    {
      label: "HTML5",
      ciClass: "ci-html5",
    },
    {
      label: "CSS3",
      ciClass: "ci-css3",
    },
    {
      label: "Javascript",
      ciClass: "ci-javascript",
    },
    {
      label: "Java",
      ciClass: "ci-coffee-togo",
    },
    {
      label: "MongoDB",
      ciClass: "ci-data",
    },
    {
      label: "MySQL",
      ciClass: "ci-share_outline",
    },
    {
      label: "Node.js",
      ciClass: "ci-settings_future",
    },
    {
      label: "Express.js",
      ciClass: "ci-layers",
    },
    {
      label: "React.js",
      ciClass: "ci-grid_small",
    },
    {
      label: "Next.js",
      ciClass: "ci-grid",
    },
    {
      label: "Material-UI",
      ciClass: "ci-dashboard",
    },
    {
      label: "Figma",
      ciClass: "ci-Figma",
    },
    {
      label: "amCharts",
      ciClass: "ci-line_chart_up",
    },
  ];

  return (
    <div className={styles.techBadges}>
      {techBadges.map((techBadge) => (
        <TechBadge {...techBadge} key={techBadge.label} />
      ))}
    </div>
  );
};

const ConveyorBelt = () => {
  return (
    <div className={styles.conveyorBeltContainer}>
      <div className={styles.conveyorBelt}>
        <TechBadges />
        <TechBadges />
      </div>
    </div>
  );
};

export default ConveyorBelt;
