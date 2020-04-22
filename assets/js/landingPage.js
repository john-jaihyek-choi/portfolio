class LandingPage {
    constructor (projects, contactRender) {
        this.addHandlers = this.addHandlers.bind(this);
        this.projects = projects
        this.contactRender = contactRender
    };

    addHandlers () {
        for(const project of this.projects) {
            project.addEventListener('click', () => {
                localStorage.setItem('projectId', event.target.getAttribute('data-projectId'))
            });
        }
    }

    getProjectInfo () {
        fetch('../../database/projectInfo.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('projectInfo', JSON.stringify(data));
            })
    }

    init () {
        this.addHandlers();
        this.getProjectInfo();
        this.contactRender();
    };
};
