"use client"
import React, {useState, type MouseEvent} from "react";
import { Button } from "./button";
import DiscordIcon from "@/components/discord-icon";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
/*Perfect. */
const discordLogoButton = ({className}: {className?: string}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter()

  const changeHovered = (e: MouseEvent) => {
    e.preventDefault();
    setHovered(!hovered)
  }
  const setClicked = (e: MouseEvent) => {
    e.preventDefault();
    router.push('/');
    setActive(!active);
  }
  return (
    <span className={cn(className, "flex items-center flex-col relative w-full")} >
        <span className={cn("absolute left-0 top-1/2 transform  h-0 block transition-height duration-100 bg-white w-1 rounded-r", active? 'h-[60%] top-1/4 -translate-y-0.5' : hovered ? '-translate-y-1 h-[15%] ' : 'h-0 ')}/>
      <Button className=" rounded-[2rem] hover:rounded-xl w-12 h-12 p-2 dark:bg-white bg-[#313338] hover:dark:bg-[#5865f2] hover:duration-250 transition-all ease-linear flex cursor-default 
      " onMouseEnter={changeHovered} onMouseLeave={changeHovered} onClick={setClicked}>
        <DiscordIcon dark={true as boolean} className={"h-full"} />
      </Button>
      <div className="border-b-2 w-8 py-1 px-1 border-[#4e505773]" />
    </span>
  );
};

export default discordLogoButton;
