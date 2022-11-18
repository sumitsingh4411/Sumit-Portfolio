import { configureStore } from "@reduxjs/toolkit";
import githubDataReducer from "./slices/githubDataSlice";

export const store = configureStore({
  reducer: {
    githubData: githubDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
