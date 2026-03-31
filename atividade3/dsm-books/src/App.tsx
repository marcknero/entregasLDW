import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container,AppBar,Toolbar, Button } from "@mui/material";
import { BooksProvider } from "./context/BookContext";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Period from "./pages/Period";

export default function App() {
    return (
        <BooksProvider>
            <BrowserRouter>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/course">Filtrar por Disciplina</Button>
                        <Button color="inherit" component={Link} to="/period">Filtrar por Período</Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/period" element={<Period />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </BooksProvider>
    );
}
