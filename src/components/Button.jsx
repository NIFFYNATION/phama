function Button({ children, btnClass }) {
  return (
    <button
      className={
        `text-white py-2 px-6 hover:text-black font-semibold duration-500 ` +
        btnClass
      }
    >
      {children}
    </button>
  );
}

export default Button;
