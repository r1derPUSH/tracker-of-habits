import { createSlice } from "@reduxjs/toolkit";

export type Habit = {
  id: string;
  title: string;
  completedDates: string[];
};

const initialState: { habits: Habit[] } = {
  habits: [],
};

export const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push({
        id: Date.now().toString(),
        title: action.payload,
        completedDates: [],
      });
    },
    toggleHabit: (state, action) => {
      const habit = state.habits.find((h) => h.id === action.payload);
      if (!habit) return;
      //
      const today = new Date().toISOString().slice(0, 10);
      if (habit.completedDates.includes(today)) {
        habit.completedDates = habit.completedDates.filter(
          (item) => item !== today
        );
      } else {
        habit.completedDates.push(today);
      }
    },
  },
});

export const { addHabit, toggleHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
