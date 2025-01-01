import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RichTextEditor from '../../components/RichTextEditor';
import supabase, { supabaseUrl } from '/services/supabase.js';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [authorImagePreview, setAuthorImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      // Set image previews if they exist
      if (data.photo_url) {
        setImagePreview(
          data.photo_url.startsWith('http')
            ? data.photo_url
            : `${supabaseUrl}/storage/v1/object/public/articles/${data.photo_url}`
        );
      }

      if (data.author_image) {
        setAuthorImagePreview(
          data.author_image.startsWith('http')
            ? data.author_image
            : `${supabaseUrl}/storage/v1/object/public/articles/${data.author_image}`
        );
      }

      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      alert('Error fetching post');
    } finally {
      setLoading(false);
    }
  };

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

  const handleAuthorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPost({ ...post, authorImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setAuthorImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let updates = {
        title: post.title,
        headline: post.headline,
        author: post.author,
        author_role: post.authorRole,
        content: post.content,
        created_at: new Date().toISOString()
      };

      // Handle featured image upload if changed
      if (post.photo && post.photo instanceof File) {
        const photoFileName = `${Date.now()}-${post.photo.name}`;
        const { error: photoError } = await supabase.storage
          .from('articles')
          .upload(photoFileName, post.photo);
        
        if (photoError) throw photoError;
        updates.photo_url = photoFileName;
      }

      // Handle author image upload if changed
      if (post.authorImage && post.authorImage instanceof File) {
        const authorImageFileName = `authors/${Date.now()}-${post.authorImage.name}`;
        const { error: authorImageError } = await supabase.storage
          .from('articles')
          .upload(authorImageFileName, post.authorImage);
        
        if (authorImageError) throw authorImageError;
        updates.author_image = authorImageFileName;
      }

      // Update the post in the database
      const { error } = await supabase
        .from('articles')
        .update(updates)
        .eq('id', id);

      if (error) throw error;

      alert('Post updated successfully!');
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Error updating post: ' + error.message);
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">Edit Post</h1>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            ← Back
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
                value={post.author_role || ''}
                onChange={(e) => setPost({ ...post, author_role: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary01"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image
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
                onChange={handleAuthorImageChange}
                className="w-full"
              />
              {authorImagePreview && (
                <img
                  src={authorImagePreview}
                  alt="Author Preview"
                  className="mt-2 h-32 w-32 object-cover rounded-full"
                />
              )}
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
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost; 