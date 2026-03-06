import tteokgukMain from '../assets/recipes/tteokguk_v2.jpg'
import temple1 from '../assets/recipes/temple_1.png'
import temple2 from '../assets/recipes/temple_2.jpg'

export const RECIPES = [
    {
        id: "vegan-tteokguk",
        title: "Vegan Tteokguk",
        featured: true,
        course: "Main, Side Dish",
        cuisine: "Korean, Vegan, Gluten-free",
        keyword: "korean, rice cake, soup, Tteokguk",
        totalTime: "5~10 Minutes",
        servings: "1-2 Servings",
        image: tteokgukMain,
        blogTitle: "Seollal and a Vegan Tteokguk: Tradition, Meaning, and a Plant-Based Table",
        blogPassage: `Seollal is the Korean Lunar New Year—one of the most important holidays in Korea. It marks not just the beginning of a new calendar year, but a symbolic reset: honoring ancestors, gathering with family, and stepping into the year with intention.

At the center of the Seollal table is **tteokguk** —a rice cake soup traditionally made with beef broth and thinly sliced garaetteok (cylindrical rice cakes). Eating tteokguk is more than a meal; it represents turning a year older and welcoming prosperity. The coin-shaped rice cakes symbolize wealth and good fortune.

This blog reimagines that tradition through a plant-based lens.`,
        whyVeganTitle: "Why Vegan Tteokguk?",
        whyVeganPassage: `Traditional tteokguk relies on beef for depth and umami. But Korean cuisine already has a strong foundation of plant-based flavors: kelp broth, dried shiitake mushrooms, fermented soy products, and sesame oil. A vegan version does not dilute tradition—it highlights an older, seasonal logic rooted in vegetables and grains.

By building the broth with:

- **Dashima (kelp)**
- Dried shiitake mushrooms
- Soy sauce and toasted sesame oil

we create a clean, savory base that honors the spirit of the dish while aligning with a plant-based lifestyle.`,
        templeImages: [temple1, temple2],
        representsTitle: "What This Recipe Represents",
        representsPassage: `This vegan tteokguk is not just a substitute. It reflects:

- **Continuity** – Preserving cultural rituals.
- **Adaptation** – Evolving tradition without losing meaning.
- **Intention** – Beginning the year with values aligned to sustainability and compassion.

Seollal is about renewal. A plant-based tteokguk becomes part of that renewal—lighter on the body, gentler on the planet, and still deeply rooted in Korean heritage.`,
        representsImages: [tteokgukMain, temple1], // Placeholders: tteokguk_v2 and temple_1
        ingredients: [],
        instructions: [],
        footerMessage: "Stay tuned for the full recipe!"
    }
];
