import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');

        // Evento de un input change
        const value = 'Hola Mundo'
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe( value );
    });
    
    test('NO debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');

        const value = 'Hora de aventura';

        // Simular el input change
        input.simulate('change', { target: { value } });

        // Simular el submit del formulario
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // Verficar que la funcion se llamora una vez
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // Verificar que el valor del input es ''
        expect( input.prop('value') ).toBe('');
    });
    
});
