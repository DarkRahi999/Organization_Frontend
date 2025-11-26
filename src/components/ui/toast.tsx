import React from "react";
import { toast } from "sonner";

interface CustomToastProps {
  title: string;
  description?: string;
  type: "success" | "error" | "warning" | "info";
}

export const CustomToast: React.FC<CustomToastProps> = ({
  title,
  description,
  type,
}) => {
  const getToastConfig = () => {
    switch (type) {
      case "success":
        return {
          title,
          description,
          duration: 3000,
          style: {
            background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            color: "white",
            border: "1px solid #38a169",
          },
        };
      case "error":
        return {
          title,
          description,
          duration: 5000,
          style: {
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white",
            border: "1px solid #e53e3e",
          },
        };
      case "warning":
        return {
          title,
          description,
          duration: 4000,
          style: {
            background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
            color: "white",
            border: "1px solid #dd6b20",
          },
        };
      case "info":
        return {
          title,
          description,
          duration: 3500,
          style: {
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "1px solid #5a67d8",
          },
        };
      default:
        return {
          title,
          description,
          duration: 3000,
        };
    }
  };

  const config = getToastConfig();

  switch (type) {
    case "success":
      return toast.success(config.title, config);
    case "error":
      return toast.error(config.title, config);
    case "warning":
      return toast.warning(config.title, config);
    case "info":
      return toast.info(config.title, config);
    default:
      return toast(config.title, config);
  }
};
