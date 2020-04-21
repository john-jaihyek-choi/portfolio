class ProjectDetails {
    constructor (detailsHeader, projects) {
        this.header = this.header.bind(this);
        this.carouselImg = this.carouselImg.bind(this);
        this.detailsHeader = detailsHeader;
        this.projectList = JSON.parse(localStorage.getItem('projectInfo'));
        this.projectId = localStorage.getItem('projectId')
        this.projects = projects
    };

    addHandlers () {
        for(const project of this.projects) {
            project.addEventListener('click', () => {
                localStorage.setItem('projectId', event.target.getAttribute('data-projectId'))
                window.scrollTo(0, 0);
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

    carouselImg (projectDetails) {
        const carouselContainer = document.querySelector('.portfolio-details-carousel');

        for(let i = 0; i < projectDetails.images.length; i++) {
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', projectDetails.images[i]);
            imgElement.setAttribute('alt', projectDetails.images[i]);
            imgElement.classList.add('img-fluid');

            carouselContainer.append(imgElement);
        }
        
        $(".portfolio-details-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            items: 1
          });
    }

    renderElements(projectDetails) {
        this.header(projectDetails);
        this.carouselImg(projectDetails);
    }

    init () {
        const projectDetails = this.projectList[this.projectId];
        this.addHandlers();
        this.renderElements(projectDetails);
    }
};