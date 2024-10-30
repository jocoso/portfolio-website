//
import { useQuery } from "@apollo/client";
import QueryList from "../components/QueryList";
import CozyPost from "../components/CozyPost";
import Title from "../components/Title";

// Importing GraphQL queries and mutations...
import { QUERY_POSTS } from "../utils/queries";

// Imports isLoggedIn, a function that returns true if the user is loggedIn.
import { isLoggedIn } from "../utils/util";

const Blog = () => {
    // GraphQL query for fetching posts.
    const { loading, error, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    // JSX for error state.
    const renderError = error && (
        <div aria-live="polite" className="text-center mt-10">
            <p className="text-red-500">
                Error: {error.message || "An unexpected error has occurred."}
            </p>
            <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                onClick={() => window.location.reload()}
            >
                Retry
            </button>
        </div>
    );

    // JSX for loading state.
    const renderLoading = loading && (
        <div aria-live="polite" className="text-center mt-10">
            <p>Loading...</p>
            <div className="flex justify-center items-center mt-4">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>
        </div>
    );

    // JSX for no posts available.
    const renderNoPosts = (
        <div className="text-center">
            <p>No blog posts available at the moment. Please check back later!</p>
        </div>
    );

    return(
        <main className="min-h-screen flex flex-col items-center mt-32">
            <Title className="text-center mb-10">Blog</Title>

            {/* Conditional rendering for error, loading, or blog content. */}
            {renderError || renderLoading || (
                <div className="w-full max-w-4xl px-4">
                    {posts.length > 0 ? (
                        <QueryList
                            items={posts}
                            Component={CozyPost}
                            className="flex flex-col w-full"
                        />
                    ) : (
                        renderNoPosts
                    )}
                </div>
            )}
            
            {/* Logged-in state message. */}
            {isLoggedIn() && (
                <div className="mt-10 text-center text-indigo-600">
                    I am rendering because you have logged in.
                </div>
            )}
        </main>
    );
};

export default Blog;