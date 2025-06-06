//DATA FOR NGOSSSSSs
const ngos = [
    
    {
        id: 2,
        name: "Smile Foundation",
        category: "Health",
        link: "https://www.smilefoundationindia.org/health/",
        description: "Organizing blood donation camps and providing emergency blood support to those in need.",
        image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "Greenpeace India",
        category: "Environment",
        link: "https://www.lipsum.com",
        description: "Working towards environmental conservation through cleanup drives and awareness programs.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        name: "Teach India Foundataion",
        category: "Education",
        link: "https://www.lipsum.com",
        description: "Teaching digital skills to senior citizens and underprivileged communities.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 1,
        name: "Goonj Foundation",
        category: "Social Welfare",
        link: "https://www.lipsum.com",
        description: "Distributing food to the homeless and organizing community kitchen programs.",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "Sampoorna Sikshaorem ",
        category: "Education",
        link: "https://www.lipsum.com",
        description: "Providing quality education to underprivileged children through innovative teaching methods and dedicated volunteers.",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
    },
    
    {
        id: 6,
        name: "SankalpTaru Foundation",
        category: "Environment",
        link: "https://www.lipsum.com",
        description: "Organizing weekly city cleanup drives and promoting waste segregation.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
    }
];

//TO DISPLAY NGOS In
function displayNGOs(ngoList = ngos) {
    const ngoGrid = document.getElementById('ngo-grid');
    if (!ngoGrid) return;

    ngoGrid.innerHTML = '';

    ngoList.forEach(ngo => {
        const ngoCard = document.createElement('div');
        ngoCard.className = 'col-md-6 col-lg-4';
        ngoCard.innerHTML = `
            <div class="card h-100">
                <img src="${ngo.image}" class="card-img-top" height="230px" alt="${ngo.name}">
                <div class="card-body">
                    <span class="category-tag">${ngo.category}</span>
                    <h3 class="card-title">${ngo.name}</h3>
                    <p class="card-text">${ngo.description}</p>
                    <a href="${ngo.link}"> <button class="darkk buttt btn-dark">Connect</button></a>
                </div>
            </div>
        `;
        ngoGrid.appendChild(ngoCard);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('ngo-grid')) {
        displayNGOs();
    }
});