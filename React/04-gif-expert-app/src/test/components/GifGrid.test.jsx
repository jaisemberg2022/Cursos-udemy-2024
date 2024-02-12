import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { expect, jest, test } from "@jest/globals";

import { useFetchGifs } from "../../hooks/useGetFetchsGif";

jest.mock("../../hooks/useGetFetchsGif");

describe("pruebas en componente <GifGrid/>", () => {
  const category = "Silent hill";
  test("Debe mostrar el loding inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.queryByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrat items cuando se cargan las imagenes useFetchGuf", () => {
    
    const gifs = [
      {
        id:'ABC',
        tittle:'Algo...',
        url:'https://loscalhost/Algo.jpg'
      },
      {
        id:'EFG',
        tittle:'Algo2...',
        url:'https://loscalhost/Algo2.jpg'
      }
    ]
    
    useFetchGifs.mockReturnValue({
      images:gifs,
      isLoading:true
    })
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
