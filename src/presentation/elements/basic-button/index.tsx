import { BasicButtonStyled } from "./BasicButtonStyled"
export interface BasicButtonProps {
    value: string;
    onClick?: () => void;
    disabled?: boolean;
    color?: string;
}
const BasicButton = (props: BasicButtonProps) => {
    const {
        value,
        onClick,
        disabled,
        color
    } = props;
    return (
        <BasicButtonStyled
            disabled={Boolean(disabled)}
            buttonColor={String(color)}>
            <button onClick={onClick}>{value}</button>
        </BasicButtonStyled>
    )
}
export default BasicButton;