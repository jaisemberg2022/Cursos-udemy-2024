import { screen, render, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";
import {expect, jest, test} from '@jest/globals';



describe("Pruebas en componente <AddCategory/>", () => {
  test("debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Resident evil" } });
    expect(input.value).toBe("Resident evil");
  });

  test("Debe llamar onNewCategpry si el input tiene un valor ", () => {
    const inputValue = "Resident evil";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory}/>);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  });

  test("no debe llamar a el onNewCategory si el inpuit esta vacio",()=>{
    
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory}/>);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);

  })
});
