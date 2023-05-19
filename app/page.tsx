'use client';

import { useEffect, useState } from 'react'
import Card from './card';

export default function Home() {

  const [photos, setPhotos] = useState([])
  const [links, setLinks] = useState([])
  const [prompts, setPrompts] = useState([])

  useEffect(()=>{    
    const getPhotos = async() => {
      try {
        const response = await
          fetch("https://www.midjourney.com/_next/data/4EwJhiNhsS7YXQFUwbbMr/showcase/top.json", {
            method: 'GET',
            redirect: 'follow'})
        const info = await response.json()
        setPhotos(info.pageProps.jobs);
        const photoArray = info.pageProps.jobs.map((photo: any) => photo.image_paths[0] )
        const promptArray = info.pageProps.jobs.map((photo: any) => photo.prompt )
        setLinks(photoArray)
        setPrompts(promptArray)
      }
      catch(error){
        console.log(error)
      }
    }

    getPhotos();

  },[])

  return (
    <main>
      <h1>Community Showcase</h1>
      <ul>
        {links.map( (photo:any, key:number) =>  
        <div key={key}> 
          <Card link={photo} prompt={prompts[key]}></Card>
        </div>
        )}
      </ul>
    </main>
  )
}
