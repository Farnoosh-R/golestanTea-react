import Button from "../Button/Button";

const VideoInfoCol = ({video, title, text, btnTitle}) => {
    return(
        <>
        <div className="video-info-col shadow-md bg-white">
        <div className="img-box h-[150px]">
           <iframe className="w-[100%]" src={video}  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
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
export default VideoInfoCol;