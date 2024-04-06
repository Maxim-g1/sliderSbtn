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
let block__krug = document.querySelector('.block__krug')
let indicator

let imgs = ['img/DSC_3674.jpg', 'img/les.webp', 'img/tomato.jpg']


image.src = imgs[0]


for (let kr of imgs) {
    indicator = document.createElement('li')
    block__krug.appendChild(indicator)
    indicator.classList.add('indicator')
}
let indicatorList = document.querySelectorAll('.indicator')

indicatorList[0].classList.add('active')

function indicatorActive(i) {
    for (let op of indicatorList) {
        op.classList.remove('active')
    }
    indicatorList[i].classList.add('active')
}

right2.addEventListener('click', (e) => {
    e.preventDefault()
    i++
    if (i == imgs.length) {
        i = 0
    }
    image.src = imgs[i]
    indicatorActive(i)
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


