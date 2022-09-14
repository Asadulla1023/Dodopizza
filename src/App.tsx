import { Banner, NavigationBar, Container, Footer } from 'components'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { Route, Routes } from 'react-router-dom'
// hello
const App: React.FC = () => {
	return (
		<>
			<Container>
				<Banner />
				<NavigationBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='*' element={<HomePage/>}/>
				</Routes>
			</Container>
			<Footer />
		</>
	)
}

export default App
