import { useQuery } from "@apollo/client";
import QueryList from "../components/QueryList";
import CozyPost from "../components/CozyPost";
import { QUERY_POSTS } from "../utils/queries";
import Title from "../components/Title";
import { isLoggedIn } from "../utils/util";

const Blog = () => {
    // Preparing graphql to query for posts.
    const { loading, error, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || []; // If no post in db, default to an empty array.

    // JSX for error and loading states
    const renderError = error && (
        <div aria-live="polite" className="text-center mt-10">
            <p className="text-red-500">Error: {error.message}</p>
            <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                onClick={() => window.location.reload()}
            >
                Retry
            </button>
        </div>
    );
    // ---

    // Loading screen as the program fetches the data.
    const renderLoading = loading && (
        <div aria-live="polite" className="text-center mt-10">
            <p>Loading...</p>
            <div className="flex justify-center items-center mt-4">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>
        </div>
    );
    // ---

    return (
        <main className="min-h-screen flex flex-col items-center mt-32">
            <Title className="text-center mb-10">Blog</Title>

            {/* Displays Blogs IFF there is no error and the page isn't loading. */}
            {renderError || renderLoading || (
                <div className="w-full max-w-4xl px-4">
                    {posts.length > 0 ? (
                        <QueryList
                            items={posts}
                            Component={CozyPost}
                            className="flex flex-col w-full"
                        />
                    ) : (
                        <div className="text-center">
                            <p>
                                No blog posts available at the moment. Please
                                check back later!
                            </p>{" "}
                            {/* No posts found in DB. */}
                        </div>
                    )}
                </div>
            )}
            {/* --- */}
            {/* If Logged in... */}
            {isLoggedIn() || 
                <div>I am rendering because you have logged in.</div>
            }
        </main>
    );
};

export default Blog;
