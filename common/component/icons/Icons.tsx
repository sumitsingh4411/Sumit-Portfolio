import Image from "next/image";
import React from "react";
import { IconMap } from "./IconMap";

interface IPropsIcon {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}
export default function Icons({
  name,
  width = 24,
  height = 24,
  ...rest
}: IPropsIcon) {
  return (
    <Image
      src={IconMap[name]}
      width={width}
      height={height}
      alt={name}
      {...rest}
    />
  );
}
