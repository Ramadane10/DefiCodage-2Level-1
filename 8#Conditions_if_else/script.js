let note=18
if (note>=16){
    console.log('Excellent')
}else if(note>=14 && note<=15){
    console.log('Bien')
}else if(note>=12 && note<=13){
    console.log('Assez Bien')
}else if(note>=10 && note<=11){
    console.log('Passable')
}else if(note<10){
    console.log('Insuffisant')
}else {
    console.log('Veuillez entrer une valeur entre 0 et 20.')