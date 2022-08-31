import { ClipLoader } from "react-spinners";
import { LoaderStyled } from "./LoaderStyled";

const Loader = () => {
    return (
        <LoaderStyled>
            <ClipLoader size={50} data-testid="Loader" />
        </LoaderStyled>
    )
}
export default Loader;
