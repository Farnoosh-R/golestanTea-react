import Button from "../Button/Button";

const ImageInfoCol = ({image, title, text, btnTitle}) => {
    return(
        <>
        <div className="image-info-col shadow-md bg-white">
        <div className="img-box h-[340px]">
            <img className="w-[100%] h-[100%]" src={image} alt="" />
        </div>
        <div className="p-[20px]">
            <h2 className="special text-(--color-primary)">{title}</h2>
            <p className="mb-[20px]">{text}</p>
            <Button text={btnTitle} />
        </div>
        </div>
        </>
    )
}
export default ImageInfoCol;