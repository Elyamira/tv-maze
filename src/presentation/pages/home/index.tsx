import { useState } from "react";
import { Schedule } from "../../../domain/models/apiSchema";
import Footer from "../../elements/footer";
import Header from "../../elements/header";
import Pagination from "../../elements/pagination";
import ScheduleShowsList from "../../elements/schedule-shows-list";
import { HomePageLayoutStyled } from "./HomePageLayoutStyled";

const HomePageLayout = (props: { schedule: Schedule[]; }) => {
    const { schedule } = props;
    const [currentPage, setCurrentPage] = useState(1);
    // No of Items to be displayed on each page   
    const [itemsPerPage] = useState(12);
    const indexOfLastPageItem = currentPage * itemsPerPage;
    const indexOfFirstPageItem = indexOfLastPageItem - itemsPerPage;
    const currentPageItems = schedule?.slice(indexOfFirstPageItem, indexOfLastPageItem);
    const nPages = Math.ceil(schedule.length / itemsPerPage);
    return (
        <HomePageLayoutStyled>
            <div className="background">
            </div>
            <div className="mobile-background">
                <Header />
                <p className='main-description'>
                    TV Show and web series database. Create personalised schedules. Episode guide, cast, crew and character information.
                </p>
            </div>
            <h4 className='shows-list-header'>Last added shows</h4>
            <ScheduleShowsList schedule={currentPageItems} />
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
            <Footer />
        </HomePageLayoutStyled>
    )
}
export default HomePageLayout;