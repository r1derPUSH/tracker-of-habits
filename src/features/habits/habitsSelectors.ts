// habitsSelectors.ts
import type { RootState } from "../../app/store";
import type { Habit } from "./habitsSlice"; // якщо Habit не експортований — експортуй

export const selectHabits = (state: RootState) => state.habits.habits;

export const selectHabitStreak = (habit: Habit) => {
  if (habit.completedDates.length === 0) return 0;

  const set = new Set(habit.completedDates);
  let streak = 0;
  let current = new Date();

  while (true) {
    const day = current.toISOString().slice(0, 10);
    if (!set.has(day)) break;

    streak++;
    current.setDate(current.getDate() - 1);
  }

  return streak;
};
