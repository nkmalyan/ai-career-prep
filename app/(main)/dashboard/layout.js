import { getName } from '@/actions/dashboard';
import React, { Suspense } from 'react'
import { ClimbingBoxLoader, PacmanLoader } from 'react-spinners';


const Layout = ({children}) => {
  return (
    <div className='px-5'>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold gradient-title mb-0'>Hello {getName()}</h1>
        </div>
        <div className='flex items-center justify-between mb-5'>
            <h1 className='text-6xl font-bold gradient-title '>Industry Insights</h1>
        </div>
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
