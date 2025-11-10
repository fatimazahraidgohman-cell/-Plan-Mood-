// Citations motivationnelles
const motivationalQuotes = [
    "Chaque jour est une nouvelle page dans l'histoire de ta vie ✨",
    "Tu possèdes en toi la force d'affronter tous les défis 🌱",
    "Les petites avancées quotidiennes mènent aux grands succès 🌟",
    "Sois bienveillant(e) envers toi-même, tu fais de ton mieux 💝",
    "Ton bien-être est tout aussi important que tes réussites 🌼",
    "Prends le temps de respirer, tout arrive au moment parfait 🍃",
    "Tu es la personne la plus importante de ton propre voyage 🌈"
];

// Fonction pour changer la citation
function newQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    document.getElementById('daily-quote').textContent = motivationalQuotes[randomIndex];
}

// Animation douce au chargement
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌸 Espace Équilibre chargé avec sérénité');
    
    // Animation d'apparition progressive
    const elements = document.querySelectorAll('.feature-card, .hero-content');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Suivi des tâches (pour la page plan.html)
let completedTasks = 0;
const totalTasks = 7;

function toggleTask(button) {
    const row = button.closest('tr');
    const statusSpan = row.querySelector('.status');
    const taskContent = row.querySelector('.task-content');
    
    if (statusSpan.classList.contains('pending')) {
        statusSpan.textContent = 'Terminé 🌸';
        statusSpan.classList.remove('pending');
        statusSpan.classList.add('completed');
        button.textContent = 'Marquer en cours';
        taskContent.style.textDecoration = 'line-through';
        taskContent.style.color = '#888';
        completedTasks++;
    } else {
        statusSpan.textContent = 'En cours';
        statusSpan.classList.remove('completed');
        statusSpan.classList.add('pending');
        button.textContent = 'Marquer terminé';
        taskContent.style.textDecoration = 'none';
        taskContent.style.color = 'var(--texte-doux)';
        completedTasks--;
    }
    
    updateProgress();
}

function updateProgress() {
    const percentage = Math.round((completedTasks / totalTasks) * 100);
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    
    if (progressFill && progressPercentage) {
        progressFill.style.width = percentage + '%';
        progressPercentage.textContent = percentage + '%';
        
        // Couleurs douces pour la progression
        if (percentage === 100) {
            progressFill.style.background = 'var(--vert-doux)';
        } else if (percentage >= 50) {
            progressFill.style.background = 'var(--bleu-doux)';
        } else {
            progressFill.style.background = 'var(--rose-doux)';
        }
    }
}
