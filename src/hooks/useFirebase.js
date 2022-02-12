import { useState, useEffect } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    return {
        user,
        authError,
        isLoading
    };
};

export default useFirebase;