import { Route } from "solid-app-router";
import Navbar from "../components/navbar";

function App() {
  return (
    <>
      <div class="bg-gray-900 min-h-screen h-full text-white">
        <Navbar />
        <main className="container mx-auto px-40">
          <Route />
        </main>
      </div>
    </>
  );
}

export default App;
