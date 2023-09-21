import { useEffect, useState } from "react";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      document.querySelector("#loading").classList.add("block");
    } else {
      document.querySelector("#loading").classList.remove("block");
    }
  });

  const sendInfo = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      nome.target.value.length > 0 &&
      email.target.value.length > 0 &&
      assunto.target.value.length > 0 &&
      mensagem.target.value.length > 0
    ) {
      let req = await fetch("https://brasmaquinas.000webhostapp.com/api", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome.target.value,
          email: email.target.value,
          assunto: assunto.target.value,
          mensagem: mensagem.target.value,
        }),
      });
      let resp = await req.json();
      console.log(resp.status);
    }
  };

  return (
    <section
      id="contact"
      className="w-full mx-auto max-w-7xl pt-20 pb-20 px-2.5"
    >
      <div className="w-full flex my-7 max-sm:flex-wrap">
        <div
          data-aos="fade-up"
          className="w-1/2 max-sm:mb-7 max-sm:w-full relative hidden sm:hidden xl:flex sm-min-370px:flex justify-center items-center"
        >
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              <img
                src="/imagens/002665bb-7057-4717-8ac1-bb2da4b47c40.jpeg"
                className="dark:hidden w-[272px] h-[572px]"
                alt=""
              />
              <img
                src="/imagens/002665bb-7057-4717-8ac1-bb2da4b47c40.jpeg"
                className="hidden dark:block w-[272px] h-[572px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-1/2 xl:pl-5 max-sm:w-full max-xl:w-full max-w-3xl mx-auto"
        >
          <p className="font-sans text-lg font-medium normal-case mb-3 border-l-4 pl-2 text-indigo-100	border-blue-600">
            Envie-me uma mensagem
          </p>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
            Preencha suas informações logo abaixo.
          </p>
          <form>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nome
              </label>
              <input
                type="text"
                id="nomeform"
                onChange={(text) => setNome(text)}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                E-mail
              </label>
              <input
                type="email"
                id="emailform"
                onChange={(text) => setEmail(text)}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Assunto
              </label>
              <input
                type="text"
                id="assuntoform"
                onChange={(text) => setAssunto(text)}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="repeat-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mensagem
              </label>
              <textarea
                id="messagemform"
                rows="4"
                onChange={(text) => setMensagem(text)}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              id="sendForm"
              onClick={(e) => sendInfo(e)}
              class="select-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 w-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
      <div
        id="loading"
        class="fixed select-none w-full h-full top-0 left-0 z-50 items-center p-6 dark:bg-gray-800/75"
      >
        <div
          role="status"
          class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
        >
          <svg
            aria-hidden="true"
            class="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </section>
  );
};
export default Contact;
