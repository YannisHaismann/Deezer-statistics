import React, { useState, useRef, useEffect, useId } from 'react'
import DarkMode from "./../DarkMode"
import DeezerLogoImg from "./../../assets/images/deezer.svg"
import { NavLink } from "react-router-dom"

function Index() {

  const phoneNav = useRef(null);

  const [navIsOpen, setNavIsOpen] = useState(false)

  const togglePhoneNavBar = () => {
    navIsOpen ? phoneNav.current.style.opacity = "0" : phoneNav.current.style.opacity = "100"
    navIsOpen ? phoneNav.current.style.top = "-100%" : phoneNav.current.style.top = "0px"
    setNavIsOpen(!navIsOpen)
  }

  useEffect(() => {
    phoneNav.current.style.top = "-100%"
    phoneNav.current.style.display = "flex"
  }, [])

  const [pages, setPages] = useState([
    {
      name: "Home", path: "/",
    },
    {
      name: "Top Tracks", path: "/toptracks",
    },
    {
      name: "Top Genres", path: "/topgenres",
    },
    {
      name: "Login", path : "/login"
    }
  ])

  return (
    <nav>
      <div className="bg-white relative px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center dark:text-white">
            <a href="https://deezer.com/fr/" className="flex items-center">
                <img src={DeezerLogoImg} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <h1 className="font-Deezer text-2xl -ml-1 mt-1 font-black">Deezer</h1>
            </a>
            <p className="font-Deezer text-sm ml-1.5 mt-2.5">Statistics</p>
          </div>
          <div className="md:order-3 mt-3 hidden md:block">
            <DarkMode id={useId()} />
          </div>
          <div className="flex md:order-2">
            <button onClick={togglePhoneNavBar} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden md:flex justify-between items-center w-auto order-1" id="navbar-sticky">
            <ul className="flex p-4 rounded-lg border-gray-100 flex-row space-x-8 mt-0 text-sm font-medium bg-white dark:bg-gray-900">
              {
                pages.map(({name, path}) => {
                  return (
                    <li className="block text-white rounded bg-transparent p-0 m-2" key={name}>
                      <NavLink end to={path} className={({ isActive }) => isActive ? "text-blue-700 dark:text-blue-500" : "text-gray-500 dark:text-white"}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div ref={phoneNav} className="hidden transition-all items-center ease-in-out duration-500 absolute pt-20 top-0 h-full justify-between w-full m-auto bg-gradient-to-br from-blue-500 via-green-500 to-orange-500 dark:from-blue-700 dark:via-green-700 dark:to-orange-700 p-4 md:hidden" id="navbar-sticky">
        <ul className="flex flex-col justify-center m-auto">
          {
            pages.map(({name, path}) => {
              return (
                <li className="block font-black text-3xl w-full mx-auto py-2 pr-4 pl-3 m-2 rounded" key={name}>
                  <NavLink end to={path} className={({ isActive }) => isActive ? "text-white dark:text-black" : "text-gray-800 dark:text-white"}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <div className="absolute top-20 right-4">
          <DarkMode id={useId()} />
        </div>
      </div>
    </nav>
  )
}

export default Index