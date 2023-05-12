import { Formik } from 'formik';
import PropTypes from 'prop-types';
// import { GrFormSearch } from 'react-icons/gr';
import {
  SearchbarStyles,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
const initialValues = {
  searchParam: '',
};

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyles>
      <Formik
        initialValues={initialValues}
        onSubmit={e => {
          if (e.searchParam.trim() !== '') {
            onSubmit(e.searchParam);
          }
        }}
      >
        <SearchForm>
          <SearchFormButton type="submit">
            <ButtonLabel>search {/* {GrFormSearch} */}</ButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="searchParam"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></SearchFormInput>
        </SearchForm>
      </Formik>
    </SearchbarStyles>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
