import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { articleData } from '../../features/services/data/articleData';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const existingPost = articleData.Article.find(
      (article) => article.id === parseInt(id)
    );
    if (existingPost) {
      setPost(existingPost);
      setImagePreview(existingPost.photo);
    }
  }, [id]);

  if (!post) {
    return <div className="p-6">Loading...</div>;
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically update the post in your backend
    console.log('Updated post:', post);
    navigate('/admin/dashboard');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex justify-between  mb-6">
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
            <ReactQuill
              value={post.content}
              onChange={(content) => setPost({ ...post, content })}
              className="h-full mb-12"
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  ['link', 'image'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  ['clean']
                ]
              }}
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

export default EditPost; 