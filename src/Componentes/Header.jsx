import logoCesde from "../../public/logos/logo-Cesde.png"


function Header() {
    return(
        <>
        <header className=" w-full bg-[var(--primary-color)] py-3   ">
            <img src={logoCesde} alt="" className=" w-[300px] h-[70px] ml-5" />
        </header>
        </>
    )
}

export default Header

