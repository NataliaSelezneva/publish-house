function Delivery(){
    return(
        <div>
            <div className="block-delivery">
                <h3>Доставка здійснюється компаніями "Нова пошта" та "УкрПошта".</h3>
                <p>Нова пошта термін доставки: 1-2 дня</p>
                <p>УкрПошта термін доставки: 4-5 днів</p>
                <p>Безкоштовна доставка від 600 грн.</p>
                <p>Відправки щодня з 17:00.</p>
            </div>

            <div className="block-pay">
                <h3>Оплата здійснюється:</h3>
                    <p>Повна оплата на карту ПриватБанку та Монобанку</p>
                    <p>Накладений платіж</p>
            </div>
        </div>
    )
}
export default Delivery;