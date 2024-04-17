import componetsImg from "./assets/components.png";
import Header from "./componets/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcepts from "./componets/CoreConcepts.jsx";
import reactImg from "./assets/react-core-concepts.png";
import TapButton from "./componets/TabButton.jsx";
import {useState} from 'react';
import {EXAMPLES} from "./data.js"


function App() {
  
 const[selectedTopic, setSelectedTopic]= useState();

function handelSelect(selectedButton){
  setSelectedTopic(selectedButton);
  
}

let tabContent = <p>Please Select a topic </p>
if (selectedTopic){
  tabContent = ( <div id= "tab-content">
            
  <h3>
    {EXAMPLES[selectedTopic].title}
  </h3>

  <p>{EXAMPLES[selectedTopic].description}</p>

  <pre><code> {EXAMPLES[selectedTopic].code}</code></pre>

</div>);
}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
           
            {CORE_CONCEPTS.map((conceptItem)=> (
              <CoreConcepts key ={conceptItem.title} {...conceptItem} />
            ) )}
          </ul>
        </section>

        <h2>Time to get started!</h2>

        <section id = "examples"> 
          <h2>Examples</h2>
          <menu>
            <TapButton isSelected={selectedTopic === 'components'} onSelect={()=> handelSelect('components')}> Components </TapButton>
            <TapButton isSelected={selectedTopic === 'jsx'}  onSelect={()=> handelSelect('jsx')}>  JSX </TapButton>
            <TapButton isSelected={selectedTopic === 'props'} onSelect={()=> handelSelect('props')}>  Props </TapButton>
            <TapButton isSelected={selectedTopic === 'state'}  onSelect={()=> handelSelect('state')}>  States </TapButton>

          </menu>
         
{tabContent}

        </section>
        
      </main>
    </div>
  );
}

export default App;
