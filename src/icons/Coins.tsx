import { IconProps } from "../utils/types";

const Coins: React.FC<IconProps> = ({ size = 24, className = "" }) => {
  const svgSize = `${size}px`;

  return (
    <svg
      fill="currentColor"
      className={className}
      height={svgSize}
      width={svgSize}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="currentColor"
      >
        ?
      </text>
    </svg>
  );
};

export default Coins;
