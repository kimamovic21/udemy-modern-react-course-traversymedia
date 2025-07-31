import { useState } from 'react';

const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className='mb-6'>
      <div className='mb-4'>
        <label className='block font-semibold'>Title:</label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          className='w-full p-2 border rounded-lg'
          required
        />
      </div>

      <div className='mb-4'>
        <label className='block font-semibold'>Priority:</label>
        <select
          name='priority'
          value={formData.priority}
          onChange={handleChange}
          className='w-full p-2 border rounded-lg'
        >
          <option value='High'>🔴 High</option>
          <option value='Medium'>🟠 Medium</option>
          <option value='Low'>🟢 Low</option>
        </select>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold'>Category:</label>
        <select
          name='category'
          value={formData.category}
          onChange={handleChange}
          className='w-full p-2 border rounded-lg'
        >
          <option value='Work'>📂 Work</option>
          <option value='Personal'>🏠 Personal</option>
          <option value='Ideas'>💡 Ideas</option>
        </select>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold'>Description:</label>
        <textarea
          name='description'
          value={formData.description}
          onChange={handleChange}
          className='w-full p-2 border rounded-lg'
          required
        ></textarea>
      </div>
    </form>
  );
};

export default NoteForm;