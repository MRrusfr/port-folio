let myProjects = document.getElementById("myProjects");
myProjects.addEventListener('click', function nextPart() {
    document.getElementById("portfolio").scrollIntoView(true);
    });

document.getElementById("myCompetences").addEventListener('click', function nextPart() {
    document.getElementById("competences").scrollIntoView(true);
    });

document.getElementById("myContacts").addEventListener('click', function nextPart() {
    document.getElementById("contact").scrollIntoView(true);
    })

function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    }
