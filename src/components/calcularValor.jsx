function calcularTotal(array) {
    const Despesa = array.filter((iten) => {
      return iten.categoria === "Despesa";
    });

    const Entrada = array.filter((iten) => {
      return iten.categoria === "Entrada";
    });

    const totalDespesas = Entrada.reduce(
      (acumulador, item) => acumulador + item.valor,
      0
    );
    const totalGanhos = Despesa.reduce(
      (acumulador, item) => acumulador + item.valor,
      0
    );

    return totalDespesas - totalGanhos;
  }

const MostrarValorTotal = ({arr})=>{
return           <div className="totalMoney">
<div className="divSuperiorTotalMoney">
  <p>Valor total:</p>
  <span>$ {calcularTotal(arr)}</span>
</div>

<p className="paragrafoInferiorTotalMoney">
  O valor se refere ao saldo
</p>
</div>
  }

export default MostrarValorTotal;
