const mediaData = [
    {
        imageUrl: "../assets/images/WhatsApp Image 2025-04-04 at 14.51.12_74732186.jpg",  
        title: "Education For All",
        description: "Empowering underprivileged children through education.",
        link: "#"  
    },
    {
        imageUrl: "../assets/images/WhatsApp Image 2025-04-04 at 14.46.29_4dbe18f0.jpg",
        title: "Vibrant Classroom Initiative",
        description: "Painting classrooms to create a vibrant learning environment.",
        link: "#"
    },
    {
        imageUrl: "../assets/images/blood.png",
        title: "Blood Donation Camp",
        description: "Donating blood to save lives.",
        link: "#"
    },
    {
        imageUrl: "../assets/images/cleaning.png",
        title: "Environmental Conservation",
        description: "Protecting forests and wildlife habitats.",
        link: "#"
    },
    {
        imageUrl: "../assets/images/women.png",
        title: "Women Empowerment Program",
        description: "Supporting women entrepreneurs in developing regions.",
        link: "#"
    },
    {
        imageUrl: "../assets/images/healthcare.png",
        title: "Healthcare Access",
        description: "Improving healthcare facilities in remote areas.",
        link: "#"
    }
];

// Function to populate media grid
function populateMediaGrid() {
    const mediaGrid = document.getElementById("media-grid");

    // Clear existing content
    mediaGrid.innerHTML = "";

    // Loop through the media data and create cards
    mediaData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("col-md-4"); // Bootstrap column class

        card.innerHTML = `
            <div class="card h-100">
                <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    
                </div>
            </div>
        `;

        mediaGrid.appendChild(card);
    });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", populateMediaGrid);
