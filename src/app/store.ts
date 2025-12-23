import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "../features/habits/habitsSlice";

const loadState = () => {
  try {
    const serialized = localStorage.getItem("habits");
    if (!serialized) return undefined;
    return {
      habits: JSON.parse(serialized),
    };
  } catch {
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serialized = JSON.stringify(state.habits);
    localStorage.setItem("habits", serialized);
  } catch {}
};

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
