import "./Card.css"
export default function Card({title,description,age,wikilink,imglink}){
    return(
        <>
            
            <div className="card">
                <img src={imglink}/>
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>Age={age}</h3>
                <a href={wikilink}>View Wiki</a>
            </div>
        </>
    );

}