"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";

// Use the useUserAuth hook to get the user object and the login and logout functions
export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user !== undefined) {
      setIsLoading(false);
    }
  }, [user]);

  // Sign in to Firebase with GitHub authentication
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Sign out of Firebase
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // Display some of the user's information

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-neutral-300 via-neutral-600 to-neutral-900 p-4">
      <div className="bg-gradient-to-r from-indigo-900 via purple-500 to-pink-400  p-8 rounded-lg shadow-md w-full max-w-md">
        {!user ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Shopping List</h1>
            <p className="text-white-600 mb-6">Sign in with GitHub to get started</p>
            <button
              onClick={handleSignIn}
              className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              Sign In with GitHub
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl text-amber-300 font-bold mb-4">Welcome!</h1>
            <div className="bg-neutral-900 p-4 rounded-lg mb-6">
              <p className="text-lg text-amber-600 font-semibold">{user.displayName}</p>
              <p className="text-amber-900">{user.email}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/week-10/shopping-list"
                className="block bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
              >
                Go to Shopping List
              </Link>
              <button
                onClick={handleSignOut}
                className="w-full bg-red-400 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-semibold"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
