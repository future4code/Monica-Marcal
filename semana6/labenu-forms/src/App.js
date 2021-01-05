
import React from 'react';
import Etapa1 from "./components/etapa1"
import Etapa2 from "./components/etapa2"
import Etapa3 from "./components/etapa3"
import Final from "./components/final"


class App extends React.Component {
  state = {
    etapa: 1,
    etapa: 2,
    etapa: 3,
    final: Final
  }

  renderizaEtapa = () => {
    switch (this.state.evento) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
      case 3: 
        return <Etapa3 />;
      case Final: 
        return <Final />;
    }
  }

 
  

render() {
	return (
	      <div>
					{this.renderizaEtapa()}
	        <button>Próxima Etapa</button>
	      </div>
	    );
}
}

