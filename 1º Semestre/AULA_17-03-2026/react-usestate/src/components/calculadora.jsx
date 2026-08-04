import { useState } from "react";

export default function Calculadora() {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resultado, setResultado] = useState(0);

    function somar(e) {
        e.preventDefault();
        if (Number(n1) < 1 || Number(n2) < 1){
            return alert('Os números inseridos não são permitidos!')
        } else {
        setResultado(Number(n1) + Number(n2));
    }
    }

    function subtrair(e) {
        e.preventDefault();
        if (Number(n1) < 1 || Number(n2) < 1){
            return alert('Os números inseridos não são permitidos!')
        } else {
        setResultado(Number(n1) - Number(n2));
    }
    }

    function dividir(e) {
        e.preventDefault();
        if (Number(n1) < 1 || Number(n2) < 1){
            return alert('Os números inseridos não são permitidos!')
        } else {
        setResultado(Number(n1) / Number(n2));
    }
    }

    function multiplicar(e) {
        e.preventDefault();
        if (Number(n1) < 1 || Number(n2) < 1){
            return alert('Os números inseridos não são permitidos!')
        } else {
        setResultado(Number(n1) * Number(n2));
    }
    }

    function raiz(e) {
        e.preventDefault();
        if (Number(n1) < 1 || Number(n2) < 1){
            return alert('Os números inseridos não são permitidos!')
        } else {
        setResultado((Number(n1) + Number(n2)) ** 0.5);
    }
    }

    function potencia(e) {
        e.preventDefault();
        if (Number(n1) < 1 || Number(n2) < 1){
            return alert('Os números inseridos não são permitidos!')
        } else {
        setResultado(Number(n1) ** Number(n2));
    }
    }

    function limpar(e) {
        e.preventDefault();
        setN1('');
        setN2('');
        setResultado(0);
    }

    return (
        <>
        <br />
        <br />
            <h1>Calculadora</h1>
            <br />
            <h2>Não são permitidos números negativos e/ou iguais a zero</h2>
            <br />
            <form>
                <label>Número 1</label>
                <input type="text" value={n1} onChange={(e) => setN1(e.target.value)} />

                <label>Número 2</label>
                <input type="text" value={n2} onChange={(e) => setN2(e.target.value)} />

                <button onClick={somar}>Somar</button>
                <button onClick={subtrair}>Subtrair</button>
                <button onClick={dividir}>Dividir</button>
                <button onClick={multiplicar}>Multiplicar</button>
                <button onClick={raiz}>Raiz Quadrada</button>
                <button onClick={potencia}>Potência</button>
                <button onClick={limpar}>Limpar</button>

                <h2>Resultado: {resultado}</h2>
            </form>
            <br />
            <br />
        </>
    );
}