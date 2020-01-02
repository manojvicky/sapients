import React from "react";
import "../../../style.css";
const Card = ({data}) => {
    const date = new Date(data.created);
    const dateStr = `Created on ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    return (
    <div className="cardWrapper">
        <div className="cardHeader">
            <img className="cardHeaderImage" src={data.image} alt={data.name}/>
            <div className="cardTitle">
                <h2 className="cardTitleHeader">
                {data.name}
                </h2>
                <div>
                    <span className="cardTitleDetails"> {data.id} - {dateStr}</span>
                </div>
            </div>
        </div>
        <div className="cardData">
            <div className='cardDataDetail'>
                <span className="cardDetailSpan">STATUS</span>
                <span className="cardDetailAnswer">{data.status}</span>
            </div>
            <div className='cardDataDetail'>
                <span className="cardDetailSpan">SPECIES</span>
                <span className="cardDetailAnswer">{data.species}</span>
            </div>
            <div className='cardDataDetail'>
                <span className="cardDetailSpan">GENDER</span>
                <span className="cardDetailAnswer">{data.gender}</span>
            </div>
            <div className='cardDataDetail'>
                <span className="cardDetailSpan">ORIGIN</span>
                <span className="cardDetailAnswer">{data.origin.name}</span>
            </div>
            <div className='cardDataDetail'>
                <span className="cardDetailSpan">LAST LOCATION</span>
                <span className="cardDetailAnswer">{data.location.name}</span>
            </div>
        </div>
    </div>
    )
}

export default Card;