// MOCK API - Simulates real API calls for demonstration
const API = {
    // Menu database
    menuItems: [
        { id: 1, name: "Prime Ribeye Steak", category: "Main", price: 45, description: "Premium aged beef with herb butter" },
        { id: 2, name: "Gourmet Burger", category: "Main", price: 28, description: "Wagyu beef with truffle aioli" },
        { id: 3, name: "Truffle Pasta", category: "Main", price: 38, description: "Handmade fettuccine with black truffle" },
        { id: 4, name: "Ocean's Bounty", category: "Seafood", price: 52, description: "Fresh lobster and grilled prawns" },
        { id: 5, name: "Mediterranean Salad", category: "Appetizer", price: 16, description: "Fresh greens with feta cheese" },
        { id: 6, name: "Chocolate Lava Cake", category: "Dessert", price: 14, description: "Molten chocolate with ice cream" },
        { id: 7, name: "Grilled Salmon", category: "Seafood", price: 42, description: "Atlantic salmon with lemon butter" },
        { id: 8, name: "Caesar Salad", category: "Appetizer", price: 14, description: "Classic Caesar with croutons" },
    ],

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    async search(query) {
        await this.delay(800);
        return this.menuItems.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
    },

    async getByCategory(category) {
        await this.delay(600);
        return this.menuItems.filter(
            item => item.category.toLowerCase() === category.toLowerCase()
        );
    },

    async getAllItems() {
        await this.delay(500);
        return this.menuItems;
    }
};

// 👇 THIS LINE IS CRITICAL
window.RestaurantAPI = API;
