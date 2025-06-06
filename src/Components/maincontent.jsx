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


                <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>What is Flowbite?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-2">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                            <span>Is there a Figma file available?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-3">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>What are the differences between Flowbite and Tailwind UI?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                            </ul>
                        </div>
                    </div>
                </div>



            </section>
        </>



    )
}

export default maincontent