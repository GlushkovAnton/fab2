import { configureStore } from '@reduxjs/toolkit';
import fabReducer from './fab2Slice'

export default configureStore({
	reducer: {
        fab: fabReducer,
    },
});