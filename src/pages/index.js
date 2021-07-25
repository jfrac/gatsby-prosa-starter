import React from "react"

export default function Home() {
  return(
    <div className="antialiased text-gray-900">
      <div className="px-4 py-10 max-w-4xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">

        <div className=" space-y-10 mb-10 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
          <p className="md:font-bold text-2xl">Gatsby <span className="text-indigo-500">PROSA</span> Starter</p>
          <a href=""><span>View on GitHub</span></a>
        </div>

        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
        
          <p>The simplest starter to display text and make it readable</p>

          <p>Save your users the painful task of "adding to pocket" just to be able to read text decently</p>
        </article>
      </div>
    </div>
  )
}
