import { obtenerUsuarios } from './arreglos';

describe('Pruebas de arreglos', () => {

    //si coloco una "x" antes del "it" o "describe" es para que ignore la prueba
    xit('Debe regresar mínimo 3 usuarios', () => {
        const resp = obtenerUsuarios();

        //"toBeGreaterThanOrEqual" le dice que sea mayor o igual
        expect( resp.length ).toBeGreaterThanOrEqual(3);
    });

    it('Debe existir el usuario Irving y Jade', () => {
        const resp = obtenerUsuarios();

        //Puedo tener mas de un "expect" y si uno falla, toda la prueba dara error
        expect( resp ).toContain('Irving');
        expect( resp ).toContain('Jade');
    });

});