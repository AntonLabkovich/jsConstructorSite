import {model} from './model'
import './styles/main.css'

const site = document.querySelector('#site') 

model.forEach(block => {
    console.log(block)
    site.insertAdjacentHTML('beforeend', block.toHTML())
    // const generate = templates[block.type]
    // if(generate){
    //     const html = generate(block)
    //    
    // }
    
})

