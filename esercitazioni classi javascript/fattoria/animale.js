export default class Animale{
    constructor(tipo, razza, nzampe, img){
        this.tipo = tipo;
        this.razza = razza;
        this.nzampe = nzampe;
        this.img= img;
    }
    name(){
        return "tipo: "+this.tipo+" razza: "+this.razza+" numero di zampe: "+this.nzampe
    }
    click (){
        darw(this.img)
        document.getElementById("testo").innerHTML= this.name()
    }
}