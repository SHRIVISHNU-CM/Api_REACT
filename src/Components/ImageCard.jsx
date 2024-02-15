import { useNavigate } from "react-router-dom"



function ImageCard({imageUrl,id}){
    const navigate = useNavigate()
    function handleNavigate(){
        navigate(`/${id}`)
    }
    return(
        <>
            <img src={imageUrl} onClick={handleNavigate} className="h-[200px] w-[200px] rounded-xl" />
        </>
    )
}
export default ImageCard;