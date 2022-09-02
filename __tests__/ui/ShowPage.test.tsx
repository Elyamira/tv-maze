import '@testing-library/jest-dom';
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import ShowPage from '../../pages/show/[showId]';

const SHOW_ID = 8569;
const SHOW_ID_THAT_DOESNOT_EXIST = 1111111111;


test("page has initial loader", async () => {
    render(<ShowPage showId={SHOW_ID} />);
    const loader = screen.getByTestId("Loader")
    expect(loader).toBeDefined();
    await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));
})
test("page renders the correct header", async () => {
    render(<ShowPage showId={SHOW_ID} />);
    await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));
    const heading = screen.getByRole("heading", {
        name: "Good Morning Britain",
    });
    expect(heading).toBeInTheDocument();
})
test("page renders the correct image", async () => {
    render(<ShowPage showId={SHOW_ID} />);
    await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));
    const image = screen.getByRole("img", {
        name: "show poster",
    });
    expect(image).toBeInTheDocument();
})
test("page renders show info and starring info", async () => {
    render(<ShowPage showId={SHOW_ID} />);
    await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));
    const showInfoHeading = screen.getByRole("heading", {
        name: "Show info",
    });
    const starringHeading = screen.getByRole("heading", {
        name: "Starring",
    });
    expect(showInfoHeading).toBeInTheDocument();
    expect(starringHeading).toBeInTheDocument();
})
test("page doesn't brake when show ID doesn't exist and shows 'not found' header", async () => {
    render(<ShowPage showId={SHOW_ID_THAT_DOESNOT_EXIST} />);
    await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));
    const heading = screen.getByRole("heading", {
        name: "Not Found",
    });
    expect(heading).toBeInTheDocument();
})