class LandingPage {
    constructor (projects) {
        this.addHandlers = this.addHandlers.bind(this);
        this.projects = projects
    };

    addHandlers () {
        for(const project of this.projects) {
            project.addEventListener('click', () => {
                localStorage.setItem('projectId', event.target.getAttribute('data-projectId')) 
            });
        }
    }

    init () {
        this.addHandlers();
    };
};
