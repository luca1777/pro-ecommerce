import React from 'react'

const DemoNotification = () => {

  return (
    <div className="w-full h-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-slideInFadeOut">
      <div className="p-4 bg-white rounded-lg shadow-xl animate-bounce">
        <p className="text-xl font-semibold">
          Sorry,this website is just for demo
        </p>
      </div>
    </div>
  );
}

export default DemoNotification;