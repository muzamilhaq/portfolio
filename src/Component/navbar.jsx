/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react"
import React from "react"
import { FaInstagram,FaTwitter,FaTelegramPlane } from "react-icons/fa"
import {  MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Example() {

  return (
    <Disclosure>
      {({open}) => (
          <>
              <div className='bg-opacity-5 bg-teal-500  flex flex-col sm:flex-row p-3'>
                <div className={open ? "flex justify-between items-center border-b sm:border-b-0 pb-2 sm:pb-0" : "flex justify-between items-center"} >
                  
                  <div className="w-100" >
                    <a className='whitespace-nowrap text-lg font-black text-teal-700 font-sans block uppercase'>Muzamil Haq</a>
                  </div>  
                  
                  <Disclosure.Button>
                    <div className="sm:hidden">
                      { open ? (
                        <XIcon className="block h-6 w-6" aria-hidden4="true" />
                      ):(
                        <MenuIcon className="block h-6 w-6" aria-hidden4="true" />
                      )}
                    </div>
                  </Disclosure.Button> 
                </div>

                <div className="hidden sm:flex items-center justify-between w-full ml-3">
                      <div className='flex'>
                        <a href="#" className='whitespace-nowrap my-1 lg:my-0 block text-white bg-teal-500 hover:bg-teal-300 hover:text-gray-600 px-3 mx-1 py-2 rounded-full text-sm font-medium'>My Bio</a>
                        <a href="#" className='whitespace-nowrap my-1 lg:my-0 block text-white bg-teal-500 hover:bg-teal-300 hover:text-gray-600 px-3 mx-1 py-2 rounded-full text-sm font-medium'>What I Made</a>
                      </div>
                      
                      <div className="flex justify-between">
                        <a href="https://www.instagram.com"><FaInstagram     size="1.5em" className="text-teal-500 mx-3 hover:text-teal-300"/></a>
                        <a href="https://www.twitter.com">  <FaTwitter       size="1.5em" className="text-teal-500 mx-3 hover:text-teal-300"/></a>
                        <a href="https://telegram.com">     <FaTelegramPlane size="1.5em" className="text-teal-500 mx-3 hover:text-teal-300"/></a>
                      </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="flex flex-col sm:flex-row items-center justify-between w-full lg:pl-3">
                    
                      <div className='flex flex-col sm:flex-row w-full my-3 lg:my-0'>
                        <a href="#" className='whitespace-nowrap my-1 lg:my-0 block text-white bg-teal-500 hover:bg-teal-300 hover:text-gray-600 px-3 mx-1 py-2 rounded-md text-sm font-medium'>My Bio</a>
                        <a href="#" className='whitespace-nowrap my-1 lg:my-0 block text-white bg-teal-500 hover:bg-teal-300 hover:text-gray-600 px-3 mx-1 py-2 rounded-md text-sm font-medium'>What I Made</a>
                      </div>
                      
                      <div className="flex lg:justify-center justify-between w-full sm:w-fit ">
                        <a href="https://www.instagram.com"><FaInstagram     size="1.5em" className="text-teal-500 mx-3 hover:text-teal-300"/></a>
                        <a href="https://www.twitter.com">  <FaTwitter       size="1.5em" className="text-teal-500 mx-3 hover:text-teal-300"/></a>
                        <a href="https://telegram.com">     <FaTelegramPlane size="1.5em" className="text-teal-500 mx-3 hover:text-teal-300"/></a>
                      </div>
                  </div>
                </Disclosure.Panel>

                

              </div>
          </>
        )}
    </Disclosure>
  );
}
