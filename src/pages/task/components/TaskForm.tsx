import { useState } from 'react';
import { Task } from '../../../app/task/domain/entities/task';

import m1 from '../../../assets/m1.webp';
import m2 from '../../../assets/m2.avif';
import m3 from '../../../assets/m3.jpg';
import m4 from '../../../assets/m4.jpg';
import m5 from '../../../assets/m5.jpg';
import moment from 'moment';

const images = [
  { id: 1, name: 'm1', imagen: m1 },
  { id: 2, name: 'm2', imagen: m2 },
  { id: 3, name: 'm3', imagen: m3 },
  { id: 4, name: 'm4', imagen: m4 },
  { id: 5, name: 'm5', imagen: m5 },
];

const TaskForm = ({
  task,
  onSubmit,
}: {
  task: Task;
  onSubmit: (task: Task) => void;
}) => {
  console.log(moment(task.dueDate).format('DD/MM/YYYY'));
  const [formData, setFormData] = useState({
    front: task.front,
    title: task.title,
    description: task.description,
    dueDate: moment(task.dueDate).format('DD/MM/YYYY'),
    status: task.status,
    tags: task.tags,
  });

  const [tagInput, setTagInput] = useState('');
  const [icon, setIcon] = useState(m1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIcon(
      value == 'm1'
        ? m1
        : value == 'm2'
          ? m2
          : value == 'm3'
            ? m3
            : value == 'm4'
              ? m4
              : m5,
    );
  };

  const handleTagAdd = () => {
    if (tagInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, { tag: tagInput.trim() }],
      }));
      setTagInput('');
    }
  };

  const handleTagRemove = (index) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded bg-neutral-200 p-6 shadow"
    >
      <img className="h-32 w-64 rounded-t-lg" src={icon} alt="" />

      {/* Front */}
      <div>
        <label
          htmlFor="front"
          className="block text-sm font-medium text-gray-700"
        >
          Front
        </label>
        <select
          id="front"
          name="front"
          value={formData.front}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select an image</option>
          {images.map((image) => (
            <option key={image.id} value={image.name}>
              {image.name}
            </option>
          ))}
        </select>
      </div>

      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Due Date */}
      <div>
        <label
          htmlFor="dueDate"
          className="block text-sm font-medium text-gray-700"
        >
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Status */}
      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En progreso</option>
          <option value="completada">Completada</option>
        </select>
      </div>

      {/* Tags */}
      <div>
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-700"
        >
          Tags
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="tagInput"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Add a tag"
          />
          <button
            type="button"
            onClick={handleTagAdd}
            className="rounded-md bg-indigo-500 px-4 py-2 text-white shadow hover:bg-indigo-600"
          >
            Add
          </button>
        </div>
        <ul className="mt-2 space-y-1">
          {formData.tags.map((tag, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-md bg-gray-100 px-3 py-2"
            >
              {tag.tag}
              <button
                type="button"
                onClick={() => handleTagRemove(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
