import styled from "styled-components";
import bg from "./img/bg.jpg";
import { MainLayout } from "./styles/layout";
import Orb from "./components/Orb/orb";
import Navigation from "./components/Navigation/navigation";
import React, { useMemo, useState } from 'react' 
import Dashboard from "./components/Dashboard/Dashboard";
import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
import Stock from "./components/Stocks/Stocks";
import { UseGlobalContext, GlobalProvider } from "./context/globalcontext";


function App() {

  const [active, setActive] = useState(1)

  const global = UseGlobalContext()
  console.log(global)

  //"active" is set on which tab within the dashboard is clicked, and the appropriate js file will display.
  const displayData = () => {
    switch(active){

      case 1:
        return <Dashboard />
      case 2:
        return <Stock />
      case 3:
        return <Incomes />
      case 4: 
      return <Expenses />
      default: 
      return <Dashboard />
    }
  }

  // orbMemo stores the js code for the orb, and loads when a new dashboard tab is created. This way, the orb isn't needed to refresh every time we switch dashboard tabs.
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
        {orbMemo}
      <MainLayout>
      <Navigation active={active} setActive={setActive}/>
      <main>
        {displayData()}
      </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: black;
  position: relative;
  filter: 8px;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 2px solid black;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: #28282A;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;
export default App;
