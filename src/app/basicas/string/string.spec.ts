//describe - Sirve para agrupar pruebas
//describe('Pruebas de Strings');
//it -Sirve para decir que es una prueba en especifico
//it('Debe de regresar un String');
import { mensaje } from "./string";

describe( 'Pruebas de Strings', () =>  {
    //Primer prueba
    it( 'Debe de regresar un string', () => {
        const respuesta = mensaje('Irving');

        //Usar el ".toBe" es como decirle que "typeof respuesta === string"
        expect( typeof respuesta ).toBe('string');
    });

    //Segunda prueba
    it( 'Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Irving';
        const respuesta = mensaje( nombre );

        //Cambie ".toBe" a ".toContain" para decirle que no sea igual, solo que contenga
        expect( respuesta ).toContain( nombre );
    });
});
