import './style.css'

const Lista  = ({children}) =>{
  return(
    <div className='listaContainer'>
      <div className='lista-cabecalho'>
        <div>
          <h2>Resumo Financeiro</h2>
        </div>
        <div className='botoesLista'>
          <button className='lista-botao'>Todos</button>
          <button className='lista-botao'>Entradas</button>
          <button className='lista-botao'>Despesas</button>
        </div>
      </div>

      <ul className='lista'>
        {children}
      </ul>

    </div>
  )
}
export default Lista