function desenharCanvas() {
    tabuleiro.lineWidth=8
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.fillStyle= "#F3F5FC"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.fillRect(0,0,1000,500)
    tabuleiro.beginPath();
    tabuleiro.moveTo(750,200)
    tabuleiro.lineTo(450,200)
    tabuleiro.stroke()
    tabuleiro.closePath()
  }

  function desenharLinhas() {
    tabuleiro.lineWidth=6
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    let largura=600/palavraSecreta.length
    for (let i=0;i<palavraSecreta.length;i++){
      tabuleiro.moveTo(300+(largura*i),320)
      tabuleiro.lineTo(350+(largura*i),320)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
  }

  function escreverLetraCorreta(index){
     tabuleiro.font = "bold 50px Inter"
     tabuleiro.lineCap = "round"
     tabuleiro.fillStyle = "#0A3871"
     let largura = 600/palavraSecreta.length
     tabuleiro.lineWidth = 6
     tabuleiro.fillText(palavraSecreta[index],305 + (largura * index), 310)
  }

  function escreverLetraIncorreta(letra,erros){
     tabuleiro.font = "bold 30px Inter"
     tabuleiro.lineCap = "round"
     tabuleiro.fillStyle = "#8B0000"
     
     tabuleiro.lineWidth = 6
     tabuleiro.fillText(letra,420 + (30 * (10 - erros)), 400,30)
     
  }
  
  //sustentação do boneco
  function desenhaPoste() {
    tabuleiro.moveTo(600,10);
    tabuleiro.lineTo(520,20);
    tabuleiro.stroke();
  }
  
  function desenhaBarra() {
    tabuleiro.moveTo(520,200);
    tabuleiro.lineTo(520,18);
    tabuleiro.stroke();
  }
  //base da forca
  function desenhaApoio(){
    tabuleiro.moveTo(600, 30);
    tabuleiro.lineTo(600,10);
    tabuleiro.stroke();
  }
  
  //Boneco forca
  function desenhaCabeca(){
    tabuleiro.strokeStyle = "blue"
    tabuleiro.beginPath();
    tabuleiro.arc(600,50,20,0, 2 * Math.PI);
    tabuleiro.stroke();
  } 

  function desenhaTronco() {
    tabuleiro.strokeStyle = "blue"
    tabuleiro.moveTo(600,150);
    tabuleiro.lineTo(600,70);
    tabuleiro.stroke();
  }

  function desenhaBraco1(){
    tabuleiro.strokeStyle = "blue"
    tabuleiro.moveTo(597,80);
    tabuleiro.lineTo(570,100); 
    tabuleiro.stroke();
  }

  function desenhaBraco2(){
    tabuleiro.strokeStyle = "blue"
    tabuleiro.moveTo(625,100);
    tabuleiro.lineTo(600,80); 
    tabuleiro.stroke();
  } 

  function desenhaPerna1(){
    tabuleiro.strokeStyle = "blue"
    tabuleiro.moveTo(600,150);
    tabuleiro.lineTo(580,170); 
    tabuleiro.stroke();
  }

  function desenhaPerna2(){
    tabuleiro.strokeStyle = "blue"
    tabuleiro.moveTo(625,170);
    tabuleiro.lineTo(600,150); 
    tabuleiro.stroke();
  }

  function desenhaCorda(){
    tabuleiro.strokeStyle ="red"
    tabuleiro.moveTo(650,78);
    tabuleiro.lineTo(550,78); 
    tabuleiro.stroke();
  }
  function limpaTela(){
    
    tabuleiro.clearRect(0,0, 1000, 500)
  }


  

 