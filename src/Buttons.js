function Buttons({filteredBooks}){
    return(
        <div className="block-button">
            <button className="style-button" onClick={()=>filteredBooks('loveNovel')}>Любовні романи</button>
            <button className="style-button" onClick={()=>filteredBooks('fantasy')}>Фєнтезі</button>
            <button className="style-button" onClick={()=>filteredBooks('detective')}>Детектіви</button>
            <button className="style-button" onClick={()=>filteredBooks('thriller')}>Трилери</button>
            <button className="style-button" onClick={()=>filteredBooks('comics')}>Комікси</button>
        </div>
    )
}
export default Buttons;