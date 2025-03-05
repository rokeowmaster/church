import React from 'react'

const Team = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-xl">
      <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Meet our leadership</h2>
      <p className="mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-6">
          <img className="size-16 rounded-full" src="pastor.jpg"></img>
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Pastor</p>
          </div>
        </div>
      </li>

      {/* <!-- More people... --> */}
    </ul>
  </div>
</div>

  )
}

export default Team