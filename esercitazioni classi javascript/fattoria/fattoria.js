import Animale from "./animale.js";

let maialeimg;
maialeimg= "maiali-belli.jpg"
let muccaimg;
muccaimg = "mucca-costalta.jpg"
let cavalloimg;
cavalloimg="callo.jpg"

export default class fattoria{
    constructor()
    {
        if(document.getElementById('cavallo')!=null){document.getElementById('cavallo').addEventListener('click', this.cCavallo);}
        if(document.getElementById('maiale')!=null){document.getElementById('maiale').addEventListener('click', this.cMaiale);}
        if(document.getElementById('mucca')!=null){document.getElementById('mucca').addEventListener('click', this.cMucca);}
    }
    cCavallo() {
        console.log("ciao");
        var cavallo = new Animale("Cavallo", "puledro", "4 zampe", "cavalloimg");
        cavallo.click();
        cavallo.name()
    }
    cMaiale() {
        console.log("ciao");
        var maiale = new Animale("Maiale", "porco", "4 zampe", "maialeimg");
        maiale.click();
        maiale.name()

    }
    cMucca(){
        var mucca = new Animale("Mucca", "ovina", "4 zampe", "muccaimg");
        mucca.click();
        mucca.name()
    }

}