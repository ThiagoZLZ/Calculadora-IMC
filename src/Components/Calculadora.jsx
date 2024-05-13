import React, { useState } from "react";

import styles from './Calculadora.module.css';

const CalculadoraIMC = () => {
  const [Peso, setPeso] = useState("");
  const [Altura, setAltura] = useState("");
  const [result, setResult] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const pegarMensagemIMC = (imc) => {2
    if(imc < 18.5){
        return "abaixo do peso!";
    }if(imc >= 18.5 && imc <= 25){
        return "com peso normal!";
    }if(imc > 25 && imc <29.9){
        return "acima do peso!";
    }if(imc >= 30){
        return "com Obesidade!";
    }
  }

  const calcularIMC = () => {
    const parsedPeso = parseFloat(Peso);
    const parsedAltura = parseFloat(Altura);

    if (!isNaN(parsedPeso) && !isNaN(parsedAltura) && parsedAltura !== 0) {
      const imc = parsedPeso / (parsedAltura * parsedAltura);
      setResult(imc.toFixed(2));
      setMensagem(pegarMensagemIMC(imc));

      setPeso("");
      setAltura("");
    } else {
      setResult(null);
      alert("Não funcionou");
      setPeso("");
      setAltura("");
    }
  };

  return (
    <>
      <div>
        <div className={styles.formulario}>
          <h1>Calculadora IMC</h1>
          <div>
            <h2>Qual sua altura</h2>
            <input
              type="number"
              value={Altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
          <div>
            <h2>Qual seu Peso</h2>
            <input
              type="number"
              value={Peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
          <button onClick={calcularIMC}>
            Enviar
          </button>
        </div>

        <div className={styles.vazio}>
          <div className={styles.placar}>
            {result && <p>Seu IMC é: {result}</p>}
            {mensagem && <p>Você está {mensagem}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculadoraIMC;
