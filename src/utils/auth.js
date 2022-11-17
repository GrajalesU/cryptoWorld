import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { auth } from '../firebase/firebaseConfig'

/**
 *
 * @param {string} email
 * @param {string} password
 * @param {string} name
 * @returns {boolean} true if register correctly and false if not
 */
export async function register (email, password, name) {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    const currentUser = auth.currentUser
    if (currentUser) {
      await updateProfile(currentUser, {
        displayName: name
      })
      return true
    }
    return false
  } catch (_) {
    return false
  }
}

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns return current user or error if something is wrong
 */
export async function LoginWithEmailAndPassword (email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    return auth.currentUser
  } catch (error) {
    return error
  }
}

/**
 *
 * @returns return user or error if something is wrong
 */
export async function LoginWithGoogle () {
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    const { user } = result
    return user
  } catch (error) {
    return error
  }
}
