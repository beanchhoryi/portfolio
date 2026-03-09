const projects = [
  {
    id: "web1",
    title: "E-Commerce Management System",
    subtitle: "Java Spring Boot Web Application",
    category: "web",
    images: [
        "../assets/images/projects/web/domino/cover.png",
        "../assets/images/projects/web/domino/6.png",
        "../assets/images/projects/web/domino/7.png",
        "../assets/images/projects/web/domino/1.png",
        "../assets/images/projects/web/domino/2.png",
        "../assets/images/projects/web/domino/3.png",
        "../assets/images/projects/web/domino/4.png",
        "../assets/images/projects/web/domino/5.1.png",
        "../assets/images/projects/web/domino/5.png",
    ],
    description: "The Domino’s Pizza E-Commerce Management System is a web-based application designed to manage online pizza ordering and store operations. It allows customers to browse the menu, add products to the cart, and place orders, while admins manage products, users, and order processing. The system is built using RESTful APIs to ensure secure, scalable, and efficient communication between the frontend and backend services.",
    tech: ["Backend: Java, Spring Boot", "Architecture: RESTful API", "Database: MySQL", "Security: JWT Authentication, Role-Based Access Control (RBAC)", "Tools: Maven, postman", "Version Control: Git"],
    features: ["👤 User & Security", "🍕 Product Management", "🛒 Cart Management", "📦 Order & Checkout", "🧑‍💼 Admin Management", ],
    github: "https://github.com/beanchhoryi/java-domino-project",
    demo: "#"
  },
  {
    id: "web2",
    title: "AdminLTE Management System",
    subtitle: "Python Django Web Application",
    category: "web",
    images: [
        "../assets/images/projects/web/dashboard/1.png",
        "../assets/images/projects/web/dashboard/2.png",
        "../assets/images/projects/web/dashboard/3.png",
        "../assets/images/projects/web/dashboard/4.png",
        "../assets/images/projects/web/dashboard/5.png",

    ],
    description: [
      "The AdminLTE Management System is a web-based application developed using Django to manage organizational data efficiently.", 
      "The system provides role-based access control for Admin and Staff users with secure login functionality.",
      "It supports full CRUD operations, search functionality, and pagination to enhance data management and user experience."
    ],
    tech: ["Language: Python", "Framework: Django", "Frontend: Django Templates + AdminLTE", "Database: postgreSQL", "Authentication: Django Default Authentication", "Architecture: MVT (Model-View-Template)"],
    features: [
      "👥 Role-Based Access Control", 
      "🔐 Authentication", 
      "🗃️ Data Management", 
    ],
    github: "https://github.com/beanchhoryi/django_AdminLTE",
    demo: "#"
  },
  {
    id: "web3",
    title: "E-commerce Web Application",
    subtitle: "PHP Laravel E-Commerce Web Application",
    category: "web",
    images: [
        "../assets/images/projects/web/sokoskins/1.png",
        "../assets/images/projects/web/sokoskins/2.png",
        "../assets/images/projects/web/sokoskins/3.png",
        "../assets/images/projects/web/sokoskins/4.png",
        "../assets/images/projects/web/sokoskins/5.png",
        "../assets/images/projects/web/sokoskins/6.png",
        "../assets/images/projects/web/sokoskins/7.png",
        "../assets/images/projects/web/sokoskins/8.png",
        "../assets/images/projects/web/sokoskins/9.png",
        "../assets/images/projects/web/sokoskins/10.png",
        "../assets/images/projects/web/sokoskins/11.png",
        "../assets/images/projects/web/sokoskins/12.png",
        "../assets/images/projects/web/sokoskins/13.png",
    ],
    description: [
      "The E-Commerce Web Application is a web-based shopping system developed using Laravel.", 
      "It allows customers to browse products, search and filter items, add products to the cart, and complete the checkout process.",
      "Product data is stored using SQLite, while LocalStorage is used to manage cart data and user session locally."
    ],
    tech: ["Backend: PHP (Laravel)", "Frontend: HTML, CSS, Vanilla JavaScript", "Database: SQLite", "Storage: Browser LocalStorage", "Data Format: JSON"],
    features: [
      "👥 Customer registration and login", 
      "🛒 Add to cart functionality", 
      "💳 Checkout process",
      "🔎 Product search and filtering" 
    ],
    github: "https://github.com/beanchhoryi/php_sokoskins_project",
    demo: "#"
  },
  



  {
    id: "system1",
    title: "Point of Sale (POS)) System",
    subtitle: "Java Desktop Application",
    category: "desktop",
    images: [
        "../assets/images/projects/desktop/pos_sys/cover.jpg",
        "../assets/images/projects/desktop/pos_sys/1.jpg",
        "../assets/images/projects/desktop/pos_sys/2.jpg",
        "../assets/images/projects/desktop/pos_sys/3.jpg",
        "../assets/images/projects/desktop/pos_sys/4.jpg",
        "../assets/images/projects/desktop/pos_sys/5.jpg",
        "../assets/images/projects/desktop/pos_sys/6.jpg",
    ],
    description: [
      "The Point of Sale (POS) System is a Java-based desktop application designed to manage daily sales operations for retail businesses.", 
      "It allows admins to manage products and stock, while cashiers handle sales transactions efficiently.",
      "The system uses a MySQL database to store product, user, and sales data, ensuring accuracy and reliability."
    ],
    tech: ["Language: Java", "Application Type: Desktop Application", "GUI: Java Swing / JavaFX", "Database: MySQL", "Architecture: MVC (Model-View-Controller)"],
    features: [
      "👥 User Roles", 
      "📦 Stock Management", 
      "💰 Sales Processing", 
      "📊 Admin Controls", 
      "🗄️ Data Management",
    ],
    github: "https://github.com/beanchhoryi/java_pos_system",
    demo: "#"
  },
  {
    id: "system2",
    title: "Car Parking Management System",
    subtitle: "Java Desktop Application",
    category: "desktop",
    images: [
        "../assets/images/projects/desktop/car/cover.jpg",
        "../assets/images/projects/desktop/car/1.jpg",
        "../assets/images/projects/desktop/car/2.jpg",
        "../assets/images/projects/desktop/car/3.jpg",
        "../assets/images/projects/desktop/car/4.jpg",
    ],
    description: [
      "The Car Parking Management System is a Java-based desktop application designed to manage daily parking operations efficiently.", 
      "It helps the admin control parking slots, manage vehicle check-in and check-out, handle payments, and calculate total income.",
      "The system uses in-memory data storage (Java Lists), making it suitable for small-scale or temporary parking management."
    ],
    tech: ["Language: Java", "Application Type: Desktop Application", "Data Storage: Java Collections (List)", "GUI: Java Swing",],
    features: [
      "🧑‍💼 Admin Management", 
      "🅿️ Slot Management", 
      "📋 Booking Management", 
      "⏱️ Check-In / Check-Out", 
      "💰 Payment & Income",
      "👤 Customer Data",
    ],
    github: "#",
    demo: "#"
  },
  {
    id: "system3",
    title: "Notepad Text Editor",
    subtitle: "Java Desktop Application",
    category: "desktop",
    images: [
        "../assets/images/projects/desktop/notepad/1.jpg",
        "../assets/images/projects/desktop/notepad/2.jpg",
        "../assets/images/projects/desktop/notepad/3.jpg",
    ],
    description: [
      "The Notepad Text Editor is a Java-based desktop application developed to perform basic text editing tasks similar to Windows Notepad.", 
      "It allows users to create, open, edit, and save text files with a simple and user-friendly interface.",
      "The application is suitable for quick note-taking and basic document editing."
    ],
    tech: ["Language: Java", "Application Type: Desktop Application", "GUI: Java Swing", "File Handling: Java I/O",],
    features: [
      "Create new text files", 
      "Open existing .txt files", 
      "Save and update text files", 
      "Cut, copy, and paste text", 
      "Change font style and text size",
      "Simple and lightweight interface",
    ],
    github: "#",
    demo: "#"
  },
  {
    id: "system4",
    title: "Basic Calculator",
    subtitle: "Java Desktop Application",
    category: "desktop",
    images: [
        "../assets/images/projects/desktop/calculator/1.jpg",
    ],
    description: [
      "The Basic Calculator is a Java desktop application that performs basic arithmetic operations with a simple graphical interface.", 
      "It provides quick calculations with additional functions like percentage conversion and sign change.",
    ],
    tech: ["Language: Java", "Application Type: Desktop Application", "GUI: Java Swing", "IDE: NetBeans",],
    features: [
      "Perform basic arithmetic operations (+, −, ×, ÷)", 
      "Convert numbers to percentage (%)", 
      "Change number sign (positive / negative)", 
      "Clear all inputs using C button", 
      "Delete single digit using Backspace",
      "Simple and user-friendly interface",
    ],
    github: "#",
    demo: "#"
  },



  {
    id: "other1",
    title: "E-commerce Mobile Application",
    subtitle: "Flutter Android Mobile Application",
    category: "other",
    images: [
        "../assets/images/projects/other/ecom/mobile1.jpg",
        "../assets/images/projects/other/ecom/1.jpg",
        "../assets/images/projects/other/ecom/2.jpg",
        "../assets/images/projects/other/ecom/3.jpg",
        "../assets/images/projects/other/ecom/4.jpg",
        "../assets/images/projects/other/ecom/5.jpg",
        "../assets/images/projects/other/ecom/6.jpg",
        "../assets/images/projects/other/ecom/7.jpg",
    ],
    description: [
      "The E-Commerce Mobile Application is an Android-based shopping app developed using Dart.", 
      "The application allows users to browse products from an online free API, add items to the cart, and complete the checkout process.",
      "User authentication is implemented using email and password, and local storage is used to manage session data. The app is designed for local use and demonstration purposes."
    ],
    tech: ["Language: Dart", "Platform: Android", "API Integration: Online Free REST API", "Local Storage: SharedPreferences", "IDE: Android Studio",],
    features: [
      "🔐 Authentication", 
      "🛍️ Product Management", 
      "🛒 Cart System", 
      "💳 Checkout", 
    ],
    github: "https://github.com/HeangSengtray/KongKea-mall",
    demo: "#"
  },

];