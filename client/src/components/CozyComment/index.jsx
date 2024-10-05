import Title from '../Title';
import Paragraph from '../Paragraph';

const CozyComment = ({ data }) => {
    const { commenterName, content, date } = data;
    
    // Format the date to a readable format
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="my-6 p-4 border-b border-gray-200">
            <header className="mb-4">
                {/* Commenter's name as title */}
                <Title tier={3} className="mb-2">{commenterName}</Title>
                
                {/* Date of the comment */}
                <time dateTime={date} className="text-sm text-gray-500">
                    {formattedDate}
                </time>
            </header>

            {/* Comment content */}
            <Paragraph className="text-lg">
                {content}
            </Paragraph>
        </article>
    );
};

export default CozyComment;
