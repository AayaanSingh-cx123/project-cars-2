canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");

background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";

rover_image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fglobalperspectives.info%2Fclipart%2Fc%2Fclipart-car-from-above.html&psig=AOvVaw3XWpMZw486zbSuHcLRbydz&ust=1622008648163000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiJy72T5PACFQAAAAAdAAAAABAE";
rover_width=100;
rover_height=90;

car_image="http://www.clipartbest.com/cliparts/eiM/yzg/eiMyzgzRT.png";
car_width=100;
car_height=90;



rover_x=10;
rover_y=10;

car_x=10;
car_y=10;
function add() {
    background_imgTag  = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


    rover_imgTag  = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src =rover_image;

    car_imgTag  = new Image();
    car_imgTag.onload = uploadRover;
   car_imgTag.src =rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
function uploadCar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e)
{
    
    keyPressed = e.keyCode; 
    console.log(keyPressed);
     if(keyPressed == '38')
      { up();
         console.log("up");
     } 
     if(keyPressed == '40')
      { down();
         console.log("down");
         } 
         if(keyPressed == '37') 
         { left();
             console.log("left");
             }
              if(keyPressed == '39')
               { right(); console.log("right");
             } 
}
function up() {
    if(rover_y >=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed , x =" + rover_x + ", y ="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if(rover_y <=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed , x =" + rover_x + ", y ="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed , x =" + rover_x + ", y ="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if(rover_x <=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed , x =" + rover_x + ", y ="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}