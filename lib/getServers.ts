import { currentProfile } from "./currentProfile";
import { db } from "./db";
import { auth } from "@clerk/nextjs";

/**
 * Function to retrieve servers
 * @returns [data: {imageUrl: string, serverName: string} ] @typedef object[]
 */

export const getServers = async () => {
  const profile = await currentProfile();
  if (!profile) return null;
  const { id } = profile;
  if (!id) return null;
  //@ts-ignore
  const servers = await db.server.findMany({
    where: {
      AND: [{ members: { some: { profileId: id } } }],
    },
  });
  if(!servers) return []
  console.log(servers ,"data >> ");
  
  return servers;
};
