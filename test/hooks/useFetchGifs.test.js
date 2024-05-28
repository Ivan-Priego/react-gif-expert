import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas sobre el Hook useFetchGifs', () => { 
  test('debe de regresar el estado inicial', () => { 
    
    //importamos el renderHook, mandamos a llamar al customHook, enviamos un callback con los parametros solicitados en esta caso la categoria, desestructuramos el resultado
    const { result } = renderHook( () => useFetchGifs('Gato') )
    //del resultado (del estado inicial) del customhook podemos desestructurar los valores que contiene
    const { images,isLoading } = result.current;
    expect( images.length ).toBe(0)
    expect( isLoading ).toBeTruthy()
   })

   test('debe de retornar un arreglo de imagenes y el isLoading en True', async() => { 
    
    //importamos el renderHook, mandamos a llamar al customHook, enviamos un callback con los parametros solicitados en esta caso la categoria, desestructuramos el resultado
    const { result } = renderHook( () => useFetchGifs('Gato') )
    //se importa la funcion waitFor para poder esperar a q se ejecute el customhook
    await waitFor(
     () => expect (result.current.images.length).toBeGreaterThan(0)
    );
    //del resultado (del estado inicial) del customhook podemos desestructurar los valores que contiene
    const { images,isLoading } = result.current;
    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy()
   })

 })