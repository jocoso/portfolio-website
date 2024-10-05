import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../../utils/mutation";

const ContactMeForm = ({ messageId, className, style }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, changeSubject] = useState("");
    const [message, setMessage] = useState("");
    const [characterCount, setCharacterCount] = useState(0); // Track message length

    const [addMessage, { error }] = useMutation(ADD_MESSAGE);

    const cleanInput = () => {
        setName("");
        setEmail("");
        changeSubject("");
        setMessage("");
        setCharacterCount(0);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Client-side validation
        if (!name || !email || !subject || !message) {
            console.error("All fields are required.");
            return;
        }

        try {
            const { data } = await addMessage({
                variables: { messageId, name, email, subject, message },
            });
            cleanInput(); // Clean inputs after successful submission
        } catch (err) {
            console.error("Failed to submit message:", err);
        }
    };

    const cutString = (str, maxLength) => {
        return str.length <= maxLength ? str : str.slice(0, maxLength);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case "name":
                setName(cutString(value, 50));
                break;
            case "email":
                // Basic email validation (client-side)
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(value)) setEmail(value);
                break;
            case "subject":
                changeSubject(cutString(value, 100));
                break;
            case "message":
                if (value.length <= 280) {
                    setMessage(value);
                    setCharacterCount(value.length);
                }
                break;
            default:
                break;
        }
    };

    const inputStyle =
        "w-full h-16 mb-7 pl-5 pt-2 text-3xl font-ramaraja font-thin bg-accent text-white placeholder-white rounded-md";

    return (
        <div className={`${className} w-full md:w-1/2`} style={style}>
            <form onSubmit={handleFormSubmit} className="flex flex-col w-full">
                <div className="w-full">
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        value={name}
                        onChange={handleChange}
                        className={inputStyle}
                        required
                        aria-label="Name"
                    />

                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email..."
                        value={email}
                        onChange={handleChange}
                        className={inputStyle}
                        required
                        aria-label="Email"
                    />

                    <label htmlFor="subject" className="sr-only">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject..."
                        value={subject}
                        onChange={handleChange}
                        className={inputStyle}
                        required
                        aria-label="Subject"
                    />

                    <label htmlFor="message" className="sr-only">
                        Message
                    </label>
                    <textarea
                        name="message"
                        placeholder="Add your message..."
                        value={message}
                        style={{ lineHeight: "1.5" }}
                        onChange={handleChange}
                        className="w-full mb-7 h-72 pl-5 pt-2 text-3xl font-ramaraja font-thin bg-accent text-white placeholder-white rounded-md"
                        required
                        aria-label="Message"
                    ></textarea>

                    {/* Show remaining character count */}
                    <p className="text-right text-sm text-white mb-4">
                        {characterCount}/280 characters
                    </p>

                    <button
                        type="submit"
                        className="px-5 pt-3 pb-1 mt-10 rounded-lg font-ramaraja text-3xl bg-darkbrown text-accent py-3 shadow-lg font-semibold hover:shadow-2xl focus:ring-4 focus:ring-green-200 transition duration-500 whitespace-nowrap shadow-[rgba(0,0,0,0.4)]"
                        aria-label="Submit Comment"
                    >
                        Add Comment
                    </button>

                    {error && (
                        <p className="text-red-500 mt-2">
                            Failed to submit. Please try again.
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ContactMeForm;
