import  PropTypes from "prop-types";
import Typography from '@mui/material/Typography';



// const newMessage = {
//     mensaje:'Hola',
//     nombre:'jaider',
// };

// const getSuma = (a,b) => {
//     return a+b;
// }

export const FirstApp = ({tittle,subtitle}) => {

  return (
    <>
        <h1 data-testId="testId">{tittle}</h1>
        <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
    tittle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    tittle:'no hay titulo',
    subtitle:'no hay subtitulo'
}

