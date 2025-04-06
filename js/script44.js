let bandit_lives;//will change the lives of bandits according to user level
let level;//will change the timer according to user level
let user_lives;//the lives has the user from java.js
if (user_level=="Easy"){
    user_lives=5;
    level=2;//timer set in 2 min
    bandit_lives=3;
}
else if(user_level=="Medium"){
    user_lives=4;
    level=1//timer set in one min
    bandit_lives=4;
}
else if(user_level=="Advance"){
    user_lives=3;
    level=1
    bandit_lives=5;
}
// let bandit_lives=1;//MUST BE REMOVED
// let user_lives=1;//MUST BE REMOVED
// let level =1;//must be removed
let shoot_to_target=0;//shoots found target 
let shoot_no_target=0;//shoots didnt found target
let bandit_jack_lives=bandit_lives;//banditos lives
let bandit_joe_lives=bandit_lives;
let bandit_john_lives=bandit_lives;
let checkboxv=0;//the reload checkbox;
let reload=4;//revolver bullets
let log_window=[];
let timer_rec;
///////GENERAL TIMER/GAME TIMER////////////////////////////////////
// let time_log=[];
// let show_timer;
// let stopwatchTimer = 0;
// let stopwatchInterval;

// function startStopwatch() {
// stopwatchInterval = setInterval(() => {
// stopwatchTimer++;
// let minutes = Math.floor(stopwatchTimer / 60);
// let seconds = stopwatchTimer % 60;
// if(seconds<10){
//     seconds="0"+seconds;
// }
// if(minutes<10){
//     minutes="0"+minutes;
// }
// let value1=minutes + ":" + seconds;
// time_log.push(value1);//we are appending the values to array time_log to use the last one

// console.log(value1);
// }, 1000);
// }
// function stopStopwatch() {
// clearInterval(stopwatchInterval);
// }
// function resetStopwatch() {
// stopStopwatch();
// stopwatchTimer = 0;
// console.log("Stopwatch reset");
// }
///////timer for life//////////////////////////////////////////////
var x;
function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
   x= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(timer==0){
            timer = duration; //reset the timer
            if(user_lives>0){
            user_lives--;//remove one life of user

            let elem=document.getElementById("life_d");
                            elem.remove();
            }                
            console.log(user_lives);
        }
        window1_par4.innerHTML=user_lives;// show the lives 
    }, 1000); 
   
}
// window.onload = function () {
// var onemin = 60 * 1,
//     display = document.querySelector('#win_1');
// startTimer(onemin, display);
// };
function start() {
    var twomin = 60 * level,
        display = document.querySelector('#win_1');// will show the time to the log window
    startTimer(twomin, display);
    };
  
  function stop() {
    clearInterval(x);
  } /* Stop */

//////////////////////////////////////////////////////////
//////////////////////Log window//////////////////////////
let window1=document.createElement('div');
window1.classList="window1";
let window1_par1=document.createElement('p');
window1_par1.innerText="Time to lose a life :";
window1.appendChild(window1_par1);
let window1_par2=document.createElement('p');
window1_par2.setAttribute("id","win_1");//WILL SHOW THE TIME REMAIN TO LOSE A LIFE
window1.appendChild(window1_par2);
let window1_par3=document.createElement("p");
window1_par3.innerText="Remain lives :"
window1.appendChild(window1_par3);
let window1_par4=document.createElement("p");//the value is taking from startimer
window1.appendChild(window1_par4);
let window1_par5=document.createElement("p");
for(var i=0;i<user_lives;i++){//the lives of user
    let life_i=document.createElement('img');
    life_i.src=`img/heart.png`;
    life_i.classList="life_i";
    life_i.setAttribute("id","life_d");
    window1_par5.appendChild(life_i);   
}
window1.appendChild(window1_par5);
let window2=document.createElement('div');
window2.classList="window2";
window2.setAttribute("id","win_2");
let window3=document.createElement('div');
window3.classList="window3";
window3.setAttribute("id","win_3");
window3.innerHTML="";
window2.appendChild(window3);
window1.appendChild(window2);
document.body.appendChild(window1);
//////////////////////////////////////////////////////////
///////////The banditos////////////////////////////////               
let bandit_images=["img/Jack.png","img/Joe.png","img/John.png"];// banditos images
let div_cactus=document.createElement("img");
div_cactus.setAttribute("onload","start()");////////////////this will start the countdown
div_cactus.src=`img/cactus.svg`;
div_cactus.classList="cactus";
document.body.appendChild(div_cactus);
let revolver_img=["img/SVG/gun_cylinder_0.svg","img/SVG/gun_cylinder_1.svg","img/SVG/gun_cylinder_2.svg","img/SVG/gun_cylinder_3.svg","img/SVG/gun_cylinder_4.svg"];
let revolver=document.createElement('img');
revolver.src=revolver_img[0];
revolver.classList="revolver";
// revolver.setAttribute("onload","startStopwatch()");//will start the game timer
document.body.appendChild(revolver);
let saloon=document.createElement("img");
saloon.src=`img/saloon.svg`;
saloon.classList="saloon";
let frame=document.createElement('div');
frame.setAttribute("id","frame");
frame.appendChild(saloon);
document.body.appendChild(frame);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// JACK ///////////////////////////////////////////////////////////
let banditos1=document.createElement('div');//main div
banditos1.classList="banditos1";
let banditos1_2=document.createElement('div');//div with bandit image
banditos1_2.classList="banditos1_2";
let banditos1_img=document.createElement('img');
banditos1_img.src=`img/Jack.png`;
banditos1_img.classList="bandit_rand";
banditos1_2.appendChild(banditos1_img);//append the image of bandit to div
banditos1.appendChild(banditos1_2);//append div with images to main div
let banditos1_para=document.createElement('p');
banditos1_para.innerHTML="<br>";
banditos1.appendChild(banditos1_para);
let banditos1_para2=document.createElement('div');
banditos1_para2.classList="banditos1_para2";
let banditos1a=document.createElement('a');
banditos1a.innerText="Jack";
banditos1a.style.fontWeight="bold";
banditos1_para2.appendChild(banditos1a);
banditos1.appendChild(banditos1_para2);
let banditos1_div=document.createElement('div');//div with heart images 
banditos1_div.classList="banditos1_div";
for(var i=0;i<bandit_jack_lives;i++){
    let banditos1_life=document.createElement('img');
    banditos1_life.src=`img/heart.png`;
    banditos1_life.style.width="30px";
    banditos1_life.setAttribute("id","life_b1");// to can remove the hearts we must give the one id
    banditos1_div.appendChild(banditos1_life);//append the images to div
}
banditos1.appendChild(banditos1_div);//append to the main div the div with the hearts
document.body.appendChild(banditos1);// append all
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////   JOE   ///////////////////////////////////////////////////
let banditos2=document.createElement('div');//main div
banditos2.classList="banditos2";
let banditos2_2=document.createElement('div');//div with bandit image
banditos2_2.classList="banditos1_2";
let banditos2_img=document.createElement('img');
banditos2_img.src="img/Joe.png";
banditos2_img.classList="bandit_rand";
banditos2_2.appendChild(banditos2_img);//append the image of bandit to div
banditos2.appendChild(banditos2_2);//append div with images to main div
let banditos2_para=document.createElement('p');
banditos2_para.innerHTML="<br>";
banditos2.appendChild(banditos2_para);
let banditos2_para2=document.createElement('div');
banditos2_para2.classList="banditos1_para2";
let banditos2a=document.createElement('a');
banditos2a.innerText="Joe";
banditos2a.style.fontWeight="bold";
banditos2_para2.appendChild(banditos2a);
banditos2.appendChild(banditos2_para2);
let banditos2_div=document.createElement('div');//div with heart images 
banditos2_div.classList="banditos1_div";
for(var i=0;i<bandit_joe_lives;i++){
    let banditos2_life=document.createElement('img');
    banditos2_life.src=`img/heart.png`;
    banditos2_life.style.width="30px";
    banditos2_life.setAttribute("id","life_b2");// to can remove the hearts we must give the one id
    banditos2_div.appendChild(banditos2_life);//append the images to div
}
banditos2.appendChild(banditos2_div);//append to the main div the div with the hearts
document.body.appendChild(banditos2);// append all
///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// JOHN /////////////////////////////////////////////////////////////
let banditos3=document.createElement('div');//main div
banditos3.classList="banditos3";
let banditos3_2=document.createElement('div');//div with bandit image
banditos3_2.classList="banditos1_2";
let banditos3_img=document.createElement('img');
banditos3_img.src=`img/John.png`;
banditos3_img.classList="bandit_rand";
banditos3_2.appendChild(banditos3_img);//append the image of bandit to div
banditos3.appendChild(banditos3_2);//append div with images to main div
let banditos3_para=document.createElement('p');
banditos3_para.innerHTML="<br>";
banditos3.appendChild(banditos3_para);
let banditos3_para2=document.createElement('div');
banditos3_para2.classList="banditos1_para2";
let banditos3a=document.createElement('a');
banditos3a.innerText="John";
banditos3a.style.fontWeight="bold";
banditos3_para2.appendChild(banditos3a);
banditos3.appendChild(banditos3_para2);
let banditos3_div=document.createElement('div');//div with heart images 
banditos3_div.classList="banditos1_div";
for(var i=0;i<bandit_john_lives;i++){
    let banditos3_life=document.createElement('img');
    banditos3_life.src=`img/heart.png`;
    banditos3_life.style.width="30px";
    banditos3_life.setAttribute("id","life_b3");// to can remove the hearts we must give the one id
    banditos3_div.appendChild(banditos3_life);//append the images to div
}
banditos3.appendChild(banditos3_div);//append to the main div the div with the hearts
document.body.appendChild(banditos3);// append all
///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// THE SHOOTING DIV ////////////////////////////////////////////////////////////
let main_div=document.createElement('div');
main_div.setAttribute("id","main_div");
let bandit_id_img=document.createElement('div');
bandit_id_img.setAttribute("id","bandit_id_img");
let bandit_rand=document.createElement('img');//THE SRC WILL TAKE IT LATER RANDOM
bandit_rand.style.height="60px";
bandit_rand.setAttribute("id","bandit_id");
bandit_id_img.appendChild(bandit_rand);
main_div.appendChild(bandit_id_img);
frame.appendChild(main_div);
document.body.appendChild(frame);
///////////////////////////////////////////////////////////////////////////////////////////////////
class Bandit{
    name;
    image;
    lives;
    constructor(name,image,lives){
        this.name=name;
        this.image=image;
        this.lives=lives;
        }
        setShot(reload){
           
            function show_image1() {

                
                // let bandit_image=bandit_images;
                let bandit_name=[jack.name,joe.name,john.name];//array with all the names
                
                let rand1=Math.floor(Math.random()*bandit_images.length);// random choose from array
                if(bandit_images.length>0){
                bandit_rand.src=bandit_images[rand1];// the src is the random
                bandit_name=bandit_name[rand1];//the name is the random
                bandit_rand.style.bottom="50px";
                bandit_rand.left="185px";
                // bandit_id_img.appendChild(bandit_rand);//NO NO NO WILL KEEP APPENDING
                }
                function show_image2(){
                    let cord=[["185px","175px"],["50px","185px"],["50px","535px"],["185px","535px"],["185px","465px"],
                    ["240px","320px"],["50px","320px"],["50px","100px"],["185px","105px"],["50px","450px"]];//the possitions
                    let change=document.getElementById("bandit_id_img");
                    let rand2=Math.floor(Math.random()*cord.length);// random choise the possitions
                    if(bandit_images.length>0){
                    change.style.bottom=cord[rand2][0];
                    change.style.right=cord[rand2][1];
                    }
                };//show image2
                  setTimeout(show_image2, 4000);  
                  // after is appendet we are changing the posssition(SOS)  
                  
                };//show image1 
                 setInterval(show_image1, 3000);        
        }//set shot
    
}//class
let jack=new Bandit("Jack",`img/Jack.png`,bandit_jack_lives);
let joe=new Bandit("Joe",`img/Joe.png`,bandit_joe_lives);
let john=new Bandit("John",`img/John.png`,bandit_john_lives);
jack.setShot(reload);
joe.setShot(reload);
john.setShot(reload);
console.clear();
const eleMain = document.querySelector("#main_div");// this is the main frame of the the game
const elebandit=document.querySelector("#bandit_id_img");//and this is the frame of the bandits
eleMain.addEventListener("click", ev => {
    let total_shots=shoot_no_target+shoot_to_target;
            if (bandit_jack_lives==0 && bandit_joe_lives==0 && bandit_john_lives==0 || user_lives==0){
                stop();///this will stop the counter
                // stopStopwatch();
                let popup2=document.getElementById("myPopup3");
                popup2.style.width="900px";
                let pop2_div=document.createElement('div');
                 let game_over=document.createElement('p');
                game_over.innerText="GAME OVER";
                game_over.style.fontWeight="bold";
                game_over.style.fontSize="30px";
                pop2_div.appendChild(game_over);
                let par_empty5=document.createElement('p');
                par_empty5.innerHTML="<br>";
                pop2_div.appendChild(par_empty5);
                let par_pop2=document.createElement('p');
                par_pop2.style.fontWeight="bold";
                par_pop2.style.fontSize="30px";
                if(bandit_jack_lives==0 && bandit_joe_lives==0 && bandit_john_lives==0){
                par_pop2.innerText="You Won !!!";
                par_pop2.style.color="green";
                }
                else if(user_lives==0){
                    par_pop2.innerText="You Lost!!!";
                    par_pop2.style.color="red";
                }
                pop2_div.appendChild(par_pop2);
               ////////////////////////////////////////////////////
               let par_empty3=document.createElement('p');
               par_empty3.innerHTML="<br>";
               let par_pop3=document.createElement('p');
               par_pop3.innerText="Game statistics";
               par_pop3.style.fontWeight="bold";
               par_pop3.style.fontSize="25px";
               let par_empty=document.createElement('p');
               par_empty.innerHTML="<br>";
               let par_pop4=document.createElement('p');
               par_pop4.innerHTML="Total shoots : "+total_shots; 
               let par_empty1=document.createElement('p');
               par_empty1.innerHTML="<br>";
               let par_pop5=document.createElement('p');
               par_pop5.innerHTML="Shoots found target : "+shoot_to_target;
               let par_empty2=document.createElement('p');
               par_empty2.innerHTML="<br>";
               let par_pop6=document.createElement('p');
               par_pop6.innerHTML="Shots found No target : "+shoot_no_target;
               let par_empty7=document.createElement('p');
               par_empty7.innerHTML="<br>";
               let par_empty8=document.createElement('p');
               par_empty8.innerHTML="<br>";
               let par_time=document.createElement('p');
            //    par_time.innerHTML=time_log.pop();
               let par_empty9=document.createElement('p');
               par_empty9.innerHTML="<br>";
               let pop3_div=document.createElement('div');
               pop3_div.classList="div_but";
               let par_pop7=document.createElement("button");
               par_pop7.innerText="Play again";
               par_pop7.classList="but_1";
               par_pop7.setAttribute("id","but_again");
               let par_pop8=document.createElement("button");
               par_pop8.innerText="Quit";
               par_pop8.classList="but_1";
               par_pop8.setAttribute("id","but_quit");
               pop2_div.appendChild(par_empty3);
               pop2_div.appendChild(par_pop3);
               pop2_div.appendChild(par_empty)
               pop2_div.appendChild(par_pop4);
               pop2_div.appendChild(par_empty1);
               pop2_div.appendChild(par_pop5);
               pop2_div.appendChild(par_empty2);
               pop2_div.appendChild(par_pop6);
               pop2_div.appendChild(par_pop7);
               pop2_div.appendChild(par_empty7);
               pop3_div.appendChild(par_pop7);
               pop2_div.appendChild(par_empty8);
               pop2_div.appendChild(par_time);
               pop2_div.appendChild(par_empty9);
               pop3_div.appendChild(par_pop8);
               popup2.appendChild(pop2_div);
               popup2.appendChild(pop3_div);
               popup2.classList.toggle("show5");
               let again=document.getElementById("but_again");
               again.addEventListener("click",function(){
               popup2.classList.toggle("show6");
               location.reload();
               let elem5=document.getElementById("div_reload");
               elem5.remove();
               
                });
               let quit=document.getElementById("but_quit");
               quit.addEventListener("click",function(){
               popup2.classList.toggle("show6");
               let elem5=document.getElementById("div_reload");
               elem5.remove();
               let popup4=document.getElementById("myPopup4");
               popup4.style.width="900px";
               let popup4_par1=document.createElement('p');
               popup4_par1.innerHTML="<br>";
               let popup4_par2=document.createElement('p');
               popup4_par2.innerHTML="<br>";
               let popup4_par3=document.createElement('p');
               popup4_par3.innerHTML="Bye bye";
               popup4_par3.style.fontSize="60px";
               popup4.appendChild(popup4_par1);
               popup4.appendChild(popup4_par2);
               popup4.appendChild(popup4_par3);
               popup4.classList.toggle("show8");
               });
               
               
            }
            else{     
                if(reload>0){ 
                reload--;// every shoot takes one bullet from the revolver 
                let gun_shoot=new Audio("music/single_gun.mp3").play();
                if (ev.target === eleMain) {//you didnt find target
                shoot_no_target++;
                log_window.unshift("Shoot no target");//adds to log window(you shoot but no banditos)
                    if(log_window.length>10){
                        log_window.pop();//with overflow: hidden; we dont need this but just in case
                    }
                // let test=document
                window2.innerHTML=log_window.join("<br>");
                }  
                else if (ev.target !== eleMain) {//you found target
                    shoot_to_target++;
                    let shot=document.getElementById("bandit_id");  //now we must find who is the target you found
                                        
                            if (shot.src.search("Jack")>0 && bandit_jack_lives!=0){
                            jack.lives--;
                            log_window.unshift("You shot Jack");//will add to the first possition of array log_window
                            if(log_window.length>10){
                                log_window.pop();
                            }
                            window2.innerHTML="";
                            window2.innerHTML=log_window.join("<br>"); //join br to show the array as list
                                if (jack.lives==0){
                                    let elem=document.getElementById("life_b1");
                                        elem.remove();//will remove a life image
                                        bandit_jack_lives--;
                                        jack.lives=4;
                                        if(bandit_jack_lives==0){
                                            banditos1_img.src=`img/skull.png`;
                                            let index = bandit_images.indexOf('img/Jack.png');//becouse will be be updated after slice we dont know the index 
                                            bandit_images.splice(index, 1);//if we know the index from above 
                                        } 
                                }
                            } 
                            else if (shot.src.search("Joe")>0 && bandit_joe_lives!=0 ){
                                joe.lives--;
                                log_window.unshift("You shot Joe");//append to log file
                                if(log_window.length>10){
                                    log_window.pop();
                                }
                                window2.innerHTML="";
                                window2.innerHTML=log_window.join("<br>");
                                if (joe.lives==0){
                                    let elem=document.getElementById("life_b2");
                                        elem.remove();
                                        bandit_joe_lives--;
                                        joe.lives=4;
                                        if(bandit_joe_lives==0){
                                            banditos2_img.src=`img/skull.png`;
                                            let index = bandit_images.indexOf('img/Joe.png');//becouse will be be ubdated after slice we dont know the index
                                            bandit_images.splice(index, 1);//  if we know the index from above 
                                        } 
                                }
                            } 
                            else if (shot.src.search("John")>0 && bandit_john_lives!=0){
                                john.lives--;
                                log_window.unshift("You shot John");
                                if(log_window.length>10){
                                    log_window.pop();
                                }
                                window2.innerHTML="";
                                window2.innerHTML=log_window.join("<br>");
                                if (john.lives==0){
                                    let elem=document.getElementById("life_b3");
                                        elem.remove();//removes one heart of bantit
                                        bandit_john_lives--;//takes one life from the main lives 
                                        john.lives=4;//reseting the lives to 4(needs 4 bullets to take a life)
                                        if(bandit_john_lives==0){
                                            banditos3_img.src=`img/skull.png`;
                                            let index = bandit_images.indexOf('img/John.png');//becouse will be be ubdated after slice we dont know the index
                                            bandit_images.splice(index, 1);//if we know the index from above     
                                        } 
                                }
                            }

                }
            }
    }
 if (reload==4){//4 bullets
    revolver.src=revolver_img[0];
}
else if(reload==3){
    revolver.src=revolver_img[1];
}
else if(reload==2){
    revolver.src=revolver_img[2];
}
else if(reload==1){
    revolver.src=revolver_img[3];
}
else if(reload==0){//empty
    revolver.src=revolver_img[4];
    if(checkboxv==0){
        let popup2=document.getElementById("myPopup2");//the reload popup
        let pop2_div=document.createElement('div');
        pop2_div.setAttribute("id","div_reload");
        let par_pop2=document.createElement('p');
        par_pop2.innerText="Press R to reload";
        let par_pop3=document.createElement('p');
        par_pop3.innerText="Click the checkbox to disable this message";
        let par_pop4=document.createElement("INPUT");
        par_pop4.setAttribute("type", "checkbox");
        par_pop4.setAttribute("id","checkbox");
        pop2_div.appendChild(par_pop2);
        pop2_div.appendChild(par_pop3);
        pop2_div.appendChild(par_pop4);
        popup2.appendChild(pop2_div);
        popup2.classList.toggle("show1");//show popup
       //////////////checkbox 
            var checkBox = document.getElementById("checkbox");//THE CHECKBOX
                checkBox.onclick = function(){ 
                checkboxv=1;
                popup2.classList.toggle("show3");//hide popup
                let elem5=document.getElementById("div_reload");
                elem5.remove();
            };
            let total_shots=shoot_no_target+shoot_to_target;
            if (bandit_jack_lives==0 && bandit_joe_lives==0 && bandit_john_lives==0 || user_lives==0){
                stop();
                // stopStopwatch();
                let popup2=document.getElementById("myPopup3");
                popup2.style.width="900px";
                let pop2_div=document.createElement('div');
                let game_over=document.createElement('p');
                game_over.innerText="GAME OVER";
                game_over.style.fontWeight="bold";
                game_over.style.fontSize="30px";
                pop2_div.appendChild(game_over);
                let par_empty5=document.createElement('p');
                par_empty5.innerHTML="<br>";
                pop2_div.appendChild(par_empty5);
                let par_pop2=document.createElement('p');
                par_pop2.style.fontWeight="bold";
                par_pop2.style.fontSize="30px";
                if(bandit_jack_lives==0 && bandit_joe_lives==0){
                par_pop2.innerText="You Won !!!";
                par_pop2.style.color="green";
                }
                else if(user_lives==0){
                    par_pop2.innerText="You Lost!!!";
                    par_pop2.style.color="red";
                }
                pop2_div.appendChild(par_pop2);
               ////////////////////////////////////////////////////////
               let par_empty3=document.createElement('p');
               par_empty3.innerHTML="<br>";
               let par_pop3=document.createElement('p');
               par_pop3.innerText="Game statistics";
               par_pop3.style.fontWeight="bold";
               par_pop3.style.fontSize="25px";
               let par_empty=document.createElement('p');
               par_empty.innerHTML="<br>";
               let par_pop4=document.createElement('p');
               par_pop4.innerHTML="Total shoots : "+total_shots; 
               let par_empty1=document.createElement('p');
               par_empty1.innerHTML="<br>";
               let par_pop5=document.createElement('p');
               par_pop5.innerHTML="Shoots found target : "+shoot_to_target;
               let par_empty2=document.createElement('p');
               par_empty2.innerHTML="<br>";
               let par_pop6=document.createElement('p');
               par_pop6.innerHTML="Shots found No target : "+shoot_no_target;
               let par_empty7=document.createElement('p');
               par_empty7.innerHTML="<br>";
               let par_empty8=document.createElement('p');
               par_empty8.innerHTML="<br>";
               let par_time=document.createElement('p');
            //    par_time.innerHTML=time_log.pop();
               let par_empty9=document.createElement('p');
               par_empty9.innerHTML="<br>";
               let pop3_div=document.createElement('div');
               pop3_div.classList="div_but";
               let par_pop7=document.createElement("button");
               par_pop7.innerText="Play again";
               par_pop7.classList="but_1";
               par_pop7.setAttribute("id","but_again");
               let par_pop8=document.createElement("button");
               par_pop8.innerText="Quit";
               par_pop8.classList="but_1";
               par_pop8.setAttribute("id","but_quit");
               pop2_div.appendChild(par_empty3);
               pop2_div.appendChild(par_pop3);
               pop2_div.appendChild(par_empty)
               pop2_div.appendChild(par_pop4);
               pop2_div.appendChild(par_empty1);
               pop2_div.appendChild(par_pop5);
               pop2_div.appendChild(par_empty2);
               pop2_div.appendChild(par_pop6);
               pop2_div.appendChild(par_pop7);
               pop2_div.appendChild(par_empty7);
               pop3_div.appendChild(par_pop7);
               pop2_div.appendChild(par_empty8);
               pop2_div.appendChild(par_time);
               pop2_div.appendChild(par_empty9);
               pop3_div.appendChild(par_pop8);
               popup2.appendChild(pop2_div);
               popup2.appendChild(pop3_div);
               popup2.classList.toggle("show5");
               let again=document.getElementById("but_again");
               again.addEventListener("click",function(){
               popup2.classList.toggle("show6");
               location.reload();
               let elem5=document.getElementById("div_reload");
               elem5.remove();
                });
                let quit=document.getElementById("but_quit");
               quit.addEventListener("click",function(){
               popup2.classList.toggle("show6");
               let elem5=document.getElementById("div_reload");
               elem5.remove();
               let popup4=document.getElementById("myPopup4");
               popup4.style.width="900px";
               let popup4_par1=document.createElement('p');
               popup4_par1.innerHTML="<br>";
               let popup4_par2=document.createElement('p');
               popup4_par2.innerHTML="<br>";
               let popup4_par3=document.createElement('p');
               popup4_par3.innerHTML="Bye bye";
               popup4_par3.style.fontSize="60px";
               popup4.appendChild(popup4_par1);
               popup4.appendChild(popup4_par2);
               popup4.appendChild(popup4_par3);
               popup4.classList.toggle("show8");
               });
            }     
    }/////////////the R reload
    document.addEventListener("keydown",(event) => {//FUNCTION =>
          const keyName = event.key;
      
          if (keyName === "r" || keyName === "R" ) {//by pressing the R
            reload=4;//we are setting back the bullets to 4
            revolver.src=revolver_img[0];//the gun is fully loaded
            let relo_gun=new Audio('music/reload1.mp3').play();//play the reload sound
            document.getElementById("myPopup2").style.visibility="hidden";//disapear the popup
          }
        });    
}        
  console.log(jack.lives,'jack');
  console.log(joe.lives,'joe');
  console.log(john.lives,'john');
  console.log(log_window,"log");
  console.log(bandit_images,"after");
})
