export function Footer() {
  return (
    <footer className="py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 ">
            © {new Date().getFullYear()} Samuel Bernardo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
