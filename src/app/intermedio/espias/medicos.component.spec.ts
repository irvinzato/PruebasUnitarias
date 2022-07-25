import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service'

import { Observable, from } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService( null );

    beforeEach( () => {
        componente = new MedicosComponent( servicio );
    });


    it('ngOnInit: Debe cargar los médicos', () => {

        //"spyOn" son los espias, nos van a permitir hacer peticiones falsas cuando algo suceda
        //Le digo espia al "servicio" cuando uses "getMedicos" llama una funcion que regrese el Observable
        /* spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return Observable.from( [ ['medico1', 'medico2', 'medico3'] ] );
        });  */
        //Detalles al usar "from" de rxjs

        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan(0);

    });


});
