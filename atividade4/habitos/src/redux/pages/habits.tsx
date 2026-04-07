import { type CSSProperties, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispetch, RootState } from "../store";
import {
	addHabit,
	removeHabit,
	setFilter,
	updateHabit,
	type Habit,
} from "../slices/habitsSlice";

const sectionStyle: CSSProperties = {
	backgroundColor: "#ffffff",
	border: "1px solid #e3e7ee",
	borderRadius: "16px",
	padding: "1.25rem",
	boxShadow: "0 10px 26px rgba(17, 24, 39, 0.06)",
	marginTop: "1rem",
	textAlign: "left",
};

const inputStyle: CSSProperties = {
	padding: "0.55rem 0.65rem",
	border: "1px solid #d7deea",
	borderRadius: "10px",
	outline: "none",
};

const selectStyle: CSSProperties = {
	...inputStyle,
	minWidth: "180px",
	marginLeft: "0.5rem",
};

const actionButtonStyle: CSSProperties = {
	border: "none",
	borderRadius: "10px",
	padding: "0.55rem 0.85rem",
	fontWeight: 600,
	cursor: "pointer",
};

const listStyle: CSSProperties = {
	listStyle: "none",
	margin: "1rem 0 0",
	padding: 0,
	display: "grid",
	gap: "0.7rem",
};

const rowStyle: CSSProperties = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "0.75rem",
	backgroundColor: "#f7f9fc",
	border: "1px solid #e7ebf2",
	borderRadius: "12px",
	padding: "0.75rem 0.85rem",
};

export default function Habits() {
	const dispatch = useDispatch<AppDispetch>();
	const habits = useSelector((state: RootState) => state.habits.habits);
	const filter = useSelector((state: RootState) => state.habits.filter);

	const [id, setId] = useState(1);
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [editingHabitId, setEditingHabitId] = useState<number | null>(null);

	const categories = Array.from(new Set(habits.map((habit) => habit.category))).sort();
	const filteredHabits =
		filter === "all"
			? habits
			: habits.filter((habit) => habit.category === filter);

	const resetForm = () => {
		setTitle("");
		setCategory("");
		setEditingHabitId(null);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const normalizedTitle = title.trim();
		const normalizedCategory = category.trim();

		if (!normalizedTitle || !normalizedCategory) {
			window.alert("Preencha titulo e categoria do habito.");
			return;
		}

		if (editingHabitId !== null) {
			const updatedHabit: Habit = {
				id: editingHabitId,
				title: normalizedTitle,
				category: normalizedCategory,
			};

			dispatch(updateHabit(updatedHabit));
			resetForm();
			return;
		}

		const newHabit: Habit = {
			id,
			title: normalizedTitle,
			category: normalizedCategory,
		};

		dispatch(addHabit(newHabit));
		setId((prev) => prev + 1);
		resetForm();
	};

	const handleRemoveHabit = (habit: Habit) => {
		const hasConfirmed = window.confirm(
			`Deseja realmente excluir o habito ${habit.title}?`
		);

		if (hasConfirmed) {
			dispatch(removeHabit(habit.id));
		}
	};

	const handleStartEdit = (habit: Habit) => {
		setEditingHabitId(habit.id);
		setTitle(habit.title);
		setCategory(habit.category);
	};

	return (
		<section style={sectionStyle}>
			<h2 style={{ marginTop: 0, marginBottom: "0.9rem" }}>Habitos</h2>

			<label style={{ fontWeight: 600, color: "#374151" }}>
				Filtrar por categoria:
				<select
					style={selectStyle}
					value={filter}
					onChange={(event) => dispatch(setFilter(event.target.value))}
				>
					<option value="all">Todas</option>
					{categories.map((itemCategory) => (
						<option key={itemCategory} value={itemCategory}>
							{itemCategory}
						</option>
					))}
				</select>
			</label>

			<form
				onSubmit={handleSubmit}
				style={{ display: "grid", gap: "0.65rem", marginTop: "1rem" }}
			>
				<input
					style={inputStyle}
					type="text"
					placeholder="Titulo do habito"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<input
					style={inputStyle}
					type="text"
					placeholder="Categoria"
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>
				<button
					type="submit"
					style={{ ...actionButtonStyle, backgroundColor: "#0f4c81", color: "#fff" }}
				>
					{editingHabitId === null ? "Adicionar habito" : "Salvar edicao"}
				</button>
				{editingHabitId !== null && (
					<button
						type="button"
						onClick={resetForm}
						style={{ ...actionButtonStyle, backgroundColor: "#e5e7eb", color: "#111827" }}
					>
						Cancelar
					</button>
				)}
			</form>

			<ul style={listStyle}>
				{filteredHabits.map((habit) => (
					<li key={habit.id} style={rowStyle}>
						<div>
							<strong>{habit.title}</strong> <span style={{ color: "#556070" }}>({habit.category})</span>
						</div>
						<div style={{ display: "flex", gap: "0.5rem" }}>
							<button
								type="button"
								onClick={() => handleStartEdit(habit)}
								style={{ ...actionButtonStyle, backgroundColor: "#dbeafe", color: "#1d4ed8" }}
							>
								Editar
							</button>
							<button
								type="button"
								onClick={() => handleRemoveHabit(habit)}
								style={{ ...actionButtonStyle, backgroundColor: "#fee2e2", color: "#b91c1c" }}
							>
								Remover
							</button>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
