import { row, col } from "./untils"

function title(block){
    const {tag,styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`),styles)
}

function text(block){
    const {styles} = block.options
    return row(col(`<p>${block.value}</p>`),styles)
}

function textColumn(block){
    const {styles} = block.options
    const html = block.value.map(item=>col(`${item}`))
    return row(`${html.join('')}`,styles)
}

export const templates = {title, text, textColumn}