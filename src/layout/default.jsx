import { Route } from "solid-app-router";
import Navbar from "../components/navbar";

function App() {
  return (
    <>
      <div class="min-h-screen h-full">
        <Navbar />
        <main className="container mx-10">
          <Route />
        </main>
      </div>
    </>
  );
}

export default App;
