import { StarringInfoItemStyled } from "./StarringInfoItemStyled";
import Image from "next/image";

const StarringInfoItem = (props: { name: string, role: string, icon: string, withLightBottomBorder: boolean }) => {
    const { name, role, icon, withLightBottomBorder } = props;
    return (
        <StarringInfoItemStyled withLightBottomBorder={withLightBottomBorder}>
            <div className="icon-container">
                <Image src={icon ? icon : "/icons/person.svg"} alt="person" layout="fill" objectFit="cover" />
            </div>
            <div className="starring-info-container">
                <p className="starring-info-name">{name}</p>
                <p className="starring-info-role">{role}</p>
            </div>
        </StarringInfoItemStyled>
    )
}
export default StarringInfoItem