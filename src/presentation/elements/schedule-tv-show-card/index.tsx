import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Settings from "../../../config/Settings";
import { Schedule } from "../../../domain/models/apiSchema";
import RatingConverter from "../../../domain/services/rating-converter/RatingConverter";
import TvBlandRouteServices from "../../../domain/services/routing/TvBlandRouteServices";
import { ScheduleTvShowCardStyled as ScheduleTVShowCardStyled } from "./ScheduleTvShowCardStyled";

const ScheduleShowCard = (props: { scheduleItem: Schedule }) => {
    const { scheduleItem } = props;
    const router = useRouter();
    const defaultImage = "/images/default-placeholder.png";
    const [rating] = useState(RatingConverter.getStarsFromTvRating(scheduleItem.show.rating.average));
    const handleOnClickShow = (id: number) => {
        router.push(TvBlandRouteServices.getRouteForShowById(id));
    }

    return <ScheduleTVShowCardStyled onClick={() => handleOnClickShow(scheduleItem.show.id)}>
        <div className="image-container">
            <Image alt="show preview image" src={scheduleItem.show?.image?.medium
                ? scheduleItem?.show?.image?.medium
                : defaultImage
            }
                layout="fill" objectFit="cover"
            />
        </div>
        <div className="text-container">
            <div className="rating-stars-container">
                {[...Array(Settings.maxCountStarsRating)].map((star, index) => {
                    index += 1;
                    return (
                        <Image
                            key={index}
                            src={
                                index <= rating
                                    ? '/icons/star-filled.svg'
                                    : '/icons/star-borders.svg'
                            }
                            alt="raiting star"
                            width={24}
                            height={24}
                        />
                    );
                })}
            </div>
            <p>{scheduleItem.show.name}</p>
            <p>{scheduleItem.name}</p>
        </div>
    </ScheduleTVShowCardStyled>
}
export default ScheduleShowCard;