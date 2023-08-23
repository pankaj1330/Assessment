function IconButton(props){
    function changeLook(e){
        document.querySelectorAll('.aside-btn').forEach(btn => {
            btn.classList.remove('btn-outline-primary')
        })
        e.currentTarget.classList.add('btn-outline-primary');
    }
    return(
        <button type="button" className="aside-btn btn mt-3" onClick={changeLook}>
            <i className={props.class}></i> <br className="d-none d-sm-block" />
            {props.name}
        </button>
    )
}

export default IconButton;