import React from "react";
import { getServers } from '@/lib/getServers'
import {Button} from '@/components/ui/button'
import Nav from '@/components/nav/nav'
import ServerList from '@/components/nav/serverList'
import Chat from "@/components/Chat";


const serverPage = async () => {
  const servers = await getServers()

  return <>
  <Nav className="col-span-1" data={servers}/>
  <ServerList data={[]} className="col-start-2 col-end-5" />
  <Chat className="col-span-16 col-start-5 col-end-[21]"/>
  </>;
};

export default serverPage;
