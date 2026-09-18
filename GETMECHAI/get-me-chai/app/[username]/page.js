import React from 'react'

export default async function Username({ params }) {
  // Await the params Promise to access its properties
  const { username } = await params;

  return <>

    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white flex flex-col items-center pt-1 px-4">
      <div className='relative bg-red-50'>
        <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/20.gif?token-hash=UPlGnVkn7OinqAOVKBZ-T3zFvwvOI8h-L-dSXYsYfm0%3D&token-time=1791072000" alt="" />

        <div className='absolute -bottom-15 right-[46%]'>
          <img className='border border-white/40 z-10 w-30 h-30 rounded-lg' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjozNjAsInciOjM2MH0%3D/4.gif?token-hash=YKyQ4hz_aH0ks1xxmvU_PwxQyJGSimiUuGDnJc4RBsI%3D&token-time=1790985600" alt="" />
        </div>
      </div>
      <div className="info mt-18 flex flex-col items-center gap-2 text-center">
        <div className='text-3xl font-medium'>
          JB2A - Jules&Ben's Animated Assets
        </div>
        <div className='text-sm'>
          Creating Animated art for VTT's
        </div>
        <div className='text-gray-400'>
          26,984 members . 114 posts . $16,460/release
        </div>
      </div>
    </div>
  </>
}
