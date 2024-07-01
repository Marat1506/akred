import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    createModalSost: false,
    changeModalSost: false,
    changeCurrentElemId: '',
    name: '',
    countSendPrize: '',
}

export const akredSlice = createSlice({
    name: 'akred',
    initialState,
    reducers: {
        createPromotion: () => {
        },
        createModalSost: (state) => {
            state.createModalSost = !state.createModalSost
        },
        changeModalSost: (state) => {
            state.changeModalSost = !state.changeModalSost
        },
        changeName: (state, action) => {
            state.name = action.payload.name
        },
        changeCountSendPrize: (state, action) => {
            state.countSendPrize = action.payload.countSendPrize
        },
        changeCurrentElemId: (state, action) => {
            state.changeCurrentElemId = action.payload.changeCurrentElemId
        }
    }
})

export const { createPromotion, createModalSost, changeName, changeCountSendPrize, changeModalSost, changeCurrentElemId } = akredSlice.actions
export default akredSlice.reducer
