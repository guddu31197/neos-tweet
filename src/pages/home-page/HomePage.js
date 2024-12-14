import React from 'react'
import { Link } from 'react-router-dom'
import { heroImg2 } from '../../assets'

export const HomePage = () => {
  return (
   <>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-12 py-7 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center      text-center">
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">Get connected socially with neos tweet
          </h1>
          <p className="mb-14 leading-relaxed">About neos-tweet social network: with neos-tweet social network you can easily and simply create your own personal social network. With neos-tweet social network you can publish posts, read the posts of friends, to have a personal conversation with your friends , and more. Neos-tweet social network application is built using  react and redux. </p>
          <div className="flex justify-center">
            <Link className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-2xl" to="/feed">Explore</Link>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/4 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={heroImg2} />
        </div>
      </div>
    </section>
   </>
  )
}
