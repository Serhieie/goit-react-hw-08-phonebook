import PropTypes from 'prop-types';

export const RegistrationErrors = ({ error }) => {
  return <p className="error-message">{error}</p>;
};

RegistrationErrors.propTypes = {
  error: PropTypes.string.isRequired,
};
