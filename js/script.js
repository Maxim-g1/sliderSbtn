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

let imgs = ['/img/DSC_3674.jpg', '/img/les.webp', '/img/tomato.jpg']

image.src = imgs[0]

right2.addEventListener('click', (e) => {
    e.preventDefault()
    i++
    if (i == imgs.length) {
        i = 0
    }
    image.src = imgs[i]
})

left2.addEventListener('click', (e) => {
    e.preventDefault()
    i--
    if (i < 0) {
        i = imgs.length - 1
    }
    image.src = imgs[i]
})


// setInterval(() => {
//     image.src = imgs[i]
//     i++
//     if (i == imgs.length) {
//         i = 0
//     }
// }, 1000)


