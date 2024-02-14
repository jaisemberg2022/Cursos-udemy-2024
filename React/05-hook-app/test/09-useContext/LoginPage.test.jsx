import {renderHook,act,screen,render,fireEvent} from "@testing-library/react";

import { expect, jest, test, beforeEach } from "@jest/globals";
import LoginPage from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/userContext";




describe("pruebas login page", () => {
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe('null')
  });

  test("Debe llamar el setUser cuando haga click al boton", () => {
    const setUserMock = jest.fn();

    render(
        <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
            <LoginPage />
        </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click( button );

    expect( setUserMock ).toHaveBeenCalledWith({"email": "app@gmail.com", "id": 123, "name": "app"})
  });
});
