import "./style.css"
import Line from "../Line/Line";

const BannerInfo = ({image, title, text}) => {
    return(
        <>
        <div className="banner-info mb-[30px]">
            <img className="w-[100%] border-b-20 border-(--color-beige)" src={image} alt="" />
            <div className="bnner-info-box bg-(--color-primary) w-[290px] pr-[20px] py-[10px]">
            <h1 className="special text-white">{title}</h1>
            <h3 className="special text-white">{text}</h3>
            </div>
        </div>
        <Line mt={"30px"}/>
        </>
    )
}
export default BannerInfo;