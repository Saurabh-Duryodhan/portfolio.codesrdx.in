const bodyElems = document.body;
const infoCard = document.querySelector('.info__card');
function switchMode(mode) {
    if (mode === "dark") {
        bodyElems.style.backgroundColor = 'black'
        bodyElems.style.color = 'white'
        infoCard.classList.remove('indian_bg')
    }
    if (mode === "light") {
        infoCard.classList.add('indian_bg')
        bodyElems.style.backgroundColor = 'white'
        bodyElems.style.color = 'black'
        infoCard.border = '1px solid black'
    }
}

function onLoadFunction() {
    const currentDate = new Date()
    const currentHour = currentDate.getHours()
    console.log(currentHour)
    if (currentHour < 12 || currentHour <= 18) {
        bodyElems.style.backgroundColor = 'white'
        bodyElems.style.color = 'white'
        infoCard.classList.add('indian_bg')
    } else (currentHour >= 18 && currentHour < 24)
    {
        infoCard.classList.remove('indian_bg')
        bodyElems.style.backgroundColor = 'black'
        bodyElems.style.color = 'white'
        infoCard.border = '1px solid black'
    }
}

document.body.addEventListener('load', onLoadFunction())