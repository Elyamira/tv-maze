import { Schedule } from "../../../domain/models/apiSchema";
import ScheduleShowCard from "../schedule-tv-show-card";
import { ScheduleShowsListStyled } from "./ScheduleShowsListStyled";

const ScheduleShowsList = (props: { schedule: Schedule[]; }) => {
    const { schedule } = props;
    return (
        <ScheduleShowsListStyled>
            <div className="allCards">
                {schedule.map(
                    scheduleItem => <ScheduleShowCard key={scheduleItem.id} scheduleItem={scheduleItem} />
                )}
            </div>
        </ScheduleShowsListStyled>)
}
export default ScheduleShowsList;