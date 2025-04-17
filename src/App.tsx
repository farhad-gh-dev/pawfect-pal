import "./App.css";
import { Navbar } from "./features/navbar";

function App() {
  return (
    <div className="font-display">
      <Navbar />

      {/* Your page content goes here */}
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to PawfectPal
        </h1>
        <p className="mt-4 text-gray-600">
          Your perfect companion for pet care.
        </p>
      </main>
    </div>
  );
}

export default App;
