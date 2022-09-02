import { ShowInfoItemStyled } from "./ShowInfoItemStyled"

const ShowInfoItem = (props: { category: string | string[], value: string | string[], withLightBottomBorder: boolean }) => {
    const { category, value, withLightBottomBorder } = props;

    return (
        <ShowInfoItemStyled withLightBottomBorder={withLightBottomBorder}>
            <p className="category-name">{category}</p>
            {typeof (value) === "string" && <p className="item-value">{value ? value : "No info"}</p>}
            {typeof (value) === "object" && <div className="item-value-container">{
                value.length < 1 ? "No info"
                    : value.map((singleValue, index) => <p key={index}>{singleValue} </p>
                    )}</div>}
        </ShowInfoItemStyled>
    )
}
export default ShowInfoItem