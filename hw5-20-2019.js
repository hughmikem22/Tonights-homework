var treeDiv= document.getElementById("tree");
var container = document.createElement("div");

let thatMan = document.createElement('img');
thatMan.src = '../images/pollock9.jpg'
thatMan.classList.add('w3-width', 'w3-shadow-hover');
thatMan.classlist
thatMan.style.display = 'block';                   // block and margin and 0 auto is align
thatMan.style.margin = "0 auto";

treeDiv.appendChild(thatMan);
treeDiv.appendChild(container);





var request = new XMLHttpRequest();



request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function(){
    let data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400){
        data.forEach(users => {
            
            let name = document.createElement('div');
            let header1 = document.createElement('h1');
            header1.textContent = users.name;
            header1.style.fontFamily = 'Impact';
            header1.style.backgroundColor = 'blue';
            header1.classList.add('w3-animate-bottom','w3-hover-red');
            header1.style.textAlign = 'center';


            let username =  document.createElement('div');
            let header2 = document.createElement('h2');
            header2.textContent = users.username;
            header2.style.fontFamily = 'Impact';
            header2.style.backgroundColor = 'red';
            header2.classList.add('w3-animate-bottom','w3-hover-blue');
            header2.style.textAlign = 'left'
            
            

            let email = document.createElement('div');
            let header3 = document.createElement('h2');
            header3.textContent = users.email;
            header3.style.fontFamily = 'impact';
            header3.style.backgroundColor = 'blue';
            header3.classList.add('w3-animate-bottom','w3-hover-red');
            header3.style.textAlign = 'left'

            let phone = document.createElement('div');
            let header4 = document.createElement('h2');
            header4.textContent = users.phone;
            header4.style.fontFamily = 'impact';
            header4.style.backgroundColor = 'red';
            header4.classList.add('w3-animate-bottom','w3-hover-blue');
            header4.style.textAlign = 'left';

            let address = document.createElement('div');
            let header5 = document.createElement('h2');
            header5.textContent = 'City: ' + users.address.city;
            header5.style.fontFamily = 'impact';
            header5.style.backgroundColor = 'blue';
            header5.classList.add('w3-animate-bottom','w3-hover-red');
            header5.style.textAlign = 'left';

            let address1 = document.createElement('div');
            let header6 = document.createElement('h2');
            header6.textContent = 'Street: ' + users.address.street;
            header6.style.fontFamily = 'impact';
            header6.style.backgroundColor = 'red';
            header6.classList.add('w3-animate-bottom','w3-hover-blue');
            header6.style.textAlign = 'left';

            let address2 = document.createElement('div');
            let header7 = document.createElement('h2');
            header7.textContent = 'Zipcode: ' +' '+ users.address.zipcode;
            header7.style.fontFamily = 'impact';
            header7.style.backgroundColor = 'blue';
            header7.classList.add('w3-animate-bottom','w3-hover-red');
            header7.style.textAlign = 'left';


            container.appendChild(name);                        
            name.appendChild(header1);
            name.appendChild(header2);
            name.appendChild(header3);
            name.appendChild(header4);
            name.appendChild(header5);
            name.appendChild(header6);
            name.appendChild(header7);

            
            
            
            
            

            

            
        });
    }
}

request.send();