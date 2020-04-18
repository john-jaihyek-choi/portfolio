class ProjectDetails {
    constructor (detailsHeader) {
        this.header = this.header.bind(this);
        this.detailsHeader = detailsHeader;
        this.projectInfo = JSON.parse(localStorage.projectInfo);
    };

    getProjectInfo() {
        fetch('../../database/projectInfo.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('projectInfo', JSON.stringify(data[localStorage.projectId]))
            })
    }

    header () {
        const header = document.querySelector('#breadcrumbs');
        const title = header.querySelector('.projectName');

        const projectName = document.createElement('h2')
        projectName.textContent = this.projectInfo.name;
        title.prepend(projectName);
    }

    init () {
        this.getProjectInfo();
        this.header();
    }
};