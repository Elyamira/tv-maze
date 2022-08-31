import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Endpoints from "../../../src/config/Endpoints";
import { Show } from "../../../src/domain/models/apiSchema";
import ErrorAlert from "../../../src/presentation/elements/error";
import Loader from "../../../src/presentation/elements/loader";
import SingleShowPageLayout from "../../../src/presentation/pages/single-show";

const ShowPage = (props: { showId: number; }) => {
    const { showId } = props;
    const [show, setShow] = useState<Show>();
    const [receiveShowByIdError, setReceiveShowByIdError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getShowById = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${Endpoints.tvShowInfoEndpoint}${showId}?embed=cast`);
            const responseJson = await response.json();
            if (responseJson) {
                setLoading(false);
                setShow(responseJson);

            }
        } catch (error) {
            setLoading(false);
            setReceiveShowByIdError(true);
        }
    }
    useEffect(() => {
        if (receiveShowByIdError) return;
        if (!show) {
            getShowById();
        }
    })
    if (receiveShowByIdError) {
        return <ErrorAlert />
    }
    else if (loading) {
        return <Loader />
    }
    else if (show) {
        return <SingleShowPageLayout show={show} />
    }
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const showId = context.params?.showId;
    if (!showId) {
        // TODO Redirect the user to a 404 page.
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        };
    }
    return {
        props: {
            showId,
        },
    };
};
export default ShowPage;

