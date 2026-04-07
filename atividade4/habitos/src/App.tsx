import "./App.css";
import { useState } from "react";
import Toolbar, { type PageName } from "./components/Toolbar";
import Users from "./redux/pages/users";
import Habits from "./redux/pages/habits";


export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>("users");

  return (
    <>
      <Toolbar currentPage={currentPage} onChangePage={setCurrentPage} />
      {currentPage === "users" && <Users />}
      {currentPage === "habits" && <Habits />}
    </>
  );
}