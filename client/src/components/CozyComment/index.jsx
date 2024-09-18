import Title from '../Title';
import Paragraph from '../Paragraph';

const CozyComment = ({ data }) => {

    const { commenterName, content, date } = data;
    
    
    return (
        <main>
            <Title>{commenterName}</Title>
            <Title>{date}</Title>
            <Paragraph>{content}</Paragraph>
        </main>
    );
};

export default CozyComment;
