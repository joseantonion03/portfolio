import "./css/aboutme.css";
const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="flex my-24 min-h-full select-none relative justify-center items-center w-full"
    >
      <div id="about_background"></div>
      <div id="about_background_shadow"></div>
      <div className="flex absolute justify-center flex-wrap items-center w-full mx-auto max-w-7xl py-2.5 px-2.5">
        <p
          data-aos="fade-up"
          className="myname w-full font-sans-inter font-extrabold text-sky-100 text-center max-md:text-5xl max-sm:text-4xl mt-4 mb-4"
        >
          José Antônio
        </p>
        <p
          data-aos="fade-up"
          className="myresume font-sans text-lg text-slate-300 mb-3 px-2.5 font-medium normal-case max-w-3xl mx-auto text-left"
        >
          Sou um estudante dedicado e apaixonado por programação para web.
          Sempre fui fascinado pela maneira como as tecnologias digitais podem
          criar experiências incríveis para os usuários. Estou sempre procurando
          aprender e me aprimorar em novas técnicas e ferramentas de
          desenvolvimento web, e estou animado para transformar minhas
          habilidades em projetos reais.
        </p>
        <p
          data-aos="fade-up"
          className="myresume font-sans text-lg text-slate-300 mb-3 px-2.5 font-medium normal-case max-w-3xl mx-auto text-left"
        >
          Com uma sólida compreensão das linguagens de programação e da
          arquitetura de web, estou pronto para enfrentar desafios e projetos
          cada vez mais complexos. Além disso, estou sempre aberto a feedback e
          a colaborar com outras pessoas para criar soluções ainda melhores.
          Estou animado para trabalhar com você em seu próximo projeto de
          desenvolvimento web!
        </p>

        <div
          className="network w-full max-w-3xl mx-auto mt-5"
          data-aos="fade-up"
        >
          <a href="https://wa.me/5577991292464">
            <button
              type="button"
              className="md:ml-2 text-gray-900 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#ffffff"
                  d="M20.1611 4.74121C18.1152 2.69043 15.3906 1.5625 12.4951 1.5625C6.51855 1.5625 1.65527 6.42578 1.65527 12.4023C1.65527 14.3115 2.15332 16.1768 3.10059 17.8223L1.5625 23.4375L7.30957 21.9287C8.8916 22.793 10.6738 23.2471 12.4902 23.2471H12.4951C18.4668 23.2471 23.4375 18.3838 23.4375 12.4072C23.4375 9.51172 22.207 6.79199 20.1611 4.74121ZM12.4951 21.4209C10.874 21.4209 9.28711 20.9863 7.90527 20.166L7.57812 19.9707L4.16992 20.8643L5.07812 17.5391L4.86328 17.1973C3.95996 15.7617 3.48633 14.1064 3.48633 12.4023C3.48633 7.43652 7.5293 3.39355 12.5 3.39355C14.9072 3.39355 17.168 4.33105 18.8672 6.03516C20.5664 7.73926 21.6113 10 21.6064 12.4072C21.6064 17.3779 17.4609 21.4209 12.4951 21.4209ZM17.4365 14.6729C17.168 14.5361 15.835 13.8818 15.5859 13.7939C15.3369 13.7012 15.1563 13.6572 14.9756 13.9307C14.7949 14.2041 14.2773 14.8096 14.1162 14.9951C13.96 15.1758 13.7988 15.2002 13.5303 15.0635C11.9385 14.2676 10.8936 13.6426 9.84375 11.8408C9.56543 11.3623 10.1221 11.3965 10.6396 10.3613C10.7275 10.1807 10.6836 10.0244 10.6152 9.8877C10.5469 9.75098 10.0049 8.41797 9.78027 7.87598C9.56055 7.34863 9.33594 7.42188 9.16992 7.41211C9.01367 7.40234 8.83301 7.40234 8.65234 7.40234C8.47168 7.40234 8.17871 7.4707 7.92969 7.73926C7.68066 8.0127 6.98242 8.66699 6.98242 10C6.98242 11.333 7.9541 12.6221 8.08594 12.8027C8.22266 12.9834 9.99512 15.7178 12.7148 16.8945C14.4336 17.6367 15.1074 17.7002 15.9668 17.5732C16.4893 17.4951 17.5684 16.9189 17.793 16.2842C18.0176 15.6494 18.0176 15.1074 17.9492 14.9951C17.8857 14.873 17.7051 14.8047 17.4365 14.6729Z"
                />
              </svg>
              WhatsApp
            </button>
          </a>
          <a href="https://github.com/joseantonion03/">
            <button
              type="button"
              className="text-gray-900 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0001 2.333C9.64482 2.33045 7.36563 3.16677 5.57097 4.69206C3.77631 6.21735 2.5835 8.33191 2.20631 10.6568C1.82912 12.9817 2.29221 15.3649 3.51258 17.3793C4.73295 19.3938 6.63083 20.9078 8.8661 21.65C9.3661 21.742 9.5441 21.435 9.5441 21.173C9.5441 20.936 9.5341 20.156 9.5301 19.328C6.7731 19.928 6.1921 18.159 6.1921 18.159C6.01013 17.5597 5.62002 17.0451 5.0921 16.708C4.1921 16.093 5.1611 16.108 5.1611 16.108C5.47531 16.1513 5.77549 16.2658 6.03874 16.4427C6.30199 16.6197 6.52135 16.8544 6.6801 17.129C6.81438 17.3734 6.99578 17.5888 7.21383 17.7627C7.43187 17.9366 7.68223 18.0656 7.95042 18.1421C8.21861 18.2186 8.49931 18.2412 8.77629 18.2086C9.05327 18.176 9.32103 18.0888 9.5641 17.952C9.60831 17.4493 9.83151 16.9791 10.1931 16.627C7.9931 16.377 5.6781 15.527 5.6781 11.727C5.66442 10.7423 6.0304 9.79007 6.7001 9.068C6.39653 8.21348 6.43051 7.27532 6.7951 6.445C6.7951 6.445 7.6271 6.179 9.5211 7.461C11.1453 7.01701 12.8589 7.01701 14.4831 7.461C16.3731 6.179 17.2001 6.445 17.2001 6.445C17.5662 7.2747 17.602 8.21283 17.3001 9.068C17.9695 9.79011 18.3348 10.7425 18.3201 11.727C18.3201 15.534 16.0011 16.371 13.7951 16.616C14.0313 16.8562 14.2135 17.1441 14.3295 17.4604C14.4456 17.7766 14.4928 18.114 14.4681 18.45C14.4681 19.776 14.4561 20.844 14.4561 21.17C14.4561 21.433 14.6351 21.742 15.1371 21.645C17.3689 20.9 19.2628 19.3852 20.4802 17.3717C21.6975 15.3582 22.1588 12.9773 21.7815 10.6549C21.4043 8.33247 20.2131 6.22 18.421 4.69534C16.629 3.17069 14.353 2.33331 12.0001 2.333Z"
                  fill="#ffffff"
                />
              </svg>
              GitHub
            </button>
          </a>
          <a href="https://www.instagram.com/jose.antonion/">
            <button
              type="button"
              className="text-gray-900 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                  fill="#ffffff"
                />
              </svg>
              Instagram
            </button>
          </a>
          <a href="https://www.linkedin.com/in/joseantonion/">
            <button
              type="button"
              className="text-gray-900 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.979 9V10.586C13.3122 10.079 13.7715 9.66737 14.3119 9.39143C14.8522 9.11549 15.4549 8.98474 16.061 9.012C19.3 9.012 20 11.03 20 13.655V19H17V14.262C17 13.132 16.771 11.678 15.005 11.678C13.292 11.678 13 12.908 13 14.178V19H10.009V9H12.979Z"
                  fill="#ffffff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 6.487C8 6.78367 7.91203 7.07368 7.74721 7.32035C7.58238 7.56703 7.34811 7.75929 7.07403 7.87282C6.79994 7.98635 6.49834 8.01606 6.20737 7.95818C5.91639 7.9003 5.64912 7.75744 5.43934 7.54766C5.22956 7.33788 5.0867 7.07061 5.02882 6.77963C4.97094 6.48866 5.00065 6.18706 5.11418 5.91297C5.22771 5.63889 5.41997 5.40462 5.66665 5.2398C5.91332 5.07497 6.20333 4.987 6.5 4.987C6.89783 4.987 7.27936 5.14503 7.56066 5.42634C7.84197 5.70764 8 6.08917 8 6.487Z"
                  fill="#ffffff"
                />
                <path d="M8 9.012H5V19H8V9.012Z" fill="#ffffff" />
              </svg>
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
