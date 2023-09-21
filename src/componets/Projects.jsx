import "./css/projects.css";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full relative mx-auto max-w-7xl pt-20 pb-20 px-2.5"
    >
      <div className="projects-efeito absolute">
        <div className="projects-efeito-1"></div>
        <div className="projects-efeito-2"></div>
      </div>
      <p
        data-aos="fade-up"
        className="font-sans text-lg font-medium normal-case mb-3 border-l-4 pl-2 text-indigo-100	border-blue-600"
      >
        Projetos
      </p>
      <p
        data-aos="fade-up"
        className="mb-3 font-normal text-gray-500 dark:text-gray-400 max-w-2xl"
      >
        Abaixo, compartilho um pouco das minhas experiências e habilidades
        adquiridas ao longo da minha trajetória profissional na área.
      </p>

      <div className="w-full h-auto min-h-min flex flex-wrap my-7">
        <div
          data-aos="fade-up"
          className="projects_card flex w-full px-6 py-10 mb-10 rounded-lg max-lg:flex-wrap"
        >
          <div className="projects_imagem select-none relative w-2/4 h-auto max-lg:w-full">
            <img
              draggable="false"
              className="w-full h-full object-cover"
              src="/imagens/projetos/aeroplano.svg"
              alt="Projeto"
            />
            <div className="projects_imagem-shadow1 w-full h-full absolute inset-0">
              <img
                draggable="false"
                className="w-full h-full object-cover object-center"
                src="/imagens/efeitoimagem.png"
                alt="Projeto"
              />
            </div>
          </div>
          <div className="projects_texto w-2/4 px-3.5 max-lg:px-0 max-lg:w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Aeroplano - Plataforma para Escolas de Aviação
            </h5>
            <p className="font-normal my-5 text-gray-400">
              Projeto está sendo desenvolvido no primeiro semestre da faculdade
              de Análise e Desenvolvimento de Sistemas na PUCMinas
            </p>
            <p className="text-2xl text-gray-400">
              Informações técnicas
            </p>
            <p className="font-normal mt-3 text-gray-400">
              Prototipagem
            </p>
            <div className="w-full my-4 select-none">
              <div
                type="button"
                className="text-gray-400 cursor-pointer fill-gray-400 hover:fill-blue-400 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-6 py-5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="33"
                  viewBox="0 0 25 25"
                >
                  <path d="M16.6504 8.33496C17.7557 8.33496 18.8157 7.89589 19.5972 7.11433C20.3788 6.33278 20.8179 5.27276 20.8179 4.16748C20.8179 3.0622 20.3788 2.00218 19.5972 1.22063C18.8157 0.439073 17.7557 0 16.6504 0L8.31543 0C7.21079 0 6.1514 0.438815 5.3703 1.21991C4.58921 2.00101 4.15039 3.0604 4.15039 4.16504C4.15039 5.26968 4.58921 6.32907 5.3703 7.11017C6.1514 7.89126 7.21079 8.33008 8.31543 8.33008C7.21015 8.33008 6.15013 8.76915 5.36858 9.5507C4.58702 10.3323 4.14795 11.3923 4.14795 12.4976C4.14795 13.6028 4.58702 14.6629 5.36858 15.4444C6.15013 16.226 7.21015 16.665 8.31543 16.665C7.49118 16.6646 6.6853 16.9085 5.99969 17.366C5.31409 17.8236 4.77955 18.4741 4.46368 19.2354C4.1478 19.9968 4.06478 20.8347 4.22511 21.6432C4.38544 22.4517 4.78192 23.1945 5.36441 23.7776C5.9469 24.3608 6.68924 24.7582 7.49756 24.9194C8.30588 25.0807 9.14387 24.9987 9.90556 24.6837C10.6673 24.3687 11.3184 23.8349 11.7768 23.1499C12.2351 22.4648 12.48 21.6592 12.4805 20.835V8.33496H16.6504ZM16.6504 8.33496C15.8266 8.33496 15.0214 8.57924 14.3364 9.0369C13.6515 9.49456 13.1176 10.145 12.8024 10.9061C12.4872 11.6672 12.4047 12.5046 12.5654 13.3126C12.7261 14.1205 13.1228 14.8626 13.7053 15.4451C14.2878 16.0276 15.0299 16.4243 15.8378 16.585C16.6458 16.7457 17.4832 16.6632 18.2443 16.348C19.0053 16.0328 19.6558 15.4989 20.1135 14.814C20.5712 14.129 20.8154 13.3238 20.8154 12.5C20.8153 11.3954 20.3764 10.3361 19.5954 9.55502C18.8143 8.77395 17.755 8.33509 16.6504 8.33496Z" />
                </svg>
              </div>
              <div
                type="button"
                className="text-gray-400 cursor-pointer fill-gray-400 hover:fill-blue-400 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-6 py-5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="33"
                  viewBox="0 0 25 25"
                >
                  <path d="M15.4053 3.125H23.75V21.875L15.4053 3.125ZM9.59473 3.125H1.25V21.875L9.59473 3.125ZM12.5 10.0635L17.749 21.875H14.1846L12.6855 18.125H8.84277L12.5 10.0635Z" />
                </svg>
              </div>
            </div>
            <p className="font-normal mt-3 text-gray-400">
              Front-End
            </p>
            <div className="w-full my-4 select-none">
              <div
                type="button"
                className="text-gray-400 cursor-pointer fill-gray-400 hover:fill-blue-400 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-6 py-5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.90601 2L4.50001 19.683L12 21.842L19.544 19.684L21.092 2H2.90601ZM17.1 8H9.04401L9.21801 10H16.994L16.362 16.513L12.072 17.884L7.74601 16.44L7.45601 13.531H9.50001L9.66301 14.931L12.087 15.74L14.457 14.983L14.757 12.001H7.36801L6.80001 6H17.319L17.1 8Z" />
                </svg>
              </div>
              <div
                type="button"
                className="text-gray-400 cursor-pointer fill-gray-400 hover:fill-blue-400 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-6 py-5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.90601 2L4.50001 19.781L12 21.941L19.544 19.782L21.091 2H2.90601ZM16.343 16.679L12.006 17.879H11.997L7.65601 16.679L7.35601 13.521H9.48601L9.63701 15.042L11.997 15.679L14.36 15.041L14.608 12H7.26401L7.07401 10H14.792L14.969 8H6.87001L6.69301 6H17.307L16.343 16.679Z" />
                </svg>
              </div>
              <div
                type="button"
                className="text-gray-400 cursor-pointer fill-gray-400 hover:fill-blue-400 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-6 py-5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 26 26"
                >
                  <path d="M21.0938 2.0625H3.90625C2.6123 2.0625 1.5625 3.1123 1.5625 4.40625V21.5938C1.5625 22.8877 2.6123 23.9375 3.90625 23.9375H21.0938C22.3877 23.9375 23.4375 22.8877 23.4375 21.5938V4.40625C23.4375 3.1123 22.3877 2.0625 21.0938 2.0625ZM13.4668 19.123C13.4668 21.252 12.2168 22.2236 10.3955 22.2236C8.75 22.2236 7.79785 21.374 7.30957 20.3437L8.98438 19.333C9.30664 19.9043 9.59961 20.3877 10.3076 20.3877C10.9814 20.3877 11.4111 20.124 11.4111 19.0937V12.1064H13.4668V19.123ZM18.3301 22.2236C16.4209 22.2236 15.1855 21.3154 14.585 20.124L16.2598 19.1572C16.6992 19.875 17.2754 20.4072 18.2861 20.4072C19.1357 20.4072 19.6826 19.9824 19.6826 19.3916C19.6826 18.6885 19.126 18.4395 18.1836 18.0244L17.6709 17.8047C16.1865 17.1748 15.2051 16.3789 15.2051 14.7041C15.2051 13.1611 16.3818 11.9893 18.2129 11.9893C19.5215 11.9893 20.459 12.4434 21.1328 13.6348L19.5312 14.6602C19.1797 14.0303 18.7988 13.7812 18.208 13.7812C17.6074 13.7812 17.2266 14.1621 17.2266 14.6602C17.2266 15.2754 17.6074 15.5244 18.4912 15.9102L19.0039 16.1299C20.752 16.877 21.7334 17.6436 21.7334 19.3623C21.7334 21.208 20.2783 22.2236 18.3301 22.2236Z" />
                </svg>
              </div>
              <div
                type="button"
                className="text-gray-400 cursor-pointer fill-gray-400 hover:fill-blue-400 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-6 py-5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 26 26"
                >
                  <path d="M15.835 15.231C15.835 17.3018 13.8955 17.2539 13.6904 17.2539H9.74072V13.2651H13.6904C15.7686 13.2651 15.835 14.8228 15.835 15.231ZM13.3862 11.6602C13.4189 11.6602 15.2632 11.709 15.2632 9.88721C15.2632 9.12939 15.0918 8.13574 13.3862 8.13574H9.74072V11.6602H13.3862ZM23.4375 5.2085V19.7915C23.4347 20.7576 23.0496 21.6833 22.3665 22.3665C21.6833 23.0496 20.7576 23.4347 19.7915 23.4375H5.2085C4.24239 23.4347 3.31666 23.0496 2.63352 22.3665C1.95037 21.6833 1.56533 20.7576 1.5625 19.7915V5.2085C1.56533 4.24239 1.95037 3.31666 2.63352 2.63352C3.31666 1.95037 4.24239 1.56533 5.2085 1.5625H19.7915C20.7576 1.56533 21.6833 1.95037 22.3665 2.63352C23.0496 3.31666 23.4347 4.24239 23.4375 5.2085ZM18.0688 15.5205C18.0688 14.4673 17.7441 12.6743 15.6738 12.2319V12.1963C16.7925 11.7187 17.4971 10.8169 17.4971 9.47949C17.4971 9.1377 17.5947 6.31641 13.708 6.31641H7.50684V19.0767C13.7681 19.0767 14.3364 19.1587 15.4951 18.7979C16.189 18.582 18.0688 17.9199 18.0688 15.5205Z" />
                </svg>
              </div>
            </div>
            <a
              target="_blank"
              href="https://www.figma.com/file/x40GCsstu2SYWbBmVL82Ru/Aeroplano---Plataforma-para-Escolas-de-Avia%C3%A7%C3%A3o?type=design&node-id=0-1&mode=design&t=kWFECws7Cx3SwXZV-0"
            >
              <button
                type="button"
                className="text-white mt-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Confira o projeto
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
