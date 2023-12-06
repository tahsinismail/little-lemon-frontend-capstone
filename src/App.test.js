import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";

test("Choose date", () => {
  render(<BookingPage />);
  const element = screen.getByLabelText("Choose date");
  expect(element).toBeInTheDocument();
});

test("Choose time", () => {
  render(<BookingPage />);
  const element = screen.getByLabelText("Choose time");
  expect(element).toBeInTheDocument();
});

test("Number of guests", () => {
  render(<BookingPage />);
  const element = screen.getByLabelText("Number of guests");
  expect(element).toBeInTheDocument();
});

test("Occasion", () => {
  render(<BookingPage />);
  const element = screen.getByLabelText("Occasion");
  expect(element).toBeInTheDocument();
});
