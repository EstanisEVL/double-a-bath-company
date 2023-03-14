// Imported components:
import DrawerAppBar from './components/navBar/DrawerAppBar';
import HeroSec from './components/hero/HeroSec';
import LazyServices from './components/serviceSection/LazyServices';
import LazyTestimonials from './components/testimonials/LazyTestimonials';
import FloatingWhatsappButton from './components/floatingWhatsappButton/FloatingWhatsappButton';
import Footer from './components/footer/Footer';

// Imported styles:
import './styles/styles.scss';
import Work from './components/work/Work';

function App() {
	return (
		<div className='App'>
			<DrawerAppBar />

      <HeroSec />
      <LazyServices />

      {/* PASAR A LAZY: */}
      <Work />

      <LazyTestimonials />


      <FloatingWhatsappButton />
      
      <Footer />
		</div>
	);
}

export default App;
