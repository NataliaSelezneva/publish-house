import { useState } from "react";
import Book from "./Book";
import Buttons from "./Buttons";
import { data } from "./data";


function Home(){
    const [books, setBooks] = useState(data);

    const chooseBooks = (searchBook) =>{
            const newBook = data.filter(element => element.searchBook === searchBook);
            setBooks(newBook);
    }
    return(
            <div className="container">
                <Buttons filteredBooks={chooseBooks} />
                <Book allBooks={books}/>
            </div>
    )
}
export default Home;