const Backdrop = ({children,passRef}) => {
  return <div ref={passRef} className="fixed top-0 left-0 grid w-screen h-screen px-10 py-5 bg-black/50 place-items-center">{children}</div>;
};
export default Backdrop;
