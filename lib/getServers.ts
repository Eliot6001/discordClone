import { currentProfile } from "./currentProfile";
import { db } from "./db";
import { auth } from "@clerk/nextjs";

/**
 * Function to retrieve servers
 * @returns {imageUrl: string, serverName: string} @typedef object[]
 */

export const getServers = async () => {
  const profile = await currentProfile();
  if (!profile) return null;
  const { id } = profile;
  if (!id) return null;

  const servers = await db.server.findMany({
    where: {
      AND: [{ members: { some: { profileId: id } } }],
    },
  });
  if(!servers) return []
  return servers;
};
