function drawAnswerBox(){
  for(var i = 0; i < boxRowsNum; i++){
    for(var j = 0; j < categoryNames[i].length; j++){
      ctx.beginPath();
      ctx.rect(j * boxWidth , i * boxHeight, boxWidth, boxHeight);
      ctx.stroke();
      
      ctx.font = "14px Arial";
      ctx.fillText(categoryNames[i][j], 10 + j*boxWidth , 30 + i*boxHeight); 
    }
  }

}