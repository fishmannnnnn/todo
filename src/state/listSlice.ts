import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

type Task = {
	id: string;
	name: string;
	isDone: boolean;
}
export type ListState = {
	value: Task[]
}

const initialState: ListState = {
	value: []
}

const listSlice = createSlice({
	name: 'list',
	initialState: initialState,
	reducers: {
		addItem: (state, action: PayloadAction<string>) => {
			state.value.push({
				id: uuidv4(),
				name: action.payload,
				isDone: false,
			})
		},
		switchItemStatus: (state, action: PayloadAction<string>) => {
			const index = state.value.findIndex(task => task.id === action.payload);
			state.value[index].isDone = !state.value[index].isDone;
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.value = state.value.filter(task => task.id !== action.payload)
		},
		removeCompletedItems: (state) => {
			state.value = state.value.filter(task => !task.isDone);
		}
	}
})

export const { addItem, removeItem, switchItemStatus, removeCompletedItems } = listSlice.actions;
export default listSlice.reducer;