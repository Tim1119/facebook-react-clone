import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="bg-[#18191A] text-white w-full h-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
