import image from './assets/logo.jpg'
import {TitleBlock, TextBlock, ImageBlock, TextColumn} from './classes/block'

export const model = [
    new TitleBlock('Test Title', {
        tag: 'h2',
        styles: 'background: darkred; color pink;'
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display:flex; justify-content:center',
        alt: 'my img',
        imageStyles: 'width:500px; height: auto;'
    }),
    new TextBlock('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',{
        styles: 'background: darkblue; color yellow;'
    }),
    new TextColumn([
        '1 text',
        '2 text',
        '3 text'
    ],{
        styles: 'padding: 1rem'
    })
]