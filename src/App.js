// Imported components:
import DrawerAppBar from './components/navBar/DrawerAppBar';
import HeroSec from './components/hero/HeroSec';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

// Imported styles:
import './styles/styles.scss';

function App() {
	return (
		<div className='App'>
			<DrawerAppBar />
			<HeroSec />
      <Services />
      <Testimonials />
		</div>
	);
}

export default App;
