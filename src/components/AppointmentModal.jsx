import React from 'react';

function AppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center !z-[9999] p-4">
      <div className="bg-[#DCEDFE] p-2 sm:p-4 flex flex-col sm:flex-row w-full sm:w-11/12 md:w-4/5 gap-2 sm:gap-4 max-w-4xl">
        <div className="w-full sm:w-2/5 h-48 sm:h-auto">
          <img src="/doctor-image.png" alt="Doctor" className="w-full h-full object-cover" />
        </div>
        <div className="w-full sm:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Book an appointment</h2>
          <p className="text-xs sm:text-sm text-[#545454] mb-2 sm:mb-4">
            Lorem Ipsum is simply dummy text of printing and typesetting industry standard dummy text the with the release.
          </p>
          <form className="space-y-2 sm:space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border text-sm sm:text-base" />
            <input type="email" placeholder="Email" className="w-full p-2 border text-sm sm:text-base" />
            <input type="tel" placeholder="Phone" className="w-full p-2 border text-sm sm:text-base" />
            <input type="date" placeholder="Date" className="w-full p-2 border text-sm sm:text-base" />
            <textarea placeholder="Subject" className="w-full p-2 border h-20 sm:h-24 text-sm sm:text-base"></textarea>
            <button type="submit" className="w-full bg-primary01 text-white p-2 text-sm sm:text-base">
              Book Now
            </button>
          </form>
          <button onClick={onClose} className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base">Close</button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;