import React, { useState } from 'react';

function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    subject: '',
    status: 'pending' // pending, approved, rejected
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here you would typically send to your backend
    // For now, we'll store in localStorage
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
    
    onClose();
    alert('Appointment request submitted successfully!');
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
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-2 border text-sm sm:text-base rounded-lg"
            />
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
  );
}

export default AppointmentModal;