import React, { useState } from 'react';
import supabase from '/services/supabase.js';

const SuccessPopup = ({ message, onClose }) => {
  // ... SuccessPopup component remains unchanged ...
};

function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    subject: '',
    status: 'pending'
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if selected date is not in the past
    if (new Date(formData.date) < new Date(today)) {
      alert('Please select a future date for your appointment');
      return;
    }

    setLoading(true);
    
    try {
      // Format the date and time for Supabase
      const appointmentDateTime = new Date(`${formData.date}T${formData.time || '00:00'}`).toISOString();

      // Insert into Supabase
      const { data, error } = await supabase
        .from('appointments')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            time: formData.time || '00:00',
            subject: formData.subject,
            status: 'pending',
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        subject: '',
        status: 'pending'
      });
      
      // Show success popup
      setShowSuccess(true);
      
      // Hide success popup and close modal after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Error creating appointment. Please try again.');
    } finally {
      setLoading(false);
    }
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
                disabled={loading}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-2 border text-sm sm:text-base rounded-lg"
                disabled={loading}
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full p-2 border text-sm sm:text-base rounded-lg"
                disabled={loading}
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
                  disabled={loading}
                />
                {formData.date && new Date(formData.date) < new Date(today) && (
                  <p className="text-red-500 text-xs mt-1">Please select a future date</p>
                )}
              </div>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-2 border text-sm sm:text-base rounded-lg"
                disabled={loading}
              />
              <textarea
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-2 border h-20 sm:h-24 text-sm sm:text-base rounded-lg"
                disabled={loading}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary01 text-white p-2 text-sm sm:text-base rounded-lg hover:bg-primary01/90 transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Booking...' : 'Book Now'}
              </button>
            </form>
            <button
              onClick={onClose}
              className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base hover:text-gray-800"
              disabled={loading}
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