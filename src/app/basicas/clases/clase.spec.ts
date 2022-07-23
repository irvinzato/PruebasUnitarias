import { Jugador } from './clase';

describe('Pruebas de clase Jugador', () => {
   /*De esta manera no duplico su iniciación pero se acumulan las evaluaciones(Por eso falla la segunda prueba) 
    En la prueba 1 queda el hp en 80, mas 50 que le hago en la segunda prueba, quedaria en 30
   Aqui es donde entran lo siguientes ciclos de las pruebas
    beforeAll(); - Antes de que se ejecuten todas las pruebas
    beforeEach(); - Antes de que se ejecute cada prueba

    afterAll(); - Despues de que todas las pruebas finalizan
    afterEach(); - Cada vez que termina una prueba
   */
    let jugador = new Jugador();

    beforeAll( () => {
        console.log("Before All");
    }); 

    beforeEach( () => {
        console.log("Before Each");
        //jugador.hp = 100;
        //La linea de arriba funciona pero solo para una variable, con la siguiente linea restablezco todo el objeto y cada una de sus propiedades
        jugador = new Jugador();
    }); 

    afterAll( () => {
        console.log("After All");
    });

    afterEach( () => {
        console.log("After Each");
    }); 

    it('Debe retornar 80 de HP si recibe 20 de daño', () => {
        //const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);

        expect( resp ).toBe(80);
    });

    it('Debe retornar 50 de HP si recibe 50 de daño', () => {
        //const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);

        expect( resp ).toBe(50);
    });

    it('Debe retornar 0 de HP si recibe 100 de daño o mas', () => {
        
        const resp = jugador.recibeDanio(200);

        expect( resp ).toBe(0);
    });

});