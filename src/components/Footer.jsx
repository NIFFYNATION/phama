import Logo from "./Logo";

function Footer() {
  return (
    <div className="contain-fluid bg-[url(/FooterBackground.png)] bg-[#E5F2EF] mt-[160px] bg-center bg-no-repeat h-auto">
      <div className="contain">
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="">
            <Logo />
          </div>
          <div className="flex items-center gap-2 ml-0 lg:ml-auto">
            <div className="bg-[#0FE3AF] flex items-center justify-center h-[40px] w-[40px] text-center rounded-full">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <p>(+22) 123 - 4567 - 900</p>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0 ml-0 lg:ml-auto ">
            <div className="bg-[#0FE3AF] flex items-center justify-center h-[40px] w-[40px] text-center rounded-full">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <p>support@doctorate.com</p>
          </div>
          <div className="flex justify-start  ml-0 lg:ml-auto  gap-4 mt-4 text-[18px] text-primary01">
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
