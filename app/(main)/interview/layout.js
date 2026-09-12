import React, { Suspense } from 'react'
import { ClimbingBoxLoader, PacmanLoader } from 'react-spinners';


const Layout = ({children}) => {
  return (
    <div className='px-5'>
        <Suspense fallback={
              <div className="flex items-center justify-center h-[60vh]">
                <PacmanLoader
                  color="#fff9f9"
                  cssOverride={{}}
                  loading
                  size={50}
                  speedMultiplier={2}
                />
              </div>

        }>
            {children}
        </Suspense>
    </div>
  )
}

export default Layout
