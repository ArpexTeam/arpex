import '../App.css';
import HowWork from '../components/HowWork';
import PortifolioHome from '../components/PortfolioHome';
import SliderHead from '../components/SliderHead';
import WhoAre from '../components/WhoAre';

function App() {
  return (
    <div className="App">
      <SliderHead/>
      <WhoAre/>
      <HowWork/>
      <PortifolioHome/>
    </div>
  );
}

export default App;
