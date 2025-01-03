import Button from "../components/Button";
import DoctorsProfile from "../components/expertsProfile";

function TeamSingle() {
  return (
    <>
      <DoctorsProfile />
      <div>
        <div className="contain flex items-center justify-center p-4 my-8">
          <div className="p-2 sm:p-0 flex flex-col lg:flex-row w-full max-w-6xl gap-6">
            {/* Appointment Form Section */}
            <div className="w-full lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-16 bg-[#F1F1F1]">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Book an appointment</h2>
              <p className="text-xs sm:text-sm text-[#545454] mb-4 sm:mb-6">
                Lorem Ipsum is simply dummy text of printing and typesetting industry standard dummy text the with the release.
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary01" 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary01" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary01" 
                />
                 <input 
                  type="text" 
                  placeholder="Department" 
                  className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary01" 
                />
                <input 
                  type="date" 
                  placeholder="Date" 
                  className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary01" 
                />

<select name="doctors" 
 id="doctors" 
 className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary01"

>
<option value=""
 disabled 
 selected

 >Choose Doctor</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
        
                <textarea 
                  placeholder="Subject" 
                  className="w-full p-3 border border-gray-200 rounded-md h-24 sm:h-32 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary01"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-primary01 text-white p-3 rounded-md text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all"
                >
                  Booking Now
                </button>
              </form>
            </div>

            {/* Right Side Section */}
            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              <div className="flex justify-center h-48 sm:h-64 lg:h-1/2 bg-[url(/imageTeamSingle1.png)] bg-cover bg-center bg-no-repeat">
               
                <div
                  className="w-full md:w-[60%] px-8 lg:w-[100%] text-center flex items-center justify-center"
                >
                  <div className="bg-white/80 backdrop px-4 py-10 ">
                    <p
                      className={`w-fit font-['Montserrat'] tracking-[3px] mx-auto text-center text-[18px] md:text-[20px] px-[24px] mb-2 text-[#1C1C1C] ring-1 ring-[#CECECE] ring-opacity-60 `}
                    >
                      TIME
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-[#1C1C1C] text-center">
                      Working Hours
                    </h2>
                    <p className="text-[#545454] mt-4 text-[14px] sm:text-[20px]">
                      Sunday To Friday 9.00 am - 10.00 pm Saturday Closed
                    </p>
                  </div>
                
              </div>
              </div>
              <div className="bg-primary01 p-6 sm:p-8 flex flex-col items-center justify-center gap-4 h-48 sm:h-64 lg:h-1/2">
                <h3 className="text-white text-xl sm:text-2xl font-bold text-center">
                  Didn't Find a Question?
                </h3>
                <p className="text-white text-sm sm:text-base text-center max-w-md">
                  Donec efficitur, enim bibendum volutpat dictum, tellus risus porttitor leo.
                </p>
                <Button btnClass="bg-primary02 !text-primary03 w-full sm:w-auto mt-2">
                  More Questions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamSingle;