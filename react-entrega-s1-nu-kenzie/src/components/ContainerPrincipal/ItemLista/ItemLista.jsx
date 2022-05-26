import './style.css'
import trash from'./images/trash.svg'

const ItemLista = () =>{
  return(
    <li className='listItem'>
      <div className='textos'>
        <h2>Salário - Mês Dezembrooooooooooo</h2>
        <p>Entrada</p>
      </div>

      <div className='valorList'>
        <p>R$ 6.660,00</p>
        <img src={trash} alt="lixeira" />
      </div>
    </li>
  )
}
export default ItemLista