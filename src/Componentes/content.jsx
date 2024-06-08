import logoCesde from "../../public/logos/logo-Cesde.png";
import enviar from "../../public/logos/enviar.png";
import logoChat from "../../public/logos/logoChat.png";

function Content() {
  return (
    <>
      <main className="w-full py-3 flex justify-center items-center ">
        <div className=" h-full mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col py-7 h-[400px] w-[500px]">
            {/* conversacion con chat */}
            <span className="flex justify-end text-2xl">
                <p className="bg-[var(--aside-color)] bg--400 rounded-lg p-2 shadow-sm" >Hola</p>
            </span>

            <span className="flex justify-start text-2xl">
                <img src={logoChat} alt="" className="w-12 " />
                <p className="flex items-center pl-2">Bienvenido</p>
            </span>

          </div>

          <div className="bg-[var(--aside-color)] flex items-center  py-2 px-3 rounded-lg shadow-custom">
                <input
                type="text"
                placeholder="Escribe tu pregunta"
                className=" placeholder:text-black w-[450px] border-none outline-none bg-[var(--aside-color)] "
                />
                <button>
                <img
                    src={enviar}
                    alt=""
                    className="w-7 hover:scale-105 transition"
                />
                </button>
          </div>
        </div>
        {/* contenido */}
      </main>
    </>
  );
}

export default Content;
