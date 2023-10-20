const Button = ({ buttonTitle }) => {
    return (
        <div>
            <p className="w-64 mx-auto text-lg md:text-xl font-bold text-center text-white uppercase rounded bg-gradient-to-t from-[#08153d] from-10% via-[#223c7f] via-30% to-[#3157ab] to-40%">{buttonTitle}</p>
        </div>
    );
};

export default Button;