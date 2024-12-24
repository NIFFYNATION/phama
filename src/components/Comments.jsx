import { useState } from 'react';
import ReactQuill from 'react-quill'; // Rich text editor
import 'react-quill/dist/quill.snow.css';
import { format } from 'date-fns';

const Comments = ({ postId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [comments, setComments] = useState([]);
  const [replyTo, setReplyTo] = useState(null);
  const [editorContent, setEditorContent] = useState('');

  // Rich text editor modules configuration
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['link'],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      ...formData,
      message: editorContent,
      date: new Date(),
      status: 'pending', // for moderation
      replies: [],
      likes: 0,
      parentId: replyTo
    };

    if (replyTo) {
      setComments(prevComments => {
        return prevComments.map(comment => {
          if (comment.id === replyTo) {
            return {
              ...comment,
              replies: [...comment.replies, newComment]
            };
          }
          return comment;
        });
      });
      setReplyTo(null);
    } else {
      setComments(prev => [...prev, newComment]);
    }

    // Reset form
    setFormData({
      name: '',
      email: '',
      website: '',
      message: ''
    });
    setEditorContent('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleModeration = (commentId, status) => {
    setComments(prevComments => 
      prevComments.map(comment => 
        comment.id === commentId 
          ? { ...comment, status } 
          : comment
      )
    );
  };

  const CommentItem = ({ comment, isReply }) => (
    <div className={`${isReply ? 'ml-12' : ''} mb-6 p-4 bg-gray-50 rounded-lg`}>
      <div className="flex items-center justify-between mb-2">
       
          <div>
            <h4 className="font-semibold">{comment.name}</h4>
            <p className="text-sm text-gray-500">
              {format(new Date(comment.date), 'MMM dd, yyyy')}
            </p>
          </div>
       
        <div className="flex items-center gap-2">
          {comment.status === 'pending' && (
            <div className="flex gap-2">
              <button 
                onClick={() => handleModeration(comment.id, 'approved')}
                className="text-sm px-3 py-1 bg-green-500 text-white rounded-full"
              >
                Approve
              </button>
              <button 
                onClick={() => handleModeration(comment.id, 'rejected')}
                className="text-sm px-3 py-1 bg-red-500 text-white rounded-full"
              >
                Reject
              </button>
            </div>
          )}
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

      {/* Nested Replies */}
      {comment.replies?.length > 0 && (
        <div className="mt-4">
          {comment.replies.map(reply => (
            <CommentItem key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
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
  className="
    w-full 
    p-3 
    border 
    border-gray-300 
    rounded-lg 
    focus:outline-none 
    focus:ring-2 
    focus:ring-primary01/30 
    focus:border-primary01 
    transition-all 
    duration-300 
    resize-vertical
  "
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

      {/* Comments Display Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">
          Comments ({comments.length})
        </h3>
        
        {comments
          .filter(comment => !comment.parentId && comment.status !== 'rejected')
          .map(comment => (
            <CommentItem key={comment.id} comment={comment} isReply={false} />
          ))}
      </div>
    </div>
  );
};

export default Comments;