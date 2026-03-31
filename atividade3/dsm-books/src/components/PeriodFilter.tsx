import { useBooks } from "../context/BookContext";
import { Card, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";

export default function CourseFilter() {
    const { books } = useBooks();
    const [selected, setSelected] = useState(0);

    const periods = [...new Set(books.map(book => book.semester))];

    const filteredBooks = books.filter(b => selected === 0 || b.semester === selected);

    return (
        <>
            <Typography variant="h5">Filtrar por Período</Typography>
            <Select value={selected} onChange={e => setSelected(e.target.value)} sx={{ mb: 2 }}>
                <MenuItem value={0} >Todos</MenuItem>
                {periods.map(period => (
                    <MenuItem key={period} value={period}>{period}</MenuItem>
                ))}
            </Select>
             {filteredBooks.map((book, idx) => {
                return (
                    <Card key={idx} style={{ marginBottom: 2 }}>
                        <Typography variant="h6">{book.title}</Typography>
                        <Typography variant="body2">
                            {book.author} - {book.publisher} ({book.year}) | Período: {book.semester}
                        </Typography>
                    </Card>
                )
            })}
        </>
    );
};