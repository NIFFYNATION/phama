import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '/services/supabase.js';
import { format } from 'date-fns';

const AdminBlogSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');

  useEffect(() => {
    fetchArticleAndComments();
  }, [id]);

  const fetchArticleAndComments = async () => {
    try {
      const { data: articleData, error: articleError } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single();

      if (articleError) throw articleError;
      setArticle(articleData);

      const { data: commentsData, error: commentsError } = await supabase
        .from('comments')
        .select('*')
        .eq('article_id', id)
        .order('created_at', { ascending: false });

      if (commentsError) throw commentsError;
      setComments(commentsData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleModeration = async (commentId, status) => {
    try {
      const { error } = await supabase
        .from('comments')
        .update({ status })
        .eq('id', commentId);

      if (error) throw error;

      setComments(comments.map(comment => 
        comment.id === commentId ? { ...comment, status } : comment
      ));
    } catch (error) {
      console.error('Error moderating comment:', error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;

      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const filteredComments = comments.filter(comment => {
    if (activeTab === 'pending') return comment.status === 'pending';
    if (activeTab === 'approved') return comment.status === 'approved';
    if (activeTab === 'rejected') return comment.status === 'rejected';
    return true;
  });

  if (loading) return <div className="contain">Loading...</div>;
  if (!article) return <div className="contain">Article not found</div>;

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="mb-6 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-2xl font-bold mb-6">{article.title}</h1>
        
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Comments ({comments.length})</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'pending' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100'
                }`}
              >
                Pending ({comments.filter(c => c.status === 'pending').length})
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'approved' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100'
                }`}
              >
                Approved ({comments.filter(c => c.status === 'approved').length})
              </button>
              <button
                onClick={() => setActiveTab('rejected')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'rejected' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-gray-100'
                }`}
              >
                Rejected ({comments.filter(c => c.status === 'rejected').length})
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredComments.map(comment => (
              <div 
                key={comment.id} 
                className={`p-4 rounded-lg ${
                  comment.status === 'pending' ? 'bg-yellow-50' :
                  comment.status === 'approved' ? 'bg-green-50' :
                  'bg-red-50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{comment.name}</h3>
                    <p className="text-sm text-gray-500">{comment.email}</p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(comment.created_at), 'MMM dd, yyyy')}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    {comment.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleModeration(comment.id, 'approved')}
                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleModeration(comment.id, 'rejected')}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {comment.status !== 'pending' && (
                      <button
                        onClick={() => handleModeration(comment.id, 'pending')}
                        className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                      >
                        Reset
                      </button>
                    )}
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this comment?')) {
                          handleDelete(comment.id);
                        }
                      }}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                <div className="mt-2 text-gray-700">
                  {comment.message}
                </div>
              </div>
            ))}
            
            {filteredComments.length === 0 && (
              <p className="text-gray-500 text-center">
                No {activeTab} comments found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogSingle; 