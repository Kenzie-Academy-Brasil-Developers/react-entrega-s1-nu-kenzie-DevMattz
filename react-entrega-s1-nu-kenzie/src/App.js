import Header from './components/HeaderContainer/Header/Header';
import Logo from './components/HeaderContainer/Logo/Logo';
import ButtonLogout from './components/HeaderContainer/ButtonLogout/ButtonLogout';
import Main from './components/ContainerPrincipal/Main/Main';
import FormContainer from './components/ContainerPrincipal/FormContainer/FormContainer';
import Form from './components/ContainerPrincipal/Form/Form';
import Total from './components/ContainerPrincipal/Total/Total';
import Lista from './components/ContainerPrincipal/Lista/Lista';
import ItemLista from './components/ContainerPrincipal/ItemLista/ItemLista';

function App() {
  return (
    <>
      <Header>
        <Logo />
        <ButtonLogout />
      </Header>
      <Main>
        <FormContainer>
          <Form />
          <Total />
        </FormContainer>
        <Lista>
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
        </Lista>
      </Main>
    </>
  );
}

export default App;
