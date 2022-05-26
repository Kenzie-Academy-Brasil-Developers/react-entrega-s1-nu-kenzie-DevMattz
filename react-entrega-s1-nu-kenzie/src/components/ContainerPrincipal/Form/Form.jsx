import './style.css'

const Form = () =>{
  return (
    <form className='form'>
      <label htmlFor="description">Descrição</label>
      <input type="text" name="description"placeholder='Digite aqui sua descrição'/>
      <small>Ex: Compra de roupas</small>

          <label htmlFor="valor">Valor</label>
      <div className='containerCentral'>
        <div className='containerValor'>
          <input name="valor"type="number" placeholder='1'/>
          <p>R$</p>
        </div>
        
        <div className='containerOpcoes'>
          <select name="escolha">
            <option>Entrada</option>
            <option selected>Despesa</option>
          </select>
        </div>

      </div>
      <button className='buttonForm'>Inserir Valor</button>
    </form>
  )
}
export default Form;