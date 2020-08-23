import image from './assets/logo.jpg'
import { TitleBlock, TextBlock, ImageBlock, TextColumn } from './classes/block'
import { css } from './untils'

export const model = [
    new TitleBlock('Test Title', {
        tag: 'h2',
        styles: css({
            background: 'darkred',
            color: 'pink'
        })
    }),
    new ImageBlock(image, {
        styles: css({
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }),
        alt: 'my img',
        imageStyles: css({
            width: '500px',
            height: 'auto'
        })
    }),
    new TextBlock('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', {
        styles: css({
            background: 'darkblue',
            color: 'yellow'
        })
    }),
    new TextColumn([
        '1 text',
        '2 text',
        '3 text'
    ], {
        styles: css({
            padding: '1rem'
        })
    })
]