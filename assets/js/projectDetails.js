class ProjectDetails {
    constructor (detailsHeader) {
        this.header = this.header.bind(this);
        this.detailsHeader = detailsHeader;
        this.projectList = JSON.parse(localStorage.getItem('projectInfo'));
        this.projectId = localStorage.getItem('projectId')
    };

    header (projectDetails) {
        const header = document.querySelector('#breadcrumbs');
        const title = header.querySelector('.projectName');

        const projectName = document.createElement('h2')
        projectName.textContent = projectDetails.name;
        title.prepend(projectName);
    }

    renderElements(projectDetails) {
        this.header(projectDetails)
    }

    init () {
        const projectDetails = this.projectList[this.projectId];
        this.renderElements(projectDetails);
    }
};