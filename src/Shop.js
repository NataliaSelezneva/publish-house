import { useState } from "react";
import { dataOne } from "./dataOne";

function Shop(){

    const [photo, setPhoto] = useState(2);
    const {id, shopPhoto} = dataOne[photo];

    const Previous = () =>{
        setPhoto(photo =>{
            photo --;
            if(photo<0){
                return dataOne.length -1;
            }
            return photo;
        })
    }

    const Next = () =>{
        setPhoto(photo =>{
            photo ++;
            if(photo>dataOne.length-1){
                photo = 0;
            }
            return photo;
        })
    }
    
    return(
        <div className="block-slides" key={id}>
            <div className="style-slides">
                <img src={shopPhoto} width='400px' height='300px' alt="shop"/>
            </div>
            <div className="block-buttons">
                <button className="button-slide" onClick={Previous}>Попередня</button>
                <button className="button-slide" onClick={Next}>Наступна</button>
            </div>
        </div>
    )
}
export default Shop;