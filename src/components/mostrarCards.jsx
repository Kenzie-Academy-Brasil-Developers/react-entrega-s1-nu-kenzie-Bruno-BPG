import "./mostrarCards.css"; 

const MostrarCards = ({count, deletarItenCarrinho}) => {
    const MostrarCards = count.map((iten, index) => {
      return (
        <div key={index}>
          <div className="conteinerCards">
            <div>
              <p className="cardDescrisao">{iten.descrisao}</p>
              <p className="cardCategoria">{iten.categoria}</p>
            </div>

            <div className="conteinerCards-lateralDireita">
              <p className="cardValor">{"R$ " + iten.valor}</p>
              <button
                id={index}
                onClick={() => {
                  deletarItenCarrinho(iten.id);
                }}
                className="deletarCard"
              >
                &#128465;
              </button>
            </div>
          </div>
        </div>
      );
    });

    return MostrarCards;
  }

  export default MostrarCards