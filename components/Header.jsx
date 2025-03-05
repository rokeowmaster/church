import React from 'react'

const Header = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img src="banner.jpg" alt="" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"></img>
  <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
  </div>
  <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Welcome to our Church</h2>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">Spreading the word of God to the ends of the Earth</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Our Services <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Our Mission<span aria-hidden="true">&rarr;</span></a>
        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Branches</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">3</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Devoted Members</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">500+</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Services per week</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">3</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

  )
}

export default Header