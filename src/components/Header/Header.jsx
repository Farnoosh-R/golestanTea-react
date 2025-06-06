import Button from "../Button/Button";

const Header = () => {
  return (
    <>
    <div className="bg-gradiant py-[100px]">
              <div className="flex flex-row gap-4 justify-between container mx-auto max-w-[1000px]">
        <div className="w-1/2 text-left flex-1">
          <img src="./images/header-tea.png" alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-(--color-primary) mb-[10px]">قرعه‌کشی مصرف‌کنندگان گلستان</h1>
          <p className="subtitle mb-[30px]">قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان</p>
          <p className="mb-[20px]">
            هر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با
            ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای
            گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
            است.
          </p>
          <Button text={"اطلاعات بیشتر"}/>
        </div>
      </div>
    </div>
    </>
  );
};
export default Header;
