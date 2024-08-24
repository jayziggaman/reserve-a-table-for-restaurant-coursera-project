import { render, screen } from "@testing-library/react";
import BookingForm from "./COMPONENTS/BOOKING-COMPONENTS/BookingForm/BookingForm";

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);

  const headingElement = screen.getByText("Booking Form");

  expect(headingElement).toBeInTheDocument();
})
