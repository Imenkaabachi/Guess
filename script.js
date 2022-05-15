const nbr_tentatives = [7,5,3]
let difficulty = 0;
function partie(nbr) {
    console.log(nbr);
    let a = parseInt(Math.random()*10)
    alert(`You have ${nbr} tries to guess the number\n good luck xD`)
    for ( let i = 0;i<nbr;i++) {
        if (parseInt(prompt(`This is Your ${i} th try : `))==a) {
            alert ("Congratulations you have won :)");
            break;
        }
        else {
            alert(`Wrong Response \nYou have another ${nbr-i-1} tries`)
            if(i===nbr-1) {
                alert(`You have lost :)))\nThe Searched number is : ${a}`)
            }
        }
    }
    
}
while(true) {
    difficulty = prompt("Please insert the level of difficulty\n ( 1 : easy , 2 :medium , 3 : hard ) ");
    while(difficulty!=1 && difficulty!=2 && difficulty!=3) {
        alert("Unexpected Input \n Please try again");
        difficulty = prompt("Please insert the level of difficulty\n ( 1 : easy , 2 :meduim , 3 : hard ) "); 
    }
    partie(nbr_tentatives[parseInt(difficulty)-1]);
}