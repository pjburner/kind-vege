import { useState, useMemo } from 'react'
import FloatingElements from './components/FloatingElements'
import AsciiFlowTrail from './components/AsciiFlowTrail'
import BlobButton from './components/BlobButton'
import { ArrowLeft, Check, ChevronDown, Clock, Users, Flame } from 'lucide-react'
import { RECIPES } from './data/recipesData'
import authorImage from './assets/recipes/minjoo_author.png'

function RecipesApp() {
    const [activeRecipeId, setActiveRecipeId] = useState(null);
    const [checkedIngredients, setCheckedIngredients] = useState(new Set());

    // Get the current active recipe
    const activeRecipe = useMemo(() =>
        RECIPES.find(r => r.id === activeRecipeId) || null
        , [activeRecipeId]);

    const handleRecipeClick = (id) => {
        setActiveRecipeId(id);
        setCheckedIngredients(new Set()); // Reset checks for new recipe

        // Scroll to details with better offset
        setTimeout(() => {
            const element = document.getElementById('recipe-details');
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 300); // Increased delay for smoother transition
    };

    const toggleIngredient = (id) => {
        const newChecked = new Set(checkedIngredients);
        if (newChecked.has(id)) {
            newChecked.delete(id);
        } else {
            newChecked.add(id);
        }
        setCheckedIngredients(newChecked);
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
                </div>
            </nav>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Gallery Title */}
                    <div className="mb-20 text-center">
                        <h1 className="text-6xl md:text-8xl font-bold heading-bubbly text-white mb-6">
                            The <span className="text-[#FFB8A5]">Recipes</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium">
                            Click a recipe card to explore intentional, plant-based Korean flavors.
                        </p>
                    </div>

                    {/* Recipe Grid System */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {RECIPES.map((r, idx) => (
                            <button
                                key={r.id}
                                onClick={() => handleRecipeClick(r.id)}
                                className={`group relative rounded-[2.5rem] overflow-hidden bg-white/10 border transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${activeRecipeId === r.id ? 'border-[#FFB8A5] ring-4 ring-[#FFB8A5]/20 shadow-xl' : 'border-white/20 hover:border-white/40'}`}
                            >
                                <div className="aspect-[4/5] relative">
                                    <img
                                        src={r.image}
                                        alt={r.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 w-full p-8 text-left">
                                        <div className="text-[#B2EDE0] text-xs font-bold tracking-[0.2em] uppercase mb-2">#{idx + 1} Recipe</div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                            {r.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-white/70 text-sm font-medium">
                                            <div className="flex items-center gap-1.5"><Clock size={16} className="text-[#FFB8A5]" /> {r.totalTime}</div>
                                            <div className="flex items-center gap-1.5 uppercase tracking-tighter">{r.cuisine}</div>
                                        </div>
                                    </div>
                                </div>
                                {activeRecipeId === r.id && (
                                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FFB8A5] flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                                        <Check className="text-white" size={24} />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Recipe Detail View (Conditional) */}
                    {activeRecipe ? (
                        <div id="recipe-details" className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-700 relative">
                            
                            {/* Visual Recipe Header */}
                            <div className="relative min-h-[45vh] py-16 w-full flex flex-col items-center justify-center">
                                <img
                                    src={activeRecipe.image}
                                    alt={activeRecipe.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
                                <div className="relative z-10 flex flex-col items-center justify-center px-6 py-6 text-center max-w-5xl mx-auto w-full">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFB8A5] text-white uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-4 shadow-md mt-6">
                                        Selected Recipe
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-bold heading-bubbly text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-6 leading-tight text-balance">
                                        {activeRecipe.title}
                                    </h1>
                                    {activeRecipe.dietary && (
                                        <div className="px-5 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-bold text-[10px] md:text-xs mb-8 shadow-lg">
                                            {activeRecipe.dietary}
                                        </div>
                                    )}
                                    <div className="flex flex-wrap justify-center gap-4 relative z-20">
                                        <button 
                                            onClick={() => {
                                                const el = document.getElementById('ingredients-section');
                                                if(el) {
                                                    const headerOffset = 100;
                                                    const elementPosition = el.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                                    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
                                                }
                                            }}
                                            className="px-6 py-3 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/40 text-white uppercase tracking-widest hover:bg-white/30 hover:scale-105 transition-all shadow-xl"
                                        >
                                            Ingredients
                                        </button>
                                        <button 
                                            onClick={() => {
                                                const el = document.getElementById('instructions-section');
                                                if(el) {
                                                    const headerOffset = 100;
                                                    const elementPosition = el.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                                    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
                                                }
                                            }}
                                            className="px-6 py-3 rounded-full text-xs font-bold bg-[#FFB8A5] border border-[#FFB8A5] text-white uppercase tracking-widest hover:bg-[#FFB8A5]/90 hover:scale-105 transition-all shadow-xl"
                                        >
                                            Jump to Recipe
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Blog/Context Section */}
                            {activeRecipe.blogTitle && (
                                <div className="p-6 md:p-8 lg:p-10 bg-white border-b border-black/5">
                                    <div className="max-w-3xl mx-auto">
                                        <h2 className="text-2xl md:text-4xl font-bold heading-bubbly text-[#2DB9A5] mb-4 leading-tight">
                                            {activeRecipe.blogTitle}
                                        </h2>
                                        <div className="space-y-4 text-black/80 font-medium text-sm md:text-base leading-relaxed">
                                            {activeRecipe.blogPassage.split('\n\n').map((p, i) => (
                                                <p key={i}>
                                                    {p.split('**').map((part, pi) => pi % 2 === 1 ? <strong key={pi} className="text-[#FFB8A5]">{part}</strong> : part)}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Optional Variant Images (e.g. Basic vs Savory) */}
                                        {activeRecipe.variantImages && activeRecipe.variantImages.length > 0 && (
                                            <div className="mt-8">
                                                <h3 className="text-lg font-bold text-[#2DB9A5] mb-4 uppercase tracking-widest">
                                                    {activeRecipe.variantTitle || "Gallery / 갤러리"}
                                                </h3>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                    {activeRecipe.variantImages.map((img, i) => (
                                                        <div key={i} className="group relative aspect-square rounded-xl overflow-hidden shadow-sm border border-black/5 hover:scale-[1.05] transition-transform duration-500">
                                                            <img src={img} alt={`Gallery item ${i + 1}`} className="w-full h-full object-cover" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Optional Temple Images */}
                                        {activeRecipe.templeImages && activeRecipe.templeImages.length > 0 && (
                                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {activeRecipe.templeImages.map((img, i) => (
                                                    <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:scale-[1.02] transition-transform duration-500">
                                                        <img src={img} alt={`Tradition ${i + 1}`} className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Why Vegan Section */}
                                        {activeRecipe.whyVeganTitle && (
                                            <div className="mt-10 pt-8 border-t border-black/5">
                                                <h2 className="text-2xl md:text-4xl font-bold heading-bubbly text-[#FFB8A5] mb-4 leading-tight">
                                                    {activeRecipe.whyVeganTitle}
                                                </h2>
                                                <div className="space-y-4 text-black/80 font-medium text-sm md:text-base leading-relaxed">
                                                    {activeRecipe.whyVeganPassage.split('\n\n').map((paragraph, idx) => {
                                                        if (paragraph.trim().startsWith('-')) {
                                                            return (
                                                                <ul key={idx} className="space-y-2 pl-4">
                                                                    {paragraph.split('\n').map((item, i) => (
                                                                        <li key={i} className="flex items-start gap-2">
                                                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2DB9A5] flex-shrink-0" />
                                                                            <span>{item.replace(/^- /, '').split('**').map((part, pi) => pi % 2 === 1 ? <strong key={pi} className="text-[#2DB9A5]">{part}</strong> : part)}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            );
                                                        }
                                                        return <p key={idx}>{paragraph.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-[#2DB9A5]">{part}</strong> : part)}</p>;
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {/* Represents Section */}
                                        {activeRecipe.representsTitle && (
                                            <div className="mt-10 pt-8 border-t border-black/5">
                                                <h2 className="text-2xl md:text-4xl font-bold heading-bubbly text-[#2DB9A5] mb-4 leading-tight">
                                                    {activeRecipe.representsTitle}
                                                </h2>
                                                <div className="space-y-4 text-black/80 font-medium text-sm md:text-base leading-relaxed">
                                                    {activeRecipe.representsPassage.split('\n\n').map((paragraph, idx) => {
                                                        if (paragraph.trim().startsWith('-')) {
                                                            return (
                                                                <ul key={idx} className="space-y-2 pl-4">
                                                                    {paragraph.split('\n').map((item, i) => (
                                                                        <li key={i} className="flex items-start gap-3">
                                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded bg-[#FFB8A5] flex-shrink-0 rotate-45" />
                                                                            <span>{item.replace(/^- /, '').split('**').map((part, pi) => pi % 2 === 1 ? <strong key={pi} className="text-[#FFB8A5]">{part}</strong> : part)}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            );
                                                        }
                                                        return <p key={idx}>{paragraph.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-[#FFB8A5]">{part}</strong> : part)}</p>;
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Recipe Steps & Ingredients */}
                            <div className="p-6 md:p-8 lg:p-10 bg-[#FDFBF7] text-[#0F4C5C]">
                                
                                {/* ENGLISH SECTION */}
                                <div className="mb-10">
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        
                                        {/* Sidebar: English Ingredients */}
                                        <div id="ingredients-section" className="lg:col-span-1">
                                            <h3 className="text-2xl font-bold heading-bubbly text-[#FFB8A5] mb-4 pb-2 border-b border-[#FFB8A5]/20">Ingredients</h3>
                                            <ul className="space-y-2">
                                                {activeRecipe.ingredients.map((ing, i) => {
                                                    const isHeader = ing.startsWith('---');
                                                    if (isHeader) {
                                                        return (
                                                            <li key={i} className="mt-4 mb-2 font-bold text-[#FFB8A5] text-xs md:text-sm tracking-widest uppercase">
                                                                {ing.replace(/---/g, '').trim()}
                                                            </li>
                                                        );
                                                    }
                                                    return (
                                                        <label key={`en-${i}`} className="flex items-start gap-3 cursor-pointer group hover:bg-[#FFB8A5]/5 p-2 rounded-lg transition-colors border-b border-black/5 last:border-0">
                                                            <div onClick={() => toggleIngredient(`en-${i}`)} className={`mt-0.5 w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-colors ${checkedIngredients.has(`en-${i}`) ? 'bg-[#FFB8A5] border-[#FFB8A5]' : 'border-black/20 group-hover:border-[#FFB8A5]'}`}>
                                                                {checkedIngredients.has(`en-${i}`) && <Check size={12} className="text-white" />}
                                                            </div>
                                                            <span className={`text-sm leading-snug transition-all ${checkedIngredients.has(`en-${i}`) ? 'line-through text-black/30' : 'text-black/80 font-medium'}`}>
                                                                {ing}
                                                            </span>
                                                        </label>
                                                    );
                                                })}
                                            </ul>
                                        </div>

                                        {/* Main: English Instructions */}
                                        <div id="instructions-section" className="lg:col-span-2">
                                            <h3 className="text-2xl font-bold heading-bubbly text-[#FFB8A5] mb-4 pb-2 border-b border-[#FFB8A5]/20">Instructions</h3>
                                            <div className="space-y-3">
                                                {activeRecipe.instructions.map((step, idx) => (
                                                    <div key={idx} className="flex gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
                                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#FFB8A5]/10 flex items-center justify-center font-bold text-[#FFB8A5] text-base md:text-lg flex-shrink-0 group-hover:bg-[#FFB8A5] group-hover:text-white transition-colors">
                                                            {idx + 1}
                                                        </div>
                                                        <p className="text-sm md:text-base text-black/80 leading-relaxed font-medium pt-0.5">{step}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* KOREAN SECTION */}
                                {activeRecipe.ingredients_ko && activeRecipe.instructions_ko && (
                                    <div className="mt-10 pt-10 border-t border-black/5">
                                        <div className="grid lg:grid-cols-3 gap-8">
                                            
                                            {/* Sidebar: Korean Ingredients */}
                                            <div className="lg:col-span-1">
                                                <h3 className="text-2xl font-bold heading-bubbly text-[#2DB9A5] mb-4 pb-2 border-b border-[#2DB9A5]/20">재료</h3>
                                                <ul className="space-y-2">
                                                    {activeRecipe.ingredients_ko.map((ing, i) => {
                                                        const isHeader = ing.startsWith('---');
                                                        if (isHeader) {
                                                            return (
                                                                <li key={i} className="mt-4 mb-2 font-bold text-[#2DB9A5] text-xs md:text-sm tracking-widest uppercase">
                                                                    {ing.replace(/---/g, '').trim()}
                                                                </li>
                                                            );
                                                        }
                                                        return (
                                                            <label key={`ko-${i}`} className="flex items-start gap-3 cursor-pointer group hover:bg-[#2DB9A5]/5 p-2 rounded-lg transition-colors border-b border-black/5 last:border-0">
                                                                <div onClick={() => toggleIngredient(`ko-${i}`)} className={`mt-0.5 w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-colors ${checkedIngredients.has(`ko-${i}`) ? 'bg-[#2DB9A5] border-[#2DB9A5]' : 'border-black/20 group-hover:border-[#2DB9A5]'}`}>
                                                                    {checkedIngredients.has(`ko-${i}`) && <Check size={12} className="text-white" />}
                                                                </div>
                                                                <span className={`text-sm leading-snug transition-all ${checkedIngredients.has(`ko-${i}`) ? 'line-through text-black/30' : 'text-black/80 font-medium'}`}>
                                                                    {ing}
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                </ul>
                                            </div>

                                            {/* Main: Korean Instructions */}
                                            <div className="lg:col-span-2">
                                                <h3 className="text-2xl font-bold heading-bubbly text-[#2DB9A5] mb-4 pb-2 border-b border-[#2DB9A5]/20">레시피</h3>
                                                <div className="space-y-3">
                                                    {activeRecipe.instructions_ko.map((step, idx) => (
                                                        <div key={idx} className="flex gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
                                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2DB9A5]/10 flex items-center justify-center font-bold text-[#2DB9A5] text-base md:text-lg flex-shrink-0 group-hover:bg-[#2DB9A5] group-hover:text-white transition-colors">
                                                                {idx + 1}
                                                            </div>
                                                            <p className="text-sm md:text-base text-black/80 leading-relaxed font-medium pt-0.5">{step}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Footer Message Block */}
                                <div className="mt-12 p-6 md:p-8 bg-[#2DB9A5] rounded-3xl shadow-xl hover:scale-[1.01] transition-transform duration-500 border border-[#B2EDE0]/30 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                                    <div className="flex-shrink-0">
                                        <img src={authorImage} alt="Minjoo" className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-[3px] border-white shadow-xl mx-auto md:mx-0" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <div className="w-12 h-1 bg-[#FFB8A5] mx-auto md:mx-0 rounded-full mb-4"></div>
                                        <h4 className="text-2xl md:text-4xl font-bold heading-bubbly text-white mb-2 leading-tight">
                                            {activeRecipe.footerMessage}
                                        </h4>
                                        <p className="text-[#B2EDE0] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Thank You & Enjoy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-white/10 border-dashed">
                            <p className="text-2xl text-white/40 font-medium">Please select a recipe above to see details</p>
                        </div>
                    )}

                </div>
            </main>

            <footer className="bg-[#0b3842] text-white py-20 px-6 border-t border-white/5 relative z-10 mt-12">
                <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    <div className="uppercase tracking-widest text-xs">Based in Korea</div>
                    <div className="uppercase tracking-widest text-xs">© 2026 Minjoo Cho</div>
                </div>
            </footer>
        </div>
    );
}

export default RecipesApp
