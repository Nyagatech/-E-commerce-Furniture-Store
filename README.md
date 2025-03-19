# Project Description: E-commerce Furniture Store

This project is a modern, responsive e-commerce platform designed for selling furniture and home goods. It leverages Vue.js (Nuxt 3) for the frontend, Pinia for state management, and a remote API (hosted on Fly.io and utilizing Supabase storage for images) for product data. The goal was to create a user-friendly shopping experience with features like product browsing, category filtering, a shopping cart, and a wishlist.

# Key Features:

    Product Catalog: Displays a wide range of furniture and home goods fetched from a remote API.
    Category Filtering: Allows users to easily filter products by category.
    Product Details: Provides detailed information about each product, including images, descriptions, prices, and dimensions.
    Shopping Cart: Enables users to add products to a cart, manage quantities, and calculate totals.
    Wishlist: Allows users to save favorite products for later purchase.
    Responsive Design: Ensures a seamless experience across various devices and screen sizes.
    State Management: Uses Pinia for efficient and predictable state management.
    Navigation: A clear and easy to understand navigation bar.
    Dynamic Routing: Nuxt 3's file-based routing is used for efficient page management.
    Image Optimization: Lazy loading and optimized image sizes are used to improve performance.

# Challenges Faced:

    API Data Structure Inconsistencies:
        The initial API response required careful parsing and adjustments to the frontend logic.
        Specifically, the imageUrl and image_path differences, and the need to access nested data (response.data.data) caused some initial confusion.
        The use of UUID strings for product ID's required special attention when comparing route params.
    Image Loading Performance:
        Large image files initially caused slow loading times.
        Implementing lazy loading and ensuring proper image optimization (compression, sizing) were crucial for improving performance.
    State Management Complexity:
        Managing the shopping cart and wishlist states required careful consideration of data flow and reactivity.
        Pinia helped to solve this, but the initial setup required careful planning.
    Routing and Dynamic Pages:
        Setting up dynamic product detail pages required correctly extracting and using route parameters.
        Ensuring that the correct product was displayed on the individual product page was a challenge.
    Modal Management:
        Managing the shopping cart modal required DOM manipulation, which was handled carefully to maintain Vue.js best practices.
    Data Type Mismatches:
        The route parameter for the product ID was initially parsed as an integer, which caused issues when comparing it to the string ID from the API.
    Price Display Logic:
        Implementing logic to display either the discount price or the regular price required careful handling of conditional rendering.

# Solutions and Learnings:

    Thoroughly inspecting the API response structure and using developer tools for debugging.
    Implementing lazy loading with the loading="lazy" attribute.
    Integrating the Swiper carousel library for a robust and feature-rich carousel.
    Utilizing Pinia's state management capabilities for efficient data handling.
    Using Nuxt 3's routing features to create dynamic product pages.
    Using computed properties to handle display logic for price.
    Paying close attention to data types when comparing values.

This project provided valuable experience in building a full-fledged e-commerce application using modern web technologies. It highlighted the importance of careful planning, thorough testing, and effective debugging.