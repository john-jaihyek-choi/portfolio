// Handlers
const projects = document.getElementsByClassName('toDetails');

const projectDetails = new ProjectDetails ();
const app = new App(projectDetails, projects);

app.start();