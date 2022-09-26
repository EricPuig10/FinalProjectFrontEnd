import { render, screen } from "@testing-library/react";
import Router from '../src/applications/Router';

beforeEach(() => {
  //eslint-disable-next-line
  render(<Router />);
});

test('renders "logout"', () => {
    const logout = screen.getByText(/logout/i);
    expect(logout).toBeInTheDocument();
});

test('renders candidatos button', () => {
    const button = screen.getByRole("button", {name:/candidatos/i});
    expect(button).toBeInTheDocument();
});

test('renders bootcamp button', () => {
  const button = screen.getByRole("button", {name:/bootcamp/i});
  expect(button).toBeInTheDocument();
});

// test("Render title", () => {
//   const h2 = screen.getByText(/admin/i);
//   expect(h2).toBeInTheDocument();
// });

// test('Renderizar un botón', () => {
//     const botonCualquiera = screen.getByRole('button', {name: /boton cualquiera/i})
//     expect(botonCualquiera).toBeInTheDocument()
// })

// test ('Renderizar la tabla', async () => {
//     const tableElement = screen.getByRole('table', {name: /tabla-users/i})
//     const tableCellElement = await screen.findByRole('cell', {name: /cell-name-users/i})
//     expect(tableElement).toBeInTheDocument()
//     expect(tableCellElement).toBeTruthy()
// })
