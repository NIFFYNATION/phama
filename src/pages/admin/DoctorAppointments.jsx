import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const doctorAppointments = storedAppointments.filter(
      appointment => appointment.doctorName
    );
    setAppointments(doctorAppointments);
  }, []);

  const handleStatusChange = (appointmentId, newStatus) => {
    const updatedAppointments = appointments.map(appointment => {
      if (appointment.id === appointmentId) {
        return { ...appointment, status: newStatus };
      }
      return appointment;
    });
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  const handleDelete = (appointmentId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      const updatedAppointments = appointments.filter(
        appointment => appointment.id !== appointmentId
      );
      setAppointments(updatedAppointments);
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true;
    return appointment.status === filter;
  });

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Doctor Appointments</h1>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="bg-white rounded-lg p-4 mb-6 flex gap-2">
          {['all', 'pending', 'approved', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg ${
                filter === status 
                  ? 'bg-primary01 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Appointments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAppointments.map((appointment) => (
            <div 
              key={appointment.id} 
              className="bg-white rounded-lg shadow-sm p-6"
            >
              {/* Department and Doctor Info - Condensed View */}
              <div 
                className="cursor-pointer"
                onClick={() => setSelectedAppointment(appointment)}
              >
                <div className="mb-4">
                  <h3 className="font-semibold text-lg text-primary01">{appointment.departmentName}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <img 
                      src={appointment.doctorPhoto} 
                      alt={appointment.doctorName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="font-medium">{appointment.doctorName}</p>
                  </div>
                </div>

                {/* Basic Patient Info */}
                <div className="text-sm mb-3">
                  <p className="truncate">Patient: {appointment.name}</p>
                  <p>Date: {format(new Date(appointment.date), 'MMM dd, yyyy')}</p>
                </div>
              </div>

              {/* Status and Actions */}
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${appointment.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                    ${appointment.status === 'rejected' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {appointment.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => handleStatusChange(appointment.id, 'approved')}
                    className="px-3 py-1 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(appointment.id, 'rejected')}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="px-3 py-1 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedAppointment && (
          <AppointmentModal
            appointment={selectedAppointment}
            onClose={() => setSelectedAppointment(null)}
          />
        )}
      </div>
    </div>
  );
};

const AppointmentModal = ({ appointment, onClose }) => {
  if (!appointment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center !z-[9999] p-2">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] overflow-y-auto m-2">
        <div className="sticky top-0 bg-white p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-2xl font-bold">Doctor Appointment Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Department and Doctor Info */}
          <div className="mb-6">
            <h3 className="font-semibold text-xl text-primary01">{appointment.departmentName}</h3>
            <div className="flex items-center gap-4 mt-3">
              <img 
                src={appointment.doctorPhoto} 
                alt={appointment.doctorName}
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="font-medium text-lg">{appointment.doctorName}</p>
            </div>
          </div>

          {/* Patient Information */}
          <div className="space-y-4">
            <div>
              <span className="font-medium">Patient Name:</span> {appointment.name}
            </div>
            <div>
              <span className="font-medium">Email:</span> {appointment.email}
            </div>
            <div>
              <span className="font-medium">Phone:</span> {appointment.phone}
            </div>
            <div>
              <span className="font-medium">Appointment Date:</span> {format(new Date(appointment.date), 'MMMM dd, yyyy')}
            </div>
            <div>
              <span className="font-medium">Time:</span> {appointment.time}
            </div>
            <div>
              <span className="font-medium">Status:</span>
              <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium
                ${appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                ${appointment.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                ${appointment.status === 'rejected' ? 'bg-red-100 text-red-800' : ''}
              `}>
                {appointment.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments; 