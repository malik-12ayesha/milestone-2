import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} Ayesha Malik. All rights reserved.</p>
        <div className="links">
          <Link href="/">
            Linked IN
          </Link>
          <Link href="malikayeshaalikhan777@gmail.com">
            Email
          </Link>
          <a
            href="https://github.com/malik-12ayesha"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
