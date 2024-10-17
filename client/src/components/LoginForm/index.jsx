import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutation";

const LoginForm = ({ loginId, className, style }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [login, { error }] = useMutation(LOGIN);

    const cleanInput = () => {
        setFormData({ username: "", password: "" });
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        // Client-side validation
        const { username, password } = formData;
        if (!username || !password) {
            console.error("All fields are required.");
            return;
        }

        try {
            await login({ variables: { loginId, ...formData } });
            cleanInput(); // Clean inputs after successful submission
        } catch (err) {
            console.error("Failed to submit message:", err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const renderError = () =>
        error && <p className="text-red-500 mt-2">Error: {error.message}</p>;

    const inputStyle =
        "w-full h-16 mb-7 pl-5 pt-2 text-3xl font-ramaraja font-thin bg-accent text-white placeholder-white rounded-md";

    return (
        <div className={`${className} w-full md:w-1/2`} style={style}>
            <form onSubmit={handleLogin} className="flex flex-col w-full">
                <InputField
                    type="text"
                    name="username"
                    placeholder="Username..."
                    value={formData.username}
                    onChange={handleChange}
                    required
                    inputStyle={inputStyle}
                />
                <InputField
                    type="password"
                    name="password"
                    placeholder="Password..."
                    value={formData.password}
                    onChange={handleChange}
                    required
                    inputStyle={inputStyle}
                />

                <button
                    type="submit"
                    className="px-5 pt-3 pb-1 mt-10 rounded-lg font-ramaraja text-3xl bg-darkbrown text-accent py-3 shadow-lg font-semibold hover:shadow-2xl focus:ring-4 focus:ring-green-200 transition duration-500 whitespace-nowrap"
                    aria-label="Submit Comment"
                >
                    Login
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

export default LoginForm;
