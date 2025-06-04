import React from 'react'

const navbar = () => {
    return (
        <div className='flex flex-row items-center justify-between bg-[#09040d] p-6 text-white fixed w-full'>
            <div className='flex items-center'>
                <p className='font-bold text-3xl bg-white p-3 rounded-full text-[#09040d] me-2'>SK</p>
                <h2 className='fw-bold text-3xl'>Saraswati</h2>
            </div>
            <div className='flex flex-row items-center'>
                <ul className='flex'>
                    <li className='text-white text-lg me-2'>Home</li>
                    <li className='text-white text-lg me-2'>About Me</li>
                    <li className='text-white text-lg me-2'>My Project</li>
                    <li className='text-white text-lg me-2'>My Works</li>
                    <li className='text-white text-lg me-2'>Contact Me</li>
                </ul>
                <button type="button" class="text-white bg-[#6d12b7] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shadow-none">Hire Me</button>
            </div>
        </div>
    )
}

export default navbar
