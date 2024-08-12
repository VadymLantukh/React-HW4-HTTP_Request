import { Field, Form, Formik } from 'formik';

const SearchBar = ({ handleChangeQuary }) => {
  const handleSubmit = (values, options) => {
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
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
