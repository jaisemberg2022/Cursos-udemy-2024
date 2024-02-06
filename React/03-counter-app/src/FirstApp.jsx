const newMessage = {
    mensaje:'Hola',
    nombre:'jaider',
};

const getSuma = (a,b) => {
    return a+b;
}

export const FirstApp = () => {

  return (
    <>
        <code>{ JSON.stringify(newMessage) }</code>
        <h4>{ getSuma(2,3) }</h4>
        <p>prueba</p>
    </>
  )
}
