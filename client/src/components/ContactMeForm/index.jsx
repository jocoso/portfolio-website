//
import { useState } from "react";
import { useMutation } from "@apollo/client";

// Importing GraphQL query...
import { ADD_MESSAGE } from "../../utils/mutation";

// Local Components.
const InputFieldComponent = ({
    type,
    name,
    placeholder,
    value,
    onChange,
    required,
    inputStyle,
}) => (
    <div className="w-full">
        <label htmlFor={name} className="sr-only">
            {placeholder}
        </label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={inputStyle}
            required={required}
            aria-label={placeholder}
        />
    </div>
);
const HandleErrorComponent = ({ message, reason }) => (
    <p className="text-red-500 mt-2">
        {message}
        {reason}
    </p>
);

const ContactMeForm = ({ messageId, style }) => {
    // Data creators/manipulators.
    const EMPTY_OBJECT = { name: "", email: "", subject: "", message: "" };
    const [formData, setFormData] = useState({ ...EMPTY_OBJECT });
    const cleanInput = () => setFormData({ ...EMPTY_OBJECT });
    const [addMessage, { error }] = useMutation(ADD_MESSAGE);


    // Handlers
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = formData;
        // TODO: Add UI for errors later. This line needs to trigger something on the page.
        if (!name || !email || !message) {
            console.error("All fields are required");
            return;
        }
        try {
            await addMessage({ variables: { messageId, ...formData } }); // Adding message to db.
            cleanInput();
        } catch (err) {
            console.error("Failed to submit message:", err);
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        // Update the form data accordingly, based on the name of the input.
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const inputStyle =
        "w-full h-16 mb-7 pl-5 pt-2 text-3xl font-ramaraja font-thin bg-accent text-white placeholder-white rounded-md";

    return (
        <div className="w-full md:w-1/2" style={style}>

            {/* The Form */}
            <form
                action=""
                onSubmit={handleFormSubmit}
                style={style}
                className="flex flex-col w-full"
            >
                {/* Name Input. */}
                <InputFieldComponent
                    type="text"
                    name="name"
                    placeholder="Name..."
                    required
                    inputStyle={inputStyle}
                    aria-label="text"
                />
                {/* Email Input. */}
                <InputFieldComponent
                    type="email"
                    name="email"
                    placeholder="Email..."
                    required
                    inputStyle={inputStyle}
                    aria-label="email"
                />
                {/* Thoughts Input. */}
                <textarea
                    name=""
                    placeholder="Share your thoughts."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full mb-7 h-72 pl-5 pt-2 text-3xl font-thin bg-accent text-white placeholder-white rounded-md"
                    required
                    aria-label="Thoughts"
                    style={{ lineHeight: "1.5" }}
                ></textarea>

                {/* Send message button. */}
                <button
                    type="submit"
                    className="px-5 pt-3 pb-1 mt-10 rounded-lg font-ramaraja text-3xl bg-darkbrown text-accent py-3 shadow-lg font-semibold hover:shadow-2xl focus:ring-4 focus:ring-green-200 transition duration-500 whitespace-nowrap"
                    aria-label="Send Message"
                ></button>

                {error && <HandleErrorComponent message="Couldn't submit the message." reason={error} />}
            
            </form>
        </div>
    );
};

export default ContactMeForm;