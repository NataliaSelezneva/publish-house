import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function About(){
    const [state, handleSubmit] = useForm("mdojaelj");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return(
        <div className='style-about'>
            <h1>Вас вітає команда книжкового магазину КнигоМаркет!</h1>
            <p>Вас вітає команда книжкового магазину КнигоМаркет! </p>
                У нас ви знайдете книги по найдоступнішім цінам! В нашому книжкові новинки з'являються першими. 
                Також у нас сама доступна ціна на передзамовлення, які ми гарантовано відправимо до вас як можна скоріше!
                Ми працюємо для вас і робимо, щоб ваші замовлення відправлялась до вас як змога скоріше.
            <p>Кожного місяця ми проводимо цікаві акції та розпродаж книг.
                У нас діє накопичувальна знижка до 30% і ми гарантуємо вам, що таких знижок ви не знайдете ніде.</p>
            <p>Ми відкриті до оптових замовлень і даємо вигідну ціну. Зверніться до нас на пошту  
            knigo-market@gmail.com для отримання найвигіднішої умови.</p>

        <div className='block-form'>
            <h3 className='invite'>Якщо ви хочете бути членом нашої команди, будь ласка, заповніть цю форму:</h3>
            </div>
            <form className='style-form' onSubmit={handleSubmit}>

            <label htmlFor="name">
                Твое ім'я:
            </label>
            <input
                id="name"
                type="name" 
                name="name"
                required=""
            />

            <label htmlFor="email">
                Електронна пошта:
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                required=""
            />          
            <label htmlFor="number">
                Номер телефона:
            </label>
            <input
                id="number"
                type="number" 
                name="number"
                required=""
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea className='text'
                id="message"
                name="message"
                required=""
                placeholder='ваше повідомлення'
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button className='button-form' type="submit" disabled={state.submitting}>
            Відправити
            </button>
            </form>
        </div>
    )
}
export default About;