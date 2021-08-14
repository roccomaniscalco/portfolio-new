import TechBadge from "./TechBadge";

import styles from "../styles/components/conveyorBelt.module.css"

const ConveyorBelt = () => {
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
      ciClass: "ci-share",
    },
    {
      label: "Node.js",
      ciClass: "ci-settings_future",
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
  ];

  return (
    <div className={styles.conveyorBelt}>
      {techBadges.map((techBadge) => (
        <TechBadge {...techBadge} />
      ))}
    </div>
  );
};

export default ConveyorBelt;
