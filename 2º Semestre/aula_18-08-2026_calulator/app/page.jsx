'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Calculadora() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function validarCampos() {
    if (n1 === '' || n2 === '') {
      setErro('Preencha os dois números.');
      setResultado('');
      return false;
    }

    setErro('');
    return true;
  }

  function somar() {
    if (!validarCampos()) return;

    setResultado(Number(n1) + Number(n2));
  }

  function subtrair() {
    if (!validarCampos()) return;

    setResultado(Number(n1) - Number(n2));
  }

  function multiplicar() {
    if (!validarCampos()) return;

    setResultado(Number(n1) * Number(n2));
  }

  function dividir() {
    if (!validarCampos()) return;

    if (Number(n2) === 0) {
      setErro('Não é possível dividir por zero.');
      setResultado('');
      return;
    }

    setErro('');
    setResultado(Number(n1) / Number(n2));
  }

  function potencia() {
    if (!validarCampos()) return;

    if (Number(n1) === 0 && Number(n2) < 0) {
      setErro('Essa potência não é válida.');
      setResultado('');
      return;
    }

    const calculo = Number(n1) ** Number(n2);

    if (!Number.isFinite(calculo)) {
      setErro('O resultado dessa potência é inválido.');
      setResultado('');
      return;
    }

    setErro('');
    setResultado(calculo);
  }

  function raizQuadrada() {
    if (n1 === '') {
      setErro('Digite o primeiro número.');
      setResultado('');
      return;
    }

    if (Number(n1) < 0) {
      setErro('Não é possível calcular a raiz quadrada de número negativo.');
      setResultado('');
      return;
    }

    setErro('');
    setResultado(Math.sqrt(Number(n1)));
  }

  function limpar() {
    setN1('');
    setN2('');
    setResultado('');
    setErro('');
  }

  return (
    <main className={styles.container}>
      <div className={styles.calculadora}>

        <h1>Calculadora</h1>

        <label>Primeiro número</label>
        <input
          type="number"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
          placeholder="Digite o primeiro número"
        />

        <label>Segundo número</label>
        <input
          type="number"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
          placeholder="Digite o segundo número"
        />

        <div className={styles.botoes}>
          <button onClick={somar}>+</button>

          <button onClick={subtrair}>−</button>

          <button onClick={multiplicar}>×</button>

          <button onClick={dividir}>÷</button>

          <button onClick={potencia}>xʸ</button>

          <button onClick={raizQuadrada}>√x</button>
        </div>

        <button
          className={styles.limpar}
          onClick={limpar}
        >
          Limpar
        </button>

        {erro && (
          <p className={styles.erro}>
            {erro}
          </p>
        )}

        {resultado !== '' && (
          <p className={styles.resultado}>
            Resultado: <strong>{resultado}</strong>
          </p>
        )}

      </div>
    </main>
  );
}