import { useUsers } from "../hooks/useUsers"
import type { User } from "../slices/userSlice"
import { type CSSProperties, useState } from "react"

const sectionStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #e3e7ee",
  borderRadius: "16px",
  padding: "1.25rem",
  boxShadow: "0 10px 26px rgba(17, 24, 39, 0.06)",
  marginTop: "1rem",
  textAlign: "left",
};

const headerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "0.75rem",
};

const createButtonStyle: CSSProperties = {
  background: "#0f4c81",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "0.55rem 0.9rem",
  fontWeight: 600,
  cursor: "pointer",
};

const listStyle: CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gap: "0.6rem",
};

const itemStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.7rem 0.8rem",
  borderRadius: "10px",
  backgroundColor: "#f7f9fc",
  border: "1px solid #e7ebf2",
};

const hintStyle: CSSProperties = {
  fontSize: "0.85rem",
  color: "#5f6b7a",
  marginBottom: "0.9rem",
};


export default function Users() {
  const { getUsers, addUser, removeUser } = useUsers();
  const [id, setId] = useState(1);
  const [name, setName] = useState("João");
  const users = getUsers();

  const handleCraete = () => {
    const user: User = {
      id: id,
      name: name,
      age: id + 20,
    };
    addUser(user);
    setId((prev: number) => prev + 1)
    setName("João" + id.toString());
  };

  const handleRemoveUser = (user: User) => {
    const hasConfirmed = window.confirm(
      `Deseja realmente excluir o usuário ${user.name}?`
    );

    if (hasConfirmed) {
      removeUser(user.id);
    }
  };

  

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Usuarios</h2>
        <button style={createButtonStyle} onClick={handleCraete}>Criar Usuario Teste</button>
      </div>
      <p style={hintStyle}>Clique com o botao direito em um usuario para remover.</p>
      <ul style={listStyle}>
        {users.map((user) => (
          <li
            key={user.id}
            style={itemStyle}
            onContextMenu={(event) => {
              event.preventDefault();
              handleRemoveUser(user);
            }}
            title="Clique com o botao direito para excluir"
          >
            <span>{user.name}</span>
            <strong>{user.age} anos</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
