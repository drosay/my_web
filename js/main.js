import * as elements from "./modules/elements.js"
import slider from "./modules/slider.js"
import {styles} from "./modules/styles.js"
//import "./modules/listener.js"

const menu = document.getElementById("menu")
const menu_items = Object.values(document.getElementById("menu_items").children)
menu_items.forEach(addinEvents)

function evt(e){
    
    const screenWidth = screen.width;
    
    if(screenWidth<=700){
        if(e.target.name === "resume"){
            resumeDl()
            menu.click()
        }else{
            e.preventDefault()
            executeEvts(e)
            menu.click()
        }
    }else{
        e.preventDefault()
        const effect = document.getElementById("contentEffect")
        effect.style.left = "-80%"
        setTimeout(()=>{
            executeEvts(e)
        },800)
        setTimeout(()=>{
            effect.style.left = "100%"
        },1000)
    }    
}

function addinEvents(node){
    node.addEventListener("click",evt)
}

function executeEvts(e){

    const element = e.target.name

    document.getElementById("content").innerHTML = elements[element]

    if(document.head.lastChild.nodeName === "STYLE") document.head.removeChild(document.head.lastChild)

    if(styles[element]){
        const style = document.createElement("style")
        style.innerHTML = styles[element]
        document.head.appendChild(style)
        if(element === "designs") slider()
    }
}

function resumeDl(){
    const resume = document.querySelector("a[name='resume'")
    resume.setAttribute("href","./assets/cv/Dilan curriculum.pdf")
    resume.setAttribute("target","_blank")
    setTimeout(()=>{
        resume.setAttribute("href","#")
        resume.removeAttribute("target")
    },1000)
}