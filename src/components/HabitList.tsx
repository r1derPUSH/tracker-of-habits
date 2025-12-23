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
              className={`
                flex items-center justify-between
    px-4 py-3 rounded-xl
    m-4
    cursor-pointer select-none
    border
    transition-all duration-200
    hover:scale-[1.01]
    active:scale-[0.97]
    ${
      isDoneToday
        ? "bg-emerald-600/20 border-emerald-500"
        : "bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
    }
            `}
              onClick={() => dispatch(toggleHabit(habit.id))}
              style={{ cursor: "pointer" }}
              key={habit.id}
            >
              <span
                className={`
                    text-xl transition-transform duration-200
                    ${isDoneToday ? "scale-110" : "scale-100"}
                `}
              >
                {isDoneToday ? "✅" : "⬜"} {habit.title} — 🔥{" "}
                {
                  <span
                    className={`
                        text-sm font-semibold text-orange-400
                        ${streak > 0 ? "animate-pulse" : ""}
                    `}
                  >
                    {streak}
                  </span>
                }
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HabitList;
