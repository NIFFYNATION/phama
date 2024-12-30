import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import supabase, { supabaseUrl } from '/services/supabase.js';
import RichTextEditor from '../../components/RichTextEditor';


const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    headline: '',
    photo: '',
    author: '',
    authorRole: '',
    authorImage: '',
    content: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPost({ ...post, photo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload featured image
      let photoUrl = null;
      if (post.photo) {
        const photoFileName = `${Date.now()}-${post.photo.name}`;
        const { data: photoData, error: photoError } = await supabase.storage
          .from('articles')  // Make sure this bucket exists in Supabase storage
          .upload(photoFileName, post.photo);
        
        if (photoError) throw photoError;
        photoUrl = `${supabaseUrl}/storage/v1/object/public/articles/${photoFileName}`;
      }

      // Upload author image
      let authorImageUrl = null;
      if (post.authorImage) {
        const authorImageFileName = `${Date.now()}-${post.authorImage.name}`;
        const { data: authorImageData, error: authorImageError } = await supabase.storage
          .from('articles')  // Using the same bucket for simplicity
          .upload(`authors/${authorImageFileName}`, post.authorImage);
        
        if (authorImageError) throw authorImageError;
        authorImageUrl = `${supabaseUrl}/storage/v1/object/public/articles/authors/${authorImageFileName}`;
      }

      // Create article in database
      const { data, error } = await supabase
        .from('articles')  // Changed from 'posts' to 'articles'
        .insert([
          {
            title: post.title,
            headline: post.headline,
            photo_url: photoUrl,
            author: post.author,
            author_role: post.authorRole,
            author_image_url: authorImageUrl,
            content: post.content,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;
      
      alert('Article created successfully!');
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error creating article:', error);
      alert('Error creating article: ' + error.message);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Create New Post</h1>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            ← Back to Dashboard
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title*
              </label>
              <input
                type="text"
                required
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Headline*
              </label>
              <input
                type="text"
                required
                value={post.headline}
                onChange={(e) => setPost({ ...post, headline: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary01"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author Name*
              </label>
              <input
                type="text"
                required
                value={post.author}
                onChange={(e) => setPost({ ...post, author: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author Role*
              </label>
              <input
                type="text"
                required
                value={post.authorRole}
                onChange={(e) => setPost({ ...post, authorRole: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary01"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image*
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 h-32 object-cover rounded-lg"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setPost({ ...post, authorImage: file });
                }}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content*
            </label>
            <RichTextEditor
              value={post.content}
              onChange={(content) => setPost({ ...post, content })}
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate('/admin/dashboard')}
              className="px-6 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary01 text-white rounded-lg hover:bg-primary01/90"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost; 