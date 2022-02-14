import { useState, useEffect } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setAuthError('');
            setIsLoading(false);
        });
        return unsubscribe;
    }, [auth])

    const registerWithEmail = (email, password, name, photo, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);

                const newUser = { ...user }
                newUser.displayName = name;
                newUser.photoURL = photo;
                setUser(newUser);
                setAuthError('');

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const loginWithEmail = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setAuthError('');

                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const googleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((userCredential) => {
                setUser(userCredential.user);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setAuthError('');
        }).catch((error) => {
            setAuthError('');
        }).finally(() => setIsLoading(false));
    }

    return {
        user,
        authError,
        isLoading,
        registerWithEmail,
        loginWithEmail,
        googleSignIn,
        logout
    };
};

export default useFirebase;