function tere()
{
    let vastus1 = document.getElementById("vastus1")
    let name = document.getElementById("nimi")
    vastus1.innerHTML = "Tere, "+name.value+"."
}

function grupp()
{
    let vastus2 = document.getElementById("vastus2")
    let tarpv21 = document.getElementById("tarpv21");
    let tarpv22 = document.getElementById("tarpv22");
    let tarpv23 = document.getElementById("tarpv23");
    let ryhm  = null;
    if (tarpv21.checked)
    {
        ryhm = tarpv21.value;
    }
    else if (tarpv22.checked)
    {
        ryhm = tarpv22.value;
    }
    else if (tarpv23.checked)
    {
        ryhm = tarpv23.value;
    }
    vastus2.innerHTML = "Sinu rühm on "+ryhm;
}

function zanr()
{
    let vastus3 = document.getElementById("vastus3")
    let rokk = document.getElementById("rokk")
    let pop = document.getElementById("pop")
    let rahvas = document.getElementById("rahvas")
    let chanson = document.getElementById("chanson")
    let elektrooniline = document.getElementById("elektrooniline")
    let klassikaline = document.getElementById("klassikaline")
    var zanr = "Sinu lemmikmuusika on ";
    if (rokk.checked)
    {
        zanr+=rokk.value+", "
    }
    if (pop.checked)
    {
        zanr+=pop.value+", "
    }
    if (rahvas.checked)
    {
        zanr+=rahvas.value+", "
    }

    if (chanson.checked)
    {
        zanr+=chanson.value+", "
    }

    if (elektrooniline.checked)
    {
        zanr+=elektrooniline.value+", "
    }
    if (klassikaline.checked)
    {
        zanr+=klassikaline.value+"."
    }
    vastus3.innerHTML = zanr;
}

function koolimuusika()
{
    let keelata = document.getElementById("keelata")
    let vaheajal = document.getElementById("vaheajal")
    let alati = document.getElementById("alati")
    let koolile = document.getElementById("koolile")
    let img = document.getElementById("img")
    if (vaheajal.checked)
    {
        img.src = "ImgMuusika/2.png"
    }
    if (keelata.checked)
    {
        img.src = "ImgMuusika/1.png"
    }
    if (alati.checked)
    {
        img.src = "ImgMuusika/3.png"
    }
    if (koolile.checked)
    {
        img.src = "ImgMuusika/4.png"
    }
}

function keel()
{
    let vastus4 = document.getElementById("vastus4")
    let tund = document.getElementById("tund")
    if (tund.selectedIndex!==0)
    {
        if (tund.value==0)
        {
            vastus4.style.color = "black"
            vastus4.innerHTML = "Proovi kuulada muusik"
        }
        else if (tund.value>=1 && tund.value<=6)
        {
            vastus4.style.color = "green"
            vastus4.innerHTML = "Mitte eriti"
        }
        else if (tund.value>=7 && tund.value<=12)
        {
            vastus4.style.color = "blue"
            vastus4.innerHTML = "Liiga palju"
        }
        else if (tund.value>=13 && tund.value<=18)
        {
            vastus4.style.color = "orange"
            vastus4.innerHTML = "Sa peaksid lõpetama!"
        }
        else if (tund.value>=19 && tund.value<=24)
        {
            vastus4.style.color = "red"
            vastus4.innerHTML = "Kas sinu kõrvad ei valutavad?"
        }
        else
        {
            vastus4.innerHTML = ""
        }
    }
}

function tel()
{
    let jah = document.getElementById("jah")
    let ei = document.getElementById("ei")
    let img1 = document.getElementById("img1")
    if (jah.checked)
    {
        img1.src = "ImgMuusika/like.png"
    }
    if (ei.checked)
    {
        img1.src = "ImgMuusika/dislike.png"
    }
}

function raadio()
{

    let vastus5 = document.getElementById("vastus5")
    let laua = document.getElementById("laua")
    let telefon = document.getElementById("telefon")
    let miite = document.getElementById("mitte")
    let tekst = "";
    if (laua.checked)
    {
        tekst="Sa oled dinosaurus"
    }
    if (telefon.checked)
    {
        tekst="Sa oled ebatavaline inimene"
    }
    if (mitte.checked)
    {
        tekst="See on hästi"
    }
    if (laua.checked && telefon.checked)
    {
        tekst="Ebatavaline dinosaurus"
    }
    if (mitte.checked && (laua.checked || telefon.checked))
    {
        tekst="Ära valeta!"
    }
    vastus5.innerHTML = tekst
}

function raadiojaam()
{
    let vastus6 = document.getElementById("vastus6")
    let tekst = document.getElementById("raadiojaam")
    let text = ""
    if (tekst.value.length>=100)
    {
        vastus6.style.color="red"
        text = "Ma mõtlen sa valetad"
    }
    else if (tekst.value.length>=50)
    {
        vastus6.style.color="orange"
        text = "Nii palju!"
    }
    else if (tekst.value.length>=25)
    {
        vastus6.style.color="blue"
        text = "Rohkem kui küll"
    }
    else if (tekst.value.length>=10)
    {
        vastus6.style.color="green"
        text = "Piisav"
    }
    else
    {
        vastus6.style.color="black"
        text = "Ei tea või tead väga vähe?"
    }
    vastus6.innerHTML = text;
}

function muusikuid()
{
    let vastus7 = document.getElementById("vastus7")
    let linkin = document.getElementById("linkin")
    let imagine = document.getElementById("imagine")
    let starset = document.getElementById("starset")
    let fall = document.getElementById("fall")
    let kino = document.getElementById("kino")
    let muusika = "Huvitav valik: "
    if (linkin.checked)
    {
        muusika+=linkin.value + ", "
    }
    if (imagine.checked)
    {
        muusika+=imagine.value + ", "
    }
    if (starset.checked)
    {
        muusika+=starset.value + ", "
    }
    if (fall.checked)
    {
        muusika+=fall.value + ", "
    }
    if (kino.checked)
    {
        muusika+=kino.value + "."
    }
    vastus7.innerHTML = muusika
}

function varv()
{
    let vastus8 = document.getElementById("vastus8")
    let varv = document.getElementById("varv")
    vastus8.style.color = varv.value
    vastus8.innerHTML = "Rokk"
}