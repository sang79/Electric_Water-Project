import {apolloClient, restClient} from "services";
import {createSlice} from "@reduxjs/toolkit";
import reducerClass from "./reducerClass";
import Cookies from "universal-cookie";

export const initialState = {
    lSangnc: {a:1, b:2},
    rSangnc: {},
    loSangnc: {},
    index: 2,
};

const sangncSlice = createSlice({
    name: "sangnc",
    initialState,
    reducers: {
        setData: (state, {payload}) => {
            state = reducerClass.setData(initialState, state, payload);
        },
        setMerge: (state, {payload}) => {
            state = reducerClass.setMerge(initialState, state, payload);
        },
    },
});

export const {setData, setMerge} = sangncSlice.actions;
export const sangncSelector = (state) => state.sangnc;
export default sangncSlice.reducer;

export function setSangnc(data) {
    return async (dispatch) => {
        dispatch(setData(data));
    };
}

export function setSangncMerge(key, data) {
    return async (dispatch) => {
        dispatch(setMerge({...{}, [key]: data}));
    };
}