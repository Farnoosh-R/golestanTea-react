import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <>
      <FooterSocial />
      <div className="footer bg-(--dark-gray) py-[30px]">
        <div className="container-max flex gap-4 justify-center">
          <div className="footer-col flex-[1] min-w-[200px] text-center">
            <img
              className="mx-auto mb-4"
              src="./images/footer-icon2.png"
              alt=""
            />
            <div>
              <h3 className="border-t-1 border-b-1 border-gray-400 py-3 text-white mb-4">
                حبوبات گلستان
              </h3>
              <div className="text-right leading-[30px]">
                <a className="hover:text-white block" href="">
                  چای ممتاز هندوستان​
                </a>
                <a className="hover:text-white block" href="">
                  چای ممتاز ارل گری​
                </a>
                <a className="hover:text-white block" href="">
                  چای سيلان عطری
                </a>
                <a className="hover:text-white block" href="">
                  چای ممتاز سيلان​
                </a>
                <a className="hover:text-white block" href="">
                  چای صبحانه گلستان​
                </a>
              </div>
            </div>
          </div>

          <div className="footer-col flex-[1] min-w-[200px] text-center">
            <img
              className="mx-auto mb-4"
              src="./images/footer-icon3.png"
              alt=""
            />
            <div>
              <h3 className="border-t-1 border-b-1 border-gray-400 py-3 text-white mb-4">
                ادویه گلستان
              </h3>
              <div className="text-right leading-[30px]">
                <a className="hover:text-white block" href="">
                  چای ممتاز هندوستان​
                </a>
                <a className="hover:text-white block" href="">
                  چای ممتاز ارل گری​
                </a>
                <a className="hover:text-white block" href="">
                  چای سيلان عطری
                </a>
                <a className="hover:text-white block" href="">
                  چای ممتاز سيلان​
                </a>
                <a className="hover:text-white block" href="">
                  چای صبحانه گلستان​
                </a>
              </div>
            </div>
          </div>

          <div className="footer-col flex-[1] min-w-[200px] text-center">
            <img
              className="mx-auto mb-4"
              src="./images/footer-icon4.png"
              alt=""
            />
            <div>
              <h3 className="border-t-1 border-b-1 border-gray-400 py-3 text-white mb-4">
                تی بگ گلستان
              </h3>
              <div className="text-right leading-[30px]">
                <a className="hover:text-white block" href="">
                  چای ممتاز هندوستان​
                </a>
                <a className="hover:text-white block" href="">
                  چای ممتاز ارل گری​
                </a>
                <a className="hover:text-white block" href="">
                  چای سيلان عطری
                </a>
                <a className="hover:text-white block" href="">
                  چای ممتاز سيلان​
                </a>
                <a className="hover:text-white block" href="">
                  چای صبحانه گلستان​
                </a>
              </div>
            </div>
          </div>

          <div className="footer-col flex-[1] min-w-[200px] text-center">
            <img
              className="mx-auto mb-4"
              src="./images/footer-icon1.png"
              alt=""
            />
            <div>
              <h3 className="border-t-1 border-b-1 border-gray-400 py-3 text-white mb-4">
                چای گلستان
              </h3>
              <div className="text-right leading-[30px]">
                <a className="hover:text-white block" href="">
                  چای ممتاز هندوستان​
                </a>
                <a className="hover:text-white block" href="">
                  چای ممتاز ارل گری​
                </a>
                <a className="hover:text-white block" href="">
                  چای سيلان عطری
                </a>
                <a className="hover:text-white block" href="">
                  چای ممتاز سيلان​
                </a>
                <a className="hover:text-white block" href="">
                  چای صبحانه گلستان​
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="copy-right text-center mx-auto">
          <h4>All Right Reserved Golestan Company 2022-2025</h4>
          <h4>Design By: Farnoosh</h4>
        </div>
      </div>
    </>
  );
};
export default Footer;
