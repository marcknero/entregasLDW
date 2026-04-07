import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

Object.assign(document.body.style, {
  backgroundColor: "#f2f4f7",
  minHeight: "100vh",
});


createRoot(document.getElementById("root")as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)