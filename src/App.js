import './style.css';
import TopBar from './components/TopBar';
import FunctionBar from './components/FunctionBar';
import Navigation from './components/Navigation';
import Discount from './components/Discount';
import Poster from './components/Poster';
import TopPickSales from './components/TopPickSales';
import TopPickSection from './components/TopPickSection';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';

function App() {
  return (
    <div className="container">
      <header>
      <TopBar />
      </header>
      <main className="main_max_width">
      <FunctionBar />
      <Navigation />
      <Discount />
      <Poster />
      <TopPickSales />
      <TopPickSection />
      </main>
      <Footer />
      <ContactButton />
    </div>
  );
}

export default App;
