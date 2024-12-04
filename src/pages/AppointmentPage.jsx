import { useState } from 'react';
import { medicalExperts } from '../features/services/data/medicalExpertsData';


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

function AppointmentPage() {
  const today = new Date().toISOString().split('T')[0];

  // Group doctors by department using MedsExperts array
  const departments = medicalExperts.MedsExperts.reduce((acc, expert) => {
    if (!acc[expert.specialty]) {
      acc[expert.specialty] = [];
    }
    acc[expert.specialty].push({
      id: expert.id,
      name: expert.docName,
      photo: expert.photo
    });
    return acc;
  }, {});

  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'department') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        doctor: '' // Reset doctor when department changes
      }));
      setAvailableDoctors(departments[value] || []);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.department || !formData.doctor || !formData.name || 
        !formData.email || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Validate date
    if (new Date(formData.date) < new Date(today)) {
      alert('Please select a future date for your appointment');
      return;
    }

    // Validate time (9 AM to 10 PM)
    const [hours] = formData.time.split(':');
    if (hours < 9 || hours > 22) {
      alert('Please select a time between 9:00 AM and 10:00 PM');
      return;
    }

    // Check if it's Saturday
    if (new Date(formData.date).getDay() === 6) {
      alert('We are closed on Saturdays. Please select another day.');
      return;
    }

    // Get selected doctor details
    const selectedDoctor = availableDoctors.find(doc => doc.id.toString() === formData.doctor);
    
    // Validate if doctor is selected
    if (!selectedDoctor) {
      alert('Please select a doctor');
      return;
    }

    try {
      // Store in localStorage
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      const newAppointment = {
        id: Date.now(),
        ...formData,
        doctorName: selectedDoctor.name,
        doctorPhoto: selectedDoctor.photo,
        departmentName: formData.department,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      
      appointments.push(newAppointment);
      localStorage.setItem('appointments', JSON.stringify(appointments));

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      // Reset form
      setFormData({
        department: '',
        doctor: '',
        name: '',
        email: '',
        phone: '',
        date: '',
        time: ''
      });
      setAvailableDoctors([]); // Reset available doctors
    } catch (error) {
      console.error('Error saving appointment:', error);
      alert('There was an error booking your appointment. Please try again.');
    }
  };

  // Update your department select options to use the departments object
  return (
    <>
    
    <div className="contain-fluid absolute top-[160px]  text-center left-0 right-0 bg-[#DCEDFE] h-[200px] sm:h-[250px] md:h-[400px] items-center justify-center">
    <h2 className="text-[16px] md:text-[35px] text-[#1C1C1C] w-[70%] md:w-[50%] mx-auto mt-[60px] font-bold">
      Wide network of healthcare solutions
    </h2>
  </div>
  <div className="w-[95%] md:w-[80%] mx-auto flex flex-col lg:flex-row pb-8 relative bg-[#F1F1F1] min-h-screen md:min-h-[60vh] mt-[130px] md:mt-[230px] items-center justify-center px-4 md:px-6 lg:px-8">
    <div className="w-full flex justify-center">
     
      {/* Appointment Form */}
      <div className="text-center">
       <div className="flex flex-col items-center">
       <p className="w-[160px] mt-8 mb-6 text-center text-[#1C1C1C] ring-1 ring-[#CECECE] ring-opacity-60 font-semibold tracking-[3px] text-[14px] font-['Montserrat']">
          APPOINTMENT
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Consult with Our Experts
        </h2>
       </div>
        <div className="mt-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Department and Doctor Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full p-3 border appearance-none bg-white pr-10 cursor-pointer focus:outline-none focus:border-primary01"
                  required
                >
                  <option value="">Choose Department</option>
                  {Object.keys(departments).map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <div className="absolute bg-[#B9B9B9] rounded-xl right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full p-3 border appearance-none bg-white pr-10 cursor-pointer focus:outline-none focus:border-primary01"
                  required
                  disabled={!formData.department}
                >
                  <option value="">Choose Doctor</option>
                  {availableDoctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id.toString()}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
                <div className="absolute bg-[#B9B9B9] rounded-xl right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name here"
                className="w-full p-3 border focus:outline-none focus:border-primary01"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full p-3 border focus:outline-none focus:border-primary01"
                required
              />
            </div>

            {/* Contact and Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full p-3 border focus:outline-none focus:border-primary01"
                required
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                className="w-full p-3 border focus:outline-none focus:border-primary01"
                required
              />
               {formData.date && new Date(formData.date) < new Date(today) && (
                  <p className="text-red-500 text-xs mt-1">Please select a future date</p>
                )}

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border focus:outline-none focus:border-primary01"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary01 text-white py-3 hover:bg-primary01/90 transition-colors font-medium"
            >
              Book Appointment Now
            </button>
          </form>

          {/* Thank You Message */}
          {/* <p className="text-center text-primary01 mt-4">
            Thank you for your booking, we will call you shortly
          </p> */}

{showSuccess && (
        <SuccessPopup
          message=" Thank you for your booking, we will call you shortly"
          onClose={() => setShowSuccess(false)}
        />
      )}
        </div>
      </div>
     
    </div>
  </div>

     {/* Success Popup */}
     
    </>
    
    
  );
}

export default AppointmentPage;
