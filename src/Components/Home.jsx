import axios from "axios"
import { useState,useEffect } from "react"
import ImageCard from "./ImageCard"

function Home() {
    const[data,setData] = useState([])
    const handleApis = ()=>{
        axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20")
            .then((res) => {
                console.log(res.data.photos)
                setData(res.data.photos);
            })
    }   
    useEffect(()=>{
        handleApis()
    },[])
    
    return (
        <>
        <h1 className="text-center text-2xl border">Photos</h1>
            <div className="flex flex-wrap justify-center">
                {data.map((el, i) => {
                    return (
                        <div className="m-1 " id={el.id} key={i}>
                            <ImageCard imageUrl={el.url} id={el.id} />
                        </div>
                    )

                })}
            </div>
            
            
        </>
    )
}
export default Home