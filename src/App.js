import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import './common.scss';
import Header from './views/header/header';
import Banner from './views/banner/banner';
import InfoSection from './components/infoSection/infoSection';
import Clients from './views/clients/clients';
import Footer from './views/footer/footer';
import Reviews from './components/reviewsSection/reviewsSection';
import People from './components/people/people';
import ContactUs from './components/contactUsSection/contactUs';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<Banner />
			</header>
			<InfoSection />
      <Reviews />
      <People />
      <Clients />
			<ContactUs />
      <Footer />
		</div>
	);
}

export default App;
