const url = window.location.pathname;
const currentPage = url.substring(url.lastIndexOf('/')+1, url.indexOf('.html'))

const projects = document.getElementsByClassName('toDetails');
const detailsHeader = document.querySelector('#breadcrumbs');
const contactEmail = document.querySelectorAll('[data-contact="contactInfo"]')

const projectDetails = new ProjectDetails (detailsHeader, projects, contactRender);
const landingPage = new LandingPage(projects, contactRender);

function contactRender() {
    const email = ('jaihyek.choi' + '@' + 'gmail.com')
    const phone = ('+1 ' + '(562)' + '708' + '-' + '7297')

    for(let i = 0; i < contactEmail.length; i++) {
        if(contactEmail[i].getAttribute('data-type') === 'link') contactEmail[i].setAttribute('href', `mailto:${email}`);
        if(contactEmail[i].getAttribute('data-type') === 'text') contactEmail[i].textContent = phone;
        if(contactEmail[i].getAttribute('data-type') === 'link-text') {
            contactEmail[i].textContent = email
            contactEmail[i].setAttribute('href', `mailto:${email}`)
        } 
    }
}

if(currentPage === 'index' || currentPage === '/') landingPage.init();
if(currentPage === 'projectDetails') projectDetails.init();
