import { useBooks } from "../context/BookContext";
import { Card,CardContent,Typography } from "@mui/material";

export default function Booklist(){
    const { books } = useBooks();

    return(
        <>
        {books.map((book, index) => (
            <Card key={index} style={{ marginBottom: 2 }}> 
                <CardContent>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="body2">
                        {book.author} - {book.publisher} ({book.year}) | Disciplina: {book.course}
                    </Typography>
                </CardContent>
            </Card>
        ))}
        </>
    );
};

