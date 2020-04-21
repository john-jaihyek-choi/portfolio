class ProjectDetails {
    constructor (detailsHeader, projects) {
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

    carousel (projectDetails) {
        const carouselContainer = document.querySelector('.portfolio-details-carousel');

        for(let i = 0; i < projectDetails.images.length; i++) {
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', projectDetails.images[i]);
            imgElement.setAttribute('alt', projectDetails.images[i]);
            imgElement.classList.add('img-fluid');

            carouselContainer.append(imgElement);
        }

        // Portfolio details carousel
        $(".portfolio-details-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            items: 1
          });
    }

    infoCard (projectDetails) {
        const role = document.querySelector('#role');
        const techStack = document.querySelector('#techStack');
        const compatibility = document.querySelector('#compatibility');
        const demoUrl = document.querySelector('#demoUrl');
        const github = document.querySelector('#github');

        role.append(projectDetails.role);

        for(let i = 0; i < projectDetails.techUsed.length; i++) {
            if(i % 6 === 0) {
                const lineBreak = document.createElement('br');
                techStack.append(lineBreak);
            }
            if(i === projectDetails.techUsed.length - 1) {
                techStack.append(projectDetails.techUsed[i]);
            } else {
                techStack.append(projectDetails.techUsed[i],", ");
            }
        }

        compatibility.append(projectDetails.compatibility);

        const demoAnchor = document.createElement('a')
        demoAnchor.setAttribute('href', projectDetails.url);
        demoAnchor.setAttribute('target', "_blank")
        const url = projectDetails.url
        demoAnchor.append(projectDetails.url.substring(url.indexOf('//')+2));
        demoUrl.append(demoAnchor);

        const githubAnchor = document.createElement('a');
        githubAnchor.setAttribute('href', projectDetails.github);
        githubAnchor.setAttribute('target', "_blank")
        githubAnchor.append('github.com/john-jaihyek-choi.com');
        github.append(githubAnchor);
    }

    description (projectDetails) {
        console.log(projectDetails);
        const descriptionContainer = document.querySelector('.portfolio-description');

        const shortDescription = document.createElement('h2');
        shortDescription.textContent = projectDetails.shortDescription;
        descriptionContainer.append(shortDescription)

        for(let i = 0; i < projectDetails.longDescription.length; i++) {
            const detailDescription = document.createElement('p');
            detailDescription.textContent = projectDetails.longDescription[i];

            descriptionContainer.append(detailDescription);
        }
    }

    renderElements(projectDetails) {
        this.header(projectDetails);
        this.carousel(projectDetails);
        this.infoCard(projectDetails);
        this.description(projectDetails);
    }

    init () {
        const projectDetails = this.projectList[this.projectId];
        this.addHandlers();
        this.renderElements(projectDetails);
    }
};