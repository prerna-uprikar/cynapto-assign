
export default function Sidebar() {
    return (
      <>
      <div className="h-[99vh] flex flex-col justify-center bg-[#006599] w-[440px] ml-[6px] mt-[7px]">
         <div className="flex justify-center items-center flex-col">
            <img src="https://templatemo.com/templates/templatemo_501_neaty/img/tm-neaty-logo.png" className="h-[100px] w-[100px]" />
            <p className="text-white text-[45px]">Neaty</p>
         </div>
        <div className="flex justify-center">
        <div className="flex flex-col gap-[30px] items-start mt-[30px] w-[200px]">
        <a href="/" className="text-[20px] text-[#f4ef5e] font-[300]">Welcome</a>
         <a href="/" className="text-white text-[20px] font-[300]">About Us</a>
         <a href="/" className="text-white text-[20px] font-[300]">Gallery One</a>
         <a href="/" className="text-white text-[20px] font-[300]">Second Gallery</a>
         <a href="/" className="text-white text-[20px] font-[300]">Third Gallery</a>
         <a href="/" className="text-white text-[20px] font-[300]">Contact Us</a>
        </div>
        </div>
      </div>
      </>
    );
  }
  