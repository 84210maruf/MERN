import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase"; // Make sure your Firebase is configured
import { doc, getDoc } from 'firebase/firestore'

const AuthHandler = () => {
    const [, dispatch] = useStateValue(); // Get dispatch function from StateProvider

    //   const navigate = useNavigate();


    // auth.onAuthStateChanged(async (user) => {
    //     console.log(user)
    //     const docRef = doc(db, 'Users', user.uid)
    //     const docSnap = await getDoc(docRef)
    //     if (docSnap.exists()) {
    //         setUserDetails(docSnap.data());
    //         console.log(userDetailss)
    //     }
    // })

    useEffect(() => {
        // Firebase listener to detect auth changes
        const unsubscribe = auth.onAuthStateChanged(async(authUser) => {

            const docRef = doc(db, 'Users', authUser.uid)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                // If a user is logged in, dispatch SET_USER with the user object
                dispatch({
                    type: "SET_USER",
                    user: docSnap.data(),
                });
            } else {
                // If no user is logged in, dispatch SET_USER with null
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });

        // Cleanup listener on unmount
        return () => unsubscribe();
    }, [dispatch]);

    return null; // This component doesn't render anything
};

export default AuthHandler;

