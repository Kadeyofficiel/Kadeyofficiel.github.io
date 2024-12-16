document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 800, once: true });

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');

    // Thème sombre
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        
        if (document.body.classList.contains('dark')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Animation de typing
    const typedTextElement = document.getElementById('typed-text');
    const text = "en BTS SIO option SLAM";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }
    typeText();

    // Compétences
    const skillsContainer = document.getElementById('skills-container');
    const skills = [
        { name: 'HTML', icon: 'fab fa-html5', color: 'text-orange-500' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
        { name: 'PHP', icon: 'fab fa-php', color: 'text-purple-500' },
        { name: 'Python', icon: 'fab fa-python', color: 'text-green-500' },
        { name: 'Java', icon: 'fab fa-java', color: 'text-red-500' },
        { name: 'Laravel', icon: 'fab fa-laravel', color: 'text-red-700' },
        { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-700' },
    ];

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('skill-card', 'p-6', 'rounded-lg', 'text-center');
        skillCard.innerHTML = `
            <i class="${skill.icon} ${skill.color} text-6xl mb-4"></i>
            <h3 class="text-xl font-bold">${skill.name}</h3>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Projets
    const projectsContainer = document.getElementById('projects-container');
    const projects = [
        {
            title: 'Puissance 4',
            description: 'Jeu de Puissance 4',
            technologies: ['Langage C'],
            details: `
                <div class="project-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Puissance 4 en C</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Description</h4>
                            <p class="mb-4">Implémentation complète du jeu Puissance 4 avec une logique de jeu et des algorithmes de détection de victoire.
                            Ce projet a été fait en groupe lors de ma première année de Licence en Informatique.</p>
                            
                            <h4 class="text-xl font-semibold mb-4">Fonctionnalités</h4>
                            <ul class="list-disc pl-5">
                                <li>Jeu contre un autre joueur</li>
                                <li>Vérification automatique des conditions de victoire</li>
                                <li>Interface console interactive</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Technologies</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">C</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Algorithmes</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Programmation Logique</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <a href="https://github.com/Kadeyofficiel/Puissance4" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                            Voir le code source
                        </a>
                    </div>
                </div>
            `
        },
        {
            title: 'Personnel',
            description: 'Application en Java pour gérer les employés des ligues',
            technologies: ['Java'],
            details: `
                <div class="project-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Application Personnel en Java</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Description</h4>
                            <p class="mb-4">Application pour gérer les employés des ligues avec des fonctionnalités avancées de gestion et de suivi.</p>
                            
                            <h4 class="text-xl font-semibold mb-4">Fonctionnalités</h4>
                            <ul class="list-disc pl-5">
                                <li>Gestion des informations des employés</li>
                                <li>Suivi des performances</li>
                                <li>Interface utilisateur conviviale</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Technologies</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Java</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <a href="documentation.pdf" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                            Télécharger la Documentation
                        </a>
                    </div>
                    <div class="mt-6">
                        <a href="https://github.com/Kadeyofficiel/personnel" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                            Voir le code source
                        </a>
                    </div>
                </div>
            `
        },
        {
            title: 'Stage de première année',
            description: "Maintenance & corrections de bugs d'un site web",
            technologies: ['HTML', 'CSS', 'JavaScript'],
            details: `
                <div class="project-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Puissance 4 en C</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Description</h4>
                            <p class="mb-4">Implémentation complète du jeu Puissance 4 avec une logique de jeu avancée et des algorithmes de détection de victoire.</p>
                            
                            <h4 class="text-xl font-semibold mb-4">Fonctionnalités</h4>
                            <ul class="list-disc pl-5">
                                <li>Jeu contre un autre joueur</li>
                                <li>Vérification automatique des conditions de victoire</li>
                                <li>Interface console interactive</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Technologies</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">C</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Algorithmes</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Programmation Logique</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: 'Sucrerie',
            description: "Base de donnée pour gérer le stock d'une boutique de bonbons & de patisseries",
            technologies: ['SQL'],
            details: `
                <div class="project-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Application Personnel en Java</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Description</h4>
                            <p class="mb-4">Base de donnée pour gérer le stock d'une boutique de bonbons & de patisseries</p>
                            
                            <h4 class="text-xl font-semibold mb-4">Logiciels utilisés :</h4>
                            <ul class="list-disc pl-5">
                                <li>MySQL pour créer la BDD</li>
                                <li>Code SQL fait sur Visual Studio Code</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Technologies</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">SQL & MySQL</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <a href="Sucrerie.pdf" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                            Télécharger la Documentation
                        </a>
                    </div>
                    <div class="mt-6">
                    </div>
                </div>
            `
        },
        {
            title: 'Calculatrice',
            description: 'Calculatrice en PHP',
            technologies: ['PHP', 'Laravel'],
            details: `
                <div class="project-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Calculatrice en PHP</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Description</h4>
                            <p class="mb-4">Application web permettant d'effectuer des calculs simples avec une interface assez</p>
                            
                            <h4 class="text-xl font-semibold mb-4">Fonctionnalités</h4>
                            <ul class="list-disc pl-5">
                                <li>Calculs simples et complexes</li>
                                <li>Gestion des erreurs</li>      
                                <li>Interface responsive</li>
                    
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Technologies</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">PHP</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Laravel</span>
                            </div>
                        </div>
                    </div>
<div class="mt-6">
    <img src="calc1.png" alt="Calculatrice Interface 1" class="w-1/4 h-auto mb-4 rounded shadow-lg mr-auto">
    <img src="calc2.png" alt="Calculatrice Interface 2" class="w-1/4 h-auto rounded shadow-lg mr-auto">
</div>



                    <div class="mt-6">
                        <a href="https://github.com/Kadeyofficiel/Calculatrice" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                            Voir le code source
                        </a>
                    </div>
                </div>
            `
        },
        
    ];

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('bg-white', 'dark:bg-gray-800', 'p-6', 'rounded-lg', 'shadow-md');
        projectCard.innerHTML = `
            <h3 class="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">${project.title}</h3>
            <p class="mb-4 text-gray-700 dark:text-gray-300">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies.map(tech => 
                    `<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">${tech}</span>`
                ).join('')}
            </div>
            <button class="project-details-btn btn-primary" data-index="${index}">
                Voir Détails
            </button>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Veille Technologique
    const veilleContainer = document.getElementById('veille-container');
    const veilleThemes = [
        {
            title: 'Intelligence Artificielle',
            description: 'Suivi des dernières avancées en IA et machine learning',
            details: `
                <div class="veille-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Intelligence Artificielle</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Domaines de Recherche</h4>
                            <ul class="list-disc pl-5">
                                <li>Machine Learning</li>
                                <li>Deep Learning</li>
                                <li>NLP</li>
                                <li>Computer Vision</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Dernières Avancées</h4>
                            <p>Suivi des publications récentes, nouveaux modèles et innovations technologiques dans le domaine de l'IA.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: 'Développement Web',
            description: 'Tendances et technologies émergentes',
            details: `
                <div class="veille-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Développement Web</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Technologies Émergentes</h4>
                            <ul class="list-disc pl-5">
                                <li>React & Next.js</li>
                                <li>WebAssembly</li>
                                <li>JAMstack</li>
                                <li>Serverless</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Frameworks Modernes</h4>
                            <p>Analyse des dernières versions, performances et cas d'usage des frameworks web contemporains.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: 'Cybersécurité',
            description: 'Monitoring des menaces et solutions',
            details: `
                <div class="veille-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Cybersécurité</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Axes de Veille</h4>
                            <ul class="list-disc pl-5">
                                <li>Cryptographie</li>
                                <li>Sécurité des réseaux</li>
                                <li>Protection des données</li>
                                <li>Ethical Hacking</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Analyse des Risques</h4>
                            <p>Étude des nouvelles vulnérabilités, techniques de protection et recommandations de sécurité.</p>
                        </div>
                    </div>
                </div>
            `
        }
    ];

    // Supprimer les projets existants avant d'ajouter
    projectsContainer.innerHTML = ''; 
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md';
        projectCard.innerHTML = `
            <h3 class="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">${project.title}</h3>
            <p class="mb-4">${project.description}</p>
            <button class="btn-primary" data-index="${index}">Voir Détails</button>
        `;
        projectsContainer.appendChild(projectCard);
    });

    projectsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const index = e.target.dataset.index;
            modalContent.innerHTML = projects[index].details;
            modal.classList.replace('hidden', 'flex'); // Affiche le modal
        }
    });
    
    closeModal.addEventListener('click', () => {
        modal.classList.replace('flex', 'hidden'); // Cache le modal
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.replace('flex', 'hidden');
    });
});