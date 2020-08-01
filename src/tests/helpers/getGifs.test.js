import React from 'react';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifts Fetch', () => {
    
    test('debe traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe(10);
    });

    test('debe de recibir 0 elementos si no hay categoría', async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });
    
})
