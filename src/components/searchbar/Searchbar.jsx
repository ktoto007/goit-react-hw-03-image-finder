import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
const initialValues = {
  searchParam: '',
};

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <Formik
        initialValues={initialValues}
        onSubmit={e => {
          if (e.searchParam.trim() !== '') {
            onSubmit(e.searchParam);
          }
        }}
      >
        <Form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>

          <Field
            name="searchParam"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
        </Form>
      </Formik>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
