import '../App.css';
import Footer from '../components/Footer';
import HowWork from '../components/HowWork';
import PortifolioHome from '../components/PortfolioHome';
import WebsiteInfo from '../components/WebsiteInfo'
import SliderHead from '../components/SliderHead';
import WhoAre from '../components/WhoAre';
import EntrarContato from '../components/EntrarContato';

function App() {
  return (
    <div className="App">
      <SliderHead/>
      <WhoAre/>
      <HowWork/>
      <PortifolioHome />
      <WebsiteInfo />
      <EntrarContato/>
      <Footer/>
    </div>
  );
}

export default App;
