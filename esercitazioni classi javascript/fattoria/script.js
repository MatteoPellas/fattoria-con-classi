import Animale from "./animale.js";

let maialeimg;
maialeimg.src= "maiali-belli.jpg"
let muccaimg;
muccaimg.src = "mucca-costalta.jpg"
let cavalloimg;
cavalloimg.src="callo.jpg"

let maiale={
    t : "maiale",
    r : "porco",
    n : 4,
    i : maialeimg
}
let mucca={
    t : "mucca",
    r : "costalta",
    n : 4,
    i : muccaimg
}
let cavallo={
    t : "cavallo",
    r : "puledro",
    n : 4,
    i : cavalloimg
}

function tastoMaiale(){
    console.log("ciao")
    animale = new Animale(maiale)
    animale.click();
}
function tastoMucca(){
    animale=new Animale(mucca);
    animale.click();
}
function tastoCavallo(){
    animale = new Animale(cavallo);
    animale.click();
}