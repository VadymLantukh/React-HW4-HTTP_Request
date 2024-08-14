import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { RiSearchEyeFill } from 'react-icons/ri';
import css from './SearchBar.module.css';

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
        <Form className={css.boxForm}>
          <Field
            className={css.fieldForm}
            type="text"
            name="query"
            placeholder="Search images..."
          />
          <button type="submit" className={css.btnForm}>
            {' '}
            <RiSearchEyeFill className={css.iconBtn} />
            Search
          </button>
        </Form>
      </Formik>

      <Toaster position="bottom-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
