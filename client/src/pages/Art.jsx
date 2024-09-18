import { useQuery } from "@apollo/client";

import QueryList from "../components/QueryList";
import CozyArt from "../components/CozyArt";

import { QUERY_ARTS } from "../utils/queries";
import Title from "../components/Title";

const Art = () => {
    const { loading, error, data } = useQuery(QUERY_ARTS);
    const arts = data?.arts || [];

    return (
        <main>
            <div>
                <div>
                    <Title>Art</Title>
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
                    ) : arts.length > 0 ? (
                        <QueryList items={arts} Component={CozyArt} />
                    ) : (
                        <div>No projects found. Please check back later!</div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Art;
