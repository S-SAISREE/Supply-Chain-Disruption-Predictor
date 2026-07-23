function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
}) {

    return (

        <div>

            <label className="block font-semibold mb-2">

                {label}

            </label>

            <input

                type={type}

                name={name}

                value={value}

                onChange={onChange}

                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

            />

        </div>

    )

}

export default InputField;