import { Button } from "antd";

const MainButton = ({
  name,
  icon,
  color = "#ffffff",
  bgColor = "#7C5FF7",
}: {
  name: string;
  icon?: string;
  color?: string;
  bgColor?: string;
}) => {
  console.log("color", color);

  return (
    <Button
      icon={icon}
      style={{ color: color, backgroundColor: bgColor, border: "none" }}
    >
      {name}
    </Button>
  );
};

export default MainButton;
