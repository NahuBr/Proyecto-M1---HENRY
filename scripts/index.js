class Activity{
    constructor(id,title,description,imgUrl){
        this.title = title
        this.description = description
        this.imgUrl = imgUrl
        this.id = id
    }
}

class Repository{
    constructor(){
        this.activities = [] 
    }

    createActivity(title,description,imgUrl){
        let actividad = new Activity(this.activities.length+1,title,description,imgUrl)
        this.activities.push(actividad)
    }

    getAllActivities = () => this.activities

    deleteActivity(id){
        this.activities.splice(id-1,1)

        for (let i = id-1; i < this.activities.length; i++) {
            this.activities[i].id -= 1
        }
    }
}

function crear(activity){
    const {title, description, imgUrl, id} = activity; 

    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const div = document.createElement('div');

    h3.innerHTML = title;
    p.innerHTML = description;
    img.src = imgUrl

    h3.className = 'title';
    p.className = 'description';
    img.className = 'imgUrl';
    div.id = id;

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);

    div.className = 'card';

    div.addEventListener('click', function() {
        repository.deleteActivity(div.id);
        this.remove();
    });

    return div;
}

function Convert(){
    act.innerHTML = '';
    body.appendChild(act);
    const activities = repository.getAllActivities();
    let cards = activities.map((activity)=>{
        return crear(activity);
    });

    cards.forEach(card => {
        act.appendChild(card);
    });
}

function handler(){
    const titleInput = document.getElementById('title').value.trim();
    const descriptionInput = document.getElementById('description').value.trim();
    const urlInput = document.getElementById('imgUrl').value.trim();

    if (titleInput === '' || titleInput === defaultText) {
        return alert('Por favor, ingresa un titulo.');
    } else if (descriptionInput === '' || descriptionInput === defaultText2) {
        return alert('Por favor, una descripcion.');
    } else if (urlInput === '' || urlInput === defaultText3) {
        return alert('Por favor, ingresa una Url.');
    }

    repository.createActivity(titleInput,descriptionInput,urlInput);
    Convert();
}
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const urlInput = document.getElementById('imgUrl');
const button = document.getElementById('button');
const body = document.getElementsByTagName('body')[0];
let act = document.createElement('div')
let repository = new Repository()

const defaultText = "Nombre de la actividad"
const defaultText2 = "Descripción de la actividad"
const defaultText3 = "Link de la imagen"

act.className = 'repository'

titleInput.addEventListener('focus', function() {
    if (this.value === defaultText) {
        this.value = '';
    }
});

titleInput.addEventListener('blur', function() {
    if (this.value === '') {
        this.value = defaultText;
    }
});


descriptionInput.addEventListener('focus', function() {
    if (this.value === defaultText2) {
        this.value = '';
    }
});

descriptionInput.addEventListener('blur', function() {
    if (this.value === '') {
        this.value = defaultText2;
    }
});


urlInput.addEventListener('focus', function() {
    if (this.value === defaultText3) {
        this.value = '';
    }
});

urlInput.addEventListener('blur', function() {
    if (this.value === '') {
        this.value = defaultText3;
    }
});


button.addEventListener('click',handler);

const icons = document.querySelectorAll('.icon');
const modal = document.getElementById('modal');
const imagenModal = document.getElementById('imagen-modal');
const cerrarModal = document.querySelector('.cerrar-modal');

icons.forEach(imagen => {
    imagen.addEventListener('click', () => {
        modal.style.display = 'block';
        imagenModal.src = imagen.src;
    });
});

cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});