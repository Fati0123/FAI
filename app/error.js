'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-foreground/70 mb-6">{error.message || 'An unexpected error occurred'}</p>
        <button
          onClick={() => reset()}
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
