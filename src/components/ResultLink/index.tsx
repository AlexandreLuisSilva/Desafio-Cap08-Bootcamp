import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultCard = ( { title, description} : Props) => {

    return (
        <div className="result-container">
            <h3 className="result-title">{title}</h3>
            <a href={description}>{description}</a>
        </div>
    );
}

export default ResultCard;