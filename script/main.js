var name,email,phone,say,link,menu;



function send(){ 
 /*   name = document.getElementById("name").value; 
    email = document.getElementById("email").value; 
    phone = document.getElementById("phone").value; 
    say = document.getElementById("say").value; 
    Subject = name+"%0d%0aEmail: "+email+"%0d%0aContact No.: "+phone; 
 */       Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "goodjobprem@gmail.com", 
        Password: "17112004wed", 
        To: 'prem12937@gmail.com', 
        From: "goodjobprem@gmail.com", 
        Subject: "Sending Email using javascript", 
        Body: "Well that was easy!!", 
      }) 
        .then(function (message) { 
          alert("mail sent successfully") 
        }); 
}

function shortsend(){ 
    say = document.getElementById("say").value; 
    link = "mailto:prem3rdac@gmail.com?body="+say; 
    location.href = link; 
}


function openmenu(event){
        event.stopPropagation();
        menu = document.getElementById("menu-child").style;
        menu.height = "200vw";
        menu.width = "200vw";
        menu.bottom = "30vh";
        menu.right = "-75vw";
        menu.color = "rgba(0,0,0,.7)";
}
function closemenu(){
        menu = document.getElementById("menu-child").style;
        menu.height = "0vw";
        menu.width = "0vw";
        menu.bottom = "100vh";
        menu.right = "0vw";
        menu.color = "rgba(0,0,0,0)";
}
