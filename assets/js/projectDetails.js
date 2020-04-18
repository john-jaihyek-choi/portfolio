class ProjectDetails {
    constructor (detailsHeader) {
        this.viewDetails = this.viewDetails.bind(this);
        this.detailsHeader = detailsHeader;
    };

    viewDetails () {
        console.log(localStorage.projectId)
        const header = document.querySelector('#breadcrumbs');
        const title = header.querySelector('.projectName');

        const projectName = document.createElement('h2')
        projectName.textContent = localStorage.projectId;
        title.prepend(projectName);
    }

    init () {
        this.viewDetails();
    }
};