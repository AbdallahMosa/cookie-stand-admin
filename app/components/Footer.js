
const Footer = () => (
  <footer className="bg-gray-800 p-4  text-white">
    <div className="container mx-auto text-center">
      <p>Copyright &copy; 2023 Abdallah Mosa</p>
      <p>
        <a
          href="https://github.com/abdallahmosa"
          className="text-white  "
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png"
            alt="GitHub logo"
            className="h-6 w-6 inline-block align-middle"
          />
        </a>
        {" - "}
        <a
          href="https://www.linkedin.com/in/abdallah-mosa-b75b57194/"
          className="text-white "
        >
          <img
            src="https://www.svgrepo.com/show/108614/linkedin.svg"
            alt="LinkedIn logo"
            className="h-6 w-6 inline-block align-middle"
          />
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
