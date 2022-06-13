import "./formulario.css";

const formulario = ({
  criarTransacao,
  setDescrisao,
  setValor,
  setCategoria,
}) => {
  return (
    <div>
      <form onSubmit={(event) => criarTransacao(event)}>
        <p className="ajustarMargin">descrisao</p>
        <input
          id="descrisao"
          onChange={(event) => setDescrisao(event.target.value)}
        ></input>
        <br></br>
        <span className="ajustarMargin">Ex: Compra de roupas</span>

        <div className="divIntermediariaForm">
          <p>Valor</p> <p>Tipo de valor</p>
        </div>

        <div id="caixaInferior">
          <input
            id="digitaPreco"
            onChange={(event) => setValor(event.target.value)}
          ></input>

          <select
            id="selecionarCategoria"
            onChange={(event) => setCategoria(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>

        <br></br>

        <button id="btnEnviar" type="submit">
          Inserir valor
        </button>
      </form>
    </div>
  );
};

export default formulario;
