const input = document.querySelector("#borndate")
const button = document.querySelector("#submit")
const text = document.querySelector("#sign")

input.addEventListener("oninput", () => fecha = input.value )
button.addEventListener("click", () => modifyText())

let fecha = ""

const calculateZodiacSign = (day) => {
    console.log(day)
    const today = new Date(day);
const lastYear = new Date(today.getFullYear(), 0, 0)

const yearDay = (today - lastYear) + ((lastYear.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);

const oneDay = 1000 * 60 * 60 * 24

const days = Math.floor(yearDay/oneDay)

    if(days <= 19) return "Capricornio"
    if(days <= 49) return "Acuario"
    if(days <= 79) return "Piscis"
    if(days <= 109) return "Aries"
    if(days <= 140) return "Tauro"
    if(days <= 171) return "Geminis"
    if(days <= 203) return "Cáncer"
    if(days <= 234) return "Leo"
    if(days <= 265) return "Virgo"
    if(days <= 295) return "Libra"
    if(days <= 326) return "Escorpio"
    if(days <= 355) return "Sagitario"
        else return "Capricornio"
}

const modifyText = () => {
    
    signo = calculateZodiacSign(input.value)
    text.innerText = signo
}

