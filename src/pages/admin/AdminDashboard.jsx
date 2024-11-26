import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { articleData } from '../../features/services/data/articleData';

const AdminDashboard = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
    }
    
    setArticles(articleData.Article);
  }, [navigate]);

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <h1 className="text-2xl font-bold text-center sm:text-left">Admin Dashboard</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/admin/posts/create')}
              className="px-4 py-2 bg-primary01 text-white rounded-lg hover:bg-primary01/90"
            >
              Create New Post
            </button>
            <button
              onClick={() => navigate('/admin/appointments')}
              className="px-4 py-2 bg-primary01 text-white rounded-lg hover:bg-primary01/90"
            >
              View Appointments
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('isAdmin');
                navigate('/admin/login');
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Title</th>
                    <th className="text-left py-2 px-4">Author</th>
                    <th className="text-left py-2 px-4">Date</th>
                    <th className="text-left py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id} className="border-b">
                      <td className="py-2 px-4">{article.title}</td>
                      <td className="py-2 px-4">{article.author}</td>
                      <td className="py-2 px-4">{article.date}</td>
                      <td className="py-2 px-4">
                        <div className="flex gap-4">
                          <button
                            onClick={() => navigate(`/admin/posts/${article.id}/edit`)}
                            className="text-blue-500 hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => navigate(`/admin/blog/${article.id}`)}
                            className="text-primary01 hover:underline"
                          >
                            View Comments
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
      </div>
    </div>
  );
};

export default AdminDashboard;
