import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../features/habits/habitsSlice";

function AddHabit() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const habitFn = () => {
    if (!value.trim()) return;
    dispatch(addHabit(value));
    setValue("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={value}
        type="text"
        placeholder="New habit..."
        onChange={(e) => setValue(e.target.value)}
        className="
        flex-1 px-3 py-2 rounded-lg
        bg-zinc-800 border border-zinc-700
        focus:outline-none focus:ring-2 focus:ring-emerald-500
      "
      />
      <button
        onClick={habitFn}
        className="
        px-4 py-2 rounded-lg font-medium
        bg-emerald-600 hover:bg-emerald-500
        transition-colors
      "
      >
        Add
      </button>
    </div>
  );
}

export default AddHabit;
