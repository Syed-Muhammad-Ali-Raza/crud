import createSlice from 'redux-toolkit';
export const todoSlice =createSlice(
    {
        name:'Cart',
        initialState : [ ],
        reducers:{
            addCart(){} ,
            removeCart(){}
}

    }
)
export const {addCart ,removeCart} =createSlice
export default todoSlice
