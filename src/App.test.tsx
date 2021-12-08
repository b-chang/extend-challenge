import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders 'Next' button and is clickable", async () => {
  // Write a test that covers a user interaction
  const wrapper = render(<App />);
  const nextBtn = await wrapper.findByTestId('next-button')
  expect(nextBtn.textContent).toEqual('Next')
  fireEvent.click(nextBtn)
});
