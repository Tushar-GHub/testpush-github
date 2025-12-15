import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",  // slice name
    initialState: { value: 0 },  // local state
    reducers: {
        increment(state, action) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        incrementByAmount(state, action) {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
