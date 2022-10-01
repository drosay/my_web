export default function slider (){
    const SLIDER = document.getElementById("slider")
    const RIGHT = document.getElementById("right")
    const LEFT = document.getElementById("left")
    let sliderSections = Object.values(SLIDER.children)

    LEFT.addEventListener("click", left)
    RIGHT.addEventListener("click", right)

    function right() {
        SLIDER.style.marginLeft = "-200%"
        SLIDER.style.transition = "all 1s"
        setTimeout( () =>{
            SLIDER.style.transition = "none"
            SLIDER.insertAdjacentElement("beforeend",sliderSections[0])
            SLIDER.style.marginLeft = "-100%"
        },1000)
        sliderSections = Object.values(SLIDER.children)
    }

    function left(){
        SLIDER.style.marginLeft = "0"
        SLIDER.style.transition = "all 1s"
        setTimeout( () =>{
            SLIDER.style.transition = "none"
            SLIDER.insertAdjacentElement("afterbegin",sliderSections[sliderSections.length-1])
            SLIDER.style.marginLeft = "-100%"
        },1000)
        sliderSections = Object.values(SLIDER.children)
    }

    setInterval(right,5000)

}