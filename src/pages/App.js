import '../App.css';
import Footer from '../components/Footer';
import HowWork from '../components/HowWork';
import PortifolioHome from '../components/PortfolioHome';
import WebsiteInfo from '../components/WebsiteInfo'
import SliderHead from '../components/SliderHead';
import WhoAre from '../components/WhoAre';
import EntrarContato from '../components/EntrarContato';
import OftenQuestions from '../components/OftenQuestions';
import WebsiteInfo2 from '../components/WebsiteInfo2';

function App() {
  return (
    <div className="App">
      <SliderHead/>
      <WhoAre/>
      <HowWork/>
      <EntrarContato/>
      <WebsiteInfo />
      <PortifolioHome />
      <OftenQuestions/>
      <WebsiteInfo2/>
    </div>
  );
}

export default App;
