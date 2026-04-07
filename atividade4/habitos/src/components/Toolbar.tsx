import type { CSSProperties } from "react";

export type PageName = "users" | "habits";

type ToolbarProps = {
  currentPage: PageName;
  onChangePage: (page: PageName) => void;
};

const toolbarStyle: CSSProperties = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  padding: "0.6rem",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #f5f7fa, #e9eff5)",
  border: "1px solid #d4dde7",
  width: "fit-content",
  marginBottom: "1rem",
  boxShadow: "0 8px 20px rgba(24, 34, 45, 0.08)",
};

const getButtonStyle = (isActive: boolean): CSSProperties => ({
  border: "none",
  borderRadius: "9px",
  padding: "0.55rem 0.9rem",
  fontWeight: 600,
  letterSpacing: "0.02em",
  cursor: "pointer",
  transition: "all 0.2s ease",
  background: isActive ? "#1e3a5f" : "transparent",
  color: isActive ? "#ffffff" : "#2a3b4f",
  boxShadow: isActive ? "0 4px 10px rgba(30, 58, 95, 0.35)" : "none",
});

export default function Toolbar({ currentPage, onChangePage }: ToolbarProps) {
  return (
    <nav style={toolbarStyle} aria-label="Page navigation toolbar">
      <button
        type="button"
        onClick={() => onChangePage("users")}
        style={getButtonStyle(currentPage === "users")}
        aria-pressed={currentPage === "users"}
      >
        Users
      </button>
      <button
        type="button"
        onClick={() => onChangePage("habits")}
        style={getButtonStyle(currentPage === "habits")}
        aria-pressed={currentPage === "habits"}
      >
        Habits
      </button>
    </nav>
  );
}
