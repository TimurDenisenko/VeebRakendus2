function kustuta()
{
    let k=document.getElementById("canva").getContext("2d");
    k.clearRect(0,0, 500, 300);
}

function kolmnurk()
{
    let k=document.getElementById("canva").getContext("2d");
    k.beginPath();

    k.lineWidth="10";
    k.strokeStyle="blue";
    
    k.moveTo(50, 100); //alguspunkt
    k.lineTo(100, 50); //kesk point
    k.lineTo(150, 100); //lõpp point
    k.lineTo(50, 100); //Lõppunkt=alguspoint
    k.stroke(); // joon
    k.fillStyle="yellow";
    k.fill(); //taust
}

function ristkulik()
{
    let k=document.getElementById("canva").getContext("2d");
    let l=document.getElementById("laius").value;
    let kor=document.getElementById("korgus").value;

    //ristkülik
    k.fillStyle="red";
    k.fillRect(50, 50, l, kor); //x, y, laius, kõrgus
}

function ring()
{
    let k=document.getElementById("canva").getContext("2d");
    k.beginPath();
    k.arc(100, 100, 50, 0, 2 * Math.PI); //x, y, -alguspunkt, R
    k.stroke();
    k.fillStyle="blue";
    k.fill();
}

function kustuta2() 
{
    let k=document.getElementById("canva2").getContext("2d");
    k.clearRect(0,0, 400, 300);
}

function jalad()
{
    let k=document.getElementById("canva2").getContext("2d");
    k.fillStyle="yellow";
    k.fillRect (100, 100, 20, 45);
    k.fillRect (135, 100, 20, 45);
}

function kaed()
{
    let k=document.getElementById("canva2").getContext("2d");

    k.fillStyle="yellow";
    k.fillRect(80, 50, 20, 45); 
    k.fillRect(155, 50, 20, 45);

    k.lineWidth="4";
    k.strokeStyle="yellow";
    k.beginPath();
    k.arc(90, 102, 5, 3, 2 * Math.PI);
    k.stroke();
    k.beginPath();
    k.arc(165, 102, 5, 3, 2 * Math.PI); 
    k.stroke();
}

function rind()
{
    let k=document.getElementById("canva2").getContext("2d");

    k.fillStyle="yellow";
    k.fillRect(100, 50, 55, 50);
}

function pea()
{
    let k=document.getElementById("canva2").getContext("2d");

    k.fillStyle="yellow";
    k.fillRect(120, 45, 15, 5);

    k.lineWidth="20";
    k.strokeStyle="yellow";
    k.beginPath();
    k.arc(128, 27, 10, 0, 2 * Math.PI);
    k.stroke();
    k.fillStyle="yellow";
    k.fill();

    k.fillStyle="yellow";
    k.fillRect(120, 3, 15, 5);
}

function nagu()
{
    let k=document.getElementById("canva2").getContext("2d");
    k.lineWidth="3";
    k.strokeStyle="black";
    k.beginPath();
    k.arc(120, 27, 3, 0, 2 * Math.PI);
    k.stroke();
    k.fillStyle="white";
    k.fill();

    k.lineWidth="0.5";
    k.strokeStyle="blue";
    k.beginPath();
    k.arc(120, 27, 0.5, 0, 2 * Math.PI);
    k.stroke();
    k.fillStyle="blue";
    k.fill();

    k.lineWidth="3";
    k.strokeStyle="black";
    k.beginPath();
    k.arc(136, 27, 3, 0, 2 * Math.PI);
    k.stroke();
    k.fillStyle="white";
    k.fill();

    k.lineWidth="0.5";
    k.strokeStyle="blue";
    k.beginPath();
    k.arc(136, 27, 0.5, 0, 2 * Math.PI);
    k.stroke();
    k.fillStyle="blue";
    k.fill();

    k.fillStyle="black";
    k.fillRect(120, 40, 15, 2);
}

function puksid()
{
    let k=document.getElementById("canva2").getContext("2d");
    k.fillStyle="darkblue";
    k.fillRect (100, 100, 20, 35);
    k.fillRect (135, 100, 20, 35);
    k.fillRect (100, 95, 55, 10);
}

function tossud()
{
    let k=document.getElementById("canva2").getContext("2d");
    k.fillStyle="black";
    k.fillRect (100, 135, 20, 10);
    k.fillRect (135, 135, 20, 10);
}

function kampsun()
{
    let k=document.getElementById("canva2").getContext("2d");
    k.fillStyle="red";
    k.fillRect (80, 50, 95, 35);
    k.fillRect(100, 50, 55, 50);
}

function koik()
{
    jalad();
    kaed();
    rind();
    pea();
    nagu();
    puksid();
    tossud();
    kampsun();
}