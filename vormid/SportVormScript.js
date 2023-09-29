

function tervist()
{
    let name = document.getElementById("nimi");
    let answer = document.getElementById("vastus");
    answer.innerHTML="Tere päevast, "+ name.value;
}

function radioValik()
{
    let answer2 = document.getElementById("vastus2");
    let tarpv21 = document.getElementById("tarpv21");
    let tarpv22 = document.getElementById("tarpv22");
    let tarpv23 = document.getElementById("tarpv23");
    let logitpv21 = document.getElementById("logitpv21");
    let ryhm = null;
    let pilt = document.getElementById("pilt"   )
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
}

function koikkokku()
{
    let answer4 = document.getElementById("vastus4");
    let name = document.getElementById("nimi");
    let kokku = "";
    let tarpv21 = document.getElementById("tarpv21");
    let tarpv22 = document.getElementById("tarpv22");
    let tarpv23 = document.getElementById("tarpv23");
    let logitpv21 = document.getElementById("logitpv21");
    kokku+="Sinu nimi on "+name.value+". "
    kokku+="Sinu grupp on "
    if (tarpv21.checked)
    {
        kokku += tarpv21.value;
    }
    else if (tarpv22.checked)
    {
        kokku += tarpv22.value;
    }
    else if (tarpv23.checked)
    {
        kokku += tarpv23.value;
    }
    else if (logitpv21.checked)
    {
        kokku += logitpv21.value;
    }
    kokku+="."
    let ujumine = document.getElementById("ujumine");
    let jousaal = document.getElementById("jousaal");
    let kasipall = document.getElementById("kasipall");
    let jooks = document.getElementById("jooks");
    let vorkpall = document.getElementById("vorkpall");
    kokku+=" Sinu spordialad: "
    var sport = "";
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
    kokku+=sport;
    kokku+=".";
    answer4.innerHTML = kokku;
}

