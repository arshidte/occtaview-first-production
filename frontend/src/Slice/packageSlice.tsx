import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../Constant';

// Define the type for add fund history data
interface AddFundHistoryData {
    slno: number;
    date: string;
    orderid: string;
    txnid: string;
    amount: number;
    status: boolean;
}

// Define the type for the add fund history information in the state
interface AddFundHistoryState {
    data: AddFundHistoryData[] | null;
    loading: boolean;
    error: string | null;
}

// Redux action to get add fund history
export const fetchAddFundHistory = createAsyncThunk('fetchAddFundHistory', async () => {
    const token: any = localStorage.getItem('userInfo');
    const parsedData = JSON.parse(token);

    const config = {
        headers: {
            Authorization: `Bearer ${parsedData.access_token}`,
            'content-type': 'application/json',
        },
    };

    const response = await axios.get(`${URL}/api/user/addfundHistory`, config);

    console.log(response.data);

    return response.data;
});

// Redux
const addFundHistorySlice = createSlice({
    name: 'addFundHistory',
    initialState: { data: null, loading: false, error: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddFundHistory.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchAddFundHistory.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAddFundHistory.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            });
    },
});

// Export reducer only
export const addFundHistoryReducer = addFundHistorySlice.reducer;
