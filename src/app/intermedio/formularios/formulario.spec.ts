import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';


describe('Formularios', () => {

    let componente: FormularioRegister;

    beforeEach( () => {
        //El contructor del "FormularioRegister" tiene inyectado el "FormBuilder" por eso se debe instancear
        componente = new FormularioRegister( new FormBuilder() );
    });

    it('Debe crear un formulario con 2 campos(email y password)', () => {

        expect( componente.form.contains('email') ).toBeTruthy();
        expect( componente.form.contains('password') ).toBeTruthy();

    });

});