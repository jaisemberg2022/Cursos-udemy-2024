import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setform] = useState(initialForm);

  const onInputChnge = ({ target }) => {
    const { name, value } = target;
    setform({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChnge
  };
};
