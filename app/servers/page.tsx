import React from 'react'
import { getServers } from '@/lib/getServers'
import {Button} from '@/components/ui/button'
import Nav from '@/components/nav/nav'
import ServerList from '@/components/nav/serverList'


const CreateServer = async () => {
  const servers = await getServers()
  return (
    <>
    <Nav className="col-span-1" data={servers}/>
    <ServerList data={[]} className="col-start-2 col-end-5" />
    </>
  )
}

export default  CreateServer 
