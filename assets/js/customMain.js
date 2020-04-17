var project = document.querySelector('.toDetails');
console.log(project);
var projectDetails = new ProjectDetails (project);
var app = new App(projectDetails);

app.start();