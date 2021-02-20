import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'score',
    initialState: {
        incorrect: 0,
        correct: 0,
    },
    reducers: {
        incrementCorrect: (state) => {
            state.correct++;
        },

        incrementIncorrect: (state) => {
            state.incorrect++;
        },

        reset: (state) => {
            state.incorrect = 0;
            state.correct = 0;
        }
    },
});

export default slice.reducer;

export const selectCorrect = (state) => state.score.correct;
export const selectIncorrect = (state) => state.score.incorrect;

export const {
    incrementCorrect,
    incrementIncorrect,
    reset,
} = slice.actions;

