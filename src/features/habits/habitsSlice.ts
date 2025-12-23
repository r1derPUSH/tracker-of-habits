import { createSlice } from "@reduxjs/toolkit";

type Habit = {
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

export const selectHabitStreak = (habit: Habit) => {
  const dates = habit.completedDates; // ["2025-09-18", "2025-09-20"]

  if (dates.length === 0) return 0;

  const set = new Set(dates);

  let streak = 0;
  let current = new Date();

  while (true) {
    const day = current.toISOString().slice(0, 10);

    if (set.has(day)) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};

export const { addHabit, toggleHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
