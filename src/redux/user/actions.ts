import { createAsyncThunk } from "@reduxjs/toolkit";
import { URLS } from "../../constants/urls";
import axios from "axios";

const getUsers = createAsyncThunk(
  'users/getUser',
  async () => {
    const response = await axios.get(`https://api.lenzaos.com/test/${URLS.USERS}?offset=0&limit=10`)
      .then((response) => {
        console.table('getUsers:', response.data.response);
        return response.data.response;
      })
      .catch((error) => {
        console.log('getUsers:', error);
      })
    return response;
  }
);

// https://api.lenzaos.com/test/message.get?chat_id=be215077-594e-4256-82e8-906625c69629&offset=0&limit=20
// https://api.lenzaos.com/test/messages.get?chat_id=4961bbba-9b9e-4523-ab2a-ecfeeb7a4913&offset=0&limit=10

export { getUsers };