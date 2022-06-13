import "./css.css";

import { useState } from "react";

import MostrarCards from "./components/mostrarCards";
import Formulario from "./components/formulario";
import FiltroCategoria from "./components/filtroCategoria";

import MostrarValorTotal from "./components/calcularValor";
function App() {
  const [count, setCount] = useState([]);

  const [filtro, setFiltro] = useState([]);

  const [descrisao, setDescrisao] = useState("sem texto");
  const [categoria, setCategoria] = useState("Entrada");
  const [valor, setValor] = useState(0);

  function deletarItenCarrinho(indx) {
    const filter = count.filter((iten) => {
      return iten.id !== indx;
    });

    setCount(filter);
    setFiltro(filter);

    console.log(indx);
  }

  function henderFilter(tipo) {
    const filter = filtro.filter((iten) => {
      return iten.categoria === tipo;
    });

    setCount(filter);
  }
  
  function criarTransacao(event) {
    event.preventDefault();

    setCount([
      ...count,
      {
        id: Math.random(),
        descrisao: descrisao,
        categoria: categoria,
        valor: parseInt(valor),
      },
    ]);
    setFiltro([
      ...count,
      {
        id: Math.random(),
        descrisao: descrisao,
        categoria: categoria,
        valor: parseInt(valor),
      },
    ]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <span className="vermelho">Nu</span> kenzie
        </p>
        <button className="btnInicio">inicio</button>
      </header>
      <main>
        <section className="lateralEsquerda">
  
        <Formulario setCategoria={setCategoria} setValor={setValor} criarTransacao ={criarTransacao} setDescrisao={setDescrisao} ></Formulario>
          <MostrarValorTotal arr = {count}></MostrarValorTotal>
        </section>

        <section className="lateralDireita">
          <FiltroCategoria setCount={setCount} henderFilter={henderFilter} filtro={filtro} ></FiltroCategoria>

            <MostrarCards count={count} deletarItenCarrinho={deletarItenCarrinho}></MostrarCards>
        </section>
      </main>
    </div>
  );
}

export default App;
