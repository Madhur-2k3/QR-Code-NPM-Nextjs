"use client"
import Form from "@/components/Form";
import Qr from "@/components/Qr";

import Image from "next/image";
import QRCode from 'qrcode'
import { useState } from "react";

export default function Home() {

  const[text,setText]=useState('')

  const SubmitHandler=(e)=>{
    e.preventDefault();

    // let data='Hello'
    let data=text;
    let qrCodeURL;
  
  QRCode.toDataURL(data)
    .then(url => {
      qrCodeURL = url;
      console.log(qrCodeURL);
      const image=document.getElementById('image');
      image.src=qrCodeURL;
    })
    .catch(err => {
      console.error(err);
    });
  //  document.getElementsByTagName(h1).innerHTML=text; 
    document.getElementById('h1').innerHTML=text
  }

 

  return (

  <>
      <form onSubmit={SubmitHandler} className=" flex justify-center gap-8 py-5" >
            <input type="text" placeholder='Enter Roll Number'
            className=" border border-black rounded-md" 
            onChange={(e)=>setText(e.target.value)}/>
            <input type="submit" className="bg-blue-400 w-fit px-2 py-1 rounded-md"/>
        </form>
    
      <img id="image" className="h-72 w-72 mx-auto" />
      <h1 id="h1" className=" text-2xl text-center"></h1>
  </>
  
  );
}


