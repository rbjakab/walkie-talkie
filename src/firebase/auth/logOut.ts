import firebase_app from '../config';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(firebase_app);

export default async function logOut() {
    let result = null,
        error = null;

    if (!auth.currentUser) {
        return { result, error: 'No user is currently signed in.' };
    }

    try {
        result = await signOut(auth);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
