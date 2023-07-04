const Input = ({text, type, placeholder, name, register, required, errors, pattern, message}) => {
  return (
    <>
      <input
          id={name}
          type={type} 
          placeholder={placeholder} 
          name={name}
          {...register(name, { required, pattern })}
          className={`mt-2 border-2 ${errors[name] ? "border-red-500 focus:border-red-500" : "border-primary"} bg-[#F3F7FB] w-full p-[14px] rounded-lg focus:border-2 focus:border-primary focus:ring-0 focus:outline-none`}
      >
          {text}
      </input>
      {errors[name] && <span className="text-red-500 mt-2 block">{message}</span>}
    </>
  )
}

export default Input