import React from 'react'

const Header = ({totalImages , missingAltCount}) => {
  return (
    <div className="flex w-full items-center justify-between py-4">
        <div className="flex  justify-between rounded-md bg-blue-600 w-[45%] text-white p-4">
          <div className="text-sm">Total Images</div>
          <div className="text-xl font-semibold">{totalImages}</div>
        </div>

        <div className="flex justify-between rounded-md bg-blue-600 w-[45%] text-white p-4">
          <div className="text-sm">Images Missing Alt Text</div>
          <div className="text-xl font-semibold">{missingAltCount}</div>
        </div>
      </div>
  )
}

export default Header