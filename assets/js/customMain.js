const url = window.location.pathname;
const currentPage = url.substring(url.lastIndexOf('/')+1, url.indexOf('.html'))

const projects = document.getElementsByClassName('toDetails');
const detailsHeader = document.querySelector('#breadcrumbs');

const projectDetails = new ProjectDetails (detailsHeader);
const landingPage = new LandingPage(projects);

if(currentPage === 'index') landingPage.init();
if(currentPage === 'projectDetails') projectDetails.init();