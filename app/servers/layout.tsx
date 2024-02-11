import React from 'react'
import {Button} from '@/components/ui/button'
import Nav from '@/components/nav/nav'
import { getServers } from '@/lib/getServers'
const layout = async () => {
  const servers = await getServers()
  return (
    <div className="grid grid-cols-6"> 
      <Nav data={servers}/> 
    </div>
  )
}

export default layout 
