import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

// se crea un mock de el useFetchGifs
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en < GifGrid />', () => { 

  const category = 'One Punch'
  
  test('debe de mostarar el loading inicial mente', () => { 

    //se agregan los valores del mock del useFetchGifs
    useFetchGifs.mockReturnValue({
      images:[],
      isLoading:true
    })

    //se renderiza el sujeto de prueba
    render ( < GifGrid category={ category } /> );
    //screen.debug();
    expect ( screen.getByText( 'Cargando ...' ))
    expect ( screen.getByText( category ) )

   })

   test('debe mostar items cuanso se cargan las imagnes useFetchGifs', () => { 

    const gifs = [
      {
        id:'abc',
        title:'titulo01',
        url:'http://localhost/goku01.jpg'
      },
      {
        id:'bcd',
        title:'titulo02',
        url:'http://localhost/goku02.jpg'
      },
    ]
    useFetchGifs.mockReturnValue({
      images:gifs,
      isLoading:false
    })
    //se renderiza el sujeto de prueba
    render ( < GifGrid category={ category } /> );
    screen.debug();
    expect( screen.getAllByRole('img').length).toBe(2)
    })

 })