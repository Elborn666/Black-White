const refBody = document.querySelector('body')
const refBtn = document.querySelector('.toggle-checkbox')
const refSpan = document.querySelector('.toggle-label')
const refHide = document.querySelector('.toggle-hide')

refBtn.addEventListener('click', onBtnChangeColor)

function onBtnChangeColor(){
    console.log('Click on button')
    refBody.classList.toggle('dark-color')
    refSpan.classList.toggle('hide')
    refHide.classList.toggle('hide')
}

// const refBody = document.querySelector('body')
// const refBtn = document.querySelector('.change-color')
// const refSpan = document.querySelector('.color')

// refBtn.addEventListener('click', onBtnChangeColor)

// function onBtnChangeColor(){
//   const color = getRandomHexColor()
//   refBody.style.background = color
//   refSpan.textContent = color
// }



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
