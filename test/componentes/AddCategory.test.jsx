import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('pruebas en < AddCategory />', () => { 
  
  test('debe cambiar el valor de la caja de texto', () => { 
    //se renderiza el sujeto e prueba
    render( < AddCategory onNewCategory={ ( )=>{ } } /> )

    //se crea la referencia del input del componente
    const input = screen.getByRole('textbox')
    //se manda a llamar un evento input sobre el elemeto textbox que guardamos en la constante input, se llama del evento al target y de el al value para cambiar el valor del texbox
    fireEvent.input( input, { target:{ value: 'gato' } })
    // se compara el valor del imput con el string 
    expect( input.value ).toBe('gato')

    //screen.debug();
  
  })
  test('debe de llamar onNewCategory si el input tiene un valor', () => { 

    const inputValue = 'gato';
    //se crea la referencia a un jest.Mock una funcion ficticia
    const onNewCategory = jest.fn();
    //se renderiza el sujeto de prueba
    render( < AddCategory onNewCategory={ onNewCategory } /> )
    //se crea la referencia del input del componente
    const input = screen.getByRole('textbox')
    //se crea la referencia del form del componente y se agrega el aria-label='form'en el formulario
    const form = screen.getByRole('form')
    //se dispara el evento para cambiar el valor del input
    fireEvent.input( input, { target:{ value: inputValue } })
    //se dispara el evento que manda el formulario
    fireEvent.submit( form );
    //screen.debug();
    //se hace la comprovacion de que se limpa el valor del input
    expect ( input.value ).toBe('');
    //se hace la aserción / comprovacion / afirmacion  de q se manda a llamar a onNewCategory
    expect ( onNewCategory ).toHaveBeenCalled();
    //se hace la comprobacion de que onNewCategory se llamo una ves
    expect ( onNewCategory ).toHaveBeenCalledTimes(1);
    //se hace la comprobacion de que onNewCategory se llamo con el valor del input
    expect ( onNewCategory ).toHaveBeenCalledWith( inputValue );
   })

   test('no debe llamar el onNewCategory si el input esta vacio', () => { 
  
    //se crea la referencia a un jest.Mock una funcion ficticia
    const onNewCategory = jest.fn();
    //se renderiza el sujeto de prueba
    render( < AddCategory onNewCategory={ onNewCategory } /> )
    //se crea la referencia del form del componente y se agrega el aria-label='form'en el formulario
    const form = screen.getByRole('form')
    //se dispara el evento que manda el formulario
    fireEvent.submit( form );
    //se hace la comprobacion de que onNewCategory no se llamo
    expect ( onNewCategory ).toHaveBeenCalledTimes(0);
      //se hace la comprobacion de la negacion al llamdo de onNewCategory
    expect ( onNewCategory ).not.toHaveBeenCalled();
    })

})