import Settings from "../../../config/Settings";

class RatingConverter{
    static getStarsFromTvRating = (rating: number | undefined | null)=>{
        if(!rating){
            return 0;
        }
         return (rating / Settings.maxTVShowRatingFromEndpoint) * Settings.maxCountStarsRating;
    }
    static getStarsWithDecimals = (rating: number | undefined | null)=>{
        if(!rating){
            return 0;
        }
        return Math.round((RatingConverter.getStarsFromTvRating(rating) + Number.EPSILON) * 100) / 100;
    }
}
export default RatingConverter