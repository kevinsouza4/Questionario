const area = Area()

function Area() {
   const area = prompt `"quer seguir para a area de FrontEnd ou para area de BackEnd?"`;
    if (area == "FrontEnd") {
        prompt `que legal, qual linguagem? react ou vue?`
    }
    else if (area == "BackEnd") {

        prompt `que legal, qual linguagem? c# ou java?`
    }
}
    const desejo = prompt `deseja seguir se especializando na area ou continuar se desenvolvendo para se tornar fullstack?`
    if (desejo == "seguir") {
        const seguir = `que bacana, também segui esse caminho`
        alert (seguir)
    }
    else {
        const fullstack = `que legal, gostaria de ter seguido este caminho`
        alert (fullstack)
    }

    let tecnologia = 0;
      
    prompt `quais são as tecnologias que deseja se especializar ou conhecer?`

    while (tecnologia < 8) {
       const tecnologia = prompt `Tem mais alguma tecnologia que você gostaria de aprender?`
       const tec = `acho muito interessante essa tecnologia ${tecnologia}, certo?`
       alert (tec) 
    }

    