function clock() {
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var msg = document.getElementById('res')

    hour = (hour < 10) ? '0' + hour : hour
    min = (min < 10) ? '0' + min : min
    sec = (sec < 10) ? '0' + sec : sec

    if (hour >= 0 && hour <= 4) {
        res.innerText = 'Boa madrugada.'
    }

    else if (hour <= 12) {
        res.innerText = 'Bom dia.'
    }
    else if (hour <= 18) {
        res.innerText = 'Boa tarde.'
    }
    else {
        res.innerText = 'Boa noite.'
    }
    var time = `${hour}:${min}:${sec}`
    document.getElementById('myclock').innerText = time
    setTimeout(clock, 1000)
}

clock();

var toggle = document.getElementById('toggle_checkbox')

function darkmode() {
    var bg = document.body
    bg.style.transition = '0.2s ease all'

    horatual = new Date().getHours()

    if (toggle.checked) {
        bg.classList.add('darkmode');
        bg.classList.remove('lightmode');
    } else {
        bg.classList.remove('darkmode');
        bg.classList.add('lightmode');
    }

}

function autoDarkMode() {
    var horaAtual = new Date().getHours()

    if (horaAtual >= 18 || horaAtual < 6) {
        toggle.checked = true
        darkmode()
    } else {
        toggle.checked = false
        darkmode()
    }
}

toggle.addEventListener('change', darkmode)

autoDarkMode()

setInterval(autoDarkMode, 3600000)
