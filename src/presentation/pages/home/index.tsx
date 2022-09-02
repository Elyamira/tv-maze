import { useState } from "react";
import { WrapperForContentWithoutFooter } from "../../../../styles/utilities/WrapperForContentWithoutFooter";
import { Schedule } from "../../../domain/models/apiSchema";
import usePagesForPagination from "../../../domain/services/usePagesForPagination";
import Footer from "../../elements/footer";
import Header from "../../elements/header";
import Pagination from "../../elements/pagination";
import ScheduleShowsList from "../../elements/schedule-shows-list";
import { HomePageLayoutStyled } from "./HomePageLayoutStyled";

const HomePageLayout = (props: { schedule: Schedule[]; }) => {
    const { schedule } = props;
    const itemsPerPage = 12;
    const infoForPagination = usePagesForPagination(schedule, itemsPerPage)
    return (
        <HomePageLayoutStyled>
            <WrapperForContentWithoutFooter>
                <div className="background">
                </div>
                <div className="mobile-background">
                    <Header />
                    <p className='main-description'>
                        TV Show and web series database. Create personalised schedules. Episode guide, cast, crew and character information.
                    </p>
                </div>
                <h4 className='shows-list-header'>Last added shows</h4>
                <ScheduleShowsList schedule={infoForPagination.currentPageItems} />
                {schedule.length > infoForPagination.itemsPerPage &&
                    <Pagination
                        nPages={infoForPagination.nPages}
                        currentPage={infoForPagination.currentPage}
                        setCurrentPage={infoForPagination.setCurrentPage} />
                }
            </WrapperForContentWithoutFooter>
            <Footer />
        </HomePageLayoutStyled>
    )
}
export default HomePageLayout;