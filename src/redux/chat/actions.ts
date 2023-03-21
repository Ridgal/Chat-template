import { createAsyncThunk } from "@reduxjs/toolkit";
import { URLS } from "../../constants/urls";
import axios from "axios";

const getMessage = createAsyncThunk(
  'message/getMessage',
  async (userId: string) => {
    const response = await axios.get(`https://api.lenzaos.com/test/${URLS.MESSAGES}?chat_id=${userId}&offset=0&limit=10`)
      .then((response) => {
        console.log('getMessage:', response.data.response);
        return response.data.response;
      })
      .catch((error) => {
        console.log('getMessage:', error);
      })
    return response;
  }
);

export { getMessage };