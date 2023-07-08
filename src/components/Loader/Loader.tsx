import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.wrapperLoader}>
      <div className={s.loader}></div>
    </div>
  );
};

export default Loader;
