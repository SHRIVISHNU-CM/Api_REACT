import { useState,useEffect } from "react";
import{useParams} from "react-router-dom"
import axios from "axios";

function SinglePage() {
    const [data,setData] = useState()
    const {id} = useParams()
    const getData = ()=>{
        axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        .then((res)=>{
            console.log(res.data.photo)
            setData(res.data.photo)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <>
            <div className="flex justify-center items-center p-2 flex-wrap">
                <img src={data?.url} className="rounded-lg w-[400px] h-[400px]" />
                <div>
                <div className="text-center">
                    <h1 className="font-bold">Title</h1>
                    <h1 className="font-semibold text-xl">{data?.title}</h1>
                </div>
                   
                    <div className="text-center w-[500px] mt-4">
                        <h1 className="font-bold">description</h1>
                        <p className="font-semibold text-2xl">
                            {data?.description}
                        </p>
                    </div>
                    
                </div>

            </div>
            
        </>
    )
}
export default SinglePage