function AddAssessment(){
    function closeForm(){
        document.querySelector('.create-Assessment').classList.remove('show-create-assessment')
    }
    return(
        <section className="create-Assessment">
            <div className="position-relative">
                <h2>Create New ASSESSMENT</h2>
                <i class="fa-solid fa-xmark position-absolute top-0 end-0" role="button" onClick={closeForm}></i>
            </div>
            <form>
                <label htmlFor="title">Name of assessment</label> <br />
                <input type="text" name="title" id="title" placeholder="type here"/> <br />

                <label htmlFor="purpose">Purpose</label> <br />
                <select name="purpose" id="purpose">
                    <option value="select" selected>Select</option>
                    <option value="study">Study</option>
                    <option value="exam">Exam</option>
                    <option value="other">other</option>
                </select> <br />

                <label htmlFor="description">Description</label> <br />
                <select name="description" id="description">
                    <option value="select" selected>Select</option>
                    <option value="study">Study</option>
                    <option value="exam">Exam</option>
                    <option value="other">other</option>
                </select> <br />

                <label htmlFor="skills">Skills</label> <br />
                <div>
                    <div className="your-skills">
                        <p>UI/UX <i class="fa-solid fa-xmark"></i></p>
                        <p>Front end <i class="fa-solid fa-xmark"></i></p>
                        <p>web developer <i class="fa-solid fa-xmark"></i></p>
                        <p>web developer <i class="fa-solid fa-xmark"></i></p>
                        <p>web developer <i class="fa-solid fa-xmark"></i></p>
                        <p>React js <i class="fa-solid fa-xmark"></i></p>
                    </div>
                    <input type="text" name="skills" id="skills" placeholder="type here"/>
                </div>

                <label htmlFor="duration">Duration of assessment</label> <br />
                <input type="text" name="duration" id="duration" placeholder="HH:MM:SS"/> <br />

                <input type="button" className="btn btn-primary mt-2 border-0" value="save" />
            </form>
        </section>
    )
}

export default AddAssessment;