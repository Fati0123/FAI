import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-5 mt-8">{/* Professional styling */}
      {/* GitHub Icon */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
        aria-label="GitHub Profile"
      >
        <FiGithub className="w-6 h-6 text-white group-hover:text-blue-200 transition-colors" />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
        aria-label="LinkedIn Profile"
      >
        <FiLinkedin className="w-6 h-6 text-white group-hover:text-blue-200 transition-colors" />
      </a>
    </div>
  );
}
