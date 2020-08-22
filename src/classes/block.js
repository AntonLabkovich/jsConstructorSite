import {col, row} from '../untils'


class Block {
    constructor(value,options){
        this.value = value
        this.options = options
    }
    toHTML(){
        throw new Error('Метод toHTML должн быть')
    }
}

export class TitleBlock extends Block {
    constructor(value, options){
        super(value, options)
    }
    toHTML(){
        const {tag,styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`),styles)
    }
}

export class ImageBlock extends Block {
    constructor(value, options){
        super(value, options)
    }
    toHTML(){
        const {alt, styles, imageStyle} = this.options
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyle}"/>`
        return row(html,styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {styles} = this.options
        return row(col(`<p style="margin-bottom:0">${this.value}</p>`),styles)    
    }
}

export class TextColumn extends Block{
    constructor(value, options){
        super(value, options)
    }
    toHTML(){
        const {styles} = this.options
        const html = this.value.map(item=>col(`${item}`))
        return row(`${html.join('')}`,styles)
    }
}