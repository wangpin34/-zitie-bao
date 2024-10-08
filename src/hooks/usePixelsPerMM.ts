import { useEffect, useState } from 'react'

function getPixelsPerMM() {
  // Create an element to measure size in mm
  const div = document.createElement('div')

  // Set the width of the element to 10mm for better precision
  div.style.width = '10mm'
  div.style.height = '10mm'
  div.style.position = 'absolute' // Avoid affecting page layout
  div.style.left = '-100%' // Hide the element off-screen

  document.body.appendChild(div)

  // Get the element's pixel width
  const pixelsPer10mm = div.offsetWidth

  // Remove the element after measurement
  document.body.removeChild(div)

  // Calculate the pixels per 1mm
  const pixelsPerMM = pixelsPer10mm / 10

  return pixelsPerMM
}

export default function usePixelsPerMM() {
  const [pixelsPerMM, setPixelsPerMM] = useState(0)

  useEffect(() => {
    setPixelsPerMM(getPixelsPerMM())
  }, [])

  return pixelsPerMM
}
