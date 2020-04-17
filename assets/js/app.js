class App {
    constructor (toProductDetails) {
        this.addHandlers = this.addHandlers.bind(this);
        this.toProductDetails = toProductDetails;
    };

    addHandlers () {
        const projects = document.getElementsByClassName('toDetails');

        for(const project of projects) {
            project.addEventListener('click', () => {
                this.toProductDetails.viewDetails(event.target.getAttribute('data-projectId'))
            });
        }
    }

    start () {
        this.addHandlers();
    };
};
