//
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

// Importing GraphQL Mutations...
import { LOGIN } from "../../utils/mutation";

const LoginForm = ({ className = "", style = {} }) => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [login, { error }] = useMutation(LOGIN);
    const navigate = useNavigate();

    // Renders an error message in red letters at the bottom of the page.
    const ErrorHandler = (error) =>
        error.message && <p className="text-red-500 mt-2">Error: {error.message}</p>;    

    // Reusable Input Component.
    const inputStyle =
        "w-full h-16 mb-7 pl-5 pt-2 text-3xl font-ramaraja font-thin bg-accent text-white placeholder-white rounded-md";
    const handleChange = ({ target: { name, value } }) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
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

    // What happens when the user press the login button.
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({ variables: formData });
            if (data?.login?.token) {
                localStorage.setItem("token", data.login.token);
                localStorage.setItem("user", JSON.stringify(data.login.user));
                navigate("/");
            }
        } catch (err) {
            console.error("Login failed:", err);
        }
    };

    return (
        <div className={`${className} w-full md:w-1/2`} style={style}>
            <form onSubmit={handleLogin} className="flex flex-col w-full">
                <InputFieldComponent
                    type="text"
                    name="username"
                    placeholder="Username..."
                    value={formData.username}
                    onChange={handleChange}
                    required
                    inputStyle={inputStyle}
                />
                <InputFieldComponent
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
                    className="px-5 pt-3 pb-1 mt-10 rounded-lg font-ramaraja text-3xl bg-darkbrown text-accent shadow-lg font-semibold hover:shadow-2xl focus:ring-4 focus:ring-green-200 transition duration-500 whitespace-nowrap"
                    aria-label="Login"
                >
                    Login
                </button>

                <ErrorHandler error={error} />
            </form>
        </div>
    );
};

export default LoginForm;
