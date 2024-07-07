
   document.addEventListener("DOMContentLoaded", function() {
       const searchInput = document.getElementById('searchBar');
       const autocompleteResults = document.getElementById('autocompleteResults');
   
       const products = [
           "Lipstick", "Foundation", "Mascara", "Eyeliner", "Blush", "Eyeshadow",
           "Concealer", "Highlighter", "Primer", "Setting Spray", "BB Cream", "CC Cream",
           "Lip Gloss", "Lip Liner", "Contour Kit", "Brow Pencil", "False Eyelashes", "Eyelash Curler",
           "Nail Polish", "Makeup Remover", "Face Powder", "Bronzer", "Tinted Moisturizer",
           "Face Serum", "Facial Cleanser", "Toner", "Face Oil", "Exfoliator", "Body Lotion",
           "Hand Cream", "Foot Cream", "Sunscreen", "Hair Shampoo", "Hair Conditioner", "Hair Mask",
           "Dry Shampoo", "Hair Oil", "Hair Serum", "Hairspray", "Hair Mousse", "Heat Protectant Spray",
           "Leave-in Conditioner", "Hair Gel", "Hair Wax", "Hair Pomade", "Hair Color", "Hair Extensions",
           "Scalp Treatment", "Anti-Dandruff Shampoo", "Volumizing Shampoo", "Volumizing Conditioner",
           "Curl Defining Cream", "Detangling Spray", "Hair Growth Serum", "Hair Thinning Treatment",
           "Anti-Frizz Serum", "Hair Straightener", "Curling Iron", "Blow Dryer", "Hair Clips", "Bobby Pins",
           "Hair Brush", "Comb", "Shower Cap", "Hair Towel", "Hair Wrap", "Hair Bonnets", "Headbands", "Scrunchies",
           "Elastic Hair Bands", "Wigs", "Hair Loss Treatment", "Beard Oil", "Beard Balm", "Beard Shampoo", "Beard Conditioner",
           "Shaving Cream", "Aftershave Balm", "Razor", "Electric Shaver", "Epilator", "Waxing Strips", "Depilatory Cream",
           "Eyebrow Kit", "Brow Gel", "Brow Powder", "Brow Stencil", "Eye Makeup Remover", "Contact Lens Solution",
           "Eye Cream", "Eye Serum", "Eyelid Primer", "Under-Eye Concealer", "False Nails", "Nail File", "Nail Buffer",
           "Cuticle Oil", "Cuticle Remover", "Nail Strengthener", "Nail Polish Remover", "Base Coat", "Top Coat",
           "UV Gel Polish", "Acrylic Nail Kit", "Nail Art Kit", "Nail Dryer", "Manicure Set", "Pedicure Set", "Foot Scrub",
           "Foot File", "Foot Soak", "Callus Remover", "Hand Sanitizer", "Hand Scrub", "Hand Mask", "Body Scrub", "Body Wash",
           "Body Butter", "Body Oil"
       ];
   
       // Function to filter products based on input
       function filterProducts(input) {
           return products.filter(product => product.toLowerCase().includes(input.toLowerCase()));
       }
   
       // Function to display autocomplete results
       function displayResults(results) {
           const html = results.map(result => `<div>${result}</div>`).join('');
           autocompleteResults.innerHTML = html;
       }
   
       // Event listener for input changes
       searchInput.addEventListener('input', function() {
           const inputValue = this.value;
           if (inputValue.length > 0) {
               const filteredProducts = filterProducts(inputValue);
               displayResults(filteredProducts);
               autocompleteResults.style.display = 'block';
           } else {
               autocompleteResults.innerHTML = '';
               autocompleteResults.style.display = 'none';
           }
       });
   
       // Event listener to hide autocomplete results on outside click
       document.addEventListener('click', function(event) {
           if (!event.target.closest('.autocomplete')) {
               autocompleteResults.innerHTML = '';
               autocompleteResults.style.display = 'none';
           }
       });
   
       // Event listener to handle selection from autocomplete results
       autocompleteResults.addEventListener('click', function(event) {
           if (event.target.tagName === 'DIV') {
               searchInput.value = event.target.textContent;
               autocompleteResults.innerHTML = '';
               autocompleteResults.style.display = 'none';
           }
       });
   });
   






    
    // Modal for user icon (if needed)
    const userIcon = document.getElementById('userIcon');
    const signInModal = document.getElementById('signInModal');
    const closeSignIn = document.getElementById('closeSignIn');

    userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        signInModal.style.display = 'block';
    });

    closeSignIn.addEventListener('click', () => {
        signInModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == signInModal) {
            signInModal.style.display = 'none';
        }
    });

// Example JavaScript for handling Add to Bag buttons
document.querySelectorAll('.add-to-bag').forEach(button => {
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle navigation to a specific page
    function navigateToPage(page) {
        window.location.href = page;
    }

    // Add click event listeners to benefits icons
    document.querySelector('.benefit .fa-leaf').addEventListener('click', function() {
        navigateToPage('organic.html');
    });

    document.querySelector('.benefit .fa-paw').addEventListener('click', function() {
        navigateToPage('cruelty-free.html');
    });

    document.querySelector('.benefit .fa-recycle').addEventListener('click', function() {
        navigateToPage('sustainable-packaging.html');
    });

    document.querySelector('.benefit .fa-smile-beam').addEventListener('click', function() {
        navigateToPage('customer-satisfaction.html');
    });

    // Function to handle "Add to Bag" button click
    function addToBag(productName) {
        alert(productName + " has been added to your bag!");
        // Additional functionality to add the product to the shopping cart can be implemented here
    }

    // Add click event listeners to "Add to Bag" buttons
    document.querySelectorAll('.add-to-bag').forEach(function(button) {
        button.addEventListener('click', function() {
            const productName = this.previousElementSibling.textContent;
            addToBag(productName);
        });
    });
});


function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.benefit').forEach(function(benefit) {
        benefit.addEventListener('click', function() {
            var pageUrl = benefit.querySelector('a.btn').getAttribute('href');
            navigateToPage(pageUrl);
        });
    });
});




document.querySelectorAll('.profile-flip').forEach(function(profile) {
    profile.addEventListener('mouseover', function() {
        this.querySelector('.front').style.transform = 'rotateY(180deg)';
        this.querySelector('.back').style.transform = 'rotateY(0deg)';
    });
    profile.addEventListener('mouseout', function() {
        this.querySelector('.front').style.transform = 'rotateY(0deg)';
        this.querySelector('.back').style.transform = 'rotateY(180deg)';
    });
});



// script.js

document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const overlay = document.getElementById('overlay');
    const closeOverlayBtn = document.getElementById('closeOverlayBtn');

    readMoreBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    closeOverlayBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});


const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const blogSlider = document.querySelector('.blog-slider');

arrowLeft.addEventListener('click', () => {
    blogSlider.scrollBy({ left: -300, behavior: 'smooth' });
});

arrowRight.addEventListener('click', () => {
    blogSlider.scrollBy({ left: 300, behavior: 'smooth' });
});

// script.js

// Function to handle click events on social media icons
function handleSocialMediaClick(event) {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, '_blank');
}

// Add event listeners to social media links
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.footer-social a');
    socialLinks.forEach(link => {
        link.addEventListener('click', handleSocialMediaClick);
    });
});

