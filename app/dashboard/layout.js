export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-indigo-400">Profile</a>
          <a href="#" className="hover:text-indigo-400">Settings</a>
          <a href="#" className="hover:text-indigo-400">Notifications</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-semibold mb-6">Settings</h1>
        {/* Your settings content goes here */}
      </main>
    </div>
  );
}
