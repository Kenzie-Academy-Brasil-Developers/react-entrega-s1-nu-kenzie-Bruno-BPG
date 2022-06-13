

const FiltroCategoria = ({setCount,filtro,henderFilter}) => {

    return (<section className="filtroCategoria">
    <div>
      <p>Resumo financeiro</p>
    </div>

    <div>
      <button onClick={() => setCount(filtro)} className="BtnDefiltro">
        Todos
      </button>
      <button
        onClick={() => henderFilter("Entrada")}
        className="BtnDefiltro"
      >
        Entradas
      </button>
      <button
        onClick={() => henderFilter("Despesa")}
        className="BtnDefiltro"
      >
        Despesas
      </button>
    </div>
  </section>)
}

export default FiltroCategoria