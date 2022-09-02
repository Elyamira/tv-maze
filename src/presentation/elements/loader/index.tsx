import { ClipLoader } from "react-spinners";
import { CenteredContentWrapper } from "../../../../styles/utilities/CenteredContentWrapper";

const Loader = () => {
    return (
        <CenteredContentWrapper>
            <ClipLoader size={50} data-testid="Loader" />
        </CenteredContentWrapper>
    )
}
export default Loader;
