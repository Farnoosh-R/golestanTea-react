const Button = ({text}) => {
    return(
        <>
        <button className="btn btn-outline bg-white rounded-[8px] hover:bg-(--color-primary) hover:text-white">{text}</button>
        </>
    )
}
export default Button;