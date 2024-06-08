import logoCesde from "../../public/logos/logo-Cesde.png";

function Aside() {
  return (
    <>
      <aside className=" w-1/4 bg-[var(--aside-color)] flex flex-col py-10">
            <div className="flex w-full justify-center gap-5">
            <button className=" w-[130px] h-[70px] bg-white flex items-center flex-wrap text-xl text-[var(--primary-color)] rounded-lg shadow-lg hover:scale-105 transition">
                Preguntas frecuentes
            </button>
            <button className=" w-[130px] h-[70px] bg-white text-xl  text-[var(--primary-color)] rounded-lg shadow-lg hover:scale-105 transition">
                Historial
            </button>
            </div>

            <div className="border-2 w-72 flex flex-col items-center center p-2 m-2" >
                <p className="text-[18px] font-bold pb-3">¿Estas son las preguntas frecuentas?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sint, provident similique sapiente culpa libero dolore excepturi quo impedit neque exercitationem voluptate blanditiis, consectetur facilis sequi ratione! Quisquam, magnam aliquam.</p>
                {/* contenido */}
            </div>
            
      </aside>
    </>
  );
}

export default Aside;
