import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import AboutMe from '../AboutMe'
import Expertise from '../Expertise'
import Projects from '../Projects'
const Home = () => {
  return (
	<>
		<div className='w-full h-full '>
			<Navbar/>
			<Hero/>
			<Expertise/>
			<Projects/>
		</div>
	</>
  )
}

export default Home