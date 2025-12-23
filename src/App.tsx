import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitList";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex justify-center">
      <div className="w-full max-w-xl px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold text-center">Habit Tracker</h1>

        <AddHabit />
        <HabitList />
      </div>
    </div>
  );
}

export default App;
