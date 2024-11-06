import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TboardsState = {
	modalActive: boolean,
	boardArray: IBoard[],
}

type TaddBoardAction = {
	board: IBoard;
}

const initialState: TboardsState = {
	modalActive: false,
	boardArray: [
		{
			boardId: "board-0",
			boardName: "첫 번째 게시물",
			lists: [
				{
					listId: "list-0", 
					listName: "list 1",
					tasks: [
						{
							taskId: "task-0",
							taskName: "Task 1",
							taskDescription: "Description",
							taskOwner: "J",
						},
						{
							taskId:"task-1",
							taskName: "Task 1",
							taskDescription: "Description",
							taskOwner: "J"
						}
					]
				},
				{
					listId: "list-1",
					listName: "List 2",
					tasks: [
						{
							taskId: "task-3",
							taskName: "Task 3",
							taskDescription: "Description",
							taskOwner: "J"
						}
					]
				}
			]
		}
	]
}

const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		addBoard: (state, { payload }: PayloadAction<TaddBoardAction>) => {
			state.boardArray.push(payload.board);
		}
	}
})

export const { addBoard } = boardSlice.actions;
export const boardsReducer = boardSlice.reducer;