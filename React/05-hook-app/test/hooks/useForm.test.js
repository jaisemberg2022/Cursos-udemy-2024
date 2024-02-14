import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("first", () => {

    const initialForm = {
        name: "SomeGuy",
        email: "SomeGuy@gmail.com",
      };
  test("Debe de regresar la informacion por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChnge: expect.any(Function),
      onDeletForm: expect.any(Function),
    });
  });

  test("Debe de realizar el reset del formualrio", () => {
    const newValue = "Alguien";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChnge,onDeletForm } = result.current;

    act(() => {
      onInputChnge({ target: { name: "name", value: newValue } });
        onDeletForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
