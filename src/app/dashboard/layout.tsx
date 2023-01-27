import React from 'react'
import Footer from './component/Footer'
import NavBar from './component/NavBar'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <NavBar/>
        <main>
            {/* <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    {children}
                </div>
            </div> */}

            <div className="grid grid-cols-3 grid-rows-3 place-items-center h-screen">
              <div className="col-start-2 row-start-2 ">
                <div className="text-5xl"> 
              {children}
                </div>
              </div>
            </div>
        </main>
        <Footer/>
      
    </div>
  )
}
