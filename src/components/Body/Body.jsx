import BanerFix from "../BanerFix/BanerFix";
import BannerInfo from "../BannerInfo/BannerInfo";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import Footer from "../Footer/Footer";
import ImageInfoBox from "../ImageInfoBox/ImageInfoBox";
import InfoBox from "../InfoBox/InfoBox";
import ProfessionalBanner from "../ProfessionalBanner/ProfessionalBanner";
import VideoInfoBox from "../VideoInfoBox/VideoInfoBox";

const Body = () => {
    return(
        <>
        <InfoBox title={"معرفی گلستان"} content={"آنچه که امروز با نام مجموعه گلستان می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. گلستان پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید."}/>
        <InfoBox title={"محصولات گلستان​"} content={"نام تجاری گلستان قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند."} />
        <Counter />
        <BannerInfo image={"./images/banner-1.jpg"} title={"برنج گلستان"} text={"معرفی محصول"}/>
        <br />
        <InfoBox title={"رکن اول غذای ایرانی"} content={"مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند."}/>
        <div className="container-min flex gap-4 justify-end pb-[50px]">
            <Button text={"محصولات برنج"}/>
            <Button text={"آشپزخانه گلستان"}/>
        </div>
        <BannerInfo image={"./images/banner-2.jpg"} title={"چای گلستان"} text={"معرفی محصول"}/>
        <br />
        <InfoBox title={"سابقه‌ای به قدمت یک عمر"} content={"چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد."}/>
        <InfoBox content={"برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است."}/>
        <div className="container-min pb-[50px]">
            <Button text={"محصولات چای"}/>
        </div>
        <BannerInfo image={"./images/banner-3.jpg"} title={"پسته گلستان"} text={"معرفی محصول"}/>
        <br />
        <InfoBox title={"آجيل‌های خوش خنده"} content={"خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب."}/>
        <InfoBox content={"پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد."}/>
           <div className="container-min pb-[50px]">
            <Button text={"ناتس گلستان"}/>
        </div>
        <BanerFix image={"/images/banner-fix.png"}/>
        <br />
        <div className="container-min">
            <h2 className="text-(--color-primary)">مجله گلستان</h2>
        </div>
        <br />
        <ImageInfoBox />
        <br />
        <VideoInfoBox />
        <ProfessionalBanner />
        <br />
        <br />
        <br />
        <InfoBox title={"مسئوليت‌های اجتماعی گلستان"} content={"كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. گلستان در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است."} />
            <div className="container-min pb-[50px]">
            <Button text={"اطلاعات بيشتر"}/>
        </div>
        <Footer />
        </>
    )
}
export default Body;