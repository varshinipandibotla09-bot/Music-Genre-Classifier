function predictGenre(){

let tempo=document.getElementById("tempo").value;
let energy=document.getElementById("energy").value;

if(tempo=="" || energy==""){
    document.getElementById("result").innerHTML="Please select all fields.";
    return;
}

let genre="";

if(tempo=="fast" && energy=="high"){
    genre="Rock";
}
else if(tempo=="medium" && energy=="medium"){
    genre="Pop";
}
else if(tempo=="slow" && energy=="low"){
    genre="Classical";
}
else if(tempo=="fast" && energy=="medium"){
    genre="Hip-Hop";
}
else{
    genre="Jazz";
}

document.getElementById("result").innerHTML="🎵 Predicted Genre: "+genre;

}
