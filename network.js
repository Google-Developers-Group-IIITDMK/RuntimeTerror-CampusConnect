document.addEventListener('DOMContentLoaded', () => {

    const recommendationsGrid = document.getElementById('recommendations-grid');
    const yourNetworkGrid = document.getElementById('your-network-grid');
    const yourNetworkTitle = document.querySelector('.network-section:last-child .section-title');
    
    // Get the empty state messages
    const recommendationsEmptyMsg = recommendationsGrid.querySelector('.empty-grid-message');
    const yourNetworkEmptyMsg = yourNetworkGrid.querySelector('.empty-grid-message');

    // --- DATA ---
    let recommendations = [
        { id: 4, name: 'Sarah Chen', title: 'UX Designer @ Creative Inc.' },
        { id: 5, name: 'David Kim', title: 'Cloud Engineer @ Cloudways' },
        { id: 6, name: 'Laura Martinez', title: 'Marketing Lead @ BrightFunnel' }
    ];

    let yourNetwork = [
        { id: 1, name: 'Jessica Lee', title: 'Product Manager @ TechCorp' },
        { id: 2, name: 'Mark Davis', title: 'Senior Software Engineer @ Innovate LLC' },
        { id: 3, name: 'Emily Carter', title: 'Data Scientist | AI/ML Enthusiast' }
    ];

    // --- FUNCTIONS ---

    const createConnectionCard = (person, type) => {
        const card = document.createElement('div');
        card.className = 'connection-card';
        card.dataset.id = person.id;

        // Using the new universal .btn class for consistency
        const buttons = type === 'recommendation'
            ? `<button class="btn btn-add">Add</button>`
            : `<a href="message.html?user=${person.id}" class="btn btn-primary">Message</a><button class="btn btn-remove">Remove</button>`;

        card.innerHTML = `
            <div class="connection-card-header">
                <img src="https://picsum.photos/seed/${person.name.split(' ').join('')}/80" alt="${person.name}" class="connection-avatar">
                <div class="connection-info">
                    <h4>${person.name}</h4>
                    <p>${person.title}</p>
                </div>
            </div>
            <div class="connection-card-actions">${buttons}</div>
        `;
        return card;
    };

    const renderAll = () => {
        // Clear grids but preserve empty messages
        recommendationsGrid.innerHTML = '';
        yourNetworkGrid.innerHTML = '';
        recommendationsGrid.appendChild(recommendationsEmptyMsg);
        yourNetworkGrid.appendChild(yourNetworkEmptyMsg);

        // Handle empty state for Recommendations
        recommendationsEmptyMsg.classList.toggle('is-hidden', recommendations.length > 0);
        recommendations.forEach(person => {
            recommendationsGrid.appendChild(createConnectionCard(person, 'recommendation'));
        });

        // Handle empty state for Your Network
        yourNetworkEmptyMsg.classList.toggle('is-hidden', yourNetwork.length > 0);
        yourNetwork.forEach(person => {
            yourNetworkGrid.appendChild(createConnectionCard(person, 'network'));
        });
        
        yourNetworkTitle.textContent = `Your Network (${yourNetwork.length})`;
    };
    
    // --- EVENT LISTENERS ---

    recommendationsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-add')) {
            const card = e.target.closest('.connection-card');
            card.classList.add('card-fade-out'); // Start fade-out animation
            
            setTimeout(() => { // Wait for animation to finish
                const personId = parseInt(card.dataset.id, 10);
                const personToAdd = recommendations.find(p => p.id === personId);
                
                if (personToAdd) {
                    recommendations = recommendations.filter(p => p.id !== personId);
                    yourNetwork.push(personToAdd);
                    renderAll(); 
                }
            }, 300); // 300ms matches the animation duration
        }
    });

    yourNetworkGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-remove')) {
            const card = e.target.closest('.connection-card');
            card.classList.add('card-fade-out'); // Start fade-out animation

            setTimeout(() => { // Wait for animation to finish
                const personId = parseInt(card.dataset.id, 10);
                yourNetwork = yourNetwork.filter(p => p.id !== personId);
                renderAll();
            }, 300);
        }
    });

    // --- INITIAL LOAD ---
    renderAll();
});