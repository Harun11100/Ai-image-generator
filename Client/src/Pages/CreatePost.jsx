import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { FormField, Loader } from "../Components";
import { preview } from "../assets";

const CreatePost = () => {

  const navigate=useNavigate();
  const [form,setForm]=useState({
    name:'',
    prompt:'',
    photo:''

  })
  const [generatingImg,setGeneratingImg]=useState(false)
  const [isLoading,setIsLoading]=useState(false)
  
  function handleSubmit(e){
    e.preventDefault();

  }
  function handleChange(){

  }
  function handleSurpriseMe(){

  }
  function generateImage(){

  }

  return (
   <section className="max-w-7xl mx-auto">
        <div>
        <h1 className="font-extrabold text-gray-800 text-[32px]">
         Create
        </h1>
        <p className="mt-2 text-gray-700 text-[17px] max-w-[800px]">
          Create imaginative and visully stunning images through AI and share them with the community
        </p>
        </div>

        <form action="submit" className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
               <FormField
                 labelName='Your Name'
                 type='text'
                 name='name'
                 placeholder='Harun Or Rashid'
                 value={form.name}
                 onChange={handleChange}
               />
               <FormField
                 labelName='Prompt'
                 type='text'
                 name='prompt'
                 placeholder='A plush toy robot sitting against a yellow wall'
                 value={form.prompt}
                 onChange={handleChange}
                 isSurpriseMe
                 handleSupriseMe={handleSurpriseMe}
               />
                 
                 <div className="relative bg-gray-100 border-gray-400 text-gray-70 text-sm focus:ring-blue-600  focus:border-blue-600
                  w-64 p-3 h-64 flex justify-center items-center rounded-md">

                    {form.photo?(
                      <img src={form.photo} alt='form-alt'
                      className="h-full w-full object-contain" />
                    ):<img src={preview} alt='preview' className=" h-9/12 w-9/12  object-contain opacity-30"/>}
                    {
                      generatingImg && (
                        <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(86,77,77,0.5)] rounded-lg '>
                          <Loader/>
                        </div>

                      )
                      
                    }
                  </div>
          </div>
          <div className="mt-5 gap-5 ">
            <button type='button'
            className="w-full text-center bg-green-500 text-white font-medium text-sm sm:w-auto py-2.5 rounded-md px-5"
              onClick={generateImage}>
                {generatingImg ?'Generating...':'Generate Image'}
            </button>

          </div>
          <div className="mt-10 ">
            <p className="mt-2 text-gray-500 text-[14px]">Once you have created the image you can share it with others in the community</p>
            <button className="mt-3 w-full text-white bg-blue-600 text-sm sm:w-auto  text-center font-medium rounded-md px-5 py-2.5">
              {
                isLoading ? 'Loading...' :'Share with community'
              }
            </button>

          </div>

        </form>
   </section>
  ) 
}

export default CreatePost