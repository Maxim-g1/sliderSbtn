let texts = ['text1', 'text2', 'text3']

const left = document.querySelector('#left')
const right = document.querySelector('#right')
const slider = document.querySelector('#slider')

slider.textContent = texts[0]
let i = 0
right.addEventListener('click', (e) => {
    e.preventDefault()
    i++
    if (i == texts.length) {
        i = 0
    }
    slider.textContent = texts[i]
})

left.addEventListener('click', (e) => {
    e.preventDefault()
    i--
    if (i < 0) {
        i = texts.length - 1
    }
    slider.textContent = texts[i]
})



const image = document.querySelector('#image')
const krug1 = document.querySelector('.krug1')
const krug2 = document.querySelector('.krug2')
const krug3 = document.querySelector('.krug3')

let krugs =['krug1', 'krug2', 'krug3']

let imgs = ['/img/DSC_3674.jpg', '/img/les.webp', '/img/tomato.jpg']


image.src = imgs[0]

right2.addEventListener('click', (e) => {
    e.preventDefault()
    i++
    if (i == imgs.length) {
        i = 0
    }
    image.src = imgs[i]
    if(i == 0){
        krug2.classList.remove('active')
        krug3.classList.remove('active')
        krug1.classList.add('active')
    }
    if(i == 1){
        krug3.classList.remove('active')
        krug1.classList.remove('active')
        krug2.classList.add('active')
    }
    if(i == 2){
        krug1.classList.remove('active')
        krug2.classList.remove('active')
        krug3.classList.add('active')
    }

})

left2.addEventListener('click', (e) => {
    e.preventDefault()
    i--
    if (i < 0) {
        i = imgs.length - 1
    }
    image.src = imgs[i]
    if(i == 0){
        krug2.classList.remove('active')
        krug1.classList.remove('active')
        krug3.classList.add('active')
    }
    if(i == 1){
        krug3.classList.remove('active')
        krug2.classList.remove('active')
        krug1.classList.add('active')
    }
    if(i == 2){
        krug1.classList.remove('active')
        krug3.classList.remove('active')
        krug2.classList.add('active')
    }

})


// setInterval(() => {
//     image.src = imgs[i]
//     i++
//     if (i == imgs.length) {
//         i = 0
//     }
// }, 1000)


