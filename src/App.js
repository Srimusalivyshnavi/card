
import React from 'react';

export const App = () => {
  return (
    <div className='flex justify-center items-center bg-slate-800 min-h-screen text-white'>
      <div className='flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0'>
        <div className='bg-slate-700 rounded-xl'>
          <div className='p-8 mx-3 mt-3 rounded-xl bg-slate-800'>
            <div className='text-center uppercase'>Basic</div>
            <h2 className='mt-10 font-serif text-5xl text-center'>100GB</h2>
            <h3 className='mt-2 text-center'>$1.99/Month</h3>
            <div className='flex justify-center'>
              <button className='inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 duration-200'>
                Purchase
              </button>
            </div>
          </div>
          <div className='border-t border-slate-700'></div>
          <div className='p-8 mx-3 mb-3 bg-slate-800 rounded-b-xl'>
            <div className='flex flex-col justify-center items-center space-y-2'>
              <div className='items-center text-sm'>100 GB of storage</div>
              <div className='items-center text-sm'>Back up all your files</div>
              <div className='items-center text-sm'>Securely save important documents</div>
            </div>
          </div>
        </div>
        <div className='bg-violet-700 rounded-xl'>
          <div className='p-8 mx-3 mt-3 rounded-xl bg-slate-800'>
            <div className='text-center uppercase'>Medium</div>
            <h2 className='mt-10 font-serif text-5xl text-center'>100GB</h2>
            <h3 className='mt-2 text-center'>$1.99/Month</h3>
            <div className='flex justify-center'>
              <button className=' shadow-lg shadow-violet-700/50  inline-block px-10 py-3 my-6 text-center bg-violet-700 border border-violet-600 rounded-lg hover:bg-violet-800 duration-200'>
                Purchase
              </button>
            </div>
          </div>
          <div className='border-t border-slate-700'></div>
          <div className='p-8 mx-3 mb-3 bg-slate-800 rounded-b-xl'>
          <div className='flex flex-col justify-center items-center space-y-2'>
              <div className='items-center text-sm'>100 GB of storage</div>
              <div className='items-center text-sm'>Back up all your files</div>
              <div className='items-center text-sm'>Securely save important documents</div>
            </div>
          </div>
        </div>
        <div className='bg-slate-700 rounded-xl'>
          <div className='p-8 mx-3 mt-3 rounded-xl bg-slate-800'>
            <div className='text-center uppercase'>Premium</div>
            <h2 className='mt-10 font-serif text-5xl text-center'>100GB</h2>
            <h3 className='mt-2 text-center'>$1.99/Month</h3>
            <div className='flex justify-center'>
              <button className='inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 duration-200'>
                Purchase
              </button>
            </div>
          </div>
          <div className='border-t border-slate-700'></div>
          <div className='p-8 mx-3 mb-3 bg-slate-800 rounded-b-xl'>
          <div className='flex flex-col justify-center items-center space-y-2'>
              <div className='items-center text-sm'>100 GB of storage</div>
              <div className='items-center text-sm'>Back up all your files</div>
              <div className='items-center text-sm'>Securely save important documents</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
