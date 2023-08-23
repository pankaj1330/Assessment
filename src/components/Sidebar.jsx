import IconButton from "./IconButton";

function Sidebar(){

    function closeMenu(){
        const aside = document.querySelector('.aside');
        aside.style.transform = `translateX(-100%)`
    }

    return(
        <aside className="aside me-1">
            <div className="menu d-sm-none w-100 p-2 my-2 position-relative">
                <h4 className="d-inline">Menu</h4>
                <button className="position-absolute top-2 end-0 border-0" onClick={closeMenu}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                
            </div>
            <div className="aside-btn">
                <IconButton 
                    class = "fa-solid fa-table-columns"
                    name = "Dashboard"
                />
            </div>
            <div className="aside-btn">
                <IconButton 
                    class = "fa-solid fa-file-pen"
                    name = "Assessment"
                />
            </div>
            <div className="aside-btn">
                <IconButton 
                    class = "fa-solid fa-book-bookmark"
                    name = "Library"
                />
            </div>
            <div className="aside-btn text-center d-flex flex-column w-100">
                <hr />
                <span id="admin-span" className="border border-danger p-1 px-2 m-auto rounded-4">Admin</span>
                <IconButton
                    class = "fa-solid fa-link"
                    name = "Round Status"
                />
            </div>
        </aside>
    )
}

export default Sidebar;