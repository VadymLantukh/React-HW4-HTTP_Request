import css from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={css.boxErrorMessage}>
      <p>
        Oops! Were having issues.
        <br />
        Please refresh the page or try again later.
      </p>
    </div>
  );
};

export default ErrorMessage;
