'use client'

import { useRef } from 'react'
import Script from 'next/script'

export default function MapPage() {
  const mapRef = useRef(null)

  function initMap() {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: 28.6139, lng: 77.2090 }, // Delhi ke coordinates
      zoom: 12,
    })
  }

  return (
    <>
      {/* Ye div jaha map dikhega */}
      <div ref={mapRef} style={{ height: '550px', width: '1400px', border: '3px solid red' }}></div>

      {/* Google ki script load karo, load hote hi map banao */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`}
        strategy="afterInteractive"
        onReady={initMap}
      />
    </>
  )
}