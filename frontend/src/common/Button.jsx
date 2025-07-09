const Button = ({variant,label,eventOnClick}) => {
  const variantColor = {
    red : 'bg-red-500 hover:bg-red-600', 
    blue : 'bg-blue-500 hover:bg-blue-600', 
    yellow : 'bg-yellow-500 hover:bg-yellow-600', 
    green : 'bg-green-500 hover:bg-green-600', 
  }
  
  return (
    <button
      onClick={eventOnClick}
      className={`py-2 px-4 ${variant? variantColor[variant] : 'bg-blue-500 hover:bg-blue-600'} text-sm text-white rounded-lg`}
    >
      {label}
    </button>
  );
};

export default Button;
