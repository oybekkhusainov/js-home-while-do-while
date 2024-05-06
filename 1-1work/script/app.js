let money;
let soni ;
let kun ;

do{
    money = prompt("Sumani kiriting");
    soni = Math.floor(money/700);
    kun = Math.floor((money/700)*4);
    document.write(money + " som; "+ " ruchka="+soni +" "+ "kunga="+kun );
}while(soni ==0 && kun ==0 );
