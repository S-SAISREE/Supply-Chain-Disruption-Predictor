function SelectField({
    label,
    name,
    value,
    options,
    onChange,
}) {

    return (

        <div>

            <label className="block font-semibold mb-2">

                {label}

            </label>

            <select

                name={name}

                value={value}

                onChange={onChange}

                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

            >

                <option value="">Select</option>

                {

                    options.map(option => (

                        <option
                            key={option}
                            value={option}
                        >

                            {option}

                        </option>

                    ))

                }

            </select>

        </div>

    )

}

export default SelectField;