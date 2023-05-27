function drawAnswerBox(){
  boxWidth = canvas.width / 4;
  boxHeight = canvas.height / 3;
  for(var i = 0; i < 4; i++){
    ctx.beginPath();
    ctx.rect(0 + i*boxWidth , 0, boxWidth, boxHeight);
    ctx.stroke();
    
    ctx.font = "14px Arial";
    ctx.fillText(kindomNames[i], 0 + i*boxWidth + 10 , 30);    
  }

  for(var i = 0; i < 3; i++){
    ctx.beginPath();
    ctx.rect(0 + i * boxWidth , canvas.height *2/3 , boxWidth, boxHeight);
    ctx.stroke();
    ctx.font = "14px Arial";
    ctx.fillText(kindomNames[i+4], 0 + i*boxWidth + 10 , canvas.height *2/3 + 30);      
  }
}
