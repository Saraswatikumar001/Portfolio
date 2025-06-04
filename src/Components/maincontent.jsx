import React from 'react'

const maincontent = () => {
    return (
        <>
            <main className=' ps-5 flex items-center justify-center h-[100vh]'>
                <div className='flex flex-row w-3/4'>
                    <div className='w-1/2 h-full pr-5'>
                        <h3 className='text-white font-bold text-sm pb-1'>I am Saraswati Kumar</h3>
                        <p className='text-white font-semibold text-5xl pb-3'>Fronted Developer</p>
                        <p className='text-white font-bold text-sm'>I'm a passionate front-end developer with a keen eye for design and detail. I specialize in creating interactive, accessible, and high-performance web applications. I enjoy turning complex problems into simple, beautiful interfaces.</p>
                        <div className='flex items-center gap-4 mt-3'>
                            <button type='button' className='px-4 py-1 text-white bg-[#6d12b7] hover:bg-blue-700 focus:ring-4 focus:to-blue-500 font-medium rounded-lg text-lg dark:bg-blue-700 dark:hover:bg-blue-700 focus:outline-none mt-3'>Follow Me On</button>
                            <a href="" className='text-4xl text-[#6d12b7] hover:text-blue-600 p-1'><i className="fa-brands fa-facebook"></i></a>
                            <a href="" className='text-4xl text-[#6d12b7] hover:text-blue-600 p-1'><i className="fa-brands fa-instagram"></i></a>
                            <a href="" className='text-4xl text-[#6d12b7] hover:text-blue-600 p-1'><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="" className='text-4xl text-[#6d12b7] hover:text-blue-600 p-1'><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R119104888&ga=GA1.1.1106605636.1719834042&semt=ais_hybrid&w=740" alt="image" className='w-48 h-48' />
                    </div>
                </div>
            </main>
            <section className="px-10">
                <div className="flex flex-wrap items-center justify-center px-5">
                    <div className="w-full md:w-1/4 flex items-center">
                        <p className="mr-4 text-white text-4xl font-semibold">5</p>
                        <div className='flex flex-col'>
                            <p className="mr-2 text-white text-2xl font-semibold">Study</p>
                            <p className="mr-2 text-white text-2xl font-semibold">Experience</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 flex items-center">
                        <p className="mr-4 text-white text-4xl font-semibold">15+</p>
                        <div className='flex flex-col'>
                            <p className="mr-2 text-white text-2xl font-semibold">Ready</p>
                            <p className="mr-2 text-white text-2xl font-semibold">Projects</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 flex items-center">
                        <p className="mr-4 text-white text-4xl font-semibold">2+</p>
                        <div className='flex flex-col'>
                            <p className="mr-2 text-white text-2xl font-semibold">Internship</p>
                            <p className="mr-2 text-white text-2xl font-semibold">Experience</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 flex items-center">
                        <p className="mr-4 text-white text-4xl font-semibold">2k+</p>
                        <div className='flex flex-col'>
                            <p className="mr-2 text-white text-2xl font-semibold">Lines of</p>
                            <p className="mr-2 text-white text-2xl font-semibold">Production-Ready code</p>
                        </div>
                    </div>
                </div>
            </section >
            <section className="px-10 py-10">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-white text-3xl text-center font-medium pb-2">My Expertise</h2>
                    <p className="text-white text-sm">I Am Saraswati Kumar. I am a Fronted Developer. I have 5 years Study Experience. Right Now I am working DIGITYX</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                    <div className="bg-green-500 h-4 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                    <div className="bg-red-500 h-4 rounded-full" style={{ width: '90%' }}></div>
                </div>

            </section>
        </>



    )
}

export default maincontent