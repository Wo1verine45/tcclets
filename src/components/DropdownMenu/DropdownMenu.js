import './DropdownMenu.css'

export function DropdownMenu({ id, initialValue, options, onSelect }) {

    function handleOnSelect(evt) {
        onSelect(evt.target.value)
    }

    return(
        <form className='DropdownMenu-form'>
            <select className='DropdownMenu-dropdownmenu' id={id} name={id} value={initialValue} onChange={handleOnSelect}>
                {options.map(
                    (option) => <option className='DropdownMenu-options' value={option.value}>{option.label}</option>
                )}
            </select>
        </form>
    )
}