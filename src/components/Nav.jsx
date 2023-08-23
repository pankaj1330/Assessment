function Nav(){
    function showMenu(){
        const aside = document.querySelector('.aside');
        aside.style.transform = `translateX(0%)`
    }
    return(
        <nav className="d-sm-none d-block">
            <button className="navbar-toggler bg-primary bg-opacity-25 rounded-3 me-2 text-center" onClick={showMenu}>
                <span className="navbar-toggler-icon d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-equals"></i>
                </span>
            </button>
            <h5 className="d-inline">Assessments</h5>
        </nav>
    )
}

export default Nav;