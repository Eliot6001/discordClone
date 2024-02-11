import { auth } from '@clerk/nextjs';
import { db } from '@/lib/db'

/**
 * Function to check current signed user
 * @returns currentUser @typedef{object}
 */
export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId
    }
  });
  console.log(profile);
  return profile;

}
