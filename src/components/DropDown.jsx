import React from 'react'

function DropDown({ description, options = [], defaultValue, onChange }) {
    const validatedDefaultValue = options.some(option => option.id === defaultValue)
        ? defaultValue
        : options[0]?.id || "";

    return (
        <div className="w-3/4 h-auto my-2">
            <p className="w-full h-auto">
                <span className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">
                    {description}
                </span>
            </p>
            <select
                onChange={onChange}
                defaultValue={validatedDefaultValue}
                className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none"
            >
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDown;
