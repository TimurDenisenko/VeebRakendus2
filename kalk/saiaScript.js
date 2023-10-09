const juustuhind = 1.00;
const magushind = 2.00;
const pontsikhind = 1.50;

function calculate(val, saia)
{
    return (val*saia).toFixed(2);
}

//kontrollib et kogus väli ei ole tühi
function validateForm()
{
    if (document.forms["kalk"]["kogus"].value == 0) {
        alert("Palun sisesta kogus! ");
        return false;
    }
}


// arvutame hind mis sõltub tekstist tekstkastist
function inputTextValue()
{
    tyhistaRadio()
    tyhistaSelectOption()
    tyhistaCheckbox()
    validateForm();
    let answer = document.getElementById("vastus");
    let kogus = document.getElementById("kogus").value;
    let tyyp = document.getElementById("saiatyyp").value;

    if (tyyp=="juustu")
    {
        answer.innerHTML = "Hind on "+calculate(kogus, juustuhind) + "&euro;";
    }
    else if (tyyp=="magus")
    {
        answer.innerHTML = "Hind on "+calculate(kogus, magushind) + "&euro;";
    }
    else if (tyyp=="pontsik")
    {
        answer.innerHTML = "Hind on "+calculate(kogus, pontsikhind) + "&euro;";
    }
    else
    {
        answer.innerHTML = "Saia tüüp ei ole määratud";
    }
}

//puhastab Tekstkasti sisestatud väärtus
function tyhistaTekstValue()
{
    document.getElementById("saiatyyp").value="";
}
//puhastab select valiku
function tyhistaSelectOption()
{
    document.getElementById("saiatyyp2").selectedIndex=0;
}
//puhastab radio valiku
function tyhistaRadio()
{
    let elem = document.getElementsByName("saiatyyp3")
    for (let i = 0; i<elem.length; i++)
    {
        elem[i].checked = false;
    }
}
function tyhistaCheckbox()
{
    let elem = document.getElementsByName("saiatyyp4")
    for (let i = 0; i<elem.length; i++)
    {
        elem[i].checked = false;
    }
}
function selectOptionChange()
{
    tyhistaRadio()
    tyhistaTekstValue();
    tyhistaCheckbox()
    validateForm();
    let answer = document.getElementById("vastus");
    let kogus = document.getElementById("kogus").value;
    let saiatyyp = document.getElementById("saiatyyp2").value;
    if (saiatyyp=="juustu")
    {
        answer.innerHTML = "Hind on "+calculate(kogus, juustuhind) + "&euro;";
    }
    else if (saiatyyp=="magus")
    {
        answer.innerHTML = "Hind on "+calculate(kogus, magushind) + "&euro;";
    }
    else if (saiatyyp=="pontsik")
    {
        answer.innerHTML = "Hind on "+calculate(kogus, pontsikhind) + "&euro;";
    }
    else
    {
        answer.innerHTML = "Saia tüüp ei ole määratud";
    }
}

function radioChange(event)
{
    tyhistaTekstValue();
    tyhistaSelectOption();
    tyhistaCheckbox()
    validateForm();

    let answer = document.getElementById("vastus");
    let kogus = document.getElementById("kogus").value;
    let saiatyyp = event.target.id;
    if (saiatyyp=="juustu")
    {
        answer.innerHTML = "Hind on "+calculate(kogus, juustuhind) + "&euro;";
    }
    else if (saiatyyp=="magus")
    {
        answer.innerHTML = "Hind on "+calculate(kogus, magushind) + "&euro;";
    }
    else if (saiatyyp=="pontsik")
    {
        answer.innerHTML = "Hind on "+calculate(kogus, pontsikhind) + "&euro;";
    }
    else
    {
        answer.innerHTML = "Saia tüüp ei ole määratud";
    }
}

function checkboxChange(event)
{
    tyhistaTekstValue();
    tyhistaSelectOption();
    tyhistaRadio();

    let answer = document.getElementById("vastus");
    let kogus = document.getElementById("kogus").value;
    let juustu = document.getElementById("juustu1").checked
    let magus = document.getElementById("magus1").checked
    let pontsik = document.getElementById("pontsik1").checked

    validateForm();
    if (juustu && magus || juustu && pontsik || magus && pontsik || juustu && magus && pontsik)
    {
        answer.innerHTML = "Palun vali 1 saia tüüp";
    }
    else if (juustu)
    {
        answer.innerHTML = "Hind on "+calculate(kogus, juustuhind) + "&euro;";
    }
    else if (magus)
    {
        answer.innerHTML = "Hind on "+calculate(kogus, magushind) + "&euro;";
    }
    else if (pontsik)
    {
        answer.innerHTML = "Hind on "+calculate(kogus, pontsikhind) + "&euro;";
    }
    else
    {
        answer.innerHTML = "Saia tüüp ei ole määratud";
    }
}
/*
function hind()
{
    let answer = document.getElementById("vastus");
    let kogus = document.getElementById("kogus");

    answer.innerHTML = "Hind on "+(kogus.value * saiahind).toFixed(2)+"&euro;";
}
 */