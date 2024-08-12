import { Field, Form, Formik } from 'formik';

const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (values, options) => {
    handleSearch(values.query);
    options.resetForm();
  };

  return (
    <header>
      <Formik handleSubmit={handleSubmit} initialValues={{ query: '' }}>
        <Form>
          <Field
            type="text"
            name="query"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
