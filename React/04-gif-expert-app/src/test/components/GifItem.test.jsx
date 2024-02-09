import {render,screen}  from '@testing-library/react'
import {GifItem} from '../../components/GifItem' 

describe('pruabas sobre <GifItem/>', () => { 

    const title = 'Titulo';
    const url = 'htpps://any.jpg';

    test('Debe hacer match con el snapshot',()=>{
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el "url" y el "atl" indicado',()=>{
        render(
            <GifItem title={title} url={url}/>
        );
        const {src , alt} = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(src).toBe(url);
        
    });

    test('debe mostrar el titulo en el componente', () => { 
        render(
            <GifItem title={title} url={url}/>
        );
        expect(screen.getByText(title)).toBeTruthy();
     })
 })