import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const UserAvatar = ({
  className,
  image,
}: {
  className?: string;
  image?: string;
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage
        className="object-cover"
        src={image ?? "https://github.com/shadcn.png"}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
