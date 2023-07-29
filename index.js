function choose(id){
    
  var c = document.getElementById(id);
  if(c.className === "circle" && nonSelect() == ""){
    c.className = "coloredCircle"
  }else{
    c.className = "circle" 
  }
  
}

function nonSelect(){
    var ci;
    let res = "";
    let i =1;
    while (res == "" && i<6) {
        ci = document.getElementById(i.toString()); 
    if(ci.className === "coloredCircle"){
        res = i.toString();
    }
         i++;
      }
    return res;
}

function thankU(){
     if(nonSelect()!= ""){
        const newCard = document.getElementById("rate");   
        html = "";
         html = ` <section id="rate" style="display:flex; flex-direction:column
           ; justify-content:center; align-items:center" class="rate">
         <img  style="height: 4rem; width: 6rem; padding:1rem"  src="images/illustration-thank-you.svg">
             
            <div style="color: hsl(25, 97%, 53%); font-size: 9px; background-color: hsl(216, 12%, 54%);
            padding-left:0.5rem ; padding-right:0.5rem ; border-radius:10px"
            >
            You selected   ${nonSelect()} out of 5</div>

            <div style="font-size:16px; padding-top:1rem">  Thank you! </div>

            <p style="padding-left:0.5rem ">  We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch! </p>
         </section>
       
         `
         newCard.innerHTML = html;
     }
    
}