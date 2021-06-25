import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import HocController from './Components/HocController';
import Main from './Components/Main';
import MainPass from './Components/MainPass';
import ProCombine from './Components/ProCombine';
import ProContent from './Components/ProContent';
import ProSecret from './Components/ProSecret';
import ProState from './Components/ProState';
import RenderProps from './Components/RenderProps';
import StateBook from './Components/StateBook';

const products = ['hammer', 'knife', 'closet', 'chair']
const str = "I love my products a lot"
const proStr = 'Yey, your are a pro'

function App() {
  const [pro, setPro] = useState(false);
  const Hoc = HocController(ProContent);
  const HocSecret = HocController(ProSecret)
  const HocState = StateBook(ProContent)
  const CombineComps = StateBook(ProCombine(ProContent, 'This is a Label'))

  return (
    <div className="App">
      <input type="checkbox" name="" id="" onChange={() => setPro(!pro)} />
      <MainPass comp={Main} info='This is Info' products={products} str={str} >
        <Header />
      </MainPass>
      <Hoc pro={pro} proStr={proStr} />
      <HocSecret pro={pro} secret="This is a secret" />
      <ProState />
      <HocState proStr="Book State Pro Content" />
      <CombineComps proStr="Combine Comps Man" />
      <RenderProps pro={pro} render={(str) => <ProContent proStr={str} />} />
    </div>
  );
}

export default App;
