import { Jugador } from './../../basicas/clases/clase';
import { Jugador2 } from './jugador2';

describe('Jugador 2 Emit', () => {

    let jugador: Jugador2;
    //Se ejecuta antes de cada prueba
    beforeEach( () => {
        jugador = new Jugador2()
    });

    it('Debe emitir un evento cuando recibe daño', () => {

        let nuevoHP = 0;
        //Como es un EventEmitter me puedo suscribir para recibir su respuesta, en este caso el hp
        jugador.hpCambia.subscribe( res => {
            nuevoHP = res;
        });
        
        jugador.recibeDanio(1000);
        
        expect( nuevoHP ).toBe(0);

    });

    it('Debe emitir un evento cuando recibe daño y sobrevivir si el daño es menos de 100', () => {

        let nuevoHP = 0;
        
        jugador.hpCambia.subscribe( res => {
            nuevoHP = res;
        });
        
        jugador.recibeDanio(50);

        expect( nuevoHP ).toBe(50);

    });

});