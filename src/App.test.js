// import { render, screen } from "@testing-library/react";
// import { Home } from "../src/components/home/Home";

// beforeEach(() => {
//   //eslint-disable-next-line testing-library/no-render-in-setup
//   render(<Home />);
// });

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
