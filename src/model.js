export const model = [
    {type:'title', value:'Test Title', options:{
        tag: 'h2',
        styles: 'background: darkred; color pink;'
    }},
    {type:'text', value:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',options:{
        styles: 'background: darkblue; color yellow;'
    }},
    {type: 'textColumn', value:[
        '1 text',
        '2 text',
        '3 text'
    ], options:{styles: 'padding: 1rem'}}
]