class ProjectDetails {
    constructor (detailsHeader, projects) {
        this.header = this.header.bind(this);
        this.detailsHeader = detailsHeader;
        this.projectList = JSON.parse(localStorage.getItem('projectInfo'));
        this.projectId = localStorage.getItem('projectId')
        this.projects = projects
    };

    addHandlers () {
        for(const project of this.projects) {
            project.addEventListener('click', () => {
                localStorage.setItem('projectId', event.target.getAttribute('data-projectId'))
                location.reload();
            });
        }
    }

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
        this.addHandlers();
        this.renderElements(projectDetails);
    }
};