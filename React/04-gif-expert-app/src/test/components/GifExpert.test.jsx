import { render, screen } from "@testing-library/react";
import { expect, jest, test } from "@jest/globals";
import { GifExpert } from "../../components";



describe("purbeas en componente <GifExpert/>", () => {
  test("should first", () => {
    render(
        <GifExpert/>
    )
    screen.debug();
  });
});
