import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const AppointmentModal = ({ appointment, onClose, onStatusChange }) => {
  if (!appointment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center !z-[9999] p-2">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] overflow-y-auto m-2">
        <div className="sticky top-0 bg-white p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-2xl font-bold">Appointment Details</h2>
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

        <div className="p-4 sm:p-6">
          <div className="space-y-4">
            {/* Status and Date */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold
                ${appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                ${appointment.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                ${appointment.status === 'rejected' ? 'bg-red-100 text-red-800' : ''}
              `}>
                {appointment.status.toUpperCase()}
              </span>
              <span className="text-sm text-gray-500">
                {format(new Date(appointment.createdAt), 'MMM dd, yyyy HH:mm')}
              </span>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-600 mb-1">Name</h3>
                <p className="text-base">{appointment.name}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-600 mb-1">Appointment Date</h3>
                <p className="text-base">{format(new Date(appointment.date), 'MMM dd, yyyy')}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-600 mb-1">Email</h3>
                <p className="text-base break-all">{appointment.email}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-600 mb-1">Phone</h3>
                <p className="text-base">{appointment.phone}</p>
              </div>
            </div>

            {/* Subject/Message */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Subject</h3>
              <div className="bg-gray-50 p-4 rounded-lg min-h-[100px] text-base">
                {appointment.subject}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed at bottom on mobile */}
        <div className="sticky bottom-0 bg-white border-t p-4 mt-4">
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3">
            <button
              onClick={() => {
                handleDelete(appointment.id);
                onClose();
              }}
              className="w-full sm:w-auto px-4 py-2.5 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
            >
              Delete
            </button>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => {
                  onStatusChange(appointment.id, 'approved');
                  onClose();
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
              >
                Approve
              </button>
              <button
                onClick={() => {
                  onStatusChange(appointment.id, 'rejected');
                  onClose();
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppointmentDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const nonDoctorAppointments = storedAppointments.filter(
      appointment => !appointment.doctorName
    );
    setAppointments(nonDoctorAppointments);
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
      setSelectedAppointment(null);
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true;
    return appointment.status === filter;
  });

  return (
    <div className="p-2 sm:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">Appointment Requests</h1>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm sm:text-base"
          >
            ← Back to Dashboard
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-4">
          <div className="p-2 sm:p-4 border-b flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition-colors
                ${filter === 'all' ? 'bg-primary01 text-white' : 'bg-gray-100'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition-colors
                ${filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-100'}`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition-colors
                ${filter === 'approved' ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
            >
              Approved
            </button>
            <button
              onClick={() => setFilter('rejected')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition-colors
                ${filter === 'rejected' ? 'bg-red-500 text-white' : 'bg-gray-100'}`}
            >
              Rejected
            </button>
          </div>
        </div>

        <div className="block sm:hidden">
          {filteredAppointments.map((appointment) => (
            <div 
              key={appointment.id}
              onClick={() => setSelectedAppointment(appointment)}
              className="bg-white rounded-lg shadow-sm mb-4 p-4 cursor-pointer hover:bg-gray-50"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold">{appointment.name}</h3>
                  <p className="text-sm text-gray-500">{appointment.email}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full
                  ${appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${appointment.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                  ${appointment.status === 'rejected' ? 'bg-red-100 text-red-800' : ''}
                `}>
                  {appointment.status}
                </span>
              </div>
              <div className="text-sm mb-2">
                <p className="text-gray-600">Date: {format(new Date(appointment.date), 'MMM dd, yyyy')}</p>
                <p className="text-gray-600">Phone: {appointment.phone}</p>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                <p className="truncate">{appointment.subject}</p>
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStatusChange(appointment.id, 'approved');
                  }}
                  className="px-3 py-1 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStatusChange(appointment.id, 'rejected');
                  }}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Reject
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(appointment.id);
                  }}
                  className="px-3 py-1 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:block bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAppointments.map((appointment) => (
                  <tr 
                    key={appointment.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedAppointment(appointment)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {appointment.name}
                    </td>
                    <td className="px-6 py-4">
                      <div>{appointment.email}</div>
                      <div className="text-sm text-gray-500">{appointment.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {format(new Date(appointment.date), 'MMM dd, yyyy')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-xs truncate">{appointment.subject}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${appointment.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                        ${appointment.status === 'rejected' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(appointment.id, 'approved');
                          }}
                          className="text-green-600 hover:text-green-900"
                        >
                          Approve
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(appointment.id, 'rejected');
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          Reject
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(appointment.id);
                          }}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Appointment Detail Modal */}
      {selectedAppointment && (
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

export default AppointmentDashboard; 