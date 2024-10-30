

const FormField = ({labelName,name,type, placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe}) => {
      console.log(labelName)
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 ">
           <label htmlFor={name} 
           className="block text-sm font-medium text-gray-500 ">
                  {labelName}
            </label>
            {isSurpriseMe && 
            (
                  <button type="button" onClick={handleSurpriseMe} className="font-semibold text-xs bg-[#d2d2ee] px-2 rounded-[5px] text-black">
                    Surprise
                  </button>
            )}   
      </div>
      <input type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className="bg-gray-100 p-3 border border-gray-300  text-gray-800  text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none w-full "
      />
    </div>
  )
}

export default FormField