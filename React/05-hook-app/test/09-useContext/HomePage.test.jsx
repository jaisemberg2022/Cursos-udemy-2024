import {
  renderHook,
  act,
  screen,
  render,
  fireEvent,
} from "@testing-library/react";

import { expect, jest, test, beforeEach } from "@jest/globals";
import HomePage from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/userContext";

describe("first", () => {
  const user = {
    id: 123,
    name: "app",
    email: "app@gmail.com",
  };
  test("Debe mostrar el componente sin el usario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe mostrar el componente con el usario", () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();
    const preTag = screen.getByLabelText("pre");
    console.log(JSON.stringify(user))
    // console.log("html "+preTag.innerHTML);
    expect(preTag.innerHTML).toEqual(JSON.stringify(user, null, 3))

  });
});
