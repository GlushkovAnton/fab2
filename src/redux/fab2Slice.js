import { createSlice } from '@reduxjs/toolkit';

export const fabSlice = createSlice({
	name: 'fab',
	initialState: 
		{
            jsonStatus: false,
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
      //const data = {
			//	"id":"044",
      //          "Date":"+ ",
      //          "Kiosk":" +",
      //          "Type":"+ ",
      //          "Status":"+ ",
      //          "Pay":" +",
      //          "Sum":" +",
      //          "Quantity":" +",
      //          "Goods":" +"
			//};
			state.data.push(action.payload)
      console.log('state:', state)
      
		},

	},
});


export const { addData } = fabSlice.actions;

export default fabSlice.reducer;