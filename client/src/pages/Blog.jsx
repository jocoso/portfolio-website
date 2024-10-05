import { useQuery } from "@apollo/client";
import QueryList from "../components/QueryList";
import CozyPost from "../components/CozyPost";
import { QUERY_POSTS } from "../utils/queries";
import Title from "../components/Title";

const Blog = () => {
    const { loading, error, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    // Early return for error state
    if (error) {
        return (
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
    }

    // Early return for loading state
    if (loading) {
        return (
            <div aria-live="polite" className="text-center mt-10">
                <p>Loading...</p>
                {/* Optionally, include a spinner for better UX */}
                <div className="flex justify-center items-center mt-4">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen flex flex-col items-center mt-32">
            <Title className="text-center mb-10">Blog</Title>
            {posts.length > 0 ? (
                <div className="w-full max-w-4xl px-4">
                    <QueryList
                        items={posts}
                        Component={CozyPost}
                        className="flex flex-col w-full"
                    />
                </div>
            ) : (
                <div className="text-center">
                    <p>
                        No blog posts available at the moment. Please check back
                        later!
                    </p>
                </div>
            )}
        </main>
    );
};

export default Blog;
