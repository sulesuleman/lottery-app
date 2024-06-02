import { act } from "react";
import { renderHook } from "@testing-library/react";
import { useRouter } from 'next/navigation';

import useLogin from "../hooks/useLogin";
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

const credentials = {
    email: 'abc@gmail.com',
    password: 'qaTester1234',
};

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();
Object.defineProperty(window, "localStorage", {
    value: {
        getItem: (...args: string[]) => mockGetItem(...args),
        setItem: (...args: string[]) => mockSetItem(...args),
        removeItem: (...args: string[]) => mockRemoveItem(...args),
    },
});

describe("useLogin", () => {
    beforeEach(() => {
        mockSetItem.mockClear();
        mockSetItem.mockClear();
    })

    test("should render with initial states as empty", () => {
        const { result } = renderHook(useLogin);
        expect(result.current.state.email).toBe('');
        expect(result.current.state.password).toBe('');
    });

    test("should update the value of email", () => {
        const { result } = renderHook(useLogin);
        const mockEvent = {
            target: {
                name: 'email',
                value: credentials.email,
            }
        } as React.ChangeEvent<HTMLInputElement>
        act(() => result.current.handleChange(mockEvent));
        expect(result.current.state.email).toBe('abc@gmail.com');
    });

    test("should update the value of password", () => {
        const { result } = renderHook(useLogin);
        const mockEvent = {
            target: {
                name: 'password',
                value: credentials.password,
            }
        } as React.ChangeEvent<HTMLInputElement>
        act(() => result.current.handleChange(mockEvent));
        expect(result.current.state.password).toBe('qaTester1234');
    });

    test("should match the submitted values with actual credentials and navigate to homepage", () => {
        const router = useRouter();
        const { result } = renderHook(useLogin);
        const changeEmailEvent = {
            target: {
                name: 'email',
                value: credentials.email,
            }
        } as React.ChangeEvent<HTMLInputElement>
        const changePasswordEvent = {
            target: {
                name: 'password',
                value: credentials.password,
            }
        } as React.ChangeEvent<HTMLInputElement>
        act(() => result.current.handleChange(changeEmailEvent));
        expect(result.current.state.email).toBe(credentials.email);
        act(() => result.current.handleChange(changePasswordEvent));
        expect(result.current.state.password).toBe(credentials.password);
        act(() => result.current.handleSubmit());
        expect(mockSetItem).toHaveBeenCalledTimes(1);
        expect(mockSetItem).toHaveBeenCalledWith('authenticated', 'true');
    });
})