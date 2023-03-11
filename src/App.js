// Imported components:
import DrawerAppBar from './components/navBar/DrawerAppBar';
import HeroSec from './components/hero/HeroSec';
import Services from './components/serviceSection/Services';
import Testimonials from './components/testimonials/Testimonials';

// Imported styles:
import './styles/styles.scss';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className='App'>
			<DrawerAppBar />
			<HeroSec />
      <Services />
      <Testimonials />


      <Footer />
		</div>
	);
}

export default App;
