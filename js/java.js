let username="cris";
let password="4321";
let user_nick=[];//global
let user_level;//global

//////////////////////////////////////////////////////////////////////////////////
window.onload=function myFunction() {
    var popup = document.getElementById("myPopup"); 
    popup.classList.toggle("show");//this will show the popup
    let par=document.createElement('p');
    par.innerHTML="<br>";
    popup.appendChild(par);
    let par1=document.createElement('p');
    let pop_up=document.createElement('input');
    pop_up.setAttribute('placeholder', 'Enter your nickname');// attrib placeholder
    pop_up.setAttribute("id","pop_m1");//give id to the first input
    par1.innerText="Enter your nickname : ";
    popup.appendChild(par1);
    par1.appendChild(pop_up);
    let par2=document.createElement('p');
    par2.innerHTML="<br>";
    popup.appendChild(par2);
    let par3=document.createElement('p');
    par3.innerText="Choose your level : ";
    var list1 = ["Choose your level","Easy","Medium","Advance"];
    var selectList = document.createElement("select");// drop down list
    selectList.setAttribute("id", "pop_m2");// id to the second
    selectList.setAttribute("class", "list_1");
    popup.appendChild(par3);//https://stackoverflow.com/questions/24181244/create-a-drop-down-list-with-options-through-document-createelement
    // (create drop down menu)
    for (var i = 0; i < list1.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("id","option1");
        option.setAttribute("value",list1[i]);
        option.text = list1[i] + " Level";//options to drop list
        selectList.appendChild(option);
    }
    par3.appendChild(selectList);
    let input1=document.getElementById("pop_m1");
    let input2=document.getElementById("pop_m2");
    let par5=document.createElement('p');///must be global out of function that change the drop list
    par5.innerHTML="<br>";
    popup.appendChild(par5);
    document.getElementById("pop_m2").addEventListener("change",function(){ 
      if ((input1.value).length==0 && input2.value!=list1[0]){
        par5.innerHTML="Enter both values";
      }
      else if ((input1.value).length!=0 && input2.value!=list1[0]){
          let but=document.createElement('button');
          but.innerText="Login";
          but.setAttribute("id","but1");
          but.classList="but_1";//class to button
          popup.appendChild(but);
          par5.innerHTML="<br>";
          document.getElementById("but1").addEventListener("click",function(){
            user_nick.push(input1.value);
            user_level=input2.value;
            popup.classList.toggle("show2");//this will hide the popup
            if (user_nick.length!=0){
              let sound=document.createElement('audio');//this is the main audio
              sound.src="music/good_bad.mp3";
              sound.setAttribute("id","my_audio");
              sound.setAttribute("loop","true");
              document.body.appendChild(sound);
              document.getElementById("my_audio").play();///the main music
              var api = document.createElement('script');//becouse will be very big the script i will add and other script file
              api.setAttribute("id","api");
              api.setAttribute('src','js/script44.js',);   https://bobbyhadz.com/blog/javascript-create-script-element
              api.setAttribute('async', '');
              document.head.appendChild(api);//i put it to the head
            }
          });
      }
    });
}
