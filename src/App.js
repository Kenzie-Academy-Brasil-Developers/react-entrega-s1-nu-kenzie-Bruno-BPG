import './css.css';

// import montarCard from'./modules/index';

import { useState } from "react"

function App() {

  const [count, setCount] = useState([
    { descrisao: "investimento - conpraDaMoto", categoria: "Despesa", valor: 5000 },
    { descrisao: "salario- mes maio", categoria: "Entrada", valor: 6500 },
    { descrisao: "contaDeluz - mes maio", categoria: "Despesa", valor: 150 },
]
  );

  const [filtro, setFiltro] = useState([
    // { descrisao: "investimento - conpraDaMoto", categoria: "Despesa", valor: 5000 },
    // { descrisao: "salario- mes maio", categoria: "Entrada", valor: 6500 },
    // { descrisao: "contaDeluz - mes maio", categoria: "Despesa", valor: 150 },
]
  );

  
  const [descrisao, setDescrisao] = useState ("sem texto")
  const [categoria, setCategoria] = useState ("Entrada")
  const [valor, setValor] = useState (0)
  
 



  function MostrarCards (){

    const MostrarCards = count.map((iten,index)=>{
      
      // return <montarCard num={iten.descrisao} />

      return <div key={index}> 
        <div className='conteinerCards'>

        <div>
        <p className='cardDescrisao'>{iten.descrisao}</p> 
        <p className='cardCategoria'>{iten.categoria}</p>
        </div>
       
        <div className='conteinerCards-lateralDireita'>
        <p className='cardValor'>{"R$ "+iten.valor}</p>
        <button className='deletarCard'>&#128465;</button>    
        </div>
  
        </div> 
        </div>
      })
  
      return MostrarCards
    }

    function henderFilter (tipo){
      const filter = filtro.filter((iten)=>{
        return iten.categoria === tipo
        })
  
        setCount(filter)
    }

    // console.log(descrisao)
    // console.log(categoria)
    // console.log(valor)

    function criarTransacao(event){
      event.preventDefault()

      setCount([...count, { descrisao: descrisao, categoria: categoria, valor: valor }])
      setFiltro([...count, { descrisao: descrisao, categoria: categoria, valor: valor }])
      // console.log(descrisao)
    }

  return (
    <div className="App">
      <header className="App-header">
        <p><span className='vermelho'>Nu</span> kenzie</p>
        <button>inicio</button>
      </header>
      <main>

      <section className='lateralEsquerda'>

        <form onSubmit={(event) => criarTransacao(event)}>
          <p>descrisao</p>
          <input id='descrisao' onChange={(event) => setDescrisao(event.target.value)}></input>
          <br></br>
          <span>Ex: Compra de roupas</span>
          <p>Valor</p>

          <div id='caixaInferior'>
          <input id='digitaPreco' onChange={(event) => setValor(event.target.value)}></input>

          <select id='selecionarCategoria' onChange={(event) => setCategoria(event.target.value)}>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>

          </div>

          <br></br>
          
          <button id='btnEnviar' type='submit'>Inserir valor</button>

        </form>  

        <div className='totalMoney'>

        <div className='divSuperiorTotalMoney'>
          <p>Valor total:</p>
          <span>$ {"valorTotal"}</span>
        </div>

        <p className='paragrafoInferiorTotalMoney'>O valor se refere ao saldo</p>
        </div>

      </section>

      <section className='lateralDireita'>

      <section className='filtroCategoria'>
      
      <div>
        <p>Resumo financeiro</p>
      </div>

      <div>
        <button  onClick={() => setCount(filtro)} className='BtnDefiltro'>Todos</button>
        <button onClick={() => henderFilter("Entrada")} className='BtnDefiltro'>Entradas</button>
        <button onClick={() => henderFilter("Despesa")} className='BtnDefiltro'>Despesas</button>
      </div>


      </section>

      {MostrarCards()}

      </section>

      </main>
    </div>
  );
}

export default App;
