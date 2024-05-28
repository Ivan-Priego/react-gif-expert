import { render, screen } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

describe('Pruebas en GiftExpertApp.jsx', () => { 
  test('debe de ', () => { 
    render( < GiftExpertApp />)
    screen.debug();
    expect(screen.getByRole('form'))
    expect(screen.getByText('Cargando ...'))
   })
 })