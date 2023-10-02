

function tervist()
{
    let name = document.getElementById("nimi");
    let answer = document.getElementById("vastus");
    answer.innerHTML="Tere päevast, "+ name.value;
    return answer.innerHTML;
}

function radioValik()
{
    let answer2 = document.getElementById("vastus2");
    let tarpv21 = document.getElementById("tarpv21");
    let tarpv22 = document.getElementById("tarpv22");
    let tarpv23 = document.getElementById("tarpv23");
    let logitpv21 = document.getElementById("logitpv21");
    let ryhm = null;
    let pilt = document.getElementById("pilt")
    if (tarpv21.checked)
    {
        ryhm = tarpv21.value;
        answer2.style.color = "red";
        pilt.src="img/66163.png"
    }
    else if (tarpv22.checked)
    {
        ryhm = tarpv22.value;
        answer2.style.color = "blue";
        pilt.src="img/542638.png"
    }
    else if (tarpv23.checked)
    {
        ryhm = tarpv23.value;
        answer2.style.color = "green";
        pilt.src="img/1077114.png"
    }
    else if (logitpv21.checked)
    {
        ryhm = logitpv21.value;
        answer2.style.color = "pink";
        pilt.src="img/1946488.png"

    }
    answer2.innerHTML = "sa oled "+ryhm;

    return answer2.innerHTML;
}

function checkboxValik()
{
    let answer3 = document.getElementById("vastus3");
    let ujumine = document.getElementById("ujumine");
    let jousaal = document.getElementById("jousaal");
    let kasipall = document.getElementById("kasipall");
    let jooks = document.getElementById("jooks");
    let vorkpall = document.getElementById("vorkpall");

    var sport ="";
    if (ujumine.checked)
    {
        sport+=ujumine.value+", ";
    }
    if (jousaal.checked)
    {
        sport+=jousaal.value+", ";
    }
    if (kasipall.checked)
    {
        sport+=kasipall.value+", ";
    }
    if (jooks.checked)
    {
        sport+=jooks.value+", ";
    }
    if (vorkpall.checked)
    {
        sport+=vorkpall.value;
    }
    answer3.innerHTML = "sinu spordialad on: "+sport;

    return answer3.innerHTML;
}

function selectOptionValik(event)
{
    let answer5= document.getElementById("vastus5");
    if (event.target.value==="Tallinn")
    { answer5.innerHTML = "Sinu linn on "+event.target.value}
}

function selectOptionValik2()
{
    let answer5= document.getElementById("vastus5");
    let elu = document.getElementById("elu");
    let tekst = "";
    let podgotovka=document.getElementById("podgotovka");
    let varv = document.getElementById("color");
    if (elu.selectedIndex!==0) {
        tekst+="Sinu linn on "+ elu.value + " ja Sinu ettevalmistus on "+podgotovka.value +"/10";
    }
    else { answer5.innerHTML = "Palun vali elukoht";}
    answer5.innerHTML=tekst;
    answer5.style.color = varv.value;
}

function koikkokku()
{
    let answer4 = document.getElementById("vastus4");
    answer4.innerHTML = tervist()+". "+radioValik()+". "+checkboxValik()+"."
}

