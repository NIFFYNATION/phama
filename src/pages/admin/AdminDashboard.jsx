import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import supabase, { supabaseUrl } from '/services/supabase.js';
import { format, parseISO, isValid } from 'date-fns';

const AdminDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
    }
    
    fetchArticles();
  }, [navigate]);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No date';
    try {
      const date = parseISO(dateString);
      return isValid(date) ? format(date, 'MMM dd, yyyy') : 'Invalid date';
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid date';
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-3 sm:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">Admin Dashboard</h1>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button
              onClick={() => navigate('/admin/posts/create')}
              className="px-4 py-2 bg-primary01 text-white rounded-lg hover:bg-primary01/90 text-sm sm:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">Create New</span>
              <span className="sm:hidden">New</span> Post
            </button>
            <button
              onClick={() => navigate('/admin/appointments')}
              className="px-4 py-2 bg-primary01 text-white rounded-lg hover:bg-primary01/90 text-sm sm:text-base"
            >
              Appointments
            </button>
            <Link
              to="/admin/doctor-appointments"
              className="px-4 py-2 bg-primary01 text-white rounded-lg hover:bg-primary01/90"
            >
              View Doctor Appointments
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('isAdmin');
                navigate('/admin/login');
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm sm:text-base"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Recent Articles</h2>
            
            {/* Mobile View - Cards */}
            <div className="block sm:hidden space-y-4">
              {articles.map((article) => (
                <div key={article.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Author: {article.author}</p>
                    <p>Date: {formatDate(article.created_at)}</p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => navigate(`/admin/posts/${article.id}/edit`)}
                      className="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => navigate(`/admin/blog/${article.id}`)}
                      className="px-3 py-1.5 bg-primary01 text-white rounded-lg hover:bg-primary01/90 text-sm"
                    >
                      Comments
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View - Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-600">Title</th>
                    <th className="text-left py-3 px-4 text-gray-600">Author</th>
                    <th className="text-left py-3 px-4 text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{article.title}</td>
                      <td className="py-3 px-4">{article.author}</td>
                      <td className="py-3 px-4">
                        {formatDate(article.created_at)}
                      </td>
                      <td className="py-3 px-4">
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

            {/* Empty State */}
            {articles.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No articles found. Create your first post!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
