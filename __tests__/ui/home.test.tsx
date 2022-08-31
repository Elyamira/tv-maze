import '@testing-library/jest-dom';
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Home from '../ui/../../pages/index';

test("page has initial loader", async () => {
  render(<Home />);
  const loader = screen.getByTestId("Loader")
  expect(loader).toBeDefined();
  await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));
})

test("page has correct heading", async () => {
  render(<Home />);
  await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));
  const heading = screen.getByRole("heading", {
    name: "TV Bland",
  });
  expect(heading).toBeDefined();
})

test("page renders cards with tv shows", async () => {
  render(<Home />);
  await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));
  const images = screen.getAllByAltText("show preview image");
  expect(images.length).toBeGreaterThan(1);
});
