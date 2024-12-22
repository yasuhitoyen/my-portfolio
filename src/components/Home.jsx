import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import AboutMe from '../AboutMe'
import Expertise from '../Expertise'
import Projects from '../Projects'
import Experiences from '../Experiences'
const Home = () => {
  return (
	<>
		<div className='w-full h-full '>
			<Navbar/>
			<Hero/>
			<Expertise/>
			<Projects/>
			<Experiences/>
		</div>
	</>
  )
}

export default Home