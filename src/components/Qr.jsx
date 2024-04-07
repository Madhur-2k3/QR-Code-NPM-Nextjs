import React from 'react'

const Qr = ({qrCodeURL,heading}) => {
  return (
    <>
        <h1>{heading}</h1>
        <p>{qrCodeURL}</p>
    </>
  )
}

export default Qr