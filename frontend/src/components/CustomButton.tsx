import React from "react";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface CustomButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  customClass: string;
}

export const CustomButton = ({ onClick, children, customClass }: CustomButtonProps) => {
  return (
    <Button onClick={onClick} className={customClass}>
      <DownOutlined />
      {children}
    </Button>
  );
};
