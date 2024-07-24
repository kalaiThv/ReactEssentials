import ReactDOM from "react-dom/client";
import Game from "./components/Game/Game.jsx"
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<Game />);
