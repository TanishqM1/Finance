import styled from "styled-components";
import bg from "./img/bg.jpg";
import { MainLayout } from "./styles/layout";
import Orb from "./components/Orb/orb";
import Navigation from "./components/Navigation/navigation";

function App() {
  return (
    <AppStyled bg={bg} className="App">
        <Orb/>
      <MainLayout>
      
      <Navigation />

      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  filter: 8px;
`;
export default App;
