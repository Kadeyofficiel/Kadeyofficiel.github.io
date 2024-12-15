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
    const text = "Développeur Full Stack & Concepteur SI";
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
        { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-700' }
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
            title: 'Application de Gestion de Stock',
            description: 'Application web de gestion de stock pour entreprise',
            technologies: ['PHP', 'Laravel', 'MySQL'],
            details: `
                <div class="project-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Application de Gestion de Stock</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Description</h4>
                            <p class="mb-4">Application web complète permettant la gestion des stocks, des commandes et des inventaires pour les entreprises.</p>
                            
                            <h4 class="text-xl font-semibold mb-4">Fonctionnalités</h4>
                            <ul class="list-disc pl-5">
                                <li>Suivi des stocks en temps réel</li>
                                <li>Gestion des commandes</li>
                                <li>Rapports et statistiques</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Technologies</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">PHP</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Laravel</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: 'Portfolio Personnel',
            description: 'Site web personnel showcase de compétences',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
            details: `
                <div class="project-details">
                    <h3 class="text-3xl font-bold mb-6 text-indigo-600">Portfolio Personnel</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Description</h4>
                            <p class="mb-4">Portfolio personnel moderne et responsive présentant mes projets, compétences et parcours professionnel.</p>
                            
                            <h4 class="text-xl font-semibold mb-4">Fonctionnalités</h4>
                            <ul class="list-disc pl-5">
                                <li>Design responsive</li>
                                <li>Mode sombre</li>
                                <li>Animations modernes</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold mb-4">Technologies</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">HTML</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">CSS</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
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

    veilleThemes.forEach((theme, index) => {
        const themeCard = document.createElement('div');
        themeCard.classList.add('bg-white', 'dark:bg-gray-800', 'p-6', 'rounded-lg', 'shadow-md');
        themeCard.innerHTML = `
            <h3 class="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">${theme.title}</h3>
            <p class="mb-4 text-gray-700 dark:text-gray-300">${theme.description}</p>
            <button class="veille-details-btn btn-primary" data-index="${index}">
                En Savoir Plus
            </button>
        `;
        veilleContainer.appendChild(themeCard);
    });

    // Gestion des modaux
    function setupModalHandlers(container, dataAttr) {
        container.addEventListener('click', (e) => {
            if (e.target.classList.contains(dataAttr)) {
                const index = e.target.getAttribute('data-index');
                const data = dataAttr === 'project-details-btn' ? projects : veilleThemes;
                modalContent.innerHTML = data[index].details;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        });
    }

    setupModalHandlers(projectsContainer, 'project-details-btn');
    setupModalHandlers(veilleContainer, 'veille-details-btn');

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });
}); 