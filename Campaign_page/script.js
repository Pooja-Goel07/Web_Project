const ngos = [
    
     
    {
        id: 8,
        name: "HelpAge India",
        category: "Elderly Care",
        link: "https://www.helpageindia.org/",
        description: "Supporting elderly individuals through healthcare, livelihood, and advocacy programs.",
        image: "../assets/images/helpage.png"
    },
    {
        id: 9,
        name: "CURE India",
        category: "Health",
        link: "https://cure.org/india/",
        description: "Providing free medical care and surgeries to children with disabilities.",
        image: "../assets/images/cure.png"
    },
    {
        id: 10,
        name: "Pratham",
        category: "Education",
        link: "https://www.pratham.org/",
        description: "Improving the quality of education for underprivileged children across India.",
        image: "../assets/images/pratham.png"
    },
    {
        id: 11,
        name: "Nanhi Kali",
        category: "Women Empowerment",
        link: "https://www.nanhikali.org/",
        description: "Empowering girls through education and skill development programs.",
        image: "../assets/images/kali.png"
    },
    {
        id: 12,
        name: "GiveIndia",
        category: "Social Welfare",
        link: "https://www.giveindia.org/",
        description: "Connecting donors with verified NGOs to drive social impact across India.",
        image: "../assets/images/give.png"
    },
    {
        id: 13,
        name: "Magic Bus",
        category: "Youth Development",
        link: "https://www.magicbus.org/",
        description: "Empowering youth through sports and mentorship programs to break the cycle of poverty.",
        image: "../assets/images/magbus.png"
    },
    {
        id: 14,
        name: "CRY (Child Rights and You)",
        category: "Children",
        link: "https://www.cry.org/",
        description: "Ensuring every child has access to education, healthcare, and protection.",
        image: "../assets/images/cey.png"
    },{
        id: 1,
        name: "Goonj Foundation",
        category: "Social Welfare",
        link: "https://goonj.org/",
        description: "Distributing food to the homeless and organizing community kitchen programs.",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800"
    },
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
        link: "https://www.greenpeace.org/india/",
        description: "Working towards environmental conservation through cleanup drives and awareness programs.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "Sampoorna Siksha",
        category: "Education",
        link: "https://www.lipsum.com",
        description: "Providing quality education to underprivileged children through innovative teaching methods and dedicated volunteers.",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        name: "Teach India Foundation",
        category: "Education",
        link: "https://www.teachforindia.org/",
        description: "Teaching digital skills to senior citizens and underprivileged communities.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        name: "SankalpTaru Foundation",
        category: "Environment",
        link: "https://www.sankalptaru.org/",
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
        ngoCard.className = 'col-md-6 col-lg-3';
        ngoCard.innerHTML = `
            <div class="card h-100">
                <img src="${ngo.image}" class="card-img-top" height="200px" alt="${ngo.name}">
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

//to search
function searchNGOs() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const filtered = ngos.filter(ngo => 
        ngo.name.toLowerCase().includes(searchTerm) ||
        ngo.description.toLowerCase().includes(searchTerm) ||
        ngo.category.toLowerCase().includes(searchTerm)
    );
    displayNGOs(filtered);
}

//to strt displaying ngos
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('ngo-grid')) {
        displayNGOs();
    }
});

// Add search input to sort 
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', searchNGOs);
}