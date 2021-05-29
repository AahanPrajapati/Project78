var images=["father.jpg", "mother.jpg", "son.png", "daughter.png"];
var names=["Ritesh Prajapati","Hetal Prajapati","Aahan Prajapati","Freya Prajapati"]
var i=0;
function change(){
    document.getElementById("myfamily").src=images[i];
    document.getElementById("nameofthemember").innerHTML=names[i];
    i=i+1
    if(i>3){
        i=0;
    }
}