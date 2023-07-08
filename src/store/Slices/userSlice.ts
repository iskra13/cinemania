import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

type User = {
  email: string;
  password: string;
};

type ResponseAsyncThunk = {
  email: string | null;
  id: string | null;
};

type UserState = {
  email: string | null;
  error: string | null;
  id: string | null;
  isLoading: boolean;
};

export const signupUser = createAsyncThunk<ResponseAsyncThunk, User, { rejectValue: string }>(
  "user/signupUser",
  async (signupUser, { rejectWithValue }) => {
    try {
      const auth = getAuth();

      const { user } = await createUserWithEmailAndPassword(
        auth,
        signupUser.email,
        signupUser.password
      );

      return {
        email: user.email,
        id: user.uid,
      };
    } catch (err) {
      return rejectWithValue("error signupUser");
    }
  }
);

export const signinUser = createAsyncThunk<ResponseAsyncThunk, User, { rejectValue: string }>(
  "user/signinUser",
  async (signinUser, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(
        auth,
        signinUser.email,
        signinUser.password
      );
      return {
        email: user.email,
        id: user.uid,
      };
    } catch (err) {
      return rejectWithValue("error signinUser");
    }
  }
);

const initialState: UserState = { email: null, error: null, id: null, isLoading: false };

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    removeUser(state) {
      state.email = null;
      state.error = null;
      state.id = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signinUser.fulfilled, (state, { payload }) => {
        state.email = payload.email;
        state.id = payload.id;
        state.isLoading = false;
      })
      .addCase(signinUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signinUser.rejected, (state, { payload }) => {
        state.error = "ERROR";
        state.isLoading = false;
      })
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.email = payload.email;
        state.id = payload.id;
        state.isLoading = false;
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.error = "ERROR";
        state.isLoading = false;
      });
  },
});

export const { removeUser } = userSlice.actions;

export default userSlice.reducer;
