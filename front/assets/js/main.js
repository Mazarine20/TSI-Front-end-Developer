document.addEventListener('DOMContentLoaded', function () {
    const eventList = document.getElementById('eventList');
    const paginationContainer = document.getElementById('pagination');
    const eventDetailsContainer = document.getElementById('event-details');
    const backToListButton = document.getElementById('back-to-list');

    const eventData = [
            { id: 1, name: 'Jeux sportifs mondiaux', date: '2023-09-05', venue: 'Stadium A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: '150', category: 'Sport', image: 'event1.jpeg'},
            { id: 2, name: 'Mixed Martial Arts', date: '2023-01-01', venue: 'Stadium A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: '150', category: 'MMA', image: 'event7.jpg'},
            { id: 3, name: '1 day tournament weekend', date: '2023-01-01', venue: 'Stadium A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: '150', category: 'Basketball', image: 'event2.jpg' },
            { id: 4, name: 'Beverly VS Chamuta ', date: '2023-07-15', venue: 'Stadium A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: '150', category: 'Basketball', image: 'event3.jpg' },
            { id: 5, name: 'COUPE DU MONDE FEMININE', date: '2023-01-01', venue: 'Stadium A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: '150', category: 'Football', image: 'event4.png' },
            { id: 6, name: 'KOF The king of fighters', date: '2023-06-30', venue: 'Stadium A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: '150', category: 'MMA', image: 'event5.jpeg' },
            { id: 7, name: 'National Championship', date: '2023-01-01', venue: 'Stadium A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: '150', category: 'Football américain', image: 'event6.jpg' },
            { id: 8, name: 'SPARTAN FIGHTING', date: '2023-10-28', venue: 'Théâtre toursky', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: '150', category: 'MMA', image: 'event8.jpg' },
        ];

        const itemsPerPage = 4;
        let currentPage = 1;

        function displayEvents(page) {
            eventList.innerHTML = '';
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
        
            const currentEvents = eventData.slice(startIndex, endIndex);
        
          currentEvents.forEach(event => {
          const card = document.createElement('li');
          card.classList.add('booking-card');
          card.style.backgroundImage = `url('${event.image}')`;

          const truncatedDescription = event.description.length > 200
          ? event.description.substring(0, 300) + '...'
          : event.description;
      
          card.innerHTML = `
            <div class="book-container">
              <div class="content">
                <button class="btn">Détail</button>
              </div>
            </div>
            <div class="informations-container">
              <h2 class="title">${event.name}</h2>
              <p class="sub-title">${event.category}</p>
              <p class="price"><svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
              </svg>${event.price} €</p>
              <div class="more-information">
                <div class="info-and-date-container">
                  <div class="box info">
                    <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                    </svg>
                    <p>${event.venue}</p>
                  </div>
                  <div class="box date">
                    <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                    </svg>
                    <p>${event.date}</p>
                  </div>
                </div>
                <p class="disclaimer">${truncatedDescription}</p>
              </div>
            </div>
          `;
      
          eventList.appendChild(card);
        });
    } 
    
        async function showEventDetails(eventId) {
            // Masquer la liste des événements
            eventList.style.display = 'none';
    
            // Charger dynamiquement le contenu de la page des détails
            const response = await fetch(`event-details/${eventId}.html`);
            const detailsHtml = await response.text();
    
            // Afficher la section des détails de l'événement
            eventDetailsContainer.innerHTML = detailsHtml;
            eventDetailsContainer.style.display = 'block';
    
            // Ajouter un gestionnaire d'événement pour le bouton de retour
            backToListButton.addEventListener('click', () => {
                // Afficher à nouveau la liste des événements
                eventList.style.display = 'flex';
                // Masquer la section des détails de l'événement
                eventDetailsContainer.style.display = 'none';
            });
    
            // Ajouter l'état de l'historique pour permettre un retour
            history.pushState({ page: 'details', eventId }, `Event Details: ${eventId}`, `event-details/${eventId}`);
        }
    
        function displayPagination() {
            paginationContainer.innerHTML = '';
            const totalPages = Math.ceil(eventData.length / itemsPerPage);
        
            for (let i = 1; i <= totalPages; i++) {
              const pageButton = document.createElement('button');
              pageButton.textContent = i;
              pageButton.addEventListener('click', () => {
                currentPage = i;
                displayEvents(currentPage);
                highlightCurrentPage();
              });
        
              paginationContainer.appendChild(pageButton);
            }
        
            highlightCurrentPage();
          }
        
          function highlightCurrentPage() {
            const pageButtons = paginationContainer.querySelectorAll('button');
            pageButtons.forEach(button => {
              button.classList.remove('active');
            });
        
            const currentButton = paginationContainer.querySelector(`button:nth-child(${currentPage})`);
            if (currentButton) {
              currentButton.classList.add('active');
            }
          }
        
          displayEvents(currentPage);
          displayPagination();

        });

// Fonction pour afficher l'indicateur de chargement
const showLoading = () => {
    const loading = document.createElement('div');
    loading.className = 'loading';
    document.body.appendChild(loading);
};

// Fonction pour masquer l'indicateur de chargement
const hideLoading = () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
};

// Fonction de redirection
const redirectToPage = (page) => {
    window.location.href = `${page}.html`;
};

const postData = async (url, userData) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi des données.');
        }

        return response.json();
    } catch (error) {
        console.error('Erreur:', error.message);
    }
};

const signUp = async () => {
    showLoading();
    const email = document.getElementById('signupForm').email.value;
    const password = document.getElementById('signupForm').password.value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    const userData = { email, password };

    const data = await postData('http://localhost:5000/api/user/signup', userData);

    if (data) {
        hideLoading();
        alert('Utilisateur créé avec succès!');
        document.getElementById('signupForm').reset();
        return;
    }
    hideLoading();
    alert("Une erreur est survenue !")
};

const logIn = async () => {
    showLoading();
    const email = document.getElementById('loginForm').email.value;
    const password = document.getElementById('loginForm').password.value;

    const userData = { email, password };


    const data = await postData('http://localhost:5000/api/user/login', userData);

    if (data && data.token) {
        localStorage.setItem('token', data.token);
        redirectToPage('events');
        hideLoading();
        return;
    }
    hideLoading();
    alert("Une erreur est survenue !")

};

const init = async () => {
    const token = localStorage.getItem('token');

    if (!token && !window.location.href.includes('index.html')) {
        redirectToPage('index');
    } else if (token && !window.location.href.includes('events.html')) {
        redirectToPage('events');
    }
};

window.onload = () => {
    init();

    document.getElementById('signupForm').addEventListener('submit', (event) => {
        event.preventDefault();
        signUp();
    });

    document.getElementById('loginForm').addEventListener('submit', (event) => {
        event.preventDefault();
        logIn();
    });
};
