import { socialLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500">
        &copy; {new Date().getFullYear()} <strong>Shubham</strong>. All rights
        reserved.
      </div>

      <div className="flex gap-3">
        {socialLinks.map(({ icon, name, url }) => (
          <a
            href={url}
            key={url}
            target="_blank"
            rel="noreferrer noopener"
            title={name}
            className="social-icon"
          >
            <img src={icon} alt={name} className="size-1/2" />
          </a>
        ))}
      </div>
    </footer>
  );
};
