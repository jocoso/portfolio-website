import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function ErrorPage() {
    const error = useRouteError();

    // Log error only in development
    if (process.env.NODE_ENV === "development") {
        console.error(error);
    }

    // Memoized error message
    const errorMessage = useMemo(() => {
        return error?.statusText || error?.message || "Something went wrong!";
    }, [error]);

    return (
        <article
            id="error-page"
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4"
        >
            <h1 className="text-5xl font-bold text-red-500 mb-6">Oops!</h1>
            <p className="text-2xl text-gray-700 mb-4">
                Sorry, an unexpected error has occurred.
            </p>
            <p className="text-xl text-gray-600 italic mb-8">{errorMessage}</p>

            {/* Navigation Buttons */}
            <div className="space-x-4">
                <Link
                    to="/"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                >
                    Go to Home
                </Link>
                <button
                    onClick={() => window.history.back()}
                    className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300"
                >
                    Go Back
                </button>
            </div>
        </article>
    );
}
