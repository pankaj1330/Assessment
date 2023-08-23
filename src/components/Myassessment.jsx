function Myassessment(){
    return(
        <div className="new-assessment border border-dark border-opacity-25 p-2 rounded m-2">
            <i class="fa-solid fa-briefcase mb-3 mt-2 fs-5 p-2 bg-primary bg-opacity-1 text-white rounded"></i>
            <h5 className="fw-normal">Math Assessment</h5>
            <div className="date">
                <h6 className="d-inline">Job <div className="vr"></div></h6>
                <p className="d-inline ms-1">
                    <i class="fa-regular fa-calendar me-1"></i>
                    20 Apr 2023
                </p>
            </div>
            <div className="assessment-footer mt-4 d-flex flex-row align-items-end pt-2" style={{'border-top':'2px dotted grey'}}>
                <div className="me-3">
                    <p className="m-0">00</p>
                    <h6 className="m-0">Duration</h6>
                </div>
                <div className="me-auto">
                    <p className="m-0">00</p>
                    <h6 className="m-0">Questions</h6>
                </div>
                <div className="share me-3 p-1 px-2 border border-dark rounded-4">
                    <i className="fa-solid fa-link"></i>
                    <p className="d-inline">Share</p>
                </div>
                <h6 className="bg-primary rounded-circle p-2 text-light d-flex align-items-center justify-content-center m-0" style={{width:'30px',height:'30px'}}>PS</h6>
            </div>
        </div>
    )
}

export default Myassessment;