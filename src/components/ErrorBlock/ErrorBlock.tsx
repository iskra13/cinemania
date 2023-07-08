import s from "./ErrorBlock.module.scss";

const ErrorBlock = () => {
  return (
    <div className={s.errorBlock}>
      <p>{"Sorry, we didn't find anything for this query :("}</p>
    </div>
  );
};

export default ErrorBlock;
