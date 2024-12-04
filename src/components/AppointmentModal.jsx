import React, { useState } from 'react';

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 z-[9999] animate-slide-in">
      <div className="bg-white rounded-lg shadow-lg border-l-4 border-green-500 p-4 flex items-center gap-3">
        <div className="bg-green-100 rounded-full p-1">
          <svg 
            className="w-6 h-6 text-green-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-gray-800 font-medium">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    subject: '',
    status: 'pending'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if selected date is not in the past
    if (new Date(formData.date) < new Date(today)) {
      alert('Please select a future date for your appointment');
      return;
    }
    
    // Store in localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const newAppointment = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString()
    };
    
    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      subject: '',
      status: 'pending'
    });
    
    // Show success popup
    setShowSuccess(true);
    
    // Hide success popup after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center !z-[9999] p-4">
        <div className="bg-[#DCEDFE] p-2 sm:p-4 flex flex-col sm:flex-row w-full sm:w-11/12 md:w-4/5 gap-2 sm:gap-4 max-w-4xl">
          <div className="w-full sm:w-2/5 h-48 sm:h-auto">
            <img src="/doctor-image.png" alt="Doctor" className="w-full h-full object-cover" />
          </div>
          <div className="w-full sm:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Book an appointment</h2>
            <p className="text-xs sm:text-sm text-[#545454] mb-2 sm:mb-4">
              Please fill out the form below to request an appointment.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full p-2 border text-sm sm:text-base rounded-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-2 border text-sm sm:text-base rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full p-2 border text-sm sm:text-base rounded-lg"
              />
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  required
                  className="w-full p-2 border text-sm sm:text-base rounded-lg"
                />
                {formData.date && new Date(formData.date) < new Date(today) && (
                  <p className="text-red-500 text-xs mt-1">Please select a future date</p>
                )}
              </div>
              <textarea
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-2 border h-20 sm:h-24 text-sm sm:text-base rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary01 text-white p-2 text-sm sm:text-base rounded-lg hover:bg-primary01/90 transition-colors"
              >
                Book Now
              </button>
            </form>
            <button
              onClick={onClose}
              className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <SuccessPopup
          message="Appointment request submitted successfully!"
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  );
}

export default AppointmentModal;