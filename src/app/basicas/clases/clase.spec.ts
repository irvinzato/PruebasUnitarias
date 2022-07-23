import { Jugador } from './clase';

describe('Pruebas de clase Jugador', () => {
   /*De esta manera no duplico su iniciación pero se acumulan las evaluaciones(Por eso falla la segunda prueba) 
    En la prueba 1 queda el hp en 80, mas 50 que le hago en la segunda prueba, quedaria en 30
   Aqui es donde entran lo siguientes ciclos de las pruebas
    beforeAll();
    beforeEach();

    afterAll();
    afterEach();
   */
    const jugador = new Jugador();

    it('Debe retornar 80 de HP si recibe 20 de daño', () => {
        //const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);

        expect( resp ).toBe(80);
    });

    it('Debe retornar 50 de HP si recibe 50 de daño', () => {
        //const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);

        expect( resp ).toBe(50); //30 seria el resultado de esta manera
    });

});