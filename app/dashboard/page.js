export default function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full p-2 border rounded" defaultValue="Fati" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" defaultValue="lemouarfati1@gmail.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea className="w-full p-2 border rounded" rows="3" defaultValue="Software engineering student passionate about building web applications." />
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Preferences</h3>
            <label className="flex items-center space-x-3 mb-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              <span className="text-gray-700">Enable notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              <span className="text-gray-700">Subscribe to newsletter</span>
            </label>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mt-4">
            Save Changes
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Profile Overview</h3>
          <p className="text-gray-600">Manage your personal information and preferences</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Projects</h3>
          <p className="text-gray-600">View and manage your current projects</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Messages</h3>
          <p className="text-gray-600">Check your latest messages and notifications</p>
        </div>
      </div>
    </div>
  );
}
