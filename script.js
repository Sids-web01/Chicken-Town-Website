

 const navLinks = document.querySelectorAll('header nav a')
const logo = document.querySelector('.logo')
const sections = document.querySelectorAll('section')
const menuicon = document.querySelector('#menu-icon')
const navbar = document.querySelector('header nav')
const goToMenuBtn = document.querySelector('.btn')  // Select your custom button

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

const activiepage = () => {
    const header = document.querySelector('header')
    const barsbox = document.querySelector('.bars-box')

    header.classList.remove('active')
    setTimeout(() => {
        header.classList.add('active')
    }, 1100)

    navLinks.forEach(link => {
        link.classList.remove('active')
    })

    barsbox.classList.remove('active')
    setTimeout(() => {
        barsbox.classList.add('active')
    }, 1100)

    sections.forEach(section => {
        section.classList.remove('active')
    })
    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// Existing navigation logic for navbar links
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activiepage()

            link.classList.add('active')

            setTimeout(() => {
                sections[idx].classList.add('active')
            }, 1100)
        }
    })
})

logo.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activiepage()

        navLinks[0].classList.add('active')
        setTimeout(() => {
            sections[0].classList.add('active')  // Corrected this line to use `sections[0]`
        }, 1100)
    }
})

const resumebtns = document.querySelectorAll('.resume-btn')

resumebtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail')

        resumebtns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        resumeDetails.forEach(detail => {
            detail.classList.remove('active')
        })
        resumeDetails[idx].classList.add('active')
    })
})

// New button functionality to go to the Menu section
goToMenuBtn.addEventListener('click', () => {
    activiepage()  // Call the existing function to reset the active states

    // Find the Menu section and add the 'active' class to it
    const targetSection = document.querySelector('#menu')
    targetSection.classList.add('active')

    // Optionally, make the button active if you want
    goToMenuBtn.classList.add('active')
})

// Select your 'Go to Order' button
const goToOrderBtn = document.querySelector('.order-check');

goToOrderBtn.addEventListener('click', () => {
    activiepage();  // Call the existing function to reset active states

    // Find the Order section and make it active
    const targetSection = document.querySelector('#order');
    targetSection.classList.add('active');

    // Optionally, make the button active (if you want this effect)
    goToOrderBtn.classList.add('active');
});




 //courusel js
 // Data for small circles
 const items = [
    { name: "Burger", price: "$5.99", img: "lettuce.png" },
    { name: "Pizza", price: "$7.99", img: "multi chicken.png" },
    { name: "Fries", price: "$3.99", img: "patty.png" },
    { name: "Hotdog", price: "$4.49", img: "tomatoe.png" },
    { name: "Soda", price: "$1.99", img: "top bun.png" },
    { name: "Soda", price: "$1.99", img: "bottom bun.png" },
  ];

  // Create small circles dynamically
  const radius = 240; // Distance from the big circle
  const centerX = 200;
  const centerY = 260;
  const totalCircles = items.length;
  let angle = 0;

  items.forEach((item, index) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.innerHTML = `<img src="${item.img}" alt="${item.name}">`;
    document.querySelector('.carousel').appendChild(circle);

    // Set initial position
    const x = centerX + radius * Math.cos(angle) - 30; // -30 to center the circle
    const y = centerY + radius * Math.sin(angle) - 30; // -30 to center the circle
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    angle += (2 * Math.PI) / totalCircles;
  });

  // Rotate small circles continuously
  const circles = document.querySelectorAll(".circle");
  let rotationAngle = 0;
  const speed = 0.005; // Slower speed of rotation

  function rotateCircles() {
    circles.forEach((circle, index) => {
      const angleOffset = rotationAngle + (index * (2 * Math.PI) / totalCircles);
      const x = centerX + radius * Math.cos(angleOffset) - 30;
      const y = centerY + radius * Math.sin(angleOffset) - 30;

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      
    });

    rotationAngle += speed; // Rotate the circles continuously at a slower speed
  }

  // Start the continuous rotation
  setInterval(rotateCircles, 16); // Update every frame (~60 FPS)

 



let reviewIndex = 0;
    const slides = document.querySelectorAll('.review-slide');
    const totalSlides = slides.length;

    function showNextSlide() {
      reviewIndex++;
      if (reviewIndex >= totalSlides) {
        reviewIndex = 0;
      }
      document.querySelector('.review-slider').style.transform = `translateX(-${reviewIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000);  // Change slide every 3 seconds


    // search function in menu page

// order to whatapps js
// Function to collect order details from the table
function collectOrderDetails() {
    const tableRows = document.querySelectorAll('#cart-items tr');
    let orderDetails = '🛒 *Order Summary:*\n\n';
  
    if (tableRows.length === 0) {
        alert("Your cart is empty! Please add items before ordering.");
        return null; // Stop execution if no items in cart
    }
  
    tableRows.forEach(row => {
        const itemName = row.cells[0]?.innerText || "Unknown Item";
        const itemQuantity = row.cells[1]?.innerText || "1";
        const itemPrice = row.cells[2]?.innerText || "0";
        orderDetails += `🍔 *${itemName}* - ${itemQuantity} x ${itemPrice}\n`;
    });
  
    // Get user details
    const userName = document.querySelector('#user-name').value.trim();
    const userPhone = document.querySelector('#user-number').value.trim();
    const userAddress = document.querySelector('#user-address').value.trim();
  
    if (!userName || !userPhone || !userAddress) {
        alert("Please fill in all required fields (Name, Phone, Address).");
        return null; // Stop execution if user details are missing
    }
  
    // Add user details
    orderDetails += `\n👤 *Customer Name:* ${userName}\n📞 *Phone:* ${userPhone}\n🏠 *Address:* ${userAddress}`;
  
    // Add pricing details
    const totalPrice = document.querySelector('#total-price')?.innerText || "Total: Le 0";
    const deliveryFee = document.querySelector('#delivery-fee')?.innerText || "Delivery Fee: Le 0";
    const finalTotal = document.querySelector('#final-total')?.innerText || "Final Total: Le 0";
  
    orderDetails += `\n\n💰 ${totalPrice}\n🚚 ${deliveryFee}\n💵 ${finalTotal}`;
  
    return orderDetails;
  }
  
  // Function to send the order via WhatsApp
  function handleOrderNow() {
    const orderMessage = collectOrderDetails();
    if (!orderMessage) return; // Stop if order details are null
  
    const phoneNumber = '23279728028'; // Change to your restaurant's WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;
  
    window.open(whatsappUrl, '_blank');
  }
  
  // Attach function to the "Order Now" button
  document.querySelector('#order-now-btn').addEventListener('click', handleOrderNow);
  
  //reservation to whatsapp js
   function handleReservation() {
        const reservationName = document.getElementById("reservation-name").value;
        const reservationNumber = document.getElementById("reservation-number").value;
        const reservationAddress = document.getElementById("reservation-address").value;
        const reservationDateTime = document.getElementById("reservation-date-time").value;
        const reservationGuests = document.getElementById("reservation-guests").value;
        const reservationSpecialRequests = document.getElementById("reservation-special-requests").value;
        const reservationTable = document.getElementById("reservation-table-select").value;
  
        const message = `
          *Reservation Details*\n
          Name: ${reservationName}\n
          Phone: ${reservationNumber}\n
          Address: ${reservationAddress}\n
          Date & Time: ${reservationDateTime}\n
          Guests: ${reservationGuests}\n
          Table: ${reservationTable}\n
          Special Requests: ${reservationSpecialRequests}\n
          \n
          Please confirm the reservation.`;
  
        const whatsappLink = `https://wa.me/23279728028?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappLink; // Tries to open WhatsApp app or web 
   }



    // Set the date and time for the next live stream (YYYY, MM (0-11), DD, HH, MM, SS)
    let liveDate = new Date(2025, 1, 13, 21, 44, 0).getTime(); // Example: Feb 15, 2025, 7:00 PM

    function updateCountdown() {
        let now = new Date().getTime();
        let timeLeft = liveDate - now;

        if (timeLeft > 0) {
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = 
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById("countdown").innerHTML = "🚀 We're Live Now!";
        }
    }

    setInterval(updateCountdown, 1000);



    

    // menu cart system
 let cart = [];
 let total = 0;
 const deliveryFee = 5;
 
 document.querySelectorAll('.add-to-cart').forEach(button => {
   button.addEventListener('click', () => {
     const name = button.getAttribute('data-name');
     const price = parseInt(button.getAttribute('data-price'));
     
     // Check if item already exists in cart
     const existingItem = cart.find(item => item.name === name);
     if (existingItem) {
       existingItem.quantity += 1;
       existingItem.totalPrice += price;
     } else {
       cart.push({ name, price, quantity: 1, totalPrice: price });
     }
 
     total += price;
     updateCart();
   });
 });
 
 function updateCart() {
   const cartItems = document.getElementById('cart-items');
   cartItems.innerHTML = ''; // Clear current cart
 
   cart.forEach(item => {
     const tr = document.createElement('tr');
     tr.innerHTML = `
       <td>${item.name}</td>
       <td>${item.quantity}</td>
       <td>Le ${item.totalPrice}</td>
     `;
     cartItems.appendChild(tr);
   });
 
   // Update total and final total (with delivery fee)
   const finalTotal = total + deliveryFee;
   document.getElementById('total-price').textContent = `Total: Le ${total}`;
   document.getElementById('final-total').textContent = `Final Total: Le ${finalTotal}`;
 }



 //other menu js
 const cartIndicator = document.querySelector('.cart-indicator');
 const addToCartButtons = document.querySelectorAll('.add-to-cart');
 const searchInput = document.getElementById('search');
 const foodFilterBtn = document.getElementById('food-filter');
 const drinkFilterBtn = document.getElementById('drink-filter');
 const menuResults = document.getElementById('menu-results');
 
 let cartCount = 0;
 
 // Add to cart functionality
 addToCartButtons.forEach(button => {
   button.addEventListener('click', function() {
     cartCount++;
     cartIndicator.textContent = cartCount;
     
   });
 });

 // Search functionality
 searchInput.addEventListener('input', function() {
   const query = searchInput.value.toLowerCase();
   const menuCards = document.querySelectorAll('.menu-card');
   menuCards.forEach(card => {
     const name = card.getAttribute('data-name').toLowerCase();
     if (name.includes(query)) {
       card.style.display = 'block';
     } else {
       card.style.display = 'none';
     }
   });
 });

 // Filter functionality
 foodFilterBtn.addEventListener('click', function() {
   const foodItems = document.querySelectorAll('.menu-card.food');
   const drinkItems = document.querySelectorAll('.menu-card.drink');
   foodItems.forEach(item => item.style.display = 'block');
   drinkItems.forEach(item => item.style.display = 'none');
 });

 drinkFilterBtn.addEventListener('click', function() {
   const foodItems = document.querySelectorAll('.menu-card.food');
   const drinkItems = document.querySelectorAll('.menu-card.drink');
   foodItems.forEach(item => item.style.display = 'none');
   drinkItems.forEach(item => item.style.display = 'block');
 });

 
