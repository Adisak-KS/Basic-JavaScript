const box = document.getElementById('box');

function addDarkMode(){
    box.classList.add("darkMode");
}

function removeDarkMode(){
    box.classList.remove("darkMode");
}

function switchMode(){
    box.classList.toggle("darkMode");

    // chack class 
    let status;
    status =box.classList.contains("darkMode");

    console.log(status);
    if(status){
        box.style.color = "Yellow";
    }else{
        box.style.color = "Red";
    }
}

