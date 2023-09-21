import "./css/ability.css";

const Ability = () => {
  return (
    <section
      id="ability"
      className="w-full mx-auto max-w-7xl pt-20 pb-20 px-2.5"
    >
      <div className="w-full lg:max-w-6xl mx-auto flex max-md:flex-wrap my-7">
        <div className="w-2/5 max-lg:w-3/6 max-md:w-full px-3.5 py-3.5">
          <p className="font-sans text-center text-2xl font-medium normal-case mb-10 text-indigo-100">
            Experiência
          </p>
          <ol className="relative border-l border-gray-700">
            <li data-aos="fade-up" className="mb-10 ml-1">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-4 ring-8 ring-gray-900">
                <img
                  className="rounded-full shadow-lg object-cover w-full h-full"
                  src="/imagens/brasmaquinas.png"
                  alt="Brasmáquinas"
                />
              </span>
              <div className="pl-5">
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                  Julho de 2023
                </time>
                <div className="flex justify-between items-center max-lg:flex-wrap py-2.5">
                  <h3 className="text-lg font-semibold text-white">
                    Vendedor Digital
                  </h3>
                  <div className="text-sm mr-2.5 flex justify-center font-normal text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="19"
                      viewBox="0 0 17 21"
                      fill="none"
                      className="mr-1.5"
                    >
                      <path
                        d="M8.00005 11.9999C9.65691 11.9999 11.0001 10.6568 11.0001 8.99994C11.0001 7.34309 9.65691 5.99994 8.00005 5.99994C6.3432 5.99994 5.00005 7.34309 5.00005 8.99994C5.00005 10.6568 6.3432 11.9999 8.00005 11.9999Z"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8001 12.9379H13.7891C14.5109 11.8799 14.9286 10.6441 14.9967 9.36508C15.0648 8.08607 14.7807 6.81289 14.1752 5.68419C13.5698 4.55548 12.6663 3.61452 11.5632 2.96376C10.46 2.31299 9.19939 1.97739 7.91867 1.99347C6.63795 2.00956 5.3862 2.37673 4.29971 3.05499C3.21322 3.73326 2.33365 4.69662 1.75678 5.84018C1.17991 6.98373 0.927848 8.26364 1.02805 9.54054C1.12825 10.8174 1.57687 12.0424 2.32505 13.0819H2.30905L2.45005 13.2529C2.55005 13.3799 2.65005 13.5039 2.75005 13.6239L8.00005 19.9999L13.1301 13.7519C13.3231 13.5433 13.5034 13.3232 13.6701 13.0929L13.8001 12.9379Z"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Guanambi, Bahia</span>
                  </div>
                </div>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                  Brasmáquinas
                </span>
                <p className="text-base font-normal pt-2.5 text-gray-500 dark:text-gray-400">
                  Optei trocar de setor no intuito de aprender mais sobre esse
                  mercado de vendas e melhorar a minha comunicação com o
                  cliente. Saber lidar com os novos desafios que virão com o
                  decorrer do tempo, podendo guia-los na direção correta e
                  evoluir com os possíveis erros.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" className="mb-10 ml-1">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-4 ring-8 ring-gray-900">
                <img
                  className="rounded-full shadow-lg object-cover w-full h-full"
                  src="/imagens/brasmaquinas.png"
                  alt="Brasmáquinas"
                />
              </span>
              <div className="pl-5">
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                  Setembro de 2022 até junho de 2023
                </time>
                <div className="flex justify-between items-center max-lg:flex-wrap py-2.5">
                  <h3 className="text-lg font-semibold text-white">
                    Auxiliar de TI
                  </h3>
                  <div className="text-sm mr-2.5 flex justify-center font-normal text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="19"
                      viewBox="0 0 17 21"
                      fill="none"
                      className="mr-1.5"
                    >
                      <path
                        d="M8.00005 11.9999C9.65691 11.9999 11.0001 10.6568 11.0001 8.99994C11.0001 7.34309 9.65691 5.99994 8.00005 5.99994C6.3432 5.99994 5.00005 7.34309 5.00005 8.99994C5.00005 10.6568 6.3432 11.9999 8.00005 11.9999Z"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8001 12.9379H13.7891C14.5109 11.8799 14.9286 10.6441 14.9967 9.36508C15.0648 8.08607 14.7807 6.81289 14.1752 5.68419C13.5698 4.55548 12.6663 3.61452 11.5632 2.96376C10.46 2.31299 9.19939 1.97739 7.91867 1.99347C6.63795 2.00956 5.3862 2.37673 4.29971 3.05499C3.21322 3.73326 2.33365 4.69662 1.75678 5.84018C1.17991 6.98373 0.927848 8.26364 1.02805 9.54054C1.12825 10.8174 1.57687 12.0424 2.32505 13.0819H2.30905L2.45005 13.2529C2.55005 13.3799 2.65005 13.5039 2.75005 13.6239L8.00005 19.9999L13.1301 13.7519C13.3231 13.5433 13.5034 13.3232 13.6701 13.0929L13.8001 12.9379Z"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Guanambi, Bahia</span>
                  </div>
                </div>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                  Brasmáquinas
                </span>
                <p className="text-base font-normal pt-2.5 text-gray-400">
                  Durante a minha jornada como Auxiliar de TI na Brasmáquinas
                  pude contribuir no desenvolvimento do setor do e-commerce na
                  criação de conteúdo de produtos, alimentação de informações no
                  site, lançamento de pedidos e dados de despacho para clientes,
                  suporte em marketplaces como Mercado Livre, B2W, Via Varejo,
                  Loja do Mecânico, experiência com hub AnyMarket e o sistema
                  ERP Bling, entre outras atividades correlatas da área de
                  e-commerce.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" className="mb-10 ml-1">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-4 ring-8 ring-gray-900">
                <img
                  className="rounded-full shadow-lg object-cover w-full h-full"
                  src="/imagens/brasmaquinas.png"
                  alt="Brasmáquinas"
                />
              </span>
              <div className="pl-5">
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                  Novembro de 2021 até abril de 2022
                </time>
                <div className="flex justify-between items-center max-lg:flex-wrap py-2.5">
                  <h3 className="text-lg font-semibold text-white">
                    Auxiliar de TI - Estágio
                  </h3>
                  <div className="text-sm mr-2.5 flex justify-center font-normal text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="19"
                      viewBox="0 0 17 21"
                      fill="none"
                      className="mr-1.5"
                    >
                      <path
                        d="M8.00005 11.9999C9.65691 11.9999 11.0001 10.6568 11.0001 8.99994C11.0001 7.34309 9.65691 5.99994 8.00005 5.99994C6.3432 5.99994 5.00005 7.34309 5.00005 8.99994C5.00005 10.6568 6.3432 11.9999 8.00005 11.9999Z"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8001 12.9379H13.7891C14.5109 11.8799 14.9286 10.6441 14.9967 9.36508C15.0648 8.08607 14.7807 6.81289 14.1752 5.68419C13.5698 4.55548 12.6663 3.61452 11.5632 2.96376C10.46 2.31299 9.19939 1.97739 7.91867 1.99347C6.63795 2.00956 5.3862 2.37673 4.29971 3.05499C3.21322 3.73326 2.33365 4.69662 1.75678 5.84018C1.17991 6.98373 0.927848 8.26364 1.02805 9.54054C1.12825 10.8174 1.57687 12.0424 2.32505 13.0819H2.30905L2.45005 13.2529C2.55005 13.3799 2.65005 13.5039 2.75005 13.6239L8.00005 19.9999L13.1301 13.7519C13.3231 13.5433 13.5034 13.3232 13.6701 13.0929L13.8001 12.9379Z"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Guanambi, Bahia</span>
                  </div>
                </div>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                  Brasmáquinas
                </span>
                <p className="text-base font-normal pt-2.5 text-gray-400">
                  Durante meu estágio na Brasmaquinas, tive a incrível
                  oportunidade de fazer parte da equipe de e-commerce. Contribuí
                  para aprimorar a experiência do cliente, otimizando processos
                  e impulsionando as vendas online. Aprendi muito sobre vendas
                  digitais no ramo de produtos para irrigação, energia solar e
                  sua importância no cenário atual.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="w-1/5 px-3.5 py-3.5 flex justify-center max-lg:hidden">
          <div className="lineAbility"></div>
        </div>
        <div className="w-2/5 max-lg:w-3/6 max-md:w-full px-3.5 py-3.5">
          <p
            data-aos="fade-up"
            className="font-sans text-center text-2xl font-medium normal-case mb-10 text-indigo-100"
          >
            Formação acadêmica
          </p>
          <ol className="relative border-l border-gray-700">
            <li data-aos="fade-up" className="mb-10 ml-1">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-4 ring-8 ring-gray-900">
                <img
                  className="rounded-full shadow-lg object-cover w-full h-full"
                  src="/imagens/pucminas.png"
                  alt="PUC Minas"
                />
              </span>
              <div className="pl-5">
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                  Agosto de 2023
                </time>
                <h3 className="text-lg font-semibold py-2.5 text-white">
                  Cursando Análise e Desenvolvimento de Sistemas
                </h3>
                <p className="text-sm font-normal pb-2.5 text-gray-400">
                  Pontifícia Universidade Católica de Minas Gerais
                </p>
                <p className="text-base font-normal text-gray-500 text-gray-400"></p>
              </div>
            </li>
            <li data-aos="fade-up" className="mb-10 ml-1">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-4 ring-8 ring-gray-900">
                <img
                  className="rounded-full shadow-lg object-cover w-full h-full"
                  src="/imagens/ifbaiano.png"
                  alt="IF Baiano"
                />
              </span>
              <div className="pl-5">
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                  Fevereiro de 2019 até Julho de 2022
                </time>
                <h3 className="text-lg font-semibold py-2.5 text-white">
                  Ensino Médio Integrado ao Curso Técnico em Informática para
                  Internet
                </h3>
                <p className="text-sm font-normal pb-2.5 text-gray-400">
                  Instituto Federal de Educação, Ciência e Tecnologia Baiano -
                  Campus Guanambi
                </p>
                <p className="text-base font-normal text-gray-400">
                  No decorrer dos anos em que estive matriculado no IF Baiano
                  Campus Guanambi, tive a oportunidade de participar de um
                  ambiente de aprendizado dinâmico e estimulante. O curso
                  técnico em Informática para Internet abrangeu uma ampla gama
                  de disciplinas, desde programação, desenvolvimento web, design
                  e banco de dados, até fundamentos de redes e sistemas
                  operacionais. Essa abordagem abrangente permitiu que eu
                  adquirisse uma visão holística do mundo da tecnologia,
                  preparando-me para os desafios futuros.
                </p>
                <a
                  href="#"
                  className="inline-flex hidden mt-3.5 items-center px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
                >
                  Certificado
                  <svg
                    className="w-3 h-3 ml-2"
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
                </a>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
export default Ability;
