const Container = ({ children, className = '', narrow = false }) => {
  return (
    <div className={`${narrow ? 'container-narrow' : 'container-custom'} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
