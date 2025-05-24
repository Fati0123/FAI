import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a 
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 shadow-sm hover:shadow-md transition-all"
      >
        <FiGithub className="w-4 h-4 text-gray-700" />
      </a>
      <a 
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 shadow-sm hover:shadow-md transition-all"
      >
        <FiLinkedin className="w-4 h-4 text-blue-600" />
      </a>
    </div>
  );
}
