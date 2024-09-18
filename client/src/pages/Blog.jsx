import { useQuery } from "@apollo/client";

import QueryList from "../components/QueryList";
import CozyPost from "../components/CozyPost";

import { QUERY_POSTS } from "../utils/queries";
import Title from "../components/Title";

const Blog = () => {
    const { loading, error, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
        <main>
            <div>
                <div>
                    <Title>Blog</Title>
                    {error && (
                        <div>
                            <p>Error: {error.message}</p>
                            {/* Optionally provide more helpful messaging */}
                            <button onClick={() => window.location.reload()}>
                                Retry
                            </button>
                        </div>
                    )}
                    {loading ? (
                        <div>
                            <p>Loading...</p>
                            {/* You can use a spinner or a skeleton loader here for better UX */}
                        </div>
                    ) : posts.length > 0 ? (
                        <QueryList items={posts} Component={CozyPost} />
                        
                    ) : (
                        <div>No projects found. Please check back later!</div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Blog;
