import { render, screen } from "@testing-library/react" 
import { GifItem } from "../../src/components/GifItem";
import { GiftExpertApp } from "../../src/GiftExpertApp";

describe('Purebas en GifItem.js', () => { 

  const title='Titulo test'
  const url ='http://urltest.mx/img.jpg'

  test('Debe tomar un snapshot del componente', () => { 
    
    const { container } = render ( < GifItem title={title} url={url} /> )
    expect (container).toMatchSnapshot();

   })

   test('debe mostara la imagen con el url y alt indicado ', () => { 
    
      render ( < GifItem title={title} url={url} /> )
      //screen.debug();
      //console.log(screen.getByRole('img').src)
      //console.log(screen.getByRole('img').alt)
      //expect (screen.getByRole('img').src).toBe( url )
      //expect (screen.getByRole('img').alt).toBe( title )

      const { src , alt } = screen.getByRole('img')
      expect( src ).toBe( url )
      expect( alt ).toBe( title )

    })

    test('debe mostara el titulo en el componente', () => { 
      render ( < GifItem title={title} url={url} /> )

      expect( screen.getByText(title)).toBeTruthy();
    })
 })