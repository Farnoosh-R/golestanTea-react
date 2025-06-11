import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiAparat } from "react-icons/si";


const FooterSocial = () => {
    return(
        <>
        <div className="footer-social flex gap-4 bg-[#eeefef] text-4xl justify-center py-[20px] border-b-[20px] border-(--color-primary)">
            <a className="bg-[#babbbb] rounded-[50%] text-white p-[5px] hover:bg-(--color-primary) opacity-70 hover:opacity-100 transition-opacity duration-600" href=""><TiSocialLinkedin /></a>
            <a className="bg-[#babbbb] rounded-[50%] text-white p-[5px] hover:bg-(--color-primary) opacity-70 hover:opacity-100 transition-opacity duration-600" href=""><FaFacebookF /></a>
            <a className="bg-[#babbbb] rounded-[50%] text-white p-[5px] hover:bg-(--color-primary) opacity-70 hover:opacity-100 transition-opacity duration-600" href=""><FaInstagram /></a>
            <a className="bg-[#babbbb] rounded-[50%] text-white p-[5px] hover:bg-(--color-primary) opacity-70 hover:opacity-100 transition-opacity duration-600" href=""><FaTelegramPlane /></a>
            <a className="bg-[#babbbb] rounded-[50%] text-white p-[5px] hover:bg-(--color-primary) opacity-70 hover:opacity-100 transition-opacity duration-600" href=""><SiAparat /></a>
        </div>
        </>
    )
}
export default FooterSocial;