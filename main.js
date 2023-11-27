document.getElementById('contacto').addEventListener('click', function() {
    var contactoContainer = document.getElementById('contacto-container');
    contactoContainer.style.display = contactoContainer.style.display === 'none' ? 'block' : 'none';

    boton.style.display = 'none';
    contactoContainer.style.display = 'block';
});