import sanitizeHtml from "sanitize-html"
import { Show } from "../../../domain/models/apiSchema"
import Header from "../../elements/header"
import ShowInfoItem from "../../elements/show-info/ShowInfoItem"
import { FullInfoContainerStyled, ShowInfoContainerStyled, ShowInfoImageContainerStyled, ShowInfoStyled, ShowInfoTextContainerStyled, SingleShowPageLayoutStyled } from "./SingleShowPageLayoutStyled"
import Image from "next/image"
import { useState } from "react"
import Footer from "../../elements/footer"
import Pagination from "../../elements/pagination"
import TVCastItemsList from "../../elements/tv-cast-items-list"
import RatingConverter from "../../../domain/services/rating-converter/RatingConverter"
import { WrapperForContentWithoutFooter } from "../../../../styles/utilities/WrapperForContentWithoutFooter"
import usePagesForPagination from "../../../domain/services/usePagesForPagination"

const SingleShowPageLayout = (props: { show: Show }) => {

    const { show } = props;
    const [rating] = useState(RatingConverter.getStarsWithDecimals(show?.rating?.average));
    const [cast] = useState(show?._embedded?.cast ? [...show?._embedded?.cast] : []);
    const itemsPerPage = 4;
    const infoForPagination = usePagesForPagination(cast, itemsPerPage)
    return (
        <SingleShowPageLayoutStyled>
            <WrapperForContentWithoutFooter>
                <div className="mobile-background">
                    <Header />
                    <div className="background">
                    </div>
                    <ShowInfoContainerStyled>
                        {show &&
                            <ShowInfoImageContainerStyled>
                                <Image
                                    src={show.image?.original ? show.image?.original : "/images/default-placeholder.png"} alt="show poster" layout="fill" objectFit="cover"
                                    placeholder="blur"
                                    priority
                                    blurDataURL={show.image?.original ? show.image?.original : "/images/default-placeholder.png"}
                                />
                            </ShowInfoImageContainerStyled>
                        }
                        <ShowInfoTextContainerStyled>
                            <div className="raiting-container">
                                <div className="stars">
                                    {[...Array(5)].map((star, index) => {
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
                                <p>{`${rating}/5`}</p>
                            </div>
                            <h1>{show?.name}</h1>
                            <p>{sanitizeHtml(show?.summary, { allowedTags: [] })}</p>
                        </ShowInfoTextContainerStyled>
                    </ShowInfoContainerStyled>
                </div>
                <FullInfoContainerStyled>
                    <div className="show-info-with-header">
                        <h3 className="bottom-part-header">Show info</h3>
                        <ShowInfoStyled>
                            <ShowInfoItem category="Streamed on" value={show?.network?.name ? show?.network?.name : ""} withLightBottomBorder={false} />
                            <ShowInfoItem category="Schedule" value={show?.schedule?.days ? show?.schedule?.days : ""} withLightBottomBorder={true} />
                            <ShowInfoItem category="Status" value={show?.status ? show?.status : ""} withLightBottomBorder={false} />
                            <ShowInfoItem category="Genres" value={show?.genres ? show?.genres : []} withLightBottomBorder={true} />
                        </ShowInfoStyled>
                    </div>
                    <div className="starring-info-with-header">
                        <h3 className="bottom-part-header">Starring</h3>

                        <div className="starring-info">

                            {infoForPagination.currentPageItems && <TVCastItemsList fullCast={infoForPagination.currentPageItems} />}
                            {cast.length > infoForPagination.itemsPerPage &&
                                <Pagination
                                    nPages={infoForPagination.nPages}
                                    currentPage={infoForPagination.currentPage}
                                    setCurrentPage={infoForPagination.setCurrentPage} />
                            }
                        </div>
                    </div>
                </FullInfoContainerStyled>
            </WrapperForContentWithoutFooter>
            <Footer />
        </SingleShowPageLayoutStyled>
    )
}
export default SingleShowPageLayout;