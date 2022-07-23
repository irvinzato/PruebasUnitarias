import { incrementar } from './numeros';

describe('Pruebas de números', () => {

    it('Debe retornar 100 si el número ingresado es mayor a 100', () => {
        const resp = incrementar(300);

        expect( resp ).toBe(100);
    });

    it('Debe retornar el número ingresado mas 1, si el número dado no es mayor a 100', () => {
        const numero = 50;
        const resp = incrementar(numero);

        expect( resp ).toBe( numero + 1 );
    });

});