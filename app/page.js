export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-gray-100 p-4 shadow">
        <nav className="flex justify-center space-x-6 text-lg font-medium">
          <a href="#" className="text-primary hover:underline">Home</a>
          <a href="#about" className="text-primary hover:underline">About</a>
          <a href="#projects" className="text-primary hover:underline">Projects</a>
          <a href="#contact" className="text-primary hover:underline">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="font-playfair text-5xl text-blue-800 mb-6">
          Welcome to Fati's Portfolio
        </h1>
        <p className="text-lg max-w-xl">
          Welcome to my personal website! I'm learning software engineering and building cool things along the way.
        </p>
      </section>

      <section id="projects" className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">To-Do List App</h3>
            <p>A simple task manager built with React and Tailwind CSS. Great for staying organized!</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Weather App</h3>
            <p>An app that fetches and displays weather data using a public API. Shows current weather by city.</p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-500">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Hi, I'm Fati! I'm learning software engineering step by step, and I love building simple and useful web apps.
          I'm passionate about solving problems and growing my skills in coding and design.
        </p>
      </section>

      <section id="contact" className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <form
          action="https://formspree.io/f/xkgrakjg"
          method="POST"
          className="max-w-md mx-auto flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Fati"
            required
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="lemouarfati1@gmail.com"
            required
            className="border p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="border p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-white py-2 px-6 rounded hover:bg-yellow-500 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

