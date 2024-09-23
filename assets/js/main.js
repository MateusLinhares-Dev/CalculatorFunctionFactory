function criaCalculadora(){
  
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    
    inicia(){
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    realizaConta(){
      let conta = this.display.value;
      try{
        conta = eval(conta);

        if(!conta){
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      }catch(e){
        alert('Conta inválida')

        return;
      }
    },

    pressionaEnter(){
      this.display.addEventListener('keypress', e => {
        if (e.keyCode === 13){
          this.realizaConta();
        }
        return;
      });
    },

    clearDisplay(){
      this.display.value = '';
    },
    
    deleteOne(){
      console.log(this.display.value.slice(0,-1))
      this.display.value = this.display.value.slice(0,-1);
    },


    cliqueBotoes(){
      document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')){
          this.deleteOne();
        }

        if(el.classList.contains('btn-eq')){
          this.realizaConta()
        }
      }.bind(this)); //bind é usado para setar a function calculadora, e não a do document OU pode ser usado arrow functios para não chamar o this do document, ele não altera sua propriedade
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();