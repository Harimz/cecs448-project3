import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  text: string;
  href: string;
  active: boolean;
}

export const NavbarItem = ({ text, href, active }: Props) => {
  return (
    <a
      href={href}
      className={cn(
        `
          relative
          w-24
          text-center 
          decoration-0 
          after:content-[''] 
          after:absolute 
          after:left-0 
          after:-bottom-[30px]
          after:h-1 
          after:w-0 
          after:bg-[#219ebc] 
          after:transition-all 
          after:duration-300
          hover:after:w-full
        `,
        active && "after:bg-[#219ebc] after:w-full"
      )}
    >
      {text}
    </a>
  );
};
