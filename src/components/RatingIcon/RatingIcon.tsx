import { FC } from "react";
import './Rating.css'
import { Icon } from "../Icon/Icon";

type Prop = {
    rating: number
}

export const RatingIcon: FC<Prop> = ({rating}) => {
    let ratingClass = "low"
    if(rating >= 4.5 && rating < 7) {
        ratingClass = "medium"
    }
    if (rating >= 7 && rating < 8.5) {
        ratingClass = "high"
    }
    if (rating >= 8.5) {
        ratingClass = "max"
    }
    return (<>
    <div className={`rating rating--${ratingClass}`}>
        <Icon id="rating" width="10" height="10"/>
        <span>{rating}</span>
        </div>
    </>)
}