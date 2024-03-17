const Backdrop = ({children}) => {
  return <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 grid place-items-center">{children}</div>;
};
export default Backdrop;
