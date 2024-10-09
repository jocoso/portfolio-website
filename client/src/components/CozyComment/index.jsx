import Title from "../Title";
import Paragraph from "../Paragraph";
import { useMemo } from "react";

const CozyComment = ({ data: { commenterName, content, date } }) => {
    // Memoize the formatted date for performance
    const formattedDate = useMemo(
        () =>
            new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        [date]
    );

    return (
        <article className="my-6 p-4 border-b border-gray-200">
            <header className="mb-4">
                <Title tier={3} className="mb-2">
                    {commenterName || "Anonymous"}
                </Title>
                <time dateTime={date} className="text-sm text-gray-500">
                    {formattedDate}
                </time>
            </header>
            <Paragraph className="text-lg">
                {content || "No comment provided."}
            </Paragraph>
        </article>
    );
};

export default CozyComment;
