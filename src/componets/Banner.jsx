import { useState } from "react";
import "./css/banner.css";

const Banner = () => {
  const [positionWindowY, setPositionWindowY] = useState(false);
  window.addEventListener("scroll", (e) => {
    let windowY = window.pageYOffset > 350 ? true : false;
    setPositionWindowY(windowY);
  });

  return (
    <section id="banner" className="flex select-none relative justify-center items-center w-full">
      <div id="banner_background">
        <video autoPlay loop muted>
          <source src="/imagens/banner_animation.mp4" type="video/mp4" />
          <source src="/imagens/banner_animation.ogg" type="video/ogg" />
          Seu navegador não suporta vídeo HTML5.
        </video>
      </div>
      <div id="banner_background_shadow"></div>
      <header
        data-aos="fade-down"
        className={`w-full top-0 z-50 transition-all duration-300	ease-in-out left-0
        ${positionWindowY ? "fixed isolate backdrop-blur" : "absolute"}`}
      >
        <nav className="border-gray-200 px-4 lg:px-6 py-8">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#banner" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                José Antônio
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <div className="hidden sm-min-370px:flex space-x-6 sm:justify-center mr-4">
                <a
                  href="https://wa.me/5577991292464"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1611 4.74121C18.1152 2.69043 15.3906 1.5625 12.4951 1.5625C6.51855 1.5625 1.65527 6.42578 1.65527 12.4023C1.65527 14.3115 2.15332 16.1768 3.10059 17.8223L1.5625 23.4375L7.30957 21.9287C8.8916 22.793 10.6738 23.2471 12.4902 23.2471H12.4951C18.4668 23.2471 23.4375 18.3838 23.4375 12.4072C23.4375 9.51172 22.207 6.79199 20.1611 4.74121ZM12.4951 21.4209C10.874 21.4209 9.28711 20.9863 7.90527 20.166L7.57812 19.9707L4.16992 20.8643L5.07812 17.5391L4.86328 17.1973C3.95996 15.7617 3.48633 14.1064 3.48633 12.4023C3.48633 7.43652 7.5293 3.39355 12.5 3.39355C14.9072 3.39355 17.168 4.33105 18.8672 6.03516C20.5664 7.73926 21.6113 10 21.6064 12.4072C21.6064 17.3779 17.4609 21.4209 12.4951 21.4209ZM17.4365 14.6729C17.168 14.5361 15.835 13.8818 15.5859 13.7939C15.3369 13.7012 15.1563 13.6572 14.9756 13.9307C14.7949 14.2041 14.2773 14.8096 14.1162 14.9951C13.96 15.1758 13.7988 15.2002 13.5303 15.0635C11.9385 14.2676 10.8936 13.6426 9.84375 11.8408C9.56543 11.3623 10.1221 11.3965 10.6396 10.3613C10.7275 10.1807 10.6836 10.0244 10.6152 9.8877C10.5469 9.75098 10.0049 8.41797 9.78027 7.87598C9.56055 7.34863 9.33594 7.42188 9.16992 7.41211C9.01367 7.40234 8.83301 7.40234 8.65234 7.40234C8.47168 7.40234 8.17871 7.4707 7.92969 7.73926C7.68066 8.0127 6.98242 8.66699 6.98242 10C6.98242 11.333 7.9541 12.6221 8.08594 12.8027C8.22266 12.9834 9.99512 15.7178 12.7148 16.8945C14.4336 17.6367 15.1074 17.7002 15.9668 17.5732C16.4893 17.4951 17.5684 16.9189 17.793 16.2842C18.0176 15.6494 18.0176 15.1074 17.9492 14.9951C17.8857 14.873 17.7051 14.8047 17.4365 14.6729Z"
                    />
                  </svg>
                  <span className="sr-only">WhatsApp page</span>
                </a>
                <a
                  href="https://www.instagram.com/jose.antonion/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </a>
                <a
                  href="https://github.com/joseantonion03/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/joseantonion/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.979 9V10.586C13.3122 10.079 13.7715 9.66737 14.3119 9.39143C14.8522 9.11549 15.4549 8.98474 16.061 9.012C19.3 9.012 20 11.03 20 13.655V19H17V14.262C17 13.132 16.771 11.678 15.005 11.678C13.292 11.678 13 12.908 13 14.178V19H10.009V9H12.979Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 6.487C8 6.78367 7.91203 7.07368 7.74721 7.32035C7.58238 7.56703 7.34811 7.75929 7.07403 7.87282C6.79994 7.98635 6.49834 8.01606 6.20737 7.95818C5.91639 7.9003 5.64912 7.75744 5.43934 7.54766C5.22956 7.33788 5.0867 7.07061 5.02882 6.77963C4.97094 6.48866 5.00065 6.18706 5.11418 5.91297C5.22771 5.63889 5.41997 5.40462 5.66665 5.2398C5.91332 5.07497 6.20333 4.987 6.5 4.987C6.89783 4.987 7.27936 5.14503 7.56066 5.42634C7.84197 5.70764 8 6.08917 8 6.487Z"
                    />
                    <path d="M8 9.012H5V19H8V9.012Z" />
                  </svg>
                  <span className="sr-only">LinkedIn page</span>
                </a>
              </div>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#aboutMe"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Sobre mim
                  </a>
                </li>
                <li>
                  <a
                    href="#training"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Habilidades
                  </a>
                </li>
                <li>
                  <a
                    href="#ability"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Conhecimento
                  </a>
                </li>     
                <li>
                  <a
                    href="#projects"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Projeto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="absolute max-w-5xl">
        <p className="font-sans text-sm font-medium uppercase text-slate-300 px-2.5 text-center">
          Seja bem-vindo(a) ao meu portifólio.
        </p>
        <h1 className="font-sans-inter font-extrabold lowercase text-sky-100 text-center px-2.5 text-6xl max-md:text-5xl max-sm:text-4xl mt-4 mb-4">
          Criando Soluções Digitais Inovadoras para Negócios em Crescimento.
        </h1>
        <p className="font-sans text-lg text-slate-300 font-medium normal-case max-w-3xl px-2.5 mx-auto text-center">
          Impulsione seu negócio com soluções de desenvolvimento web de alta
          qualidade. Experiências digitais modernas e personalizadas para sua
          empresa ou projeto.
        </p>
        <div className="mx-auto flex flex-wrap justify-center mt-7">
          <a href="#aboutMe">
            <button
              type="button"
              className="py-6 px-10 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
            >
              QUEM SOU EU?
            </button>
          </a>
          <a
            target="_Blank"
            href="https://docs.google.com/document/d/1WcxNTnVBMMFv7MRd37j1gMWqXlMNjm-5WtwiV1esFGs/edit"
          >
            <button
              type="button"
              className="px-10 py-6 text-center mr-2 mb-2 border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
            >
              CURRÍCULO
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Banner;
