import { db } from "./db";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

/**
 * Initiation of a profile,

* if exists, gets it from

 * else creates new one
 * @returns  user data object!
 */

export const initialProfile = async () => {
  const user = await currentUser();
  if (!user) {
    return redirectToSignIn();
  }
  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  });

  if (profile) {
    return profile;
  }
  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  });

  return newProfile;
};
export default initialProfile;