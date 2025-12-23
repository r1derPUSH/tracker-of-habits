import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleHabit } from "../features/habits/habitsSlice";
import {
  selectHabitStreak,
  selectHabits,
} from "../features/habits/habitsSelectors";

function HabitList() {
  const dispatch = useDispatch();

  const habits = useSelector(selectHabits);
  return (
    <div>
      <ul>
        {habits.map((habit) => {
          const streak = selectHabitStreak(habit);
          const today = new Date().toISOString().slice(0, 10);
          const isDoneToday = habit.completedDates.includes(today);

          return (
            <li
              onClick={() => dispatch(toggleHabit(habit.id))}
              style={{ cursor: "pointer" }}
              key={habit.id}
            >
              {isDoneToday ? "✅" : "⬜"} {habit.title} - 🔥 {streak}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HabitList;
