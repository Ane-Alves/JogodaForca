
let palavras = ['ALURA', 'FORCA', 'HTML', 'ORACLE', 'JAVASCRIPT', 'LOGICA', 'PROGRAMA', 'DESAFIO'];
let tabuleiro = document.getElementById('forca').getContext('2d');

let palavraSecreta = "";

let letras = [];
let erros = 8;
let acertos = palavraSecreta;


function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
  }

  function verificarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
      letras.push(key)
      console.log(key)
      console.log(letras)
      return estado
    }
    else{
      estado = true
      letras.push(key)
      console.log(key)
      console.log(letras, "if true")
      return estado
    }
  }


  function adicionarLetraIncorreta(){
      erros -= 1
      console.log(erros)
  }
  function adicionaAcertos(){
    acertos++
  }

  function desenhaBoneco(erros){
     switch(erros) {
        case 7:
          desenhaCabeca()
          break;
        case 6:
          desenhaTronco()
          break;
        case 5:
          desenhaBraco1()
          break;
        case 4:
          desenhaBraco2()
          break;
        case 3:
          desenhaPerna1()
          break;
        case 2:
          desenhaPerna2()
          break;
        case 1:
          desenhaCorda()
          break;
          default:
            break;  
    }
  }

  function fimDeJogo(){
    
    if(erros == 1){
      tabuleiro.font ="bold 30px Inter"
      tabuleiro.fillText("Você Perdeu!!", 150, 80);
      return;
      
    }
  }
  function vencedor(){
    
    if(acertos == palavraSecreta.length){
      tabuleiro.font ="bold green 50px Inter"
      tabuleiro.fillText("Parabéns!", 150, 150); 
      letras = []
      
    }
  }
  

  function iniciaJogo(){
    document.getElementById("div-desaparece").style.display = 'none';
    
  
    
    escolherPalavraSecreta()
    desenharCanvas()
    desenharLinhas()
    desenhaPoste()
    desenhaBarra()
    desenhaApoio()
    

    document.onkeydown = (e) => {
      let letra = e.key.toUpperCase()

      if(verificarLetra(letra) && palavraSecreta.includes(letra)){
        for(let i = 0; i < palavraSecreta.length; i++){
          if(palavraSecreta[i] === letra){
            escreverLetraCorreta(i)
            adicionaAcertos();
            vencedor()
            
          }
        }
      }
      else{
        
        adicionarLetraIncorreta(letra)
        escreverLetraIncorreta(letra,erros)
        desenhaBoneco(erros)
        fimDeJogo()
        
        
      } 
      
    } 
  }