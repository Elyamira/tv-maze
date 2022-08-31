import { Cast } from "../../../domain/models/apiSchema";
import StarringInfoItem from "../show-info/StarringInfoItem";

const TVCastItemsList = (props: { fullCast: Cast[]; }) => {
    const { fullCast } = props;
    return (
        <div>
            {fullCast.map((castMember, index) => {
                const isCastItemAnEvenNumber = index % 2 === 0;
                return (<div key={castMember.person.id}>
                    <StarringInfoItem name={castMember.person.name} role={castMember.character.name} icon={castMember.person.image?.medium} withLightBottomBorder={!isCastItemAnEvenNumber} />
                </div>)
            })}
        </div>
    )
}
export default TVCastItemsList;