
  export const restaurants = [
    {
      "id": 1,
      "name": "Burger King",
      "cuisines": ["Burger", "Fast Food"],
      "specialty": "Flame-grilled burgers",
      "Image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "categories": [
        {
          "name": "Burgers",
          "dishes": [
            { "id": 101, "name": "Whopper", "description": "Flame-grilled patty with lettuce, tomato, mayo", "image": "https://example.com/whopper.jpg", "variants": [{ "type": "Veg Whopper", "price": 149 }, { "type": "Chicken Whopper", "price": 199 }, { "type": "Mutton Whopper", "price": 259 }] },
            { "id": 102, "name": "Crispy Chicken Burger", "description": "Crispy chicken patty with signature mayo", "image": "https://example.com/crispy-chicken.jpg", "variants": [{ "type": "Single Patty", "price": 129 }, { "type": "Double Patty", "price": 179 }] },
            { "id": 103, "name": "Veggie Burger", "description": "Mixed veg patty with fresh veggies", "image": "https://example.com/veggie-burger.jpg", "variants": [{ "type": "Regular", "price": 99 }, { "type": "Large", "price": 149 }] },
            { "id": 104, "name": "Paneer Burger", "description": "Grilled paneer patty with mint mayo", "image": "https://example.com/paneer-burger.jpg", "variants": [{ "type": "Regular", "price": 139 }, { "type": "Large", "price": 189 }] },
            { "id": 105, "name": "Mutton Burger", "description": "Juicy mutton patty with smoky sauce", "image": "https://example.com/mutton-burger.jpg", "variants": [{ "type": "Single Patty", "price": 219 }, { "type": "Double Patty", "price": 299 }] },
            { "id": 106, "name": "Fish Burger", "description": "Crispy fish fillet with tartar sauce", "image": "https://example.com/fish-burger.jpg", "variants": [{ "type": "Regular", "price": 169 }, { "type": "Large", "price": 219 }] },
            { "id": 107, "name": "Chicken Cheese Burger", "description": "Chicken patty with melted cheese", "image": "https://example.com/chicken-cheese.jpg", "variants": [{ "type": "Regular", "price": 159 }, { "type": "Double Cheese", "price": 209 }] },
            { "id": 108, "name": "BBQ Bacon Burger", "description": "Smoky BBQ sauce with bacon strips", "image": "https://example.com/bbq-bacon.jpg", "variants": [{ "type": "Chicken", "price": 189 }, { "type": "Mutton", "price": 249 }] },
            { "id": 109, "name": "Spicy Chicken Burger", "description": "Hot and spicy crispy chicken", "image": "https://example.com/spicy-chicken.jpg", "variants": [{ "type": "Mild", "price": 149 }, { "type": "Extra Spicy", "price": 169 }] },
            { "id": 110, "name": "Cheese Burst Burger", "description": "Loaded with molten cheese", "image": "https://example.com/cheese-burst.jpg", "variants": [{ "type": "Veg", "price": 129 }, { "type": "Chicken", "price": 179 }] }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Domino's Pizza",
      "cuisines": ["Pizza", "Italian", "Fast Food"],
      "specialty": "Hand-tossed pizzas with cheese burst",
       "Image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
      "categories": [
        {
          "name": "Pizzas",
          "dishes": [
            { "id": 201, "name": "Margherita", "description": "Classic delight with 100% real mozzarella", "image": "https://example.com/margherita.jpg", "variants": [{ "type": "Regular", "price": 109 }, { "type": "Medium", "price": 219 }, { "type": "Large", "price": 349 }] },
            { "id": 202, "name": "Chicken Dominator", "description": "Double pepper barbecue chicken, peri-peri chicken, chicken tikka", "image": "https://example.com/chicken-dominator.jpg", "variants": [{ "type": "Regular", "price": 299 }, { "type": "Medium", "price": 499 }, { "type": "Large", "price": 699 }] },
            { "id": 203, "name": "Farmhouse", "description": "Onion, capsicum, tomato, grilled mushroom", "image": "https://example.com/farmhouse.jpg", "variants": [{ "type": "Regular", "price": 149 }, { "type": "Medium", "price": 299 }, { "type": "Large", "price": 449 }] },
            { "id": 204, "name": "Peppy Paneer", "description": "Paneer, capsicum, red paprika", "image": "https://example.com/peppy-paneer.jpg", "variants": [{ "type": "Regular", "price": 169 }, { "type": "Medium", "price": 329 }, { "type": "Large", "price": 489 }] },
            { "id": 205, "name": "Pepper Barbecue Chicken", "description": "Pepper barbecue chicken with onion", "image": "https://example.com/pepper-bbq.jpg", "variants": [{ "type": "Regular", "price": 259 }, { "type": "Medium", "price": 439 }, { "type": "Large", "price": 629 }] },
            { "id": 206, "name": "Veg Extravaganza", "description": "Black olives, capsicum, onion, grilled mushroom, corn, tomato", "image": "https://example.com/veg-extravaganza.jpg", "variants": [{ "type": "Regular", "price": 189 }, { "type": "Medium", "price": 359 }, { "type": "Large", "price": 529 }] },
            { "id": 207, "name": "Mutton Keema Pizza", "description": "Spiced mutton keema with onion", "image": "https://example.com/mutton-keema.jpg", "variants": [{ "type": "Medium", "price": 549 }, { "type": "Large", "price": 749 }] },
            { "id": 208, "name": "Cheese Burst Pizza", "description": "Extra cheese stuffed crust", "image": "https://example.com/cheese-burst.jpg", "variants": [{ "type": "Veg", "price": 299 }, { "type": "Chicken", "price": 399 }] },
            { "id": 209, "name": "Paneer Makhani Pizza", "description": "Paneer in makhani sauce with onion", "image": "https://example.com/paneer-makhani.jpg", "variants": [{ "type": "Regular", "price": 179 }, { "type": "Medium", "price": 339 }, { "type": "Large", "price": 499 }] },
            { "id": 210, "name": "Tandoori Chicken Pizza", "description": "Tandoori chicken with onion and capsicum", "image": "https://example.com/tandoori-chicken-pizza.jpg", "variants": [{ "type": "Regular", "price": 269 }, { "type": "Medium", "price": 459 }, { "type": "Large", "price": 659 }] }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Dindigul Thalappakatti",
      "cuisines": ["Biryani", "South Indian"],
      "specialty": "Seeraga Samba rice biryani with goat meat",
      "categories": [
        {
          "name": "Biryani",
          "dishes": [
            { "id": 301, "name": "Thalappakatti Biryani", "description": "Signature Dindigul-style biryani with seeraga samba rice", "image": "https://example.com/thalappakatti-biryani.jpg", "variants": [{ "type": "Veg Biryani", "price": 199 }, { "type": "Chicken Biryani", "price": 299 }, { "type": "Mutton Biryani", "price": 399 }] },
            { "id": 302, "name": "Chicken 65 Biryani", "description": "Biryani topped with spicy Chicken 65", "image": "https://example.com/chicken65-biryani.jpg", "variants": [{ "type": "Regular", "price": 329 }, { "type": "Large", "price": 449 }] },
            { "id": 303, "name": "Prawn Biryani", "description": "Coastal-style prawn biryani", "image": "https://example.com/prawn-biryani.jpg", "variants": [{ "type": "Regular", "price": 379 }, { "type": "Large", "price": 499 }] },
            { "id": 304, "name": "Egg Biryani", "description": "Biryani with boiled eggs", "image": "https://example.com/egg-biryani.jpg", "variants": [{ "type": "Regular", "price": 229 }, { "type": "Large", "price": 329 }] },
            { "id": 305, "name": "Mushroom Biryani", "description": "Biryani with fresh mushrooms", "image": "https://example.com/mushroom-biryani.jpg", "variants": [{ "type": "Regular", "price": 239 }, { "type": "Large", "price": 339 }] },
            { "id": 306, "name": "Paneer Biryani", "description": "Biryani with soft paneer cubes", "image": "https://example.com/paneer-biryani.jpg", "variants": [{ "type": "Regular", "price": 259 }, { "type": "Large", "price": 359 }] },
            { "id": 307, "name": "Fish Biryani", "description": "Biryani with marinated fish", "image": "https://example.com/fish-biryani.jpg", "variants": [{ "type": "Regular", "price": 359 }, { "type": "Large", "price": 479 }] },
            { "id": 308, "name": "Chicken Tikka Biryani", "description": "Biryani with chicken tikka pieces", "image": "https://example.com/chicken-tikka-biryani.jpg", "variants": [{ "type": "Regular", "price": 319 }, { "type": "Large", "price": 439 }] },
            { "id": 309, "name": "Mutton Keema Biryani", "description": "Biryani with minced mutton", "image": "https://example.com/keema-biryani.jpg", "variants": [{ "type": "Regular", "price": 389 }, { "type": "Large", "price": 519 }] },
            { "id": 310, "name": "Veg Dum Biryani", "description": "Slow-cooked vegetable dum biryani", "image": "https://example.com/veg-dum-biryani.jpg", "variants": [{ "type": "Regular", "price": 189 }, { "type": "Large", "price": 279 }] }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "Cream Centre",
      "cuisines": ["North Indian", "Chinese", "Italian", "Mexican"],
      "specialty": "Premium multicuisine vegetarian dining",
      "categories": [
        {
          "name": "Indian Mains",
          "dishes": [
            { "id": 401, "name": "Chole Bhature", "description": "Secret family recipe with 20 spices", "image": "https://example.com/chole-bhature.jpg", "variants": [{ "type": "Regular (2 bhature)", "price": 249 }, { "type": "Large (4 bhature)", "price": 399 }] },
            { "id": 402, "name": "Paneer Butter Masala", "description": "Cottage cheese in rich tomato gravy", "image": "https://example.com/paneer-butter-masala.jpg", "variants": [{ "type": "Half", "price": 279 }, { "type": "Full", "price": 449 }] },
            { "id": 403, "name": "Dal Makhani", "description": "Slow-cooked black lentils", "image": "https://example.com/dal-makhani.jpg", "variants": [{ "type": "Half", "price": 229 }, { "type": "Full", "price": 379 }] },
            { "id": 404, "name": "Palak Paneer", "description": "Paneer in spinach gravy", "image": "https://example.com/palak-paneer.jpg", "variants": [{ "type": "Half", "price": 259 }, { "type": "Full", "price": 419 }] },
            { "id": 405, "name": "Malai Kofta", "description": "Paneer dumplings in creamy gravy", "image": "https://example.com/malai-kofta.jpg", "variants": [{ "type": "Half", "price": 289 }, { "type": "Full", "price": 469 }] },
            { "id": 406, "name": "Aloo Gobi", "description": "Potato and cauliflower dry curry", "image": "https://example.com/aloo-gobi.jpg", "variants": [{ "type": "Half", "price": 199 }, { "type": "Full", "price": 329 }] },
            { "id": 407, "name": "Mix Veg Curry", "description": "Seasonal vegetables in gravy", "image": "https://example.com/mix-veg.jpg", "variants": [{ "type": "Half", "price": 219 }, { "type": "Full", "price": 359 }] },
            { "id": 408, "name": "Kadai Paneer", "description": "Paneer with capsicum and onion", "image": "https://example.com/kadai-paneer.jpg", "variants": [{ "type": "Half", "price": 269 }, { "type": "Full", "price": 439 }] },
            { "id": 409, "name": "Veg Kolhapuri", "description": "Spicy mixed veg curry", "image": "https://example.com/veg-kolhapuri.jpg", "variants": [{ "type": "Half", "price": 229 }, { "type": "Full", "price": 379 }] },
            { "id": 410, "name": "Shahi Paneer", "description": "Royal paneer curry with cashew", "image": "https://example.com/shahi-paneer.jpg", "variants": [{ "type": "Half", "price": 299 }, { "type": "Full", "price": 479 }] }
          ]
        },
        {
          "name": "Chinese",
          "dishes": [
            { "id": 411, "name": "Veg Manchurian", "description": "Crispy veg balls in manchurian sauce", "image": "https://example.com/manchurian.jpg", "variants": [{ "type": "Dry", "price": 199 }, { "type": "Gravy", "price": 219 }] },
            { "id": 412, "name": "Hakka Noodles", "description": "Stir-fried noodles with veggies", "image": "https://example.com/hakka-noodles.jpg", "variants": [{ "type": "Regular", "price": 229 }, { "type": "Large", "price": 349 }] },
            { "id": 413, "name": "Fried Rice", "description": "Wok-tossed rice with vegetables", "image": "https://example.com/fried-rice.jpg", "variants": [{ "type": "Regular", "price": 219 }, { "type": "Large", "price": 339 }] },
            { "id": 414, "name": "Chilli Paneer", "description": "Spicy paneer with capsicum", "image": "https://example.com/chilli-paneer.jpg", "variants": [{ "type": "Dry", "price": 249 }, { "type": "Gravy", "price": 269 }] },
            { "id": 415, "name": "Spring Rolls", "description": "Crispy veg spring rolls", "image": "https://example.com/spring-rolls.jpg", "variants": [{ "type": "4 pcs", "price": 179 }, { "type": "8 pcs", "price": 299 }] },
            { "id": 416, "name": "Veg Momos", "description": "Steamed veg dumplings", "image": "https://example.com/veg-momos.jpg", "variants": [{ "type": "Steamed (6 pcs)", "price": 149 }, { "type": "Fried (6 pcs)", "price": 179 }] },
            { "id": 417, "name": "Schezwan Noodles", "description": "Spicy schezwan noodles", "image": "https://example.com/schezwan-noodles.jpg", "variants": [{ "type": "Regular", "price": 239 }, { "type": "Large", "price": 359 }] },
            { "id": 418, "name": "Veg Lollipop", "description": "Crispy veg lollipops", "image": "https://example.com/veg-lollipop.jpg", "variants": [{ "type": "4 pcs", "price": 199 }, { "type": "8 pcs", "price": 349 }] },
            { "id": 419, "name": "Hot & Sour Soup", "description": "Spicy and tangy soup", "image": "https://example.com/hot-sour-soup.jpg", "variants": [{ "type": "Cup", "price": 129 }, { "type": "Bowl", "price": 199 }] },
            { "id": 420, "name": "Manchow Soup", "description": "Spicy soup with crispy noodles", "image": "https://example.com/manchow-soup.jpg", "variants": [{ "type": "Cup", "price": 139 }, { "type": "Bowl", "price": 209 }] }
          ]
        }
      ]
    },
    {
      "id": 5,
      "name": "Karim's",
      "cuisines": ["Mughlai", "North Indian"],
      "specialty": "Historic Jama Masjid eatery since 1913",
      "categories": [
        {
          "name": "Mughlai Mains",
          "dishes": [
            { "id": 501, "name": "Mutton Korma", "description": "Slow-cooked mutton in rich yogurt-based gravy", "image": "https://example.com/mutton-korma.jpg", "variants": [{ "type": "Half", "price": 349 }, { "type": "Full", "price": 599 }] },
            { "id": 502, "name": "Biryani", "description": "Mughlai-style dum biryani", "image": "https://example.com/mughlai-biryani.jpg", "variants": [{ "type": "Veg Biryani", "price": 249 }, { "type": "Chicken Biryani", "price": 349 }, { "type": "Mutton Biryani", "price": 449 }] },
            { "id": 503, "name": "Butter Chicken", "description": "Creamy tomato chicken curry", "image": "https://example.com/butter-chicken.jpg", "variants": [{ "type": "Half", "price": 329 }, { "type": "Full", "price": 549 }] },
            { "id": 504, "name": "Mutton Nihari", "description": "Slow-cooked mutton stew", "image": "https://example.com/mutton-nihari.jpg", "variants": [{ "type": "Half", "price": 379 }, { "type": "Full", "price": 649 }] },
            { "id": 505, "name": "Chicken Jahangiri", "description": "Rich chicken curry with dry fruits", "image": "https://example.com/chicken-jahangiri.jpg", "variants": [{ "type": "Half", "price": 319 }, { "type": "Full", "price": 529 }] },
            { "id": 506, "name": "Seekh Kebab", "description": "Minced meat skewers", "image": "https://example.com/seekh-kebab.jpg", "variants": [{ "type": "Chicken (4 pcs)", "price": 279 }, { "type": "Mutton (4 pcs)", "price": 349 }] },
            { "id": 507, "name": "Tandoori Chicken", "description": "Clay oven roasted chicken", "image": "https://example.com/tandoori-chicken.jpg", "variants": [{ "type": "Half", "price": 299 }, { "type": "Full", "price": 549 }] },
            { "id": 508, "name": "Mutton Burra", "description": "Spicy grilled mutton pieces", "image": "https://example.com/mutton-burra.jpg", "variants": [{ "type": "Half", "price": 399 }, { "type": "Full", "price": 699 }] },
            { "id": 509, "name": "Chicken Changezi", "description": "Spicy chicken curry", "image": "https://example.com/chicken-changezi.jpg", "variants": [{ "type": "Half", "price": 309 }, { "type": "Full", "price": 519 }] },
            { "id": 510, "name": "Mutton Stew", "description": "Mild mutton stew", "image": "https://example.com/mutton-stew.jpg", "variants": [{ "type": "Half", "price": 299 }, { "type": "Full", "price": 499 }] }
          ]
        }
      ]
    },
    {
      "id": 6,
      "name": "Pizza Hut",
      "cuisines": ["Pizza", "Italian", "Fast Food"],
      "specialty": "Pan pizzas and stuffed crust",
      "categories": [
        {
          "name": "Pizzas",
          "dishes": [
            { "id": 601, "name": "Farmhouse", "description": "Onion, capsicum, tomato, grilled mushroom", "image": "https://example.com/farmhouse.jpg", "variants": [{ "type": "Regular", "price": 149 }, { "type": "Medium", "price": 299 }, { "type": "Large", "price": 449 }] },
            { "id": 602, "name": "Margherita", "description": "Classic cheese pizza", "image": "https://example.com/margherita.jpg", "variants": [{ "type": "Regular", "price": 119 }, { "type": "Medium", "price": 239 }, { "type": "Large", "price": 369 }] },
            { "id": 603, "name": "Peppy Paneer", "description": "Paneer, capsicum, red paprika", "image": "https://example.com/peppy-paneer.jpg", "variants": [{ "type": "Regular", "price": 169 }, { "type": "Medium", "price": 329 }, { "type": "Large", "price": 489 }] },
            { "id": 604, "name": "Chicken Supreme", "description": "Chicken, onion, capsicum", "image": "https://example.com/chicken-supreme.jpg", "variants": [{ "type": "Regular", "price": 269 }, { "type": "Medium", "price": 459 }, { "type": "Large", "price": 659 }] },
            { "id": 605, "name": "Veggie Paradise", "description": "Golden corn, black olives, capsicum, tomato", "image": "https://example.com/veggie-paradise.jpg", "variants": [{ "type": "Regular", "price": 159 }, { "type": "Medium", "price": 319 }, { "type": "Large", "price": 469 }] },
            { "id": 606, "name": "Tandoori Paneer", "description": "Tandoori paneer with onion", "image": "https://example.com/tandoori-paneer.jpg", "variants": [{ "type": "Regular", "price": 179 }, { "type": "Medium", "price": 339 }, { "type": "Large", "price": 499 }] },
            { "id": 607, "name": "Peri Peri Chicken", "description": "Spicy peri peri chicken", "image": "https://example.com/peri-peri-chicken.jpg", "variants": [{ "type": "Regular", "price": 279 }, { "type": "Medium", "price": 469 }, { "type": "Large", "price": 669 }] },
            { "id": 608, "name": "Mushroom Pizza", "description": "Fresh mushroom with cheese", "image": "https://example.com/mushroom-pizza.jpg", "variants": [{ "type": "Regular", "price": 139 }, { "type": "Medium", "price": 279 }, { "type": "Large", "price": 419 }] },
            { "id": 609, "name": "Cheese Burst Veg", "description": "Stuffed cheese crust veg pizza", "image": "https://example.com/cheese-burst-veg.jpg", "variants": [{ "type": "Medium", "price": 349 }, { "type": "Large", "price": 499 }] },
            { "id": 610, "name": "Cheese Burst Chicken", "description": "Stuffed cheese crust chicken pizza", "image": "https://example.com/cheese-burst-chicken.jpg", "variants": [{ "type": "Medium", "price": 419 }, { "type": "Large", "price": 599 }] }
          ]
        }
      ]
    },
    {
      "id": 7,
      "name": "Saravana Bhavan",
      "cuisines": ["South Indian", "Vegetarian"],
      "specialty": "Authentic South Indian vegetarian meals",
      "categories": [
        {
          "name": "Dosa",
          "dishes": [
            { "id": 701, "name": "Masala Dosa", "description": "Crispy dosa with spiced potato filling", "image": "https://example.com/masala-dosa.jpg", "variants": [{ "type": "Regular", "price": 120 }, { "type": "Ghee Roast", "price": 160 }, { "type": "Paper Roast", "price": 180 }] },
            { "id": 702, "name": "Plain Dosa", "description": "Crispy plain dosa", "image": "https://example.com/plain-dosa.jpg", "variants": [{ "type": "Regular", "price": 90 }, { "type": "Ghee Roast", "price": 130 }] },
            { "id": 703, "name": "Onion Dosa", "description": "Dosa topped with onions", "image": "https://example.com/onion-dosa.jpg", "variants": [{ "type": "Regular", "price": 130 }, { "type": "Ghee Roast", "price": 170 }] },
            { "id": 704, "name": "Rava Dosa", "description": "Crispy semolina dosa", "image": "https://example.com/rava-dosa.jpg", "variants": [{ "type": "Regular", "price": 140 }, { "type": "Onion Rava", "price": 160 }] },
            { "id": 705, "name": "Set Dosa", "description": "Soft spongy dosa stack", "image": "https://example.com/set-dosa.jpg", "variants": [{ "type": "2 pcs", "price": 110 }, { "type": "3 pcs", "price": 150 }] },
            { "id": 706, "name": "Podi Dosa", "description": "Dosa with spicy podi", "image": "https://example.com/podi-dosa.jpg", "variants": [{ "type": "Regular", "price": 125 }, { "type": "Ghee Podi", "price": 165 }] },
            { "id": 707, "name": "Cheese Dosa", "description": "Dosa with melted cheese", "image": "https://example.com/cheese-dosa.jpg", "variants": [{ "type": "Regular", "price": 160 }, { "type": "Extra Cheese", "price": 200 }] },
            { "id": 708, "name": "Mysore Masala Dosa", "description": "Spicy red chutney dosa", "image": "https://example.com/mysore-masala.jpg", "variants": [{ "type": "Regular", "price": 150 }, { "type": "Ghee Roast", "price": 190 }] },
            { "id": 709, "name": "Karam Dosa", "description": "Spicy karam dosa", "image": "https://example.com/karam-dosa.jpg", "variants": [{ "type": "Regular", "price": 135 }, { "type": "Ghee Roast", "price": 175 }] },
            { "id": 710, "name": "Butter Dosa", "description": "Dosa with butter", "image": "https://example.com/butter-dosa.jpg", "variants": [{ "type": "Regular", "price": 130 }, { "type": "Extra Butter", "price": 160 }] }
          ]
        }
      ]
    },
    {
      "id": 8,
      "name": "Mainland China",
      "cuisines": ["Chinese", "Asian"],
      "specialty": "Authentic Chinese fine dining",
      "categories": [
        {
          "name": "Noodles & Rice",
          "dishes": [
            { "id": 801, "name": "Hakka Noodles", "description": "Stir-fried noodles with vegetables", "image": "https://example.com/hakka-noodles.jpg", "variants": [{ "type": "Veg", "price": 249 }, { "type": "Chicken", "price": 329 }, { "type": "Prawn", "price": 399 }] },
            { "id": 802, "name": "Schezwan Noodles", "description": "Spicy schezwan noodles", "image": "https://example.com/schezwan-noodles.jpg", "variants": [{ "type": "Veg", "price": 259 }, { "type": "Chicken", "price": 339 }, { "type": "Prawn", "price": 409 }] },
            { "id": 803, "name": "Fried Rice", "description": "Wok-tossed rice", "image": "https://example.com/fried-rice.jpg", "variants": [{ "type": "Veg", "price": 239 }, { "type": "Egg", "price": 279 }, { "type": "Chicken", "price": 319 }, { "type": "Prawn", "price": 389 }] },
            { "id": 804, "name": "Burnt Garlic Rice", "description": "Rice with burnt garlic flavor", "image": "https://example.com/burnt-garlic-rice.jpg", "variants": [{ "type": "Veg", "price": 249 }, { "type": "Chicken", "price": 329 }] },
            { "id": 805, "name": "Chilli Garlic Noodles", "description": "Spicy chilli garlic noodles", "image": "https://example.com/chilli-garlic-noodles.jpg", "variants": [{ "type": "Veg", "price": 259 }, { "type": "Chicken", "price": 339 }] },
            { "id": 806, "name": "Singapore Noodles", "description": "Curry-flavored rice noodles", "image": "https://example.com/singapore-noodles.jpg", "variants": [{ "type": "Veg", "price": 269 }, { "type": "Chicken", "price": 349 }, { "type": "Prawn", "price": 419 }] },
            { "id": 807, "name": "Triple Schezwan Rice", "description": "Rice with schezwan sauce and toppings", "image": "https://example.com/triple-schezwan.jpg", "variants": [{ "type": "Veg", "price": 299 }, { "type": "Chicken", "price": 379 }] },
            { "id": 808, "name": "Manchurian Rice", "description": "Rice with manchurian gravy", "image": "https://example.com/manchurian-rice.jpg", "variants": [{ "type": "Veg", "price": 279 }, { "type": "Chicken", "price": 359 }] },
            { "id": 809, "name": "Cantonese Noodles", "description": "Cantonese-style noodles", "image": "https://example.com/cantonese-noodles.jpg", "variants": [{ "type": "Veg", "price": 269 }, { "type": "Chicken", "price": 349 }] },
            { "id": 810, "name": "Basil Fried Rice", "description": "Rice with fresh basil", "image": "https://example.com/basil-fried-rice.jpg", "variants": [{ "type": "Veg", "price": 259 }, { "type": "Chicken", "price": 339 }] }
          ]
        }
      ]
    },
    {
      "id": 9,
      "name": "Barbeque Nation",
      "cuisines": ["BBQ", "North Indian", "Buffet"],
      "specialty": "Unlimited grill and buffet",
      "categories": [
        {
          "name": "Starters",
          "dishes": [
            { "id": 901, "name": "Grilled Chicken Tikka", "description": "Char-grilled chicken tikka with mint chutney", "image": "https://example.com/chicken-tikka.jpg", "variants": [{ "type": "Veg Paneer Tikka", "price": 299 }, { "type": "Chicken Tikka", "price": 399 }, { "type": "Mutton Seekh Kebab", "price": 499 }] },
            { "id": 902, "name": "Tandoori Mushroom", "description": "Marinated grilled mushrooms", "image": "https://example.com/tandoori-mushroom.jpg", "variants": [{ "type": "Regular", "price": 279 }, { "type": "Large", "price": 379 }] },
            { "id": 903, "name": "Paneer Tikka", "description": "Grilled paneer with spices", "image": "https://example.com/paneer-tikka.jpg", "variants": [{ "type": "Regular", "price": 289 }, { "type": "Large", "price": 389 }] },
            { "id": 904, "name": "Chicken Malai Tikka", "description": "Creamy chicken tikka", "image": "https://example.com/chicken-malai-tikka.jpg", "variants": [{ "type": "Regular", "price": 349 }, { "type": "Large", "price": 449 }] },
            { "id": 905, "name": "Fish Tikka", "description": "Grilled fish tikka", "image": "https://example.com/fish-tikka.jpg", "variants": [{ "type": "Regular", "price": 379 }, { "type": "Large", "price": 479 }] },
            { "id": 906, "name": "Mutton Seekh Kebab", "description": "Minced mutton skewers", "image": "https://example.com/mutton-seekh.jpg", "variants": [{ "type": "Regular", "price": 399 }, { "type": "Large", "price": 499 }] },
            { "id": 907, "name": "Hara Bhara Kebab", "description": "Spinach and peas kebab", "image": "https://example.com/hara-bhara.jpg", "variants": [{ "type": "Regular", "price": 259 }, { "type": "Large", "price": 359 }] },
            { "id": 908, "name": "Chicken Wings", "description": "Grilled chicken wings", "image": "https://example.com/chicken-wings.jpg", "variants": [{ "type": "Regular", "price": 319 }, { "type": "Large", "price": 419 }] },
            { "id": 909, "name": "Corn Tikki", "description": "Grilled corn tikki", "image": "https://example.com/corn-tikki.jpg", "variants": [{ "type": "Regular", "price": 249 }, { "type": "Large", "price": 349 }] },
            { "id": 910, "name": "Prawn Koliwada", "description": "Spicy fried prawns", "image": "https://example.com/prawn-koliwada.jpg", "variants": [{ "type": "Regular", "price": 429 }, { "type": "Large", "price": 529 }] }
          ]
        }
      ]
    },
    {
      "id": 10,
      "name": "Haldiram's",
      "cuisines": ["North Indian", "Street Food", "Sweets"],
      "specialty": "Indian snacks and sweets",
      "categories": [
        {
          "name": "Chaat",
          "dishes": [
            { "id": 1001, "name": "Pani Puri", "description": "Crispy puris with spiced water", "image": "https://example.com/pani-puri.jpg", "variants": [{ "type": "6 pieces", "price": 80 }, { "type": "12 pieces", "price": 140 }] },
            { "id": 1002, "name": "Bhel Puri", "description": "Puffed rice with chutneys", "image": "https://example.com/bhel-puri.jpg", "variants": [{ "type": "Regular", "price": 90 }, { "type": "Large", "price": 150 }] },
            { "id": 1003, "name": "Sev Puri", "description": "Flat puris with toppings", "image": "https://example.com/sev-puri.jpg", "variants": [{ "type": "6 pieces", "price": 100 }, { "type": "12 pieces", "price": 180 }] },
            { "id": 1004, "name": "Dahi Puri", "description": "Puri with yogurt and chutneys", "image": "https://example.com/dahi-puri.jpg", "variants": [{ "type": "6 pieces", "price": 110 }, { "type": "12 pieces", "price": 200 }] },
            { "id": 1005, "name": "Aloo Tikki", "description": "Fried potato patties", "image": "https://example.com/aloo-tikki.jpg", "variants": [{ "type": "Regular", "price": 80 }, { "type": "With Chole", "price": 130 }] },
            { "id": 1006, "name": "Samosa Chaat", "description": "Crushed samosa with chutneys", "image": "https://example.com/samosa-chaat.jpg", "variants": [{ "type": "Regular", "price": 100 }, { "type": "Large", "price": 160 }] },
            { "id": 1007, "name": "Ragda Pattice", "description": "Potato patties with peas curry", "image": "https://example.com/ragda-pattice.jpg", "variants": [{ "type": "Regular", "price": 120 }, { "type": "Large", "price": 180 }] },
            { "id": 1008, "name": "Papdi Chaat", "description": "Crispy papdi with yogurt", "image": "https://example.com/papdi-chaat.jpg", "variants": [{ "type": "Regular", "price": 110 }, { "type": "Large", "price": 170 }] },
            { "id": 1009, "name": "Corn Chaat", "description": "Spicy corn kernels", "image": "https://example.com/corn-chaat.jpg", "variants": [{ "type": "Regular", "price": 90 }, { "type": "Large", "price": 150 }] },
            { "id": 1010, "name": "Fruit Chaat", "description": "Mixed fruits with spices", "image": "https://example.com/fruit-chaat.jpg", "variants": [{ "type": "Regular", "price": 120 }, { "type": "Large", "price": 190 }] }
          ]
        }
      ]
    },
    {
      "id": 11,
      "name": "McDonald's",
      "cuisines": ["Burger", "Fast Food"],
      "specialty": "Iconic fast food burgers and fries",
      "categories": [
        {
          "name": "Burgers",
          "dishes": [
            { "id": 1101, "name": "McAloo Tikki", "description": "Potato patty burger with tangy sauce", "image": "https://example.com/mcaloo-tikki.jpg", "variants": [{ "type": "Regular", "price": 59 }, { "type": "Large Meal", "price": 149 }] },
            { "id": 1102, "name": "McChicken", "description": "Crispy chicken burger", "image": "https://example.com/mcchicken.jpg", "variants": [{ "type": "Regular", "price": 129 }, { "type": "Large Meal", "price": 229 }] },
            { "id": 1103, "name": "McSpicy Chicken", "description": "Spicy crispy chicken burger", "image": "https://example.com/mcspicy.jpg", "variants": [{ "type": "Regular", "price": 149 }, { "type": "Large Meal", "price": 249 }] },
            { "id": 1104, "name": "McSpicy Paneer", "description": "Spicy paneer burger", "image": "https://example.com/mcspicy-paneer.jpg", "variants": [{ "type": "Regular", "price": 139 }, { "type": "Large Meal", "price": 239 }] },
            { "id": 1105, "name": "Filet-O-Fish", "description": "Fish fillet burger", "image": "https://example.com/filet-o-fish.jpg", "variants": [{ "type": "Regular", "price": 159 }, { "type": "Large Meal", "price": 259 }] },
            { "id": 1106, "name": "Chicken Maharaja Mac", "description": "Double chicken patty burger", "image": "https://example.com/maharaja-mac.jpg", "variants": [{ "type": "Regular", "price": 199 }, { "type": "Large Meal", "price": 299 }] },
            { "id": 1107, "name": "Veg Maharaja Mac", "description": "Double veg patty burger", "image": "https://example.com/veg-maharaja.jpg", "variants": [{ "type": "Regular", "price": 179 }, { "type": "Large Meal", "price": 279 }] },
            { "id": 1108, "name": "McVeggie", "description": "Crispy veg burger", "image": "https://example.com/mcveggie.jpg", "variants": [{ "type": "Regular", "price": 99 }, { "type": "Large Meal", "price": 199 }] },
            { "id": 1109, "name": "Grilled Chicken Burger", "description": "Grilled chicken patty", "image": "https://example.com/grilled-chicken.jpg", "variants": [{ "type": "Regular", "price": 139 }, { "type": "Large Meal", "price": 239 }] },
            { "id": 1110, "name": "Cheese McChicken", "description": "McChicken with cheese", "image": "https://example.com/cheese-mcchicken.jpg", "variants": [{ "type": "Regular", "price": 149 }, { "type": "Large Meal", "price": 249 }] }
          ]
        }
      ]
    },
    {
      "id": 12,
      "name": "Biryani Blues",
      "cuisines": ["Biryani", "Hyderabadi"],
      "specialty": "Hyderabadi dum biryani",
      "categories": [
        {
          "name": "Biryani",
          "dishes": [
            { "id": 1201, "name": "Hyderabadi Dum Biryani", "description": "Slow-cooked dum biryani with saffron", "image": "https://example.com/hyderabadi-biryani.jpg", "variants": [{ "type": "Veg Biryani", "price": 229 }, { "type": "Chicken Biryani", "price": 329 }, { "type": "Mutton Biryani", "price": 429 }] },
            { "id": 1202, "name": "Chicken 65 Biryani", "description": "Biryani with Chicken 65", "image": "https://example.com/chicken65-biryani.jpg", "variants": [{ "type": "Regular", "price": 349 }, { "type": "Large", "price": 469 }] },
            { "id": 1203, "name": "Egg Biryani", "description": "Biryani with boiled eggs", "image": "https://example.com/egg-biryani.jpg", "variants": [{ "type": "Regular", "price": 249 }, { "type": "Large", "price": 349 }] },
            { "id": 1204, "name": "Prawn Biryani", "description": "Biryani with prawns", "image": "https://example.com/prawn-biryani.jpg", "variants": [{ "type": "Regular", "price": 399 }, { "type": "Large", "price": 529 }] },
            { "id": 1205, "name": "Paneer Biryani", "description": "Biryani with paneer", "image": "https://example.com/paneer-biryani.jpg", "variants": [{ "type": "Regular", "price": 269 }, { "type": "Large", "price": 369 }] },
            { "id": 1206, "name": "Mushroom Biryani", "description": "Biryani with mushrooms", "image": "https://example.com/mushroom-biryani.jpg", "variants": [{ "type": "Regular", "price": 249 }, { "type": "Large", "price": 349 }] },
            { "id": 1207, "name": "Fish Biryani", "description": "Biryani with fish", "image": "https://example.com/fish-biryani.jpg", "variants": [{ "type": "Regular", "price": 379 }, { "type": "Large", "price": 499 }] },
            { "id": 1208, "name": "Mutton Keema Biryani", "description": "Biryani with minced mutton", "image": "https://example.com/keema-biryani.jpg", "variants": [{ "type": "Regular", "price": 409 }, { "type": "Large", "price": 539 }] },
            { "id": 1209, "name": "Veg Dum Biryani", "description": "Vegetable dum biryani", "image": "https://example.com/veg-dum-biryani.jpg", "variants": [{ "type": "Regular", "price": 209 }, { "type": "Large", "price": 299 }] },
            { "id": 1210, "name": "Chicken Tikka Biryani", "description": "Biryani with chicken tikka", "image": "https://example.com/chicken-tikka-biryani.jpg", "variants": [{ "type": "Regular", "price": 339 }, { "type": "Large", "price": 459 }] }
          ]
        }
      ]
    },
    {
      "id": 13,
      "name": "Wow! Momo",
      "cuisines": ["Tibetan", "Chinese", "Momos"],
      "specialty": "Steamed and fried momos",
      "categories": [
        {
          "name": "Momos",
          "dishes": [
            { "id": 1301, "name": "Steamed Momos", "description": "Classic steamed dumplings with spicy chutney", "image": "https://example.com/momos.jpg", "variants": [{ "type": "Veg (6 pcs)", "price": 99 }, { "type": "Chicken (6 pcs)", "price": 149 }, { "type": "Pan-Fried Veg (6 pcs)", "price": 129 }, { "type": "Pan-Fried Chicken (6 pcs)", "price": 179 }] },
            { "id": 1302, "name": "Fried Momos", "description": "Deep-fried momos", "image": "https://example.com/fried-momos.jpg", "variants": [{ "type": "Veg (6 pcs)", "price": 119 }, { "type": "Chicken (6 pcs)", "price": 169 }] },
            { "id": 1303, "name": "Tandoori Momos", "description": "Tandoori-style momos", "image": "https://example.com/tandoori-momos.jpg", "variants": [{ "type": "Veg (6 pcs)", "price": 159 }, { "type": "Chicken (6 pcs)", "price": 209 }] },
            { "id": 1304, "name": "Cheese Momos", "description": "Momos stuffed with cheese", "image": "https://example.com/cheese-momos.jpg", "variants": [{ "type": "Veg (6 pcs)", "price": 149 }, { "type": "Chicken (6 pcs)", "price": 199 }] },
            { "id": 1305, "name": "Paneer Momos", "description": "Momos with paneer filling", "image": "https://example.com/paneer-momos.jpg", "variants": [{ "type": "Steamed (6 pcs)", "price": 139 }, { "type": "Fried (6 pcs)", "price": 159 }] },
            { "id": 1306, "name": "Mushroom Momos", "description": "Momos with mushroom filling", "image": "https://example.com/mushroom-momos.jpg", "variants": [{ "type": "Steamed (6 pcs)", "price": 139 }, { "type": "Fried (6 pcs)", "price": 159 }] },
            { "id": 1307, "name": "Chicken Cheese Momos", "description": "Chicken and cheese momos", "image": "https://example.com/chicken-cheese-momos.jpg", "variants": [{ "type": "Steamed (6 pcs)", "price": 189 }, { "type": "Fried (6 pcs)", "price": 209 }] },
            { "id": 1308, "name": "Schezwan Momos", "description": "Spicy schezwan momos", "image": "https://example.com/schezwan-momos.jpg", "variants": [{ "type": "Veg (6 pcs)", "price": 139 }, { "type": "Chicken (6 pcs)", "price": 189 }] },
            { "id": 1309, "name": "Kurkure Momos", "description": "Crunchy coated momos", "image": "https://example.com/kurkure-momos.jpg", "variants": [{ "type": "Veg (6 pcs)", "price": 159 }, { "type": "Chicken (6 pcs)", "price": 209 }] },
            { "id": 1310, "name": "Gravy Momos", "description": "Momos in spicy gravy", "image": "https://example.com/gravy-momos.jpg", "variants": [{ "type": "Veg (6 pcs)", "price": 169 }, { "type": "Chicken (6 pcs)", "price": 219 }] }
          ]
        }
      ]
    },
    {
      "id": 14,
      "name": "Pind Balluchi",
      "cuisines": ["North Indian", "Punjabi"],
      "specialty": "Rustic Punjabi dhaba-style food",
      "categories": [
        {
          "name": "Tandoor",
          "dishes": [
            { "id": 1401, "name": "Tandoori Chicken", "description": "Clay oven-roasted chicken with spices", "image": "https://example.com/tandoori-chicken.jpg", "variants": [{ "type": "Half", "price": 299 }, { "type": "Full", "price": 549 }] },
            { "id": 1402, "name": "Paneer Tikka", "description": "Grilled paneer with spices", "image": "https://example.com/paneer-tikka.jpg", "variants": [{ "type": "Half", "price": 249 }, { "type": "Full", "price": 449 }] },
            { "id": 1403, "name": "Chicken Tikka", "description": "Grilled chicken tikka", "image": "https://example.com/chicken-tikka.jpg", "variants": [{ "type": "Half", "price": 279 }, { "type": "Full", "price": 499 }] },
            { "id": 1404, "name": "Mutton Seekh Kebab", "description": "Minced mutton skewers", "image": "https://example.com/mutton-seekh.jpg", "variants": [{ "type": "4 pcs", "price": 349 }, { "type": "8 pcs", "price": 649 }] },
            { "id": 1405, "name": "Fish Tikka", "description": "Grilled fish tikka", "image": "https://example.com/fish-tikka.jpg", "variants": [{ "type": "Half", "price": 329 }, { "type": "Full", "price": 599 }] },
            { "id": 1406, "name": "Hara Bhara Kebab", "description": "Spinach and peas kebab", "image": "https://example.com/hara-bhara.jpg", "variants": [{ "type": "4 pcs", "price": 229 }, { "type": "8 pcs", "price": 429 }] },
            { "id": 1407, "name": "Malai Tikka", "description": "Creamy chicken tikka", "image": "https://example.com/malai-tikka.jpg", "variants": [{ "type": "Half", "price": 299 }, { "type": "Full", "price": 549 }] },
            { "id": 1408, "name": "Tandoori Mushroom", "description": "Grilled mushrooms", "image": "https://example.com/tandoori-mushroom.jpg", "variants": [{ "type": "Half", "price": 239 }, { "type": "Full", "price": 429 }] },
            { "id": 1409, "name": "Chicken Malai Kebab", "description": "Creamy chicken kebab", "image": "https://example.com/chicken-malai-kebab.jpg", "variants": [{ "type": "4 pcs", "price": 319 }, { "type": "8 pcs", "price": 599 }] },
            { "id": 1410, "name": "Mutton Boti Kebab", "description": "Mutton boti kebab", "image": "https://example.com/mutton-boti.jpg", "variants": [{ "type": "4 pcs", "price": 369 }, { "type": "8 pcs", "price": 689 }] }
          ]
        }
      ]
    },
    {
      "id": 15,
      "name": "KFC",
      "cuisines": ["Fried Chicken", "Fast Food"],
      "specialty": "Original recipe fried chicken",
      "categories": [
        {
          "name": "Chicken",
          "dishes": [
            { "id": 1501, "name": "Fried Chicken", "description": "Crispy fried chicken with secret blend of spices", "image": "https://example.com/kfc-chicken.jpg", "variants": [{ "type": "1 pc", "price": 99 }, { "type": "2 pcs", "price": 189 }, { "type": "5 pcs Bucket", "price": 449 }, { "type": "10 pcs Bucket", "price": 849 }] },
            { "id": 1502, "name": "Chicken Popcorn", "description": "Bite-sized crispy chicken", "image": "https://example.com/chicken-popcorn.jpg", "variants": [{ "type": "Regular", "price": 149 }, { "type": "Large", "price": 249 }] },
            { "id": 1503, "name": "Zinger Burger", "description": "Crispy chicken fillet burger", "image": "https://example.com/zinger.jpg", "variants": [{ "type": "Regular", "price": 169 }, { "type": "Double Zinger", "price": 249 }] },
            { "id": 1504, "name": "Hot Wings", "description": "Spicy chicken wings", "image": "https://example.com/hot-wings.jpg", "variants": [{ "type": "4 pcs", "price": 149 }, { "type": "8 pcs", "price": 279 }] },
            { "id": 1505, "name": "Chicken Strips", "description": "Crispy chicken strips", "image": "https://example.com/chicken-strips.jpg", "variants": [{ "type": "3 pcs", "price": 159 }, { "type": "5 pcs", "price": 249 }] },
            { "id": 1506, "name": "Chicken Bucket Meal", "description": "Bucket with sides and drinks", "image": "https://example.com/chicken-bucket-meal.jpg", "variants": [{ "type": "5 pcs", "price": 599 }, { "type": "10 pcs", "price": 999 }] },
            { "id": 1507, "name": "Popcorn Chicken Meal", "description": "Popcorn chicken with fries and drink", "image": "https://example.com/popcorn-meal.jpg", "variants": [{ "type": "Regular", "price": 249 }, { "type": "Large", "price": 349 }] },
            { "id": 1508, "name": "Chicken Roll", "description": "Chicken wrapped in paratha", "image": "https://example.com/chicken-roll.jpg", "variants": [{ "type": "Regular", "price": 139 }, { "type": "Large", "price": 189 }] },
            { "id": 1509, "name": "Chicken Rice Bowl", "description": "Chicken with rice bowl", "image": "https://example.com/chicken-rice-bowl.jpg", "variants": [{ "type": "Regular", "price": 179 }, { "type": "Large", "price": 249 }] },
            { "id": 1510, "name": "Chicken Nachos", "description": "Nachos with chicken and cheese", "image": "https://example.com/chicken-nachos.jpg", "variants": [{ "type": "Regular", "price": 199 }, { "type": "Large", "price": 299 }] }
          ]
        }
      ]
    },
    {
      "id": 16,
      "name": "Subway",
      "cuisines": ["Sandwich", "Healthy", "Fast Food"],
      "specialty": "Customizable submarine sandwiches",
      "categories": [
        {
          "name": "Subs",
          "dishes": [
            { "id": 1601, "name": "Veggie Delight", "description": "Fresh vegetables with choice of bread and sauces", "image": "https://example.com/veggie-delight.jpg", "variants": [{ "type": "6 inch", "price": 149 }, { "type": "Footlong", "price": 269 }] },
            { "id": 1602, "name": "Chicken Teriyaki", "description": "Teriyaki-glazed chicken with veggies", "image": "https://example.com/chicken-teriyaki.jpg", "variants": [{ "type": "6 inch", "price": 199 }, { "type": "Footlong", "price": 359 }] },
            { "id": 1603, "name": "Paneer Tikka Sub", "description": "Paneer tikka with veggies", "image": "https://example.com/paneer-tikka-sub.jpg", "variants": [{ "type": "6 inch", "price": 179 }, { "type": "Footlong", "price": 329 }] },
            { "id": 1604, "name": "Chicken Ham Sub", "description": "Chicken ham with veggies", "image": "https://example.com/chicken-ham.jpg", "variants": [{ "type": "6 inch", "price": 189 }, { "type": "Footlong", "price": 349 }] },
            { "id": 1605, "name": "Tuna Sub", "description": "Tuna with veggies", "image": "https://example.com/tuna-sub.jpg", "variants": [{ "type": "6 inch", "price": 209 }, { "type": "Footlong", "price": 379 }] },
            { "id": 1606, "name": "Egg Mayo Sub", "description": "Egg mayo with veggies", "image": "https://example.com/egg-mayo.jpg", "variants": [{ "type": "6 inch", "price": 159 }, { "type": "Footlong", "price": 289 }] },
            { "id": 1607, "name": "Chicken Slice Sub", "description": "Chicken slice with veggies", "image": "https://example.com/chicken-slice.jpg", "variants": [{ "type": "6 inch", "price": 179 }, { "type": "Footlong", "price": 329 }] },
            { "id": 1608, "name": "Mexican Fiesta", "description": "Spicy Mexican-style sub", "image": "https://example.com/mexican-fiesta.jpg", "variants": [{ "type": "6 inch", "price": 189 }, { "type": "Footlong", "price": 349 }] },
            { "id": 1609, "name": "Cheese and Veg Sub", "description": "Cheese with veggies", "image": "https://example.com/cheese-veg.jpg", "variants": [{ "type": "6 inch", "price": 169 }, { "type": "Footlong", "price": 309 }] },
            { "id": 1610, "name": "Chicken Seekh Sub", "description": "Chicken seekh with veggies", "image": "https://example.com/chicken-seekh-sub.jpg", "variants": [{ "type": "6 inch", "price": 199 }, { "type": "Footlong", "price": 359 }] }
          ]
        }
      ]
    },
    {
      "id": 17,
      "name": "Chili's",
      "cuisines": ["American", "Mexican", "Tex-Mex"],
      "specialty": "Tex-Mex and American grill",
      "categories": [
        {
          "name": "Grills",
          "dishes": [
            { "id": 1701, "name": "Baby Back Ribs", "description": "Slow-cooked ribs with BBQ sauce", "image": "https://example.com/baby-back-ribs.jpg", "variants": [{ "type": "Half Rack", "price": 549 }, { "type": "Full Rack", "price": 899 }] },
            { "id": 1702, "name": "Grilled Chicken", "description": "Herb-grilled chicken breast", "image": "https://example.com/grilled-chicken.jpg", "variants": [{ "type": "Single", "price": 399 }, { "type": "Double", "price": 699 }] },
            { "id": 1703, "name": "Steak", "description": "Grilled steak with pepper sauce", "image": "https://example.com/steak.jpg", "variants": [{ "type": "Regular", "price": 699 }, { "type": "Large", "price": 999 }] },
            { "id": 1704, "name": "Chicken Fajita", "description": "Sizzling chicken fajita", "image": "https://example.com/chicken-fajita.jpg", "variants": [{ "type": "Regular", "price": 449 }, { "type": "Large", "price": 649 }] },
            { "id": 1705, "name": "Veg Fajita", "description": "Sizzling veg fajita", "image": "https://example.com/veg-fajita.jpg", "variants": [{ "type": "Regular", "price": 379 }, { "type": "Large", "price": 549 }] },
            { "id": 1706, "name": "Chicken Quesadilla", "description": "Grilled chicken quesadilla", "image": "https://example.com/chicken-quesadilla.jpg", "variants": [{ "type": "Regular", "price": 399 }, { "type": "Large", "price": 599 }] },
            { "id": 1707, "name": "Veg Quesadilla", "description": "Grilled veg quesadilla", "image": "https://example.com/veg-quesadilla.jpg", "variants": [{ "type": "Regular", "price": 349 }, { "type": "Large", "price": 529 }] },
            { "id": 1708, "name": "Chicken Wings", "description": "BBQ chicken wings", "image": "https://example.com/chicken-wings.jpg", "variants": [{ "type": "6 pcs", "price": 349 }, { "type": "12 pcs", "price": 649 }] },
            { "id": 1709, "name": "Nachos", "description": "Loaded nachos with cheese", "image": "https://example.com/nachos.jpg", "variants": [{ "type": "Veg", "price": 299 }, { "type": "Chicken", "price": 399 }] },
            { "id": 1710, "name": "Burger", "description": "Classic American burger", "image": "https://example.com/burger.jpg", "variants": [{ "type": "Veg", "price": 299 }, { "type": "Chicken", "price": 399 }, { "type": "Mutton", "price": 499 }] }
          ]
        }
      ]
    },
    {
      "id": 18,
      "name": "Naturals Ice Cream",
      "cuisines": ["Desserts", "Ice Cream"],
      "specialty": "Fresh fruit ice creams",
      "categories": [
        {
          "name": "Ice Cream",
          "dishes": [
            { "id": 1801, "name": "Sitaphal Ice Cream", "description": "Custard apple ice cream made with fresh fruit", "image": "https://example.com/sitaphal-icecream.jpg", "variants": [{ "type": "Single Scoop", "price": 60 }, { "type": "Double Scoop", "price": 110 }, { "type": "500ml Tub", "price": 350 }] },
            { "id": 1802, "name": "Mango Ice Cream", "description": "Fresh mango ice cream", "image": "https://example.com/mango-icecream.jpg", "variants": [{ "type": "Single Scoop", "price": 60 }, { "type": "Double Scoop", "price": 110 }, { "type": "500ml Tub", "price": 350 }] },
            { "id": 1803, "name": "Strawberry Ice Cream", "description": "Fresh strawberry ice cream", "image": "https://example.com/strawberry-icecream.jpg", "variants": [{ "type": "Single Scoop", "price": 60 }, { "type": "Double Scoop", "price": 110 }, { "type": "500ml Tub", "price": 350 }] },
            { "id": 1804, "name": "Tender Coconut Ice Cream", "description": "Tender coconut ice cream", "image": "https://example.com/tender-coconut.jpg", "variants": [{ "type": "Single Scoop", "price": 70 }, { "type": "Double Scoop", "price": 130 }, { "type": "500ml Tub", "price": 380 }] },
            { "id": 1805, "name": "Jackfruit Ice Cream", "description": "Jackfruit ice cream", "image": "https://example.com/jackfruit-icecream.jpg", "variants": [{ "type": "Single Scoop", "price": 70 }, { "type": "Double Scoop", "price": 130 }, { "type": "500ml Tub", "price": 380 }] },
            { "id": 1806, "name": "Chikoo Ice Cream", "description": "Chikoo ice cream", "image": "https://example.com/chikoo-icecream.jpg", "variants": [{ "type": "Single Scoop", "price": 60 }, { "type": "Double Scoop", "price": 110 }, { "type": "500ml Tub", "price": 350 }] },
            { "id": 1807, "name": "Guava Ice Cream", "description": "Guava ice cream", "image": "https://example.com/guava-icecream.jpg", "variants": [{ "type": "Single Scoop", "price": 60 }, { "type": "Double Scoop", "price": 110 }, { "type": "500ml Tub", "price": 350 }] },
            { "id": 1808, "name": "Pineapple Ice Cream", "description": "Pineapple ice cream", "image": "https://example.com/pineapple-icecream.jpg", "variants": [{ "type": "Single Scoop", "price": 60 }, { "type": "Double Scoop", "price": 110 }, { "type": "500ml Tub", "price": 350 }] },
            { "id": 1809, "name": "Watermelon Ice Cream", "description": "Watermelon ice cream", "image": "https://example.com/watermelon-icecream.jpg", "variants": [{ "type": "Single Scoop", "price": 60 }, { "type": "Double Scoop", "price": 110 }, { "type": "500ml Tub", "price": 350 }] },
            { "id": 1810, "name": "Banana Ice Cream", "description": "Banana ice cream", "image": "https://example.com/banana-icecream.jpg", "variants": [{ "type": "Single Scoop", "price": 60 }, { "type": "Double Scoop", "price": 110 }, { "type": "500ml Tub", "price": 350 }] }
          ]
        }
      ]
    },
    {
      "id": 19,
      "name": "Beijing Bites",
      "cuisines": ["Chinese", "Asian"],
      "specialty": "Indo-Chinese cuisine",
      "categories": [
        {
          "name": "Rice & Noodles",
          "dishes": [
            { "id": 1901, "name": "Fried Rice", "description": "Wok-tossed rice with vegetables and soy sauce", "image": "https://example.com/fried-rice.jpg", "variants": [{ "type": "Veg", "price": 179 }, { "type": "Egg", "price": 219 }, { "type": "Chicken", "price": 259 }, { "type": "Prawn", "price": 329 }] },
            { "id": 1902, "name": "Hakka Noodles", "description": "Stir-fried noodles", "image": "https://example.com/hakka-noodles.jpg", "variants": [{ "type": "Veg", "price": 189 }, { "type": "Egg", "price": 229 }, { "type": "Chicken", "price": 269 }, { "type": "Prawn", "price": 339 }] },
            { "id": 1903, "name": "Schezwan Fried Rice", "description": "Spicy schezwan fried rice", "image": "https://example.com/schezwan-fried-rice.jpg", "variants": [{ "type": "Veg", "price": 199 }, { "type": "Chicken", "price": 279 }, { "type": "Prawn", "price": 349 }] },
            { "id": 1904, "name": "Schezwan Noodles", "description": "Spicy schezwan noodles", "image": "https://example.com/schezwan-noodles.jpg", "variants": [{ "type": "Veg", "price": 209 }, { "type": "Chicken", "price": 289 }, { "type": "Prawn", "price": 359 }] },
            { "id": 1905, "name": "Burnt Garlic Rice", "description": "Rice with burnt garlic", "image": "https://example.com/burnt-garlic-rice.jpg", "variants": [{ "type": "Veg", "price": 199 }, { "type": "Chicken", "price": 279 }] },
            { "id": 1906, "name": "Chilli Garlic Noodles", "description": "Spicy chilli garlic noodles", "image": "https://example.com/chilli-garlic-noodles.jpg", "variants": [{ "type": "Veg", "price": 209 }, { "type": "Chicken", "price": 289 }] },
            { "id": 1907, "name": "Singapore Noodles", "description": "Curry-flavored rice noodles", "image": "https://example.com/singapore-noodles.jpg", "variants": [{ "type": "Veg", "price": 219 }, { "type": "Chicken", "price": 299 }, { "type": "Prawn", "price": 369 }] },
            { "id": 1908, "name": "Triple Schezwan Rice", "description": "Rice with schezwan sauce and toppings", "image": "https://example.com/triple-schezwan.jpg", "variants": [{ "type": "Veg", "price": 249 }, { "type": "Chicken", "price": 329 }] },
            { "id": 1909, "name": "Manchurian Rice", "description": "Rice with manchurian gravy", "image": "https://example.com/manchurian-rice.jpg", "variants": [{ "type": "Veg", "price": 229 }, { "type": "Chicken", "price": 309 }] },
            { "id": 1910, "name": "Cantonese Noodles", "description": "Cantonese-style noodles", "image": "https://example.com/cantonese-noodles.jpg", "variants": [{ "type": "Veg", "price": 219 }, { "type": "Chicken", "price": 299 }] }
          ]
        }
      ]
    },
    {
      "id": 20,
      "name": "Giani's",
      "cuisines": ["Desserts", "Ice Cream", "Sweets"],
      "specialty": "Kulfi and traditional Indian sweets",
      "categories": [
        {
          "name": "Kulfi",
          "dishes": [
            { "id": 2001, "name": "Matka Kulfi", "description": "Traditional kulfi served in clay pot", "image": "https://example.com/matka-kulfi.jpg", "variants": [{ "type": "Regular", "price": 80 }, { "type": "Dry Fruit Topping", "price": 120 }] },
            { "id": 2002, "name": "Malai Kulfi", "description": "Creamy malai kulfi", "image": "https://example.com/malai-kulfi.jpg", "variants": [{ "type": "Regular", "price": 80 }, { "type": "Dry Fruit Topping", "price": 120 }] },
            { "id": 2003, "name": "Pista Kulfi", "description": "Pistachio kulfi", "image": "https://example.com/pista-kulfi.jpg", "variants": [{ "type": "Regular", "price": 90 }, { "type": "Dry Fruit Topping", "price": 130 }] },
            { "id": 2004, "name": "Kesar Kulfi", "description": "Saffron kulfi", "image": "https://example.com/kesar-kulfi.jpg", "variants": [{ "type": "Regular", "price": 90 }, { "type": "Dry Fruit Topping", "price": 130 }] },
            { "id": 2005, "name": "Mango Kulfi", "description": "Mango kulfi", "image": "https://example.com/mango-kulfi.jpg", "variants": [{ "type": "Regular", "price": 80 }, { "type": "Dry Fruit Topping", "price": 120 }] },
            { "id": 2006, "name": "Chocolate Kulfi", "description": "Chocolate kulfi", "image": "https://example.com/chocolate-kulfi.jpg", "variants": [{ "type": "Regular", "price": 90 }, { "type": "Dry Fruit Topping", "price": 130 }] },
            { "id": 2007, "name": "Rose Kulfi", "description": "Rose-flavored kulfi", "image": "https://example.com/rose-kulfi.jpg", "variants": [{ "type": "Regular", "price": 80 }, { "type": "Dry Fruit Topping", "price": 120 }] },
            { "id": 2008, "name": "Badam Kulfi", "description": "Almond kulfi", "image": "https://example.com/badam-kulfi.jpg", "variants": [{ "type": "Regular", "price": 90 }, { "type": "Dry Fruit Topping", "price": 130 }] },
            { "id": 2009, "name": "Kaju Kulfi", "description": "Cashew kulfi", "image": "https://example.com/kaju-kulfi.jpg", "variants": [{ "type": "Regular", "price": 90 }, { "type": "Dry Fruit Topping", "price": 130 }] },
            { "id": 2010, "name": "Anjeer Kulfi", "description": "Fig kulfi", "image": "https://example.com/anjeer-kulfi.jpg", "variants": [{ "type": "Regular", "price": 100 }, { "type": "Dry Fruit Topping", "price": 140 }] }
          ]
        }
      ]
    }
  ]
