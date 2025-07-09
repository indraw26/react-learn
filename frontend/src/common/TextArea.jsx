const TextArea = ({label,variant,placeholder,eventOnChange}) => {

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-xs font-medium text-gray-700">{label}</label>
      <input 
      type={variant} 
      placeholder={placeholder? placeholder : ""} 
      className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
      onChange={eventOnChange}
      />
    </div>
  )
}

export default TextArea