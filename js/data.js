
// Food data for the Top Trumps game
// Each food item has metrics for sustainability and nutrition
const foodData = [
    {
        id: 1,
        name: "Apple",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&q=80&w=500",
        metrics: {
            greenhouse: 0.4,    // kg CO2 (lower is better)
            water: 70,          // liters (lower is better)
            fiber: 2.4,         // grams (higher is better)
            vitaminC: 4.6       // mg (higher is better)
        }
    },
    {
        id: 2,
        name: "Banana",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=500",
        metrics: {
            greenhouse: 0.8,
            water: 90,
            fiber: 2.6,
            vitaminC: 8.7
        }
    },
    {
        id: 3,
        name: "Beef Burger",
        category: "Meat",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500",
        metrics: {
            greenhouse: 7.0,
            water: 3000,
            protein: 20.0,      // grams (higher is better)
            iron: 2.6           // mg (higher is better)
        }
    },
    {
        id: 4,
        name: "Tofu",
        category: "Protein",
        image: "https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&q=80&w=500",
        metrics: {
            greenhouse: 1.0,
            water: 240,
            protein: 16.0,
            iron: 3.4
        }
    },
    {
        id: 5,
        name: "Pasta",
        category: "Meal",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=500",
        metrics: {
            greenhouse: 1.8,
            water: 140,
            protein: 9.0,
            fiber: 4.5
        }
    },
    {
        id: 6,
        name: "Orange",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=500",
        metrics: {
            greenhouse: 0.3,
            water: 80,
            fiber: 2.4,
            vitaminC: 53.2
        }
    }
];
