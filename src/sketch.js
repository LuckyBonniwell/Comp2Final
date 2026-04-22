let playerX = 200
function changeStates(){
  if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)){
    playerState = "idle"
  } else if (keyIsDown(LEFT_ARROW)){
    playerState = "walkLeft"
  } else if (keyIsDown(RIGHT_ARROW)){
    playerState = "walkRight"
  } else {
    playerState = "idle"
  }
  if (keyIsDown(UP_ARROW) && keyIsDown(DOWN_ARROW)){
    blockState = "mid"
  } else if (keyIsDown(UP_ARROW)){
    blockState = "up"
  } else if (keyIsDown(DOWN_ARROW)){
    blockState = "down"
  } else {
    blockState = "mid"
  }
  if (blockState === "mid" && keyIsDown(88)){
    dodgeState = "crouch"
  } else if (blockState === "up" && keyIsDown(88)){
    dodgeState = "sideStep"
  } else if (blockState === "down" && keyIsDown(88)){
    dodgeState = "crouch"
  } else {
    dodgeState = "none"
  }
}
function playerMovement(){
  if (playerState === "walkRight"){
    playerX += 3
  }
  if (playerState === "walkLeft"){
    playerX -= 3
  }
}
function setup() {
  createCanvas(1463,600);
  let playerState = "idle"
  let blockState = "mid"
  let dodgeState = "none"
  let playerX = 200
}

function draw() {
  background(150);
  changeStates();
  playerMovement();
  fill(255);
  circle(playerX,400,50);
  // console.log(playerState);
  // console.log(blockState);
  // console.log(dodgeState);
}
