import { useState } from "react";
import { useNavigate } from "react-router-dom"

const CreatePost = () => {

  const navigate=useNavigate();
  const [form,setForm]=useState({
    name:'',
    prompt:'',
    photo:''

  })
  const [geratingImg,setGeneratingImg]=useState(false)
  const [isLoading,setIsLoading]=useState(false)


  return (
    <div>CreatePost</div>
  )
}

export default CreatePost