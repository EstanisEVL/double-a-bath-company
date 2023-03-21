import { BrowserRouter } from 'react-router-dom';

/*---- Imported components ----*/
import DrawerAppBar from './components/navBar/DrawerAppBar';
import HeroSec from './components/hero/HeroSec';
import LazyServices from './components/services/LazyServices';
import LazyWork from './components/work/LazyWork';
import LazyGallery from './components/gallery/LazyGallery';
import LazyTestimonials from './components/testimonials/LazyTestimonials';
import LazyContact from './components/contact/LazyContact';
import FloatingWhatsappButton from './components/floatingWhatsappButton/FloatingWhatsappButton';
import Footer from './components/footer/Footer';

/*---- Imported styles ----*/
import './styles/styles.scss';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<DrawerAppBar />
				<HeroSec />
				<LazyServices />
				<LazyWork />
				<LazyGallery />
				<LazyTestimonials />
				<LazyContact />
				<FloatingWhatsappButton />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
