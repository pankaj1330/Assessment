function Assessmentdetail(props){
    function displayDetails(){
        const details = (props.details).map(({count,increased,subHeading}) => {
            return(
                <div>
                    <h5 className="fw-bolder me-3">{count} <span className="text-primary fw-normal fs-6"> {increased}</span></h5>
                    <h6 className="fw-normal">{subHeading}</h6>                    
                </div>
            )
        })
        return details
    }

    return(
        <div className={`order-md-${props.order} details p-sm-3 p-2 border border-1`}>
            <h6 className="fw-normal">{props.heading}</h6>
            <div className="sub-detail d-flex flex-row align-items-start py-2">
                <i className={`${props.IconClass} bg-primary p-2 text-light me-2 rounded`}></i>
                <div className="detail-data d-flex flex-row">
                    {
                        displayDetails()
                    }

                </div>
            </div>
        </div>
    )
}

export default Assessmentdetail