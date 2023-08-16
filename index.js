var btn = document.querySelectorAll('button');
console.log(btn)
for(let i = 0; i < btn.length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function (){
        let click = this.innerHTML;
        console.log(click)
        color(click)
    });
    
}
function color (click){
    switch (click){
        case "Red": 
        var block = document.querySelector('#boxes');
        block.style.background = 'red';
        break;

        case "Blue": 
        var block = document.querySelector('#boxes');
        block.style.background = 'blue';
        break;

        case "Green": 
        var block = document.querySelector('#boxes');
        block.style.background = 'green';
        break;
        
        default: 
        var block = document.querySelector('#boxes');
        block.style.background = 'black';
        break;
        
    } 
}

// store user input in Javascript
var formBtn = document.querySelector("#submit");
formBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var address = document.querySelector("#address").value;
    var zipcode = document.querySelector("#zipcode").value;
    document.getElementById('textName').innerHTML= `Name:  ${name}`;
    document.getElementById('textAddress').innerHTML= `Address:  ${address}`;
    document.getElementById('textZipcode').innerHTML= `ZipCode:  ${zipcode}`;
    console.log(name, address,zipcode)
})


