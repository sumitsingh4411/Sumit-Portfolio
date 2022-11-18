import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  projects: any;
  customProjects: any;
  status: "idle" | "loading" | "failed";
}

const initialState: ProjectState = {
  projects: [],
  customProjects: [],
  status: "idle",
};

const githubRepoData = createAsyncThunk(
  "githubData/githubRepoData",
  async (_, { dispatch }: any) => {
    try {
      const response = await fetch(
        "https://api.github.com/users/sumitsingh4411/repos?sort=created&per_page=100"
      );
      const data = await response.json();
      dispatch(githubActions.setCustomProjectList(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const githubDataSlice = createSlice({
  name: "githubData",
  initialState,
  reducers: {
    setGithubData: (state, action) => {
      state.projects = action.payload;
    },
    setCustomProjectList: (state, action) => {
      let data = action.payload?.filter(
        (item: any) => item?.description && item?.topics?.length > 0
      );
      state.customProjects = data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(githubRepoData.fulfilled, (state, action) => {
        state.projects = action.payload;
      })
      .addCase(githubRepoData.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(githubRepoData.pending, (state) => {
        state.status = "loading";
      });
  },
});

export const githubActions: any = {
  githubRepoData,
  ...githubDataSlice.actions,
};

export const selectGithubData = (state: any) => state.githubData;
export default githubDataSlice.reducer;
