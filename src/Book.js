
import { useState } from "react";

function Book({allBooks}){

    const [showText, setShowText] = useState(false);

    const showTextClick = (element) =>{
        element.showMore = !element.showMore;
        setShowText(!showText);

    }
    return(
        <div className="block-books">
            {allBooks.map((element =>{
                const {id, titleBook, authorBook, annotationBook, imageBook, priceBook, showMore } = element;

                return(
                <div className="information-every-book" key={id}>
                    <div className="position-image">
                        <img className="image-book" src={imageBook} width='140px' height='200px' alt="book"/>
                    </div>
                    <div className="style-block-title">
                        <p className="title-book">{titleBook}</p>
                        <p className="author-book">{authorBook}</p>
                    </div>
                    <div>
                        <p className="annotation"><br />Анотація: {showMore ? annotationBook : annotationBook.substring(0, 170) + '...'}
                        <button className="style-show-more" onClick={() => showTextClick(element)}>{showMore ? "Звернути" : "Показати більше"}</button>
                        </p>
                    </div>
                    <div className="style-price">
                        <p className="price">{priceBook} грн.</p>
                    </div>
                    <div className="style-price">
                        <button className="buy">Купити</button>
                    </div>
                </div>
                )
            }))}
        </div>
    )
}
export default Book;