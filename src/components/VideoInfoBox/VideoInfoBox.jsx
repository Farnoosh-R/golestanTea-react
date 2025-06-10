import VideoInfoCol from "./VideoInfoCol";

const VideoInfoBox = () => {
    return(
        <>
        <div className="video-info-box bg-white py-[50px]">
            <div  className="container-max flex gap-4 justify-center">
            <VideoInfoCol video={"https://www.aparat.com/video/video/embed/videohash/pig2627/vt/frame"} title={"ماکارونی با سبزیجات"} text={"ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…"} btnTitle={"مشاهده محصولات"}/>
            <VideoInfoCol video={"https://www.aparat.com/video/video/embed/videohash/pig2627/vt/frame"} title={"سوپ مکزیکی"} text={"گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…"} btnTitle={"ادامه مطلب"}/>
            <VideoInfoCol video={"https://www.aparat.com/video/video/embed/videohash/pig2627/vt/frame"} title={"چیلاکیله"} text={"احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست"} btnTitle={"ویدیوهای بیشتر"}/>

        </div>
        </div>

        </>
    )
}
export default VideoInfoBox;