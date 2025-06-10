import ImageInfoCol from "./ImageInfoCol";

const ImageInfoBox = () => {
    return(
        <>
        <div className="image-info-box bg-(--color-green) py-[100px]">
            <div  className="container-max flex gap-4 justify-center">
            <ImageInfoCol image={"./images/recipe-pic2.jpg"} title={"ماکارونی با سبزیجات"} text={"ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…"} btnTitle={"ادامه مطلب"}/>
            <ImageInfoCol image={"./images/recipe-pic3.jpg"} title={"سوپ مکزیکی"} text={"گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…"} btnTitle={"ادامه مطلب"}/>
            <ImageInfoCol image={"./images/recipe-pic-Chilakile-1401.jpg"} title={"چیلاکیله"} text={"احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست"} btnTitle={"ادامه مطلب"}/>

        </div>
        </div>

        </>
    )
}
export default ImageInfoBox;