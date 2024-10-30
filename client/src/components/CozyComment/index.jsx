//
import { useMemo } from "react";

// Import components.
import Paragraph from "../Paragraph";

const CozyComment = ({
    data: {
        commenterName = "Anonymous",
        content = "No comment provider",
        date,
    },
}) => {
    // Memoize the formatted date.
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
                <Title tier={3} className="mb-2">{commenterName}</Title>
                <Title dateTime={date} className="text-sm text-gray-500">
                    {formattedDate}
                </Title>
            </header>
            <Paragraph className="text-lg">{content}</Paragraph>
        </article>
    );
};

export default CozyComment;