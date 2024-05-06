let n;
let retura;
let m;

do{
    n= prompt("Son kiriting");
    retura =Math.floor(Math.random() * 10)
    m = n%retura
    document.write(m +"- "+ n + " -" + retura(10))

}while(m==0)
