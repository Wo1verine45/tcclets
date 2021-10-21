import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import './Registration.css'
import { useContext } from "react";
import { TranslateContext } from "../../contexts";

export function Registration() {

    const { translate } = useContext(TranslateContext)

    function handleOnSubmit(evt) {
        evt.preventDefault()

        console.log('Formulário enviado com sucesso!')
        console.log('Email:', evt.target.value)
    }

    return (
        <form className='Registration-form' onSubmit={handleOnSubmit}>
            <Input size={1} type='email' id='email' placeholder='Email'/>
            <Button onClick={null} size={1} type='submit'>{translate('signup-bottom')}</Button>
        </form>
    )
}