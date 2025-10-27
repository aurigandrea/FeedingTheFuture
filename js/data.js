
// Food data for the Top Trumps game
// Each food item has metrics for sustainability and nutrition
const foodData = [
    {
      id: 1,
    name: "Beef Lasagne",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    metrics: {
        greenhouse: 1.39,
        water: 133,
        saturated_fats: 2.6,
        protein: 6.6
    }
 
id: 2,
    name: "Vegetarian Lasagne",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1633436374784-7f9502eb348a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
    metrics: {
        greenhouse: 0.19,
        water: 32,
        saturated_fats: 1.8,
        protein: 4.6
    }
 
id: 3,
    name: "Chicken Curry",
    category: "Meals",
    image: " http://images.unsplash.com/photo-1707448829764-9474458021ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=901",
    metrics: {
        greenhouse: 0.26,
        water: 39,
        saturated_fats: 1.4,
        protein: 11.5
    }
 
id: 4,
    name: "Potato Curry",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1652545297020-f5e8ad779eb4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176",
    metrics: {
        greenhouse: 0.06,
        water: 8,
        saturated_fats: 0.2,
        protein: 1.4
    }
 
id: 5,
    name: "Beef Cottage Pie",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1664187878525-b8ad94fe569b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    metrics: {
        greenhouse: 1.52,
        water: 105,
        saturated_fats: 2.1,
        protein: 7.1
    }
 
id: 6,
    name: "Vegetarian Cottage Pie",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1710024894301-e4b0b15ad587?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    metrics: {
        greenhouse: 0.09,
        water: 13,
        saturated_fats: 0.9,
        protein: 2.5
    }
 
id: 7,
    name: "Fish Fingers",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1678969406337-1869bb0c0dc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1442",
    metrics: {
        greenhouse: 0.94,
        water: 282,
        saturated_fats: 1.2,
        protein: 14.3
    }
 
id: 8,
    name: "Quiche Lorraine",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1650844010413-3f24dc1c182b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    metrics: {
        greenhouse: 0.44,
        water: 51,
        saturated_fats: 9.1,
        protein: 9.7
    }
 
id: 9,
    name: "Cheese & Onion Quiche",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1456014673271-90b7fddf2eea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
    metrics: {
        greenhouse: 0.17,
        water: 22,
        saturated_fats: 4.5,
        protein: 7.1
    }
 
id: 10,
    name: "Pepperoni Pizza",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1231",
    metrics: {
        greenhouse: 0.32,
        water: 44,
        saturated_fats: 3.9,
        protein: 11.5
    }
 
id: 11,
    name: "Vegetarian Pizza",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    metrics: {
        greenhouse: 0.17,
        water: 27,
        saturated_fats: 3.0,
        protein: 8.5
    }
 
id: 12,
    name: "Pasta with Chicken",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1638890763825-e20495f6b819?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    metrics: {
        greenhouse: 0.20,
        water: 20,
        saturated_fats: 0.3,
        protein: 8.2
    }
 
id: 13,
    name: "Vegetarian Pasta",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1709201417401-5c72ed84f191?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1223",
    metrics: {
        greenhouse: 0.07,
        water: 14,
        saturated_fats: 0.2,
        protein: 2.9
    }
 
id: 14,
    name: "Roast Beef Dinner",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1635897411141-7bd2b9c6ab16?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    metrics: {
        greenhouse: 1.01,
        water: 95,
        saturated_fats: 0.5,
        protein: 6.8
    }
 
id: 15,
    name: "Salmon Sushi",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1744360515510-db7bf0f6def8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
    metrics: {
        greenhouse: 0.49,
        water: 121,
        saturated_fats: 1.1,
        protein: 8.7
    }
 
id: 16,
    name: "Vegetarian Sushi",
    category: "Meals",
    image: "https://images.unsplash.com/photo-1602554172650-043a2de54271?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=773",
    metrics: {
        greenhouse: 0.14,
        water: 76,
        saturated_fats: 0.4,
        protein: 3.4
    }
    }
];
