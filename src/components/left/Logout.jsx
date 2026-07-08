function Logout() {
  return (
    <button
      type="button"
      aria-label="Logout"
      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
    >
      <i className="fa-solid fa-right-from-bracket text-xl text-gray-600 hover:text-red-500"></i>
    </button>
  );
}

export default Logout;