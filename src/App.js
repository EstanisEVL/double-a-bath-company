// Imported components:
import DrawerAppBar from './components/navBar/DrawerAppBar';
import HeroSec from './components/hero/HeroSec';
import LazyServices from './components/serviceSection/LazyServices';
import LazyWork from './components/work/LazyWork';
import LazyTestimonials from './components/testimonials/LazyTestimonials';
import Contact from './components/contact/Contact';
import FloatingWhatsappButton from './components/floatingWhatsappButton/FloatingWhatsappButton';
import Footer from './components/footer/Footer';

// Imported styles:
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<DrawerAppBar />
				<HeroSec />
				<LazyServices />
				<LazyWork />
                
				<LazyTestimonials />
				<Contact />
				<FloatingWhatsappButton />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
