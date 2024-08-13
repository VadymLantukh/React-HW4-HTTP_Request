import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { RiSearchEyeFill } from 'react-icons/ri';

const SearchBar = ({ handleChangeQuary }) => {
  const handleSubmit = (values, options) => {
    if (values.query.trim() === '') {
      toast.error('Please enter the text!');
      return;
    }

    handleChangeQuary(values.query);
    options.resetForm();
  };

  return (
    <header>
      <Formik onSubmit={handleSubmit} initialValues={{ query: '' }}>
        <Form>
          <Field
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button type="submit">
            {' '}
            <RiSearchEyeFill />
            Search
          </button>
        </Form>
      </Formik>

      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
