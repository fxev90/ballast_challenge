import React from "react";
import { useBookViews } from "..";

export const Dashboard: React.FC = () => {
  const { data } = useBookViews({ params: {} });
  return <>DASHBOAD</>;
};
