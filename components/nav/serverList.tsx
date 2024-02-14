import React from "react";
import { Button } from "@/components/ui/button";
import ChannelButton from "@/components/ui/channelButton";
import { cn } from "@/lib/utils";
import UserDiscord from "@/components/ui/userDiscord";
const ServerList = ({ data, className }) => {
  return (
    <div className={cn(className, "bg-[#2b2d31] flex flex-col")}>
      <div className="p-2 bg-[#2b2d31] divide-y-2">
        <Button
          variant="outline"
          className="pl-1 rounded text-sm w-full text-slate-100/40 h-7 bg-white dark:bg-[#313338]
          justify-start "
        >
          Find or start a conversation
        </Button>
      </div>

      <hr className="my-1.5 " />
      <div className="overflow-y-auto flex-1 mt-5">
        <ChannelButton className="" />
        <ChannelButton className="" />
        <ChannelButton className="" />
        <ChannelButton className="" />
        <ChannelButton className="" />
        <ChannelButton className="" />
        <ChannelButton className="" />
      </div>
      <div className="user mt-auto flex items-center p2">
        <UserDiscord className="" />
      </div>
    </div>
  );
};

export default ServerList;
