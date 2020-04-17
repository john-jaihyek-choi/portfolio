class ProjectDetails {
    constructor (project) {
        this.viewDetails = this.viewDetails.bind(this);
        this.project = project;
    };

    viewDetails () {
        console.log(project);
    };
};
