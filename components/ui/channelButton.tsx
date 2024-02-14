"use client"
import React, { useState, useEffect} from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { HashIcon, Plus, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
interface buttonProps {
  buttonText: string,
  className?: string,
  serverId: string
}
/**
 * 
 * @param serverId @type string @param buttonText @type string
 * @param className @type string
 * @returns buttonComponent
 */
//I should adjust the icons according to channel type! voice/text/etc
// gotta handle when on the site: it has a lighter bg and when hovered it shows the span of icon!
const channelButton = ({className,buttonText,  serverId}: buttonProps)  => {
  const [isactive, setIsactive] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const router =   useRouter();
  const handleClick = () => {
    router.push(serverId)
  }
  const handleMouseHover = () => {
    setIsHovered(!isHovered);
  }
  return (
    <div className={cn(className, "pl-3")} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
      <Button variant={"ghost"} onClick={handleClick} className={cn("w-full justify-start h-[2.125rem] pl-2 focus-visible: border-1 focus-visible:outline-0.5 ", !isactive && 'hover:dark:bg-[#4e505899] text-primary/80', isHovered && 'bg-[#4e5058c3] text-primary/90')}> 
        <HashIcon size={22} className="mr-1"/>
         {buttonText} random text
         <span className={cn("flex  h-full relative  p-0 ml-auto", !isHovered && 'hidden')}><User className="h-4/5 w-full fill-slate-200 relatve bottom-0 left-0 mt-1" /> <Plus className="h-2/5 w-3/6 absolute -mr-1 right-0 fill-white"></Plus></span>
      </Button>
    </div>
  )
}

export default channelButton
