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
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={habitFn}>Add Habit</button>
    </div>
  );
}

export default AddHabit;
