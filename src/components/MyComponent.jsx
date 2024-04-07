// "use client";
// import { useEffect, useState } from 'react';
// import QRCode from 'qrcode';

// function MyComponent({ qrCodeURL }) {
//     console.log(qrCodeURL)
//   return (
//     <div>
//       {qrCodeURL ? (
//         <img src={qrCodeURL} alt="QR Code" />
//       ) : (
//         <p>Loading QR Code...</p>
//       )}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   try {
//     const qrCodeURL = await QRCode.toDataURL('2451-21-733-110');
//     return {
//       props: {
//         qrCodeURL,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         qrCodeURL: null,
//       },
//     };
//   }
// }

// export default MyComponent;
