import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_MESSAGE } from "../../utils/mutation";

const ContactMeForm = ({ messageId }) => {
    // Set Inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, changeSubject] = useState("");
    const [message, setMessage] = useState("");

    const [characterCount, setCharacterCount] = useState(0);

    const [addMessage, { error }] = useMutation(ADD_MESSAGE);

    const cleanInput = () => {
        setName("");
        setEmail("");
        changeSubject("");
        setMessage("");
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            if (name || email || subject || message) {
                const { data } = await addMessage({
                    variables: { messageId, name, email, subject, message },
                });
                cleanInput(); // Cleaning all inputs
            }

        } catch (err) {
            console.error(err);
        }
    };

    const cutString = (str, maxLength) => {
        return str.length <= maxLength ? str : str.slice(0, maxLength);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "name") {
            // name.length can't be bigger than 50 characters
            setName(cutString(value, 50));
        }

        if (name === "email") {
            // TODO: Set data validation for email
            setEmail(value);
        }

        if (name === "subject") {
            // subject.length can't be bigger than 100 characters
            changeSubject(cutString(value, 100));
        }

        if (name === "message" && value.length <= 280) {
            setMessage(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            <p className={`${characterCount === 280 || error}`}>
                Character Count: {characterCount}/280
                {error && <span>Something went wrong...</span>}
            </p>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        value={name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="email"
                        placeholder="Email..."
                        value={email}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject..."
                        value={subject}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Add your message..."
                        value={message}
                        style={{ lineHeight: "1.5" }}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <button type="submit">Add Comment</button>
                </div>
            </form>
        </div>
    );
};

export default ContactMeForm;
