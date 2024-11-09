document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        openModal(projectId);
    });
});

document.querySelector('.close-button').addEventListener('click', closeModal);

function openModal(projectId) {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Aquí puedes definir imágenes y descripciones para cada proyecto
    const projects = {
        project1: {
            images: ['ruta/a/la/imagen1.jpg', 'ruta/a/la/imagen1b.jpg'], // Añade más imágenes si es necesario
            description: 'Descripción del Proyecto 1.'
        },
        project2: {
            images: ['ruta/a/la/imagen2.jpg', 'ruta/a/la/imagen2b.jpg'],
            description: 'Descripción del Proyecto 2.'
        }
    };

    const selectedProject = projects[projectId];
    document.getElementById('modal-image').src = selectedProject.images[0];
    document.getElementById('modal-description').innerText = selectedProject.description;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Funciones para el carrusel de imágenes
let currentImageIndex = 0;

function moveSlide(direction) {
    const projectId = document.querySelector('.details-button[data-project]').getAttribute('data-project');
    const images = {
        project1: ['ruta/a/la/imagen1.jpg', 'ruta/a/la/imagen1b.jpg'], // Añade más imágenes si es necesario
        project2: ['ruta/a/la/imagen2.jpg', 'ruta/a/la/imagen2b.jpg']
    };

    const selectedImages = images[projectId];
    currentImageIndex = (currentImageIndex + direction + selectedImages.length) % selectedImages.length;
    document.getElementById('modal-image').src = selectedImages[currentImageIndex];
}
