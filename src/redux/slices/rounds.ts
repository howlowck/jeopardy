import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { parseRoundsFromCsv } from "../../data/parseRounds";
import roundsCsv from "../../data/rounds.csv?raw";
import type { Round } from "../../types";

const initialState: Round[] = parseRoundsFromCsv(roundsCsv);

const slice = createSlice({
	name: "rounds",

	initialState: initialState as Round[],

	reducers: {
		setRounds: (state, action: PayloadAction<{ rounds: Round[] }>) => {},
	},
});

export const { setRounds } = slice.actions;

export default slice.reducer;
