import { cn } from "@/lib/utils";
import { Hash, Users } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const ChatHeader = ({
  className,
  channelName,
}: {
  className?: string;
  channelName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap flex-row items-center h-12 px-4 font-bold font-sans",
        className
      )}
    >
      <Hash size={20} className="mr-2" />
      <p className="">{channelName} && ChannelName</p>
      <Button className="ml-auto" variant={"ghost"}>
        <Users strokeWidth={0.75} className="" />
      </Button>
    </div>
  );
};
export default ChatHeader;
