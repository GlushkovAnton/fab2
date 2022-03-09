import { createSlice } from '@reduxjs/toolkit';

export const fab2Slice = createSlice({
	name: 'fab2',
	initialState: [
		{
            jsonStatus: false,
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
	],
	reducers: {
		addData: (state, action) => {
			const data = {
				"id":"044",
                "Date":"+ ",
                "Kiosk":" +",
                "Type":"+ ",
                "Status":"+ ",
                "Pay":" +",
                "Sum":" +",
                "Quantity":" +",
                "Goods":" +"
			};
			state.data.push(action.data);
		},

	},
});


export const { addData } = fab2Slice.actions;

export default fab2Slice.reducer;