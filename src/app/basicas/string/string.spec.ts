//Sirve para agrupar pruebas
//describe('Pruebas de Strings');
//Sirve para decir que es una prueba en especifico
//it('Debe de regresar un String');
import { mensaje } from "./string";

describe( 'Pruebas de Strings', () =>  {
    it( 'Debe de regresar un string', () => {
        const respuesta = mensaje('Irving');

        expect(  typeof respuesta ).toBe('string');
    });
});
