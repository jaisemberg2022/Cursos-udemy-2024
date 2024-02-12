import { render, screen, fireEvent, getByText, getByAltText } from "@testing-library/react";
import { GifGrid } from "../../components";

describe("pruebas en componente <GifGrid/>", () => {
  const category = "Silent hill";
  test("Debe mostrar el loding inicialmente", () => {
    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.queryByText("Cargando..."));
    expect(screen.getByText(category));
  });


});
