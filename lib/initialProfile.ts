
import {currentUser, redirectToSignIn} from '@clerk/nextjs'
import { db } from './db';





export const initialProfile = async () => {
    const user = await currentUser();


    if(!user) return redirectToSignIn();

    const profile = await db.db.Profile.read(user)
    if(profile === null) return profile
    const newProfile = await db.db.Profile.create({
        userId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress
    })

    return newProfile;
}