import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApiData = createAsyncThunk("api/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
});
