const circle = document.querySelector('.progress-ring__circle')
const radius = circle.r.baseVal.value
const circumference = 2 * Math.PI * radius

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference

percent = 0;
function setProgress(percent) {
    const offset = circumference - percent / 10 * circumference // here
    circle.style.strokeDashoffset = offset

}

function pickColor(){
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for(let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

circle.addEventListener('wheel', (e) => {

    if(e.deltaY < 0){
        setProgress(++percent)
    }
    if(e.deltaY > 0){
        setProgress(--percent)
    }
    let a = Math.floor(Math.abs(circle.style.strokeDashoffset) % 1445.13)
    if(a == 0){
        circle.style.stroke = pickColor()
    }
})
