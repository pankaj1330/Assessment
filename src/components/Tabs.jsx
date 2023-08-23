import MyAssessmentTab from "./MyAssessmentTab";

function Tabs(){
    function tabClicked(e){
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('text-primary')
        })
        e.currentTarget.classList.add('text-primary')
    }
    return(
        <section className="tabs p-1 mt-2">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="tab-btn btn text-primary btn-outline-none" onClick={tabClicked}>Assessment</button>
                </li>
                <div className="vr"></div>
                <li className="nav-item">
                    <button className="tab-btn btn" onClick={tabClicked}>My Assessment</button>
                </li>
            </ul>
            <MyAssessmentTab />
        </section>
    )
}

export default Tabs;