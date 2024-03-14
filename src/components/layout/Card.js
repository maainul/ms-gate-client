const Card = ({ title, icon, totalAmount,hoverColor,textColor,bottomIcon }) => {
    return (
        <div className={`bg-white p-5 w-full shadow-md h-32 flex flex-col justify-between hover:cursor-pointer ${hoverColor} rounded-md`}>
            <div className='flex justify-between'>
                {/* Render the title */}
                <p className={`text-md font-semibold ${textColor}`}>{title}</p>
                
                {/* Render the icon */}
                {icon}

            </div>

            <div className='flex justify-between'>
                {/* Render the total amount */}
                <p className={`text-2xl font-bold ${textColor}`}>{totalAmount}</p>
                {bottomIcon}
            </div>
        </div>
    );
}

export default Card;
