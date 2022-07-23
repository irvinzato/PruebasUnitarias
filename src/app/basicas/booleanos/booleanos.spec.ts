import { usuarioLogeado } from './booleanos';

describe('Pruebas de booleanos', () => {

    it('Debe retornar true', () => {
        const resp = usuarioLogeado();
        //"toBeTruthy" es para ver que sea booleano y verdadero, para falso puede ser "toBeFalsy" o la negacion ".not.toBeTruthy"
        expect( resp ).toBeTruthy();
    });

});