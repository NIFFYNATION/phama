import { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import { format } from 'date-fns';
import supabase from "/services/supabase.js";

const Comments = ({ articleId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [comments, setComments] = useState([]);
  const [replyTo, setReplyTo] = useState(null);
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    fetchApprovedComments();
  }, [articleId]);

  const fetchApprovedComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('article_id', articleId)
        .eq('status', 'approved') // Only fetch approved comments
        .order('created_at', { ascending: true });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!articleId) {
      console.error('No article ID provided');
      return;
    }

    try {
      const newComment = {
        article_id: articleId,
        name: formData.name,
        email: formData.email,
        website: formData.website || null,
        message: editorContent,
        created_at: new Date().toISOString(),
        status: 'pending',
        parent_id: replyTo || null,
        likes: 0
      };

      const { error } = await supabase
        .from('comments')
        .insert([newComment]);

      if (error) throw error;

      alert('Your comment has been submitted and is awaiting approval.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        website: '',
        message: ''
      });
      setEditorContent('');
      setReplyTo(null);
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Error submitting comment. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const CommentItem = ({ comment, isReply }) => (
    <div className={`${isReply ? 'ml-12' : ''} mb-6 p-4 bg-gray-50 rounded-lg`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <h4 className="font-semibold">{comment.name}</h4>
          <p className="text-sm text-gray-500">
            {format(new Date(comment.created_at), 'MMM dd, yyyy')}
          </p>
        </div>
      </div>

      <div 
        className="prose prose-sm mt-2 mb-4"
        dangerouslySetInnerHTML={{ __html: comment.message }}
      />

      <div className="flex items-center gap-4 text-sm">
        <button 
          onClick={() => setReplyTo(comment.id)}
          className="text-primary01 hover:underline"
        >
          Reply
        </button>
        <button className="flex items-center gap-1">
          <i className="far fa-heart"></i>
          <span>{comment.likes}</span>
        </button>
      </div>

      {comments
        .filter(reply => reply.parent_id === comment.id && reply.status === 'approved')
        .map(reply => (
          <CommentItem key={reply.id} comment={reply} isReply={true} />
        ))}
    </div>
  );

  return (
    <div className="contain max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">
        {replyTo ? 'Leave a reply' : 'Leave a comment'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary01"
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary01"
          />
        </div>

        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary01"
        />

        <textarea 
          value={editorContent}
          onChange={(e) => setEditorContent(e.target.value)}
          placeholder="Write your comment here..."
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary01/30 focus:border-primary01 transition-all duration-300 resize-vertical"
        />

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-primary01 text-white px-8 py-3 rounded-lg hover:bg-primary01/90 transition-colors duration-300"
          >
            {replyTo ? 'Post Reply' : 'Post Comment'}
          </button>

          {replyTo && (
            <button
              type="button"
              onClick={() => setReplyTo(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel Reply
            </button>
          )}
        </div>
      </form>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">
          Comments ({comments.filter(c => !c.parent_id).length})
        </h3>
        
        {comments
          .filter(comment => !comment.parent_id)
          .map(comment => (
            <CommentItem key={comment.id} comment={comment} isReply={false} />
          ))}

        {comments.filter(c => !c.parent_id).length === 0 && (
          <p className="text-center text-gray-500">No comments yet</p>
        )}
      </div>
    </div>
  );
};

export default Comments;