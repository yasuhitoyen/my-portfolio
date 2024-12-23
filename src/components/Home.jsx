import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Expertise from '../Expertise'
import Projects from '../Projects'
import Experiences from '../Experiences'
import ContactMe from '../ContactMe'

const Home = () => {
	return (
	  <>
		<div className='w-full min-h-screen relative'>
			{/* Navbar */}
			<div className='fixed top-0 left-0 w-full z-50'>
				<Navbar />
			</div>
		  {/* Main Content */}
		  <div className=""> {/* Add top padding to prevent overlap with Navbar */}
			<Hero id="hero" />
			<Expertise id="expertise" />
			<Projects id="projects" />
			<Experiences id="experiences" />
			<ContactMe id="contact" />
		  </div>
		</div>
	  </>
	);
};

export default Home
