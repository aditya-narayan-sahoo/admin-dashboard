const Header = ({ title }) => {
  return (
    <header
      role="banner"
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md border-b border-gray-700 shadow-sm rounded"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-100">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
