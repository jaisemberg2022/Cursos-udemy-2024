import {
  renderHook,
  act,
  screen,
  render,
  fireEvent,
} from "@testing-library/react";
import MultipleCustomeHook from "../../src/03-examples/MultipleCustomeHook";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
import { expect, jest, test,beforeEach } from "@jest/globals";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en componente MultipleCustomeHook", () => {
  const mockIncrement = jest.fn();

  beforeEach(()=>{
    jest.clearAllMocks();
  })

  useCounter.mockReturnValue({
    conunter: 1,
    increment: mockIncrement,
  });



  test("Debe de mostrar el componente por defecto ", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomeHook />);
    expect(screen.getAllByText("loading..."));
    expect(screen.getAllByText("Breaking qoutes"));

    const nextButton = screen.getByRole("button", { name: "next-button" });
    expect(nextButton.disabled).toBeTruthy();
  });

  test("Debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Alguien", quote: "frase tipica" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomeHook />);
    expect(screen.getByText("frase tipica"));
    expect(screen.queryByText("Alguien"));

    const nextButton = screen.getByRole("button", { name: "next-button" });
    expect(nextButton.disabled).toBe(false);
  });

  test("Debe de llamar la funcion de increment", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Alguien", quote: "frase tipica" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomeHook />);
    const nextButton = screen.getByRole("button", { name: "next-button" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
