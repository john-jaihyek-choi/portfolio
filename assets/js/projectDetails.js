class ProjectDetails {
    constructor (projectId) {
        this.viewDetails = this.viewDetails.bind(this);
    };

    viewDetails (projectId) {
        console.log(projectId);
    }
};
