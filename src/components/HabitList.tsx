import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleHabit } from "../features/habits/habitsSlice";
import type { RootState } from "../app/store";

function HabitList() {
  const dispatch = useDispatch();

  const habits = useSelector((state: RootState) => state.habits.habits);
  return (
    <div>
      <ul>
        {habits.map((habit) => {
          const today = new Date().toISOString().slice(0, 10);
          const isDoneToday = habit.completedDates.includes(today);

          return (
            <li
              onClick={() => dispatch(toggleHabit(habit.id))}
              style={{ cursor: "pointer" }}
              key={habit.id}
            >
              {isDoneToday ? "✅" : "⬜"} {habit.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HabitList;
