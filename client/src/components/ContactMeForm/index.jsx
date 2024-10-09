import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../../utils/mutation";

const ContactMeForm = ({ messageId, className, style }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [characterCount, setCharacterCount] = useState(0);
    const [addMessage, { error }] = useMutation(ADD_MESSAGE);

    const cleanInput = () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCharacterCount(0);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Client-side validation
        const { name, email, subject, message } = formData;
        if (!name || !email || !subject || !message) {
            console.error("All fields are required.");
            return;
        }

        try {
            await addMessage({ variables: { messageId, ...formData } });
            cleanInput(); // Clean inputs after successful submission
        } catch (err) {
            console.error("Failed to submit message:", err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:
                name === "message"
                    ? value
                    : cutString(value, name === "name" ? 50 : 100),
        }));

        if (name === "message") {
            setCharacterCount(value.length);
        }
    };

    const cutString = (str, maxLength) =>
        str.length <= maxLength ? str : str.slice(0, maxLength);

    const renderError = () =>
        error && (
            <p className="text-red-500 mt-2">
                Failed to submit. Please try again.
            </p>
        );

    const inputStyle =
        "w-full h-16 mb-7 pl-5 pt-2 text-3xl font-ramaraja font-thin bg-accent text-white placeholder-white rounded-md";

    return (
        <div className={`${className} w-full md:w-1/2`} style={style}>
            <form onSubmit={handleFormSubmit} className="flex flex-col w-full">
                <InputField
                    type="text"
                    name="name"
                    placeholder="Name..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                    inputStyle={inputStyle}
                />
                <InputField
                    type="email"
                    name="email"
                    placeholder="Email..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                    inputStyle={inputStyle}
                />
                <InputField
                    type="text"
                    name="subject"
                    placeholder="Subject..."
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    inputStyle={inputStyle}
                />
                <textarea
                    name="message"
                    placeholder="Add your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full mb-7 h-72 pl-5 pt-2 text-3xl font-ramaraja font-thin bg-accent text-white placeholder-white rounded-md"
                    required
                    aria-label="Message"
                    style={{ lineHeight: "1.5" }}
                ></textarea>

                {/* Show remaining character count */}
                <p className="text-right text-sm text-white mb-4">
                    {characterCount}/280 characters
                </p>

                <button
                    type="submit"
                    className="px-5 pt-3 pb-1 mt-10 rounded-lg font-ramaraja text-3xl bg-darkbrown text-accent py-3 shadow-lg font-semibold hover:shadow-2xl focus:ring-4 focus:ring-green-200 transition duration-500 whitespace-nowrap"
                    aria-label="Submit Comment"
                >
                    Add Comment
                </button>

                {renderError()}
            </form>
        </div>
    );
};

// Reusable Input Component
const InputField = ({
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

export default ContactMeForm;
