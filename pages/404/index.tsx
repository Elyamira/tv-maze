import { useRouter } from "next/router";
import TvBlandRouteServices from "../../src/domain/services/routing/TvBlandRouteServices";
import BasicButton from "../../src/presentation/elements/basic-button";
import { CenteredContentWrapper } from "../../styles/utilities/CenteredContentWrapper";
import { PageNotFoundStyled } from "./PageNotFoundStyled";

const PageDoesNotExist = () => {
    const router = useRouter();
    const redirectToHomePage = () => {
        router.push(TvBlandRouteServices.getRouteForHomepage());
    }
    return (
        <CenteredContentWrapper>
            <PageNotFoundStyled>
                <h1> Oops!</h1>
                <h3>404 - PAGE NOT FOUND</h3>
                <p> The page you are looking for might be removed or temporary unavailable</p>
                <BasicButton onClick={() => redirectToHomePage()}
                    value="Go back to Home page"
                    color="#FF6F4F"
                />
            </PageNotFoundStyled>
        </CenteredContentWrapper>
    )
}
export default PageDoesNotExist;