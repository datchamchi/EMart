function Container({ children }) {
  return (
    <div className="mt-[3.6rem] flex flex-col gap-5 px-[1.2rem] py-[2.4rem] md:mt-[4rem] md:flex-row lg:mt-[28rem] lg:px-[4.2rem]">
      {children}
    </div>
  );
}

export default Container;
