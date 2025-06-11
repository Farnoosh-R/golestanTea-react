import Line from "../Line/Line";

const ProfessionalBanner = () => {
  return (
    <>
      <div className="professional-banner text-center bg-(--dark-green) h-[600px] pt-[200px] border-b-20 border-(--color-beige) mb-[20px]">
        <h3 className="special text-[#D5ECE1] mb-[10px]">
          مسئوليت‌های اجتماعی شركت گلستان
        </h3>
        <Line />

        <div className="mt-[10px]">
          <span className="text-[#009da2] text-3xl">Golestan</span>
          <span className="text-[#00d8df] text-xl">Social Responsibility</span>
        </div>
        <h3 className="special text-[#bcbec0]">Mahdi Hospital</h3>
        <img className="mx-auto" src="./images/csr-pic1.jpg" alt="" />
      </div>
      <Line color={"gray-300"}/>
    </>
  );
};
export default ProfessionalBanner;
