import { useSelector } from "react-redux";

import type { RootState } from "../app/store";

function HabitList() {
  const habits = useSelector((state: RootState) => state.habits.habits);
  return (
    <div>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>{habit.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HabitList;
