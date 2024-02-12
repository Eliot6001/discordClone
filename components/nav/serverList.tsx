import React from 'react'
import { Button } from "@/components/ui/button"
import ChannelButton from "@/components/ui/channelButton"
import { cn } from '@/lib/utils'

const ServerList = ({data, className}) => {
  return (
    <div className={cn(className, "bg-[#2b2d31] ")}>
      <div className="p-2 bg-[#2b2d31] divide-y-2">
        <Button variant="outline" className="pl-1 rounded text-sm w-full text-slate-100/40 h-7 bg-white dark:bg-[#313338]
          justify-start">Find or start a conversation</Button>
      </div>
      <div className="h-auto">
        <ChannelButton className=""/> 
      </div>
    </div>
  )
}

export default ServerList
