import { redirect } from 'next/navigation';
import initialProfile from '@/lib/initialProfile'
import InitialModal from '@/components/modals/initialModal'
import {db} from '@/lib/db'
/**
 * Setup is meant to handle the case of user not having joined any server yet

  * Opens the modal if user dont have any servers joined 
 */
const SetupPage = async () => {  
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <InitialModal></InitialModal>
}

export default SetupPage

//members: [id, id, id, id]
