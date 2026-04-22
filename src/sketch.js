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
}
function setup() {
  let playerState = "idle"
  let blockState = "mid"
}

function draw() {
  changeStates();
  console.log(playerState);
  console.log(blockState);
}
