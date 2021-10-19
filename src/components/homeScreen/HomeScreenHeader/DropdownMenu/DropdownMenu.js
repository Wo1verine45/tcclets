export function DropdownMenu({ id, initialValue, options, setLanguage }) {

    function handleOnLanguageChange(evt) {
        setLanguage(evt.target.value)
    }

    return(
        <form>
            <select id={id} name={id} value={initialValue} onChange={handleOnLanguageChange}>
                {options.map(
                    (option) => <option value={option.value}>{option.label}</option>
                )}
            </select>
        </form>
    )
}