// import React from 'react'
import WordWithLeftLines from './WordWithLeftLine'
import profile1 from '../assets/team1.jpg'
import profile2 from '../assets/team2.jpg'
import profile3 from '../assets/team3.jpg'
import {  FaTwitter } from 'react-icons/fa'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'

const TeamProfile = () => {
  return (
    <div className='w-full md:pt-[75px] pt-[50px] px-5 pb-5'>
        <WordWithLeftLines text='Staff'/>
        <div className='pt-5'>
            <h2 className='text-5xl font-bold'>Our Barbers</h2>
            <div className='pt-10 grid grid-cols-1 md:grid-cols-3 mx-auto'>
                <div className='grid-cols-1 text-center pb-10' >
                    <img src={profile1} alt='Profile' />
                    <h2 className='text-2xl font-bold pt-10 pb-1'>Mack Donovan</h2>
                    <p className='text-lg pb-5'>
                        Founder & Boss Barber
                    </p>
                    <div className='w-full flex items-center justify-center gap-3'>
                        <a href="#" className='hover:text-[#C3B299]'>
                            <FaFacebookF />
                        </a>
                        <a href="#" className='hover:text-[#C3B299]'>
                            <FaTwitter />
                        </a>
                        <a href="#" className='hover:text-[#C3B299]'>
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
                <div className='grid-cols-1 text-center pb-10'>
                    <img src={profile2} alt='Profile' />
                    <h2 className='text-2xl font-bold pt-10 pb-1'>David Bravo</h2>
                    <p className='text-lg pb-5'>
                        Barber
                    </p>
                    <div className='w-full flex items-center justify-center gap-3'>
                        <a href="#" className='hover:text-[#C3B299]'>
                            <FaFacebookF />
                        </a>
                        <a href="#" className='hover:text-[#C3B299]'>
                            <FaTwitter />
                        </a>
                        <a href="#" className='hover:text-[#C3B299]'>
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
                <div className='grid-cols-1 text-center pb-10'>
                    <img src={profile3} alt='Profile'/>
                    <h2 className='text-2xl font-bold pt-10 pb-1'>John Smith</h2>
                    <p className='text-lg pb-5'>
                        Barber
                    </p>
                    <div className='w-full flex items-center justify-center gap-3'>
                        <a href="#" className='hover:text-[#C3B299]'>
                            <FaFacebookF />
                        </a>
                        <a href="#" className='hover:text-[#C3B299]'>
                            <FaTwitter />
                        </a>
                        <a href="#" className='hover:text-[#C3B299]'>
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamProfile