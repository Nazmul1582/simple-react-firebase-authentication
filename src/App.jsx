import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
