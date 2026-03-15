import { useState, useMemo } from 'react'
import FloatingElements from './components/FloatingElements'
import AsciiFlowTrail from './components/AsciiFlowTrail'
import BlobButton from './components/BlobButton'
import { ArrowLeft, Check, ChevronDown, Clock, Users, Flame } from 'lucide-react'
import { RECIPES } from './data/recipesData'

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

        // Scroll to details
        setTimeout(() => {
            const element = document.getElementById('recipe-details');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
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
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
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
                        <div id="recipe-details" className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-12 duration-700">

                            {/* Visual Recipe Header */}
                            <div className="relative h-[50vh] w-full">
                                <img
                                    src={activeRecipe.image}
                                    alt={activeRecipe.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB8A5]/90 text-white uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-6">
                                        Selected Recipe
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold heading-bubbly text-[#FFB8A5] mb-6 leading-tight max-w-4xl">
                                        {activeRecipe.title}
                                    </h1>
                                    {activeRecipe.dietary && (
                                        <div className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-bold text-sm">
                                            {activeRecipe.dietary}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Blog/Context Section */}
                            {activeRecipe.blogTitle && (
                                <div className="p-8 md:p-12 lg:p-16 bg-white border-b border-black/5">
                                    <div className="max-w-3xl mx-auto">
                                        <h2 className="text-3xl md:text-5xl font-bold heading-bubbly text-[#2DB9A5] mb-8 leading-tight">
                                            {activeRecipe.blogTitle}
                                        </h2>
                                        <div className="space-y-6 text-black/80 font-medium text-lg leading-relaxed">
                                            {activeRecipe.blogPassage.split('\n\n').map((p, i) => (
                                                <p key={i}>
                                                    {p.split('**').map((part, pi) => pi % 2 === 1 ? <strong key={pi} className="text-[#FFB8A5]">{part}</strong> : part)}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Optional Variant Images (e.g. Basic vs Savory) */}
                                        {activeRecipe.variantImages && activeRecipe.variantImages.length > 0 && (
                                            <div className="mt-12">
                                                <h3 className="text-xl font-bold text-[#2DB9A5] mb-6 uppercase tracking-widest">
                                                    {activeRecipe.variantTitle || "Gallery / 갤러리"}
                                                </h3>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {activeRecipe.variantImages.map((img, i) => (
                                                        <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:scale-[1.05] transition-transform duration-500">
                                                            <img src={img} alt={`Gallery item ${i + 1}`} className="w-full h-full object-cover" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Optional Temple Images */}
                                        {activeRecipe.templeImages && activeRecipe.templeImages.length > 0 && (
                                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {activeRecipe.templeImages.map((img, i) => (
                                                    <div key={i} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-black/5 hover:scale-[1.02] transition-transform duration-500">
                                                        <img src={img} alt={`Tradition ${i + 1}`} className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Why Vegan Section */}
                                        {activeRecipe.whyVeganTitle && (
                                            <div className="mt-20 pt-12 border-t border-black/5">
                                                <h2 className="text-3xl md:text-5xl font-bold heading-bubbly text-[#FFB8A5] mb-8 leading-tight">
                                                    {activeRecipe.whyVeganTitle}
                                                </h2>
                                                <div className="space-y-6 text-black/80 font-medium text-lg leading-relaxed">
                                                    {activeRecipe.whyVeganPassage.split('\n\n').map((paragraph, idx) => {
                                                        if (paragraph.trim().startsWith('-')) {
                                                            return (
                                                                <ul key={idx} className="space-y-3 pl-4">
                                                                    {paragraph.split('\n').map((item, i) => (
                                                                        <li key={i} className="flex items-start gap-3">
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
                                            <div className="mt-20 pt-12 border-t border-black/5">
                                                <h2 className="text-3xl md:text-5xl font-bold heading-bubbly text-[#2DB9A5] mb-8 leading-tight">
                                                    {activeRecipe.representsTitle}
                                                </h2>
                                                <div className="space-y-6 text-black/80 font-medium text-lg leading-relaxed">
                                                    {activeRecipe.representsPassage.split('\n\n').map((paragraph, idx) => {
                                                        if (paragraph.trim().startsWith('-')) {
                                                            return (
                                                                <ul key={idx} className="space-y-3 pl-4">
                                                                    {paragraph.split('\n').map((item, i) => (
                                                                        <li key={i} className="flex items-start gap-3">
                                                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FFB8A5] flex-shrink-0" />
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
                            <div className="p-8 md:p-12 lg:p-16 bg-[#FDFBF7] text-[#0F4C5C]">
                                <div className="grid lg:grid-cols-3 gap-16">

                                    {/* Sidebar: Ingredients */}
                                    <div className="lg:col-span-1">
                                        <h3 className="text-3xl font-bold heading-bubbly text-[#2DB9A5] mb-8">Ingredients / 재료</h3>
                                        <div className="space-y-10">
                                            <div>
                                                <h4 className="text-xs uppercase tracking-widest text-[#FFB8A5] font-bold mb-4">English</h4>
                                                <div className="space-y-2">
                                                    {activeRecipe.ingredients.map((item, idx) => {
                                                        if (item.startsWith('---')) {
                                                            return (
                                                                <h5 key={`en-h-${idx}`} className="text-sm font-bold text-[#2DB9A5] mt-6 mb-2 border-b border-[#2DB9A5]/10 pb-1">
                                                                    {item.replace(/---/g, '').trim()}
                                                                </h5>
                                                            );
                                                        }
                                                        return (
                                                            <label key={`en-${idx}`} className="flex items-start gap-4 cursor-pointer group hover:bg-[#2DB9A5]/5 p-2 rounded-lg transition-colors">
                                                                <div onClick={() => toggleIngredient(`en-${idx}`)} className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${checkedIngredients.has(`en-${idx}`) ? 'bg-[#FFB8A5] border-[#FFB8A5]' : 'border-[#2DB9A5] group-hover:border-[#FFB8A5]'}`}>
                                                                    {checkedIngredients.has(`en-${idx}`) && <Check size={14} className="text-white" />}
                                                                </div>
                                                                <span className={`text-lg leading-snug transition-all ${checkedIngredients.has(`en-${idx}`) ? 'line-through text-black/30' : 'text-black/80 font-medium'}`}>
                                                                    {item}
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {activeRecipe.ingredients_ko && (
                                                <div className="pt-8 border-t border-black/10">
                                                    <h4 className="text-xs uppercase tracking-widest text-[#FFB8A5] font-bold mb-4">한국어</h4>
                                                    <div className="space-y-2">
                                                        {activeRecipe.ingredients_ko.map((item, idx) => {
                                                            if (item.startsWith('---')) {
                                                                return (
                                                                    <h5 key={`ko-h-${idx}`} className="text-sm font-bold text-[#2DB9A5] mt-6 mb-2 border-b border-[#2DB9A5]/10 pb-1">
                                                                        {item.replace(/---/g, '').trim()}
                                                                    </h5>
                                                                );
                                                            }
                                                            return (
                                                                <label key={`ko-${idx}`} className="flex items-start gap-4 cursor-pointer group hover:bg-[#2DB9A5]/5 p-2 rounded-lg transition-colors">
                                                                    <div onClick={() => toggleIngredient(`ko-${idx}`)} className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${checkedIngredients.has(`ko-${idx}`) ? 'bg-[#FFB8A5] border-[#FFB8A5]' : 'border-[#2DB9A5] group-hover:border-[#FFB8A5]'}`}>
                                                                        {checkedIngredients.has(`ko-${idx}`) && <Check size={14} className="text-white" />}
                                                                    </div>
                                                                    <span className={`text-lg leading-snug transition-all ${checkedIngredients.has(`ko-${idx}`) ? 'line-through text-black/30' : 'text-black/80 font-medium'}`}>
                                                                        {item}
                                                                    </span>
                                                                </label>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Main: Instructions */}
                                    <div className="lg:col-span-2">
                                        <h3 className="text-3xl font-bold heading-bubbly text-[#2DB9A5] mb-8">Instructions / 레시피</h3>
                                        <div className="space-y-16">
                                            <div>
                                                <h4 className="text-xs uppercase tracking-widest text-[#FFB8A5] font-bold mb-6">English Steps</h4>
                                                <div className="space-y-10">
                                                    {activeRecipe.instructions.map((step, idx) => (
                                                        <div key={idx} className="flex gap-6">
                                                            <div className="w-10 h-10 rounded-full bg-[#B2EDE0] text-[#2DB9A5] flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-sm">
                                                                {idx + 1}
                                                            </div>
                                                            <p className="text-lg text-black/80 leading-relaxed font-medium pt-1">{step}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {activeRecipe.instructions_ko && (
                                                <div className="pt-12 border-t border-black/10">
                                                    <h4 className="text-xs uppercase tracking-widest text-[#FFB8A5] font-bold mb-6">한국어 순서</h4>
                                                    <div className="space-y-10">
                                                        {activeRecipe.instructions_ko.map((step, idx) => (
                                                            <div key={idx} className="flex gap-6">
                                                                <div className="w-10 h-10 rounded-full bg-[#B2EDE0] text-[#2DB9A5] flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-sm">
                                                                    {idx + 1}
                                                                </div>
                                                                <p className="text-lg text-black/80 leading-relaxed font-medium pt-1">{step}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-20 p-10 bg-[#2DB9A5]/5 rounded-[2rem] border-2 border-dashed border-[#2DB9A5]/20 text-center">
                                            <h4 className="text-3xl font-bold heading-bubbly text-[#FFB8A5] mb-2">Bon Appétit!</h4>
                                            <p className="text-black/60 font-medium italic">{activeRecipe.footerMessage}</p>
                                        </div>
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
