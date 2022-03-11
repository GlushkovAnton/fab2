import { createSlice } from '@reduxjs/toolkit';

export const fabSlice = createSlice({
	name: 'fab',
	initialState: 
		{
            jsonStatus: false,
            test: 'hello redux store',
            storeSatus: false,
            isLoading: true,
            data: [
              {
                "id":"001",
                "Date":" ",
                "Kiosk":" ",
                "Type":" ",
                "Status":" ",
                "Pay":" ",
                "Sum":" ",
                "Quantity":" ",
                "Goods":" "
              },
              
            ],
            row: null,
            newrow: [{"id":"005"},{"id":"006"}], 
          }
	,
	reducers: {
		addData: (state, action) => {
			console.log('reducer!', action)
      console.log('state_prew:', state)
      
			state.data = action.payload
      console.log('state:', state)
      
		},
    setStoreStatus: (state, action) => {
      console.log('reducer set store status', action)
      state.test = 'succes'
    },

	},
  
});


export const { addData, setStoreStatus } = fabSlice.actions;

export default fabSlice.reducer;