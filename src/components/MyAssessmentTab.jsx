import AddAssessment from "./AddAssessment";
import Assessmentdetail from "./Assessmentdetail";
import Myassessment from "./Myassessment";

function MyAssessmentTab(){
    function openform(){
        document.querySelector('.create-Assessment').classList.toggle('show-create-assessment');
    }
    return(
        <div className="assessment-tab w-100">
            <h4 className="fw-normal my-4">Assessment Overview</h4>
            <section className="assessment-overview d-flex flex-row flex-wrap">
                <Assessmentdetail 
                    heading = "Total Assessment"
                    IconClass = "fa-solid fa-equals"
                    order = {1}
                    details = {[
                        {
                            count : '34',
                            increased : '',
                            subHeading : ''
                        }
                    ]}
                />
                <Assessmentdetail 
                    heading = "Total Purpose"
                    IconClass = "fa-solid fa-link"
                    order = {4}
                    details = {[
                        {
                            count : '11',
                            increased : '',
                            subHeading : ''
                        }
                    ]}
                />
                <Assessmentdetail 
                    heading = "Candidates"
                    IconClass = "fa-regular fa-user"
                    order = {2}
                    details = {[
                        {
                            count : '11,145',
                            increased : '+89',
                            subHeading : 'Total Candidate'
                        },
                        {
                            count : '1,14',
                            increased : '+89',
                            subHeading : 'Who Attamped'
                        },
                    ]}
                />
                <Assessmentdetail 
                    heading = "Candidates Source"
                    IconClass = "fa-solid fa-earth-americas"
                    order = {3}
                    details = {[
                        {
                            count : '11,000',
                            increased : '+89',
                            subHeading : 'E-mail'
                        },
                        {
                            count : '145',
                            increased : '+89',
                            subHeading : 'Social Share'
                        },
                        {
                            count : '145',
                            increased : '+89',
                            subHeading : 'Unique Link'
                        },
                    ]}
                />
                
            </section>
            <h4 className="fw-normal my-3">My Assessment</h4>
            <section className="my-assessments d-flex flex-wrap" role="button">
                <div className="new-assessment border border-dark border-opacity-25 p-2 rounded m-2 text-center" onClick={openform}>
                    <i className="fa-solid fa-circle-plus fs-1 my-3"></i>
                    <h4>New Assessment</h4>
                    <p>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
                </div>
                <Myassessment />
                <Myassessment />
                <Myassessment />
            </section>
            <AddAssessment />
        </div>
    )
}

export default MyAssessmentTab;