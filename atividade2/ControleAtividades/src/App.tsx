import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";
import { addActivity, removeActivity, edditActivity, toggleActivityCompleted, removeAllActivities } from "./redux/slices/activitySlice";
import type { Activity } from "./redux/slices/activitySlice";
import { useRef, useState } from "react";
import "./App.css";


export default function App() {
  const activities = useSelector((state: RootState) => state.activities.activities);
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [editingActivityId, setEditingActivityId] = useState<number | null>(null);
  const formRef = useRef<HTMLElement | null>(null);
  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const isEditing = editingActivityId !== null;

  const categoryOptions = Array.from(
    new Set(
      activities.map((activity) => activity.category.trim() || "Sem categoria")
    )
  );

  const filteredActivities = activities.filter((activity) => {
    if (selectedCategory === "Todas") {
      return true;
    }

    const normalizedCategory = activity.category.trim() || "Sem categoria";
    return normalizedCategory === selectedCategory;
  });

  const groupedActivities = filteredActivities.reduce<Record<string, Activity[]>>((groups, activity) => {
    const categoryName = activity.category.trim() || "Sem categoria";

    if (!groups[categoryName]) {
      groups[categoryName] = [];
    }

    groups[categoryName].push(activity);
    return groups;
  }, {});

  const handleSave = () => {
    if (!title.trim()) {
      return;
    }

    const newActivity: Activity = {
      id,
      title: title.trim(),
      category: category.trim(),
      completed: false,
    };

    dispatch(addActivity(newActivity));
    setId((prev: number) => prev + 1);
    setTitle("");
    setCategory("");
  };

  const handleStartEdit = (activity: Activity) => {
    setEditingActivityId(activity.id);
    setTitle(activity.title);
    setCategory(activity.category);
    setSelectedCategory("Todas");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    titleInputRef.current?.focus();
  };

  const handleConfirmEdit = () => {
    if (editingActivityId === null) {
      return;
    }

    const currentActivity = activities.find((activity) => activity.id === editingActivityId);
    if (!currentActivity) {
      return;
    }

    if (!title.trim()) {
      return;
    }

    const edditedActivity: Activity = {
      ...currentActivity,
      title: title.trim(),
      category: category.trim(),
    };

    dispatch(edditActivity(edditedActivity));
    setEditingActivityId(null);
    setTitle("");
    setCategory("");
  };

  const handleCancelEdit = () => {
    setEditingActivityId(null);
    setTitle("");
    setCategory("");
  };

  const handleRemove = (id: number) => {
    dispatch(removeActivity(id));
  };

  const handleToggleCompleted = (id: number) => {
    dispatch(toggleActivityCompleted(id));
  };

  const hadleRemoveAll = () => {
    dispatch(removeAllActivities());
  }

  return (
    <div className="App">

      <section className="composer-card" ref={formRef}>
        <div className="composer-heading">
          <h2>{isEditing ? "Editar atividade" : "Controle de Habitos Diarios"}</h2>
          <p>
            {isEditing
              ? "Atualize os dados abaixo e confirme a edicao."
              : "Preencha os campos para adicionar um novo item ao quadro."}
          </p>
        </div>
        <div className="composer-grid">
          <label className="field">
            <span>Titulo</span>
            <input
              ref={titleInputRef}
              type="text"
              placeholder="Ex.: Revisar entrega"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="field">
            <span>Categoria</span>
            <input
              type="text"
              placeholder="Ex.: Faculdade"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>

          {!isEditing && (
            <button className="primary-button" onClick={handleSave}>Salvar atividade</button>
          )}

          {isEditing && (
            <button className="primary-button" onClick={handleConfirmEdit}>Confirmar edicao</button>
          )}

          {isEditing && (
            <button className="secondary-button" onClick={handleCancelEdit}>Cancelar edicao</button>
          )}

          <button className="secondary-button" onClick={()=>{
            if(window.confirm("Tem certeza que deseja excluir todas as atividades concluidas?")){
              hadleRemoveAll();
            }
          }}>Excluir atividades concluidas</button>
        </div>
      </section>

      <section className="filter-card">
        <label className="field filter-field">
          <span>Filtrar categoria</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="Todas">Todas</option>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </section>

      <div className="tables-container">
        {Object.entries(groupedActivities).length === 0 && (
          <section className="empty-state">
            <h2>Nenhuma atividade cadastrada</h2>
            <p>Crie a primeira atividade para iniciar a organizacao da sua rotina.</p>
          </section>
        )}

        {Object.entries(groupedActivities).map(([groupCategory, groupItems]) => (
          <section key={groupCategory} className="category-table-section">
            <div className="section-header">
              <h2>{groupCategory}</h2>
              <span>{groupItems.length} item(ns)</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Categoria</th>
                  <th>Concluida</th>
                  <th>Acoes</th>
                </tr>
              </thead>
              <tbody>
                {groupItems.map((activity) => (
                  <tr key={activity.id} className={activity.completed ? "activity-row is-completed" : "activity-row"}>
                    <td>{activity.title}</td>
                    <td>{activity.category || "Sem categoria"}</td>
                    <td>
                      <label className="status-toggle">
                        <input
                          name="completed"
                          type="checkbox"
                          checked={activity.completed}
                          onChange={() => handleToggleCompleted(activity.id)}
                        />
                        <span>{activity.completed ? "Concluida" : "Pendente"}</span>
                      </label>
                    </td>
                    <td className="actions-cell">
                      <button className="secondary-button" onClick={() => handleStartEdit(activity)}>Editar</button>
                      {activity.completed && (
                        <button className="danger-button" onClick={() => handleRemove(activity.id)}>Remover</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </div>
  );
};