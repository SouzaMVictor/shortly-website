export function RightButtonsMenu() {
  return (
    <div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
      <div className="hover:text-veryDarkViolet">Login</div>
      <a
        href="#"
        className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
      >
        Sign Up
      </a>
    </div>
  );
}
