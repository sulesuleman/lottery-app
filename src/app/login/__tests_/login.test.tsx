import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from 'next/navigation';

import LoginForm from "../page";

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: '',
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => { }
    })
  }
});

describe("Login Form", () => {
  it("should have required fields and submit button", () => {
    render(<LoginForm />);

    const emailField = screen.getByPlaceholderText("Email");
    const passwordField = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button");

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("input fields should be changing values on user interaction", () => {
    render(<LoginForm />);

    const emailField = screen.getByPlaceholderText("Email");
    const passwordField = screen.getByPlaceholderText("Password");
    fireEvent.change(emailField, { target: { value: 'abc@gmail.com' } });
    expect(emailField.value).toMatch('abc@gmail.com');
    fireEvent.change(passwordField, { target: { value: 'qaTester1234' } });
    expect(passwordField.value).toMatch('qaTester1234');
  });

  test("should be able to submit form", () => {
    const handleOnSubmitMock = jest.fn();
    const { getByTestId, getByRole } = render(<LoginForm />);
    getByTestId('LoginForm').onsubmit = handleOnSubmitMock;
    const buttonNode = getByRole("button", { name: 'Sign in' });
    fireEvent.submit(buttonNode);

    expect(handleOnSubmitMock).toHaveBeenCalled();
  });

});