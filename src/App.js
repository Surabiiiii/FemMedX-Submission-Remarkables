import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Banner from './components/Main/Banner/Banner';
import CardsWrapper from './components/Main/Cards/CardsWrapper';
import DownloadWrapper from './components/Main/Download/DownloadWrapper';
import Footerwrapper from './components/Footer/Footerwrapper';
import FindDoctors from './components/FindDoctors/FindDoctors';
import Consultdoctor from './components/Main/Consultdoctor/Consultdoctor';
import Navbarwrapper from './components/Navbar/Navbarwrapper';
import SearchbarWrapper from './components/SearchBar/SearchbarWrapper';
import SearchWrapper from './components/SearchResults/SearchWrapper';
import Searchbar from './components/SearchBar/Searchbar';


import Videoconsult from './components/Videoconsult/Videoconsult';


function App() {
	return (
		<div className='App'>
			<Navbarwrapper />
			<Switch>
				<Route exact path='/'>
					<Main>
						<SearchbarWrapper>
							<Searchbar />
						</SearchbarWrapper>
						<Banner bannerImg='https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-1783.jpg?w=900&t=st=1668289931~exp=1668290531~hmac=5ad03dfd75aaa46800ad980ec75f9159fc06420a5a0af1ec3c9fd190e7f2d2d5' />
						<CardsWrapper />
						<Consultdoctor />
						
						<DownloadWrapper />
					</Main>
				</Route>
				<Route exact path='/doctors'>
					<FindDoctors />
				</Route>
				
				
				<Route path='/video-consult'>
					<Videoconsult />
				</Route>
				<Route path='/search'>
					<div className='bg-white'>
						<SearchbarWrapper>
							<Searchbar />
						</SearchbarWrapper>
						<SearchWrapper />
					</div>
				</Route>
				
			</Switch>
			<Footerwrapper />
		</div>
	);
}
export default App;
