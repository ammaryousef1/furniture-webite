import { useDispatch } from 'react-redux'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth, googleProvider } from "../firebase.config";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUpWithGoogle = createAsyncThunk(
  'user/signup',
  async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      return userCredential.user;
    } catch (err) {
      toast.error('something went wrong');
      throw err;
    }
  }
);