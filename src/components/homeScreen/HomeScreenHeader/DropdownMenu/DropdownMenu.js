export function DropdownMenu({ id, initialValue, options, setLanguage }) {

    function handleOnLanguageChange(evt) {
        setLanguage(evt.target.value)
    }

    //verificar se tem alguma forma de fazer um laço de repetição aqui para que 
    //tenha o número de options de acordo com os values que o user colocar

    return(
        <form>
            <select id={id} name={id} value={initialValue} onChange={handleOnLanguageChange}>
                {/*<option value={values[0]}>{values2[0]}</option>
                <option value={values[1]}>{values2[1]}</option>*/}
                {options.map(
                    (option) => <option value={option.value}>{option.label}</option>
                )}
            </select>
        </form>
    )
}