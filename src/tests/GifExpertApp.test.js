import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import GifExpertApp from '../GiftExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe mostrar el componente correctamete', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostarr una lista de categorias', () => {
        const categories = ['One Punch', 'Drago Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
})
