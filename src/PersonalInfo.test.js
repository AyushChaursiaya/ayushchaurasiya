import { render, screen, fireEvent } from '@testing-library/react';
import PersonalInfo from './PersonalInfo';

test('renders Personal Information form with error messages', () => {
  const formData = { name: '', email: '', phone: '' };
  const handleChange = jest.fn();
  const errors = { name: 'Name is required', email: 'Email is required', phone: 'Phone is required' };

  render(<PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />);

  // Check for form fields
  expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument();

  // Check for error messages
  expect(screen.getByText('Name is required')).toBeInTheDocument();
  expect(screen.getByText('Email is required')).toBeInTheDocument();
  expect(screen.getByText('Phone is required')).toBeInTheDocument();
});
