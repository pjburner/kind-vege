import { useState } from 'react'
import FloatingElements from './components/FloatingElements'
import AsciiFlowTrail from './components/AsciiFlowTrail'
import BlobButton from './components/BlobButton'
import { ArrowLeft, Check, ChevronDown, Clock, Users, Flame } from 'lucide-react'

// Placeholder for the hero image since I couldn't directly access the chat image.
// Please replace this URL with the actual path to your dish image when ready!
const HERO_IMAGE = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"

const INGREDIENTS = [
    "1 cup quinoa, rinsed",
    "2 cups vegetable broth",
    "1 medium sweet potato, cubed",
    "1 can (15oz) chickpeas, rinsed and drained",
    "2 cups kale, chopped",
    "1/4 cup tahini",
    "2 tbsp lemon juice",
    "1 clove garlic, minced",
    "Salt and pepper to taste",
    "Olive oil for roasting"
]

const INSTRUCTIONS = [
    "Preheat oven to 400°F (200°C). Toss sweet potatoes and chickpeas with olive oil, salt, and pepper. Roast for 25-30 minutes until golden and tender.",
    "In a medium saucepan, combine quinoa and vegetable broth. Bring to a boil, then reduce heat, cover, and simmer for 15 minutes or until liquid is absorbed.",
    "In a small bowl, whisk together tahini, lemon juice, minced garlic, and 2-3 tablespoons of warm water until smooth and creamy. Season with salt.",
    "Massage the chopped kale with a little olive oil or lemon juice for 1-2 minutes until it softens and turns bright green.",
    "Assemble the bowls: divide the cooked quinoa, roasted sweet potatoes, chickpeas, and massaged kale among serving bowls. Drizzle generously with the tahini dressing."
]

function RecipesApp() {
    const [checkedIngredients, setCheckedIngredients] = useState(new Set());

    const toggleIngredient = (idx) => {
        const newChecked = new Set(checkedIngredients);
        if (newChecked.has(idx)) {
            newChecked.delete(idx);
        } else {
            newChecked.add(idx);
        }
        setCheckedIngredients(newChecked);
    };

    const scrollToRecipe = (e) => {
        e.preventDefault();
        document.getElementById('recipe-details').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#2DB9A5] text-white overflow-x-hidden font-sans selection:bg-[#FFB8A5] selection:text-white">
            <FloatingElements />
            <AsciiFlowTrail />

            {/* Header (Navbar) */}
            <nav className="fixed w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-plus-lighter pointer-events-none">
                <a href="/index.html" className="flex items-center gap-2 pointer-events-auto transition-transform hover:scale-105">
                    <div className="text-4xl font-bold logo-kind-vege text-[#FFB8A5]">Kind<span className="text-[#B2EDE0]">Vege</span></div>
                </a>

                <div className="hidden md:flex items-center gap-4 pointer-events-auto">
                    <a href="/index.html" className="flex items-center gap-2 text-white hover:text-[#FFB8A5] transition-colors font-medium mr-4">
                        <ArrowLeft size={18} />
                        Back to Home
                    </a>
                    <a href="/recipes.html" className="btn-new-transparent h-10 px-6 bg-[#FFB8A5]/20 backdrop-blur-md border-[#FFB8A5]/40 text-[#FFB8A5] hover:bg-[#FFB8A5] hover:text-white transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                        Recipes
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </a>
                </div>
            </nav>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">

                    {/* Hero Section */}
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl">
                        <div className="relative h-[60vh] w-full">
                            <img
                                src={HERO_IMAGE}
                                alt="Delicious Vegan Dish"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB8A5]/90 text-white uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-6">
                                    <Flame size={14} />
                                    Featured Recipe
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold heading-bubbly text-[#FFB8A5] mb-6 leading-tight">
                                    Nourishing Earth Bowl
                                </h1>

                                <div className="flex flex-wrap items-center gap-6 text-white/90 font-medium mb-8">
                                    <div className="flex items-center gap-2">
                                        <Clock className="text-[#B2EDE0]" size={20} />
                                        <span>45 Mins</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="text-[#B2EDE0]" size={20} />
                                        <span>2 Servings</span>
                                    </div>
                                </div>

                                <button
                                    onClick={scrollToRecipe}
                                    className="group flex items-center gap-3 bg-white text-[#2DB9A5] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#B2EDE0] transition-colors duration-300 shadow-lg"
                                >
                                    Jump to Recipe
                                    <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Recipe Details Section */}
                        <div id="recipe-details" className="p-8 md:p-12 lg:p-16 bg-white text-[#0F4C5C]">
                            <div className="grid md:grid-cols-3 gap-16">

                                {/* Ingredients Sidebar */}
                                <div className="md:col-span-1">
                                    <h3 className="text-3xl font-bold heading-bubbly text-[#2DB9A5] mb-8">Ingredients</h3>
                                    <div className="space-y-4">
                                        {INGREDIENTS.map((ingredient, idx) => (
                                            <label
                                                key={idx}
                                                className="flex items-start gap-4 cursor-pointer group p-3 rounded-xl hover:bg-black/5 transition-colors"
                                            >
                                                <div className={`mt-1 w-6 h-6 rounded flex-shrink-0 border-2 flex items-center justify-center transition-colors ${checkedIngredients.has(idx) ? 'bg-[#FFB8A5] border-[#FFB8A5]' : 'border-[#2DB9A5] group-hover:border-[#FFB8A5]'}`}>
                                                    {checkedIngredients.has(idx) && <Check size={16} className="text-white" />}
                                                </div>
                                                <span className={`text-lg leading-relaxed transition-all ${checkedIngredients.has(idx) ? 'line-through text-black/40' : 'text-black/80 font-medium'}`}>
                                                    {ingredient}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Instructions Main area */}
                                <div className="md:col-span-2">
                                    <h3 className="text-3xl font-bold heading-bubbly text-[#2DB9A5] mb-8">Instructions</h3>
                                    <div className="space-y-10">
                                        {INSTRUCTIONS.map((step, idx) => (
                                            <div key={idx} className="flex gap-6 group">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 rounded-full bg-[#B2EDE0] text-[#2DB9A5] flex items-center justify-center text-xl font-bold group-hover:bg-[#FFB8A5] group-hover:text-white transition-colors duration-300">
                                                        {idx + 1}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-black/80 leading-relaxed pt-2 font-medium">
                                                        {step}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Enjoy footer message */}
                                    <div className="mt-16 p-8 bg-[#2DB9A5]/10 rounded-3xl border border-[#2DB9A5]/20 text-center">
                                        <h4 className="text-2xl font-bold heading-bubbly text-[#FFB8A5] mb-2">Bon Appétit!</h4>
                                        <p className="text-black/60 font-medium">Share your creation on Instagram and tag us at @kind_vege!</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#0b3842] text-white py-20 px-6 border-t border-white/5 relative z-10 mt-12">
                <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    <div className="uppercase tracking-widest text-xs">Based in Korea</div>
                    <div className="uppercase tracking-widest text-xs">© 2026 Minjoo Cho</div>
                </div>
            </footer>

        </div>
    )
}

export default RecipesApp
