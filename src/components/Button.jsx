function Button({ children }) {
  return (
    <button
      className={`bg-green-500 text-white py-2 px-6 hover:text-black font-semibold duration-500`}
    >
      {children}
    </button>
  );
}

export default Button;
