import tteokgukMain from '../assets/recipes/tteokguk_v2.jpg'
import cashewTteokgukMain from '../assets/recipes/cashew_tteokguk.png'
import pineNutTteokgukMain from '../assets/recipes/pine_nut_tteokguk.png'
import spinachBasic from '../assets/recipes/spinach_namul_basic.png'
import spinachSavory from '../assets/recipes/spinach_namul_savory.png'
import temple1 from '../assets/recipes/temple_1.png'
import temple2 from '../assets/recipes/temple_2.jpg'
import cabbageSaladMain from '../assets/recipes/cabbage_salad_main.png'
import cabbageField from '../assets/recipes/cabbage_field.jpg'
import cabbageComparison from '../assets/recipes/cabbage_comparison.png'
import cabbageSeasoning from '../assets/recipes/cabbage_seasoning.png'
import cabbageFlat from '../assets/recipes/cabbage_flat.png'
import hummusMain from '../assets/recipes/gochujang_hummus_1.png'
import hummus2 from '../assets/recipes/gochujang_hummus_2.png'
import hummus3 from '../assets/recipes/gochujang_hummus_3.png'
import hummus4 from '../assets/recipes/gochujang_hummus_4.png'
import hummus5 from '../assets/recipes/gochujang_hummus_5.png'
import naengi1 from '../assets/recipes/naengi_1.png'
import naengi2 from '../assets/recipes/naengi_2.png'
import naengi4 from '../assets/recipes/naengi_4.png'

import shiitakeMain from '../assets/recipes/shiitake_main.jpg'
import shiitakeBoiling from '../assets/recipes/shiitake_boiling.png'
import shiitakeCutting from '../assets/recipes/shiitake_cutting.jpg'

export const RECIPES = [
        {
                id: "vegan-tteokguk",
                title: "Basic Tteokguk 기본 떡국",
                featured: true,
                dietary: "Vegan | Yes Garlic & Onion | Dairy-Free | Gluten-Free available",
                course: "Main, Side Dish",
                cuisine: "Korean, Vegan, Gluten-free",
                keyword: "korean, rice cake, soup, Tteokguk",
                totalTime: "30+ Minutes",
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
                representsTitle: "What this Vegan Tteokguk Represents",
                representsPassage: `This vegan tteokguk is not just a substitute. It reflects:
        
- **Continuity** – Preserving cultural rituals.
- **Adaptation** – Evolving tradition without losing meaning.
- **Intention** – Beginning the year with values aligned to sustainability and compassion.

Seollal is about renewal. A plant-based tteokguk becomes part of that renewal—lighter on the body, gentler on the planet, and still deeply rooted in Korean heritage.`,
                ingredients: [
                        "4 sheets of kelp",
                        "2 dried shiitake mushrooms",
                        "1 whole onion",
                        "1 clove of garlic",
                        "1 green onion",
                        "100g radish",
                        "100g rice cakes for tteokguk",
                        "400ml water",
                        "salt",
                        "pepper",
                        "1 tablespoon soy sauce for soup",
                        "carrot",
                        "seasoned laver powder",
                        "sesame oil",
                        "brewed soy sauce"
                ],
                ingredients_ko: [
                        "다시마 4장",
                        "건표고버섯 2개",
                        "통양파 1개",
                        "통마늘 1쪽",
                        "대파 1뿌리",
                        "무 100g",
                        "떡국용 떡 100g",
                        "물 400ml",
                        "소금",
                        "후추",
                        "국간장 1T",
                        "당근",
                        "조미김가루",
                        "참기름",
                        "양조간장"
                ],
                instructions: [
                        "Boil the kelp, dried shiitake mushrooms, whole onion, whole garlic, radish, and the white part of the green onion in water for at least 30 minutes.",
                        "Soak the rice cakes for tteokguk in water separately.",
                        "Drain the boiled shiitake mushrooms, squeeze out the water, slice thinly, and place in a pot.",
                        "Place the boiled vegetable stock in the pot.",
                        "Add the rice cakes to the vegetable stock, add salt and soy sauce, and bring to a boil, stirring occasionally.",
                        "Boil until the rice cakes float to the surface and are soft.",
                        "Place in a bowl.",
                        "Slice the green parts of the green onion thinly and garnish with the garnish.",
                        "Sprinkle with seasoned seaweed powder.",
                        "If you don't have seasoned seaweed, add a few drops of sesame oil."
                ],
                instructions_ko: [
                        "다시마랑 건표고버섯, 통양파, 통마늘, 무, 대파 흰 부분을 물을 넣고 끓여 채수를 만들어 주세요.(30분 이상)",
                        "떡국용 떡은 따로 물에 미리 담가 주세요.",
                        "끓인 표고버섯은 건져내서 물을 짜낸 다음 얇게 썰어 냄비에 담아 주세요.",
                        "끓여둔 채수를 냄비에 넣어 주세요.",
                        "채수에 떡국떡을 넣고 소금과 국간장을 넣고 저어가며 끓여 주세요.",
                        "떡이 떠올라 부드럽게 익을때 까지 끓여 주세요.",
                        "그릇에 담아 주세요.",
                        "대파 푸른색 부분을 얇게 썰어 고명으로 얹어주세요.",
                        "조미김가루로 뿌려주세요.",
                        "조미김이 없으면 참기름을 몇 방울 떨어뜨려주세요."
                ],
                footerMessage: "Enjoy! 맛있게 드세요!"
        },
        {
                id: "cashew-tteokguk",
                title: "Cashew Tteokguk 캐슈넛 떡국",
                featured: false,
                dietary: "Vegan | Yes Garlic & Onion | Dairy-Free | Gluten-Free available",
                course: "Main, Side Dish",
                cuisine: "Korean, Vegan, Gluten-free",
                keyword: "cashew, tteokguk, rice cake, soup, vegan",
                totalTime: "40+ Minutes",
                servings: "1-2 Servings",
                image: cashewTteokgukMain,
                blogTitle: "A Creamy Twist: Cashew Tteokguk",
                blogPassage: `Looking for a rich, creamy alternative to the clear broth? Cashew nuts provide a luxurious texture and deep nutty flavor that elevates the humble rice cake soup to something truly decadent.`,
                ingredients: [
                        "2~4 sheets of kelp",
                        "1~2 dried shiitake mushrooms",
                        "100g rice cakes for tteokguk",
                        "30g roasted cashews",
                        "400ml water",
                        "salt",
                        "pepper",
                        "1 tablespoon soy sauce",
                        "green onions",
                        "carrots",
                        "seasoned seaweed flakes",
                        "sesame oil",
                        "brewed soy sauce"
                ],
                ingredients_ko: [
                        "다시마 2~4장",
                        "건표고버섯 1~2개",
                        "떡국용 떡 100g",
                        "구운 캐슈넛 30g",
                        "물 400ml",
                        "소금",
                        "후추",
                        "국간장 1T",
                        "대파",
                        "당근",
                        "마늘가루",
                        "조미김가루",
                        "참기름",
                        "양조간장"
                ],
                instructions: [
                        "Soak the kelp and dried shiitake mushrooms in cold water to make the broth (at least 30 minutes).",
                        "Soak the rice cakes separately in water.",
                        "Blend roasted cashews and water in a blender until very fine (at least 1 minute).",
                        "Bring the ground cashew milk to a boil over medium heat.",
                        "Add rice cakes, salt, soy sauce, and garlic powder; boil while stirring.",
                        "Simmer until rice cakes are soft and float.",
                        "Sauté carrots, green onions, and soaked shiitake mushrooms with sesame oil and salt.",
                        "Garnish with stir-fried vegetables and seaweed powder."
                ],
                instructions_ko: [
                        "다시마랑 건표고버섯을 찬물에 미리 담가 채수를 만들어 주세요.(30분 이상)",
                        "떡국용 떡은 따로 물에 미리 담가 주세요.",
                        "구운 캐슈넛과 물을 믹서기에 넣고 최대한 아주 곱게 갈아주세요.(1분 이상)",
                        "냄비에 갈아둔 캐슈넛밀크를 붓고 중불로 끓여 주세요.",
                        "떡국떡을 넣고 소금과 국간장, 마늘가루를 넣고 저어가며 끓여 주세요.",
                        "떡이 떠올라 부드럽게 익을 때까지 끓여 주세요.",
                        "당근과 대파, 불려둔 표고버섯을 참기름에 살짝 볶아주세요.",
                        "조미김가루와 함께 볶은 야채들을 고명으로 얹어주세요."
                ],
                footerMessage: "Enjoy! 맛있게 드세요!"
        },
        {
                id: "pine-nut-tteokguk",
                title: "Pine Nut Tteokguk 잣 떡국 (사찰식)",
                featured: false,
                dietary: "Vegan | No Garlic & Onion | Dairy-Free | Gluten-Free available",
                course: "Main, Side Dish",
                cuisine: "Korean, Vegan, Gluten-free, Temple Food",
                keyword: "pine nut, tteokguk, rice cake, soup, vegan, temple food",
                totalTime: "40+ Minutes",
                servings: "1-2 Servings",
                image: pineNutTteokgukMain,
                blogTitle: "Zen in a Bowl: Pine Nut Tteokguk",
                blogPassage: `Pine nut tteokguk is a refined temple-style version of the traditional New Year's soup. By blending roasted pine nuts and soft tofu, we create a silky, protein-rich broth that is both deeply nourishing and spiritually grounding.`,
                ingredients: [
                        "2~4 sheets of kelp",
                        "1~2 dried shiitake mushrooms",
                        "100g rice cakes for tteokguk",
                        "20g pine nuts",
                        "1/4 pack soft tofu",
                        "400ml water",
                        "salt",
                        "pepper",
                        "1 tablespoon soy sauce",
                        "carrot",
                        "seasoned laver powder",
                        "sesame oil",
                        "brewed soy sauce"
                ],
                ingredients_ko: [
                        "다시마 2~4장",
                        "건표고버섯 1~2개",
                        "떡국용 떡 100g",
                        "잣 20g",
                        "순두부 1/4팩",
                        "물 400ml",
                        "소금",
                        "후추",
                        "국간장 1T",
                        "당근",
                        "조미김가루",
                        "참기름",
                        "양조간장"
                ],
                instructions: [
                        "Soak the kelp and dried shiitake mushrooms in cold water to make the broth (at least 30 minutes).",
                        "Soak the rice cakes for tteokguk separately in water.",
                        "Place the roasted pine nuts, soft tofu, and water in a blender and blend until very fine (at least 1 minute).",
                        "Pour the ground pine nut water into a pot and bring to a boil over medium heat.",
                        "Add the tteokguk rice cakes, salt, and soy sauce, and bring to a boil while stirring.",
                        "Simmer until the rice cakes float to the surface and are soft.",
                        "Thinly slice the carrots and soaked shiitake mushrooms and lightly sauté them in sesame oil and salt.",
                        "Garnish with the seasoned seaweed flakes, the stir-fried carrots, the stir-fried shiitake mushrooms, and additional pine nuts."
                ],
                instructions_ko: [
                        "다시마랑 건표고버섯을 찬물에 미리 담가 채수를 만들어 주세요.(30분 이상)",
                        "떡국용 떡은 따로 물에 미리 담가 주세요.",
                        "구운 잣과 순두부, 그리고 물을 믹서기에 넣고 최대한 아주 곱게 갈아주세요.(1분 이상)",
                        "냄비에 갈아둔 잣물을 붓고 중불로 끓여 주세요.",
                        "떡국떡을 넣고 소금과 국간장을 넣고 저어가며 끓여 주세요.",
                        "떡이 떠올라 부드럽게 익을 때까지 끓여 주세요.",
                        "팬에 당근, 불려둔 표고버섯을 얇게 썰어서 참기름과 소금에 살짝 볶아주세요.",
                        "조미김가루와 함께 볶은 당근, 볶은 표고버섯, 잣을 고명으로 얹어주세요."
                ],
                footerMessage: "Enjoy! 맛있게 드세요!"
        },
        {
                id: "shiitake-broth",
                title: "Shiitake Mushroom Broth 표고버섯 채수",
                featured: false,
                dietary: "Vegan | No Garlic & Onion | Gluten-Free",
                course: "Base",
                cuisine: "Vegan",
                keyword: "broth, stock, shiitake",
                totalTime: "40 Minutes",
                servings: "1 Liter",
                image: shiitakeMain,
                variantTitle: "Preparation / 준비 과정",
                variantImages: [shiitakeBoiling, shiitakeCutting],
                blogTitle: "The Foundation of Flavor",
                blogPassage: `A good stock is everything in vegan cooking. Shiitake and Dashima provide the ultimate umami punch.`,
                ingredients: ["6 dried shiitake mushrooms", "4 sheets of kombu/dashima", "1 radish", "1.5L water"],
                ingredients_ko: ["건표고버섯 6개", "다시마 4장", "무 1토막", "물 1.5L"],
                instructions: [
                        "Combine all ingredients in a large pot.",
                        "Simmer on low heat for 40 minutes.",
                        "Strain and store in the fridge."
                ],
                instructions_ko: [
                        "모든 재료를 냄비에 넣습니다.",
                        "약불에서 40분간 끓입니다.",
                        "건더기를 걸러내고 냉장 보관합니다."
                ],
                footerMessage: "The perfect base for any soup."
        },
        {
                id: "spinach-namul",
                title: "Spinach Namul 시금치나물",
                featured: false,
                dietary: "Vegan | No Garlic & Onion (Basic) | Yes Garlic & Onion (Savory) | Dairy-Free",
                course: "Side Dish (Namul)",
                cuisine: "Korean, Vegan, Temple Food",
                keyword: "spinach, namul, korean side dish, vegetable, vegan",
                totalTime: "5 Minutes",
                servings: "2 Servings",
                image: spinachBasic,
                variantTitle: "Recipe Versions / 버전",
                variantImages: [spinachBasic, spinachSavory],
                blogTitle: "A Tale of Two Namuls: Sweet & Savory Spinach",
                blogPassage: `Spinach namul is a staple of the Korean table. Here, we present two distinct paths: a clean, sweet temple-inspired version that relies on the natural flavor of the vegetable, and a bold, savory popular version enriched with garlic and green onion.`,
                ingredients: [
                        "--- Basic & Sweet (Temple Style) ---",
                        "200g spinach",
                        "Salt (for balancing/blanching)",
                        "1t soy sauce (guk-ganjang)",
                        "1t sesame powder",
                        "1T sesame oil",
                        "--- Popular & Savory Variant ---",
                        "Additional: 1/2t minced garlic",
                        "Additional: 1/2t green onion"
                ],
                ingredients_ko: [
                        "--- 기본 & 달달한 사찰식 ---",
                        "시금치 200g",
                        "소금",
                        "국간장 1t",
                        "참깨가루 1t",
                        "참기름 1T",
                        "--- 대중적인 & 고소한 버전 ---",
                        "추가: 다진마늘 1/2t",
                        "추가: 대파 1/2t"
                ],
                instructions: [
                        "Prepare the spinach. Don't throw away the pink part!",
                        "Wash the spinach thoroughly.",
                        "Blanch in boiling water with a little salt for about 15 seconds.",
                        "Spread it out on a colander and let it cool by gently lifting and lowering it (or rinse in cold water).",
                        "Squeeze the spinach with your hands to remove excess water.",
                        "Mix the seasoning (soy sauce, sesame powder, sesame oil, and optional garlic/onion) and mix gently.",
                        "Crush the sesame seeds between your thumb and index finger and sprinkle them on top.",
                        "Enjoy!"
                ],
                instructions_ko: [
                        "시금치를 손질해 주세요. 분홍색 부분 버리지 마세요!",
                        "시금치를 깨끗이 씻어 주세요.",
                        "끓는 물에 소금을 약간 넣고 15초 정도 살짝 데쳐 주세요.",
                        "채반에 펼쳐서 들어놨다 내렸다 하면서 식혀주세요 (또는 찬물에 헹궈주세요).",
                        "시금치를 손에 쥐고 꼭 짜주세요.",
                        "양념(국간장, 참깨가루, 참기름 및 선택된 마늘/파)을 섞어서 살살 버무려 주세요.",
                        "참깨는 엄지와 검지로 잡아서 비비듯 으깨어 솔솔 뿌려주세요.",
                        "맛있게 드세요!"
                ],
                footerMessage: "Enjoy! 맛있게 드세요!"
        },
        {
                id: "cabbage-salad",
                title: "Bomdong Geotjeori 봄동 겉절이 (Cabbage Salad)",
                featured: false,
                dietary: "Vegan | Yes Garlic | Dairy-Free | Gluten-Free available",
                course: "Side Dish (Namul)",
                cuisine: "Korean, Vegan",
                keyword: "cabbage, salad, geotjeori, bomdong, korean, vegan",
                totalTime: "5 Minutes",
                servings: "2-4 Servings",
                image: cabbageSaladMain,
                variantImages: [cabbageComparison, cabbageSeasoning, cabbageFlat, cabbageField],
                blogTitle: "봄동 겉절이 황금레시피 (비건) / Golden Recipe: Vegan Spring Cabbage Salad",
                blogPassage: `Bomdong is a type of spring cabbage that is hardy, sweet, and perfectly suited for a fresh, unfermented kimchi-style salad. \n\nNotice how the leaves soften slightly but still stay crisp!\n잎이 약간 부드러워지면서도 아삭함이 살아있는지 확인해 보세요!`,
                ingredients: [
                        "200g spring cabbage",
                        "A few carrots",
                        "2 tablespoons red pepper powder",
                        "2 tablespoons soy sauce (or brewed soy sauce)",
                        "1 tablespoon plum extract (or unrefined sugar/oligosaccharide/agave syrup)",
                        "1 tablespoon minced garlic",
                        "1/2 to 1 tablespoon vinegar",
                        "1 tablespoon sesame oil",
                        "A pinch of salt",
                        "A pinch of roasted sesame seeds"
                ],
                ingredients_ko: [
                        "봄동 배추 200g",
                        "당근 약간",
                        "고춧가루 2큰술",
                        "진간장(또는 양조간장) 2큰술",
                        "매실청 1큰술 (또는 비정제원당/올리고당/아가베시럽)",
                        "다진 마늘 1큰술",
                        "사과식초 1/2큰술 또는 애플사이다비니거/화이트발사믹식초 1큰술",
                        "참기름 1큰술",
                        "소금 약간",
                        "볶은 참깨 약간"
                ],
                instructions: [
                        "First, separate leaves one by one or cut out the core in a circle.",
                        "Wash them thoroughly.",
                        "Cut into bite-sized pieces.",
                        "Season the cabbage with salt.",
                        "Mix the seasoning separately.",
                        "Then gently mix the bomdong and julienne sliced carrot with seasoning.",
                        "Enjoy!"
                ],
                instructions_ko: [
                        "먼저 양배추 잎을 한 장씩 떼어내거나 심지를 동그랗게 잘라냅니다.",
                        "깨끗이 씻습니다.",
                        "한입 크기로 자릅니다.",
                        "양배추에 소금을 뿌립니다.",
                        "양념은 따로 섞습니다.",
                        "그런 다음 봄동과 채 썬 당근을 양념과 함께 살살 버무립니다.",
                        "맛있게 드세요!"
                ],
                footerMessage: "Enjoy! 맛있게 드세요!"
        },
        {
                id: "gochujang-hummus",
                title: "Gochujang Hummus 고추장 후무스",
                featured: true,
                dietary: "Vegan | Dairy-Free | Gluten-Free available",
                course: "Dip, Side Dish",
                cuisine: "Fusion, Korean, Middle Eastern, Vegan",
                keyword: "gochujang, hummus, chickpeas, korean fusion, vegan, dip",
                totalTime: "30+ Minutes",
                servings: "2-4 Servings",
                image: hummusMain,
                variantTitle: "Process / 과정",
                variantImages: [hummus5, hummus2, hummus3, hummus4],
                blogTitle: "When Middle East food Meets Korean Sauce…?",
                blogPassage: `Hummus is one of those dishes that welcomes small changes while still keeping its comforting, creamy character. And naturally vegan(plant-based). One day, I wondered what would happen if I combined it with one of Korea’s most beloved ingredients **gochujang**, a fermented chili paste known for its deep, savory, and spicy flavor.\n\nThe result was surprisingly harmonious. The smooth chickpeas and nutty sesame blend beautifully with the rich, slightly spicy depth of gochujang. A touch of olive oil and sesame oil adds warmth, while roasted sesame seeds bring extra texture and aroma.\n\nThis **gochujang hummus** is simple, bold, and a little unexpected. It’s a small meeting between Middle Eastern hummus and Korean cuisines. Created a dip that feels both familiar and new.\n\nServe it with fresh vegetables, warm bread, or crackers, and enjoy a hummus that carries a gentle hint of Korean flavor in every bite. I like to add this to bibimbap(or poke) and sandwiches.`,
                ingredients: [
                        "1 can chickpeas (approx. 400g)",
                        "2 tablespoons gochujang",
                        "1 teaspoon tahini (optional)",
                        "1 teaspoon lemon juice (optional)",
                        "1 tablespoon garlic powder (optional)",
                        "2 tablespoons olive oil",
                        "1 tablespoon sesame oil",
                        "10g roasted sesame seeds",
                        "A pinch of salt",
                        "Water"
                ],
                ingredients_ko: [
                        "병아리콩 1캔(약 400g)",
                        "고추장 2큰술",
                        "타히니 1작은술(선택)",
                        "레몬즙 1작은술(선택)",
                        "마늘가루 1작은술(선택)",
                        "올리브유 2큰술",
                        "참기름 1큰술",
                        "볶은 참깨 10g",
                        "소금 약간",
                        "물"
                ],
                instructions: [
                        "Soak the dried chickpeas in water for at least 5 hours.",
                        "Add plenty of water and a pinch of salt to a pot and boil for 30 minutes.",
                        "Put the boiled chickpeas (rinsing is essential if using canned chickpeas), gochujang, garlic powder, lemon juice (optional), tahini (optional), roasted sesame seeds, salt, olive oil, and sesame oil into a blender.",
                        "Blend slowly until the ingredients are smooth. (Adding a little of the chickpea boiling water or plain water will make it smoother.)",
                        "Add olive oil and sesame oil while blending to adjust the consistency.",
                        "Place the hummus on a plate.",
                        "Finish by sprinkling olive oil, roasted sesame seeds, and red chili powder over the hummus."
                ],
                instructions_ko: [
                        "건조된 병아리콩을 5시간 이상 물에 불려주세요.",
                        "냄비에 충분한 물과 병아리콩을 소금 한 꼬집을 넣고 30분간 삶아 주세요.",
                        "삶은 병아리콩 (통조림 사용 시 헹굼 필수), 고추장, 마늘가루, 레몬즙(선택), 타히니(선택), 볶은 참깨, 소금, 올리브유, 참기름을 믹서기에 넣습니다.",
                        "재료가 부드러워질 때까지 천천히 갈아줍니다. (병아리콩 삶은 물이나 생수를 조금 넣으면 더 부드러워집니다.)",
                        "갈면서 올리브유와 참기름을 추가하여 농도를 맞춥니다.",
                        "후무스를 접시에 담아주세요.",
                        "후무스 위에 올리브유, 볶은 참깨와 고춧가루를 뿌려 마무리합니다."
                ],
                footerMessage: "Enjoy! 맛있게 드세요!"
        },
        {
                id: "naengi-doenjang-guk",
                title: "Shepherd’s purse Soybeanpaste Soup(Naengi Doenjang Guk) 냉이 된장국",
                featured: false,
                dietary: "Vegan | Yes Garlic & Onion | Dairy-Free | Gluten-Free available",
                course: "Soup, Main",
                cuisine: "Korean, Vegan, Spring",
                keyword: "naengi, soybean paste, doenjang guk, spring soup, shepherd's purse",
                totalTime: "25+ Minutes",
                servings: "2 Servings",
                image: naengi1,
                variantTitle: "Detail / 상세",
                variantImages: [naengi4, naengi2],
                blogTitle: "A True Sign of Spring",
                blogPassage: `Naengi (냉이), also known as **shepherd’s purse**, is one of Korea’s most beloved wild spring herbs.\n\nFor many Koreans, naengi is a true **sign of spring**. After a long winter, its fresh flavor feels especially comforting.\n\nTraditionally, it has been valued not only for its taste but also for its nutritional benefits.\n\nNaengi is rich in **protein for a leafy vegetable**, and contains **calcium, iron, and various vitamins**.`,
                ingredients: [
                        "100g shepherd’s purse (naengi)",
                        "1 tablespoon soybean paste",
                        "1 tablespoon soy sauce",
                        "Salt",
                        "5 pieces of kelp",
                        "A handful of dried shiitake mushrooms",
                        "30g daikon (Korean radish)",
                        "100g tofu",
                        "1 tablespoon roasted soybean powder",
                        "1 teaspoon minced garlic (optional)",
                        "Water"
                ],
                ingredients_ko: [
                        "냉이 100g",
                        "된장 1큰술",
                        "국간장 1큰술",
                        "소금",
                        "조각 다시마 5장",
                        "말린 표고버섯 한 움큼",
                        "무 30g",
                        "두부 100g",
                        "볶은콩가루 1큰술",
                        "다진 마늘 1작은술(선택)",
                        "물"
                ],
                instructions: [
                        "First, wash the shepherd's purse thoroughly several times.",
                        "Remove any yellow parts.",
                        "There are two ways to clean the shepherd's purse: Scrub it with a toothbrush or scrape it with the back of a knife.",
                        "Add the shiitake mushrooms and kelp together to water to make a vegetable stock.",
                        "After 3 minutes, remove the kelp.",
                        "And then skim off the foam.",
                        "Cut the daikon into thick strips.",
                        "Dice the tofu into bite-size pieces.",
                        "Mash the soybean paste into the vegetable stock and mix well.",
                        "Add the soy sauce and salt.",
                        "Add the daikon and tofu and bring to a boil.",
                        "Add the minced garlic (optional).",
                        "Add the shepherd's purse and bring to a boil.",
                        "Finally, sprinkle with roasted soybean powder. (If you don't have roasted soybean powder, you can use soy milk.)"
                ],
                instructions_ko: [
                        "먼저 냉이를 깨끗이 여러 번 씻으세요.",
                        "노란색 부분은 제거해 주세요.",
                        "냉이를 깨끗이 다듬는 방법은 두 가지입니다: 칫솔로 문지르거나 칼등을 사용해 긁어주세요.",
                        "표고버섯과 다시마를 넣고 채수를 만드세요.",
                        "3분 이후 다시마는 건져내 주세요.",
                        "그리고 거품을 걷어냅니다.",
                        "무를 굵게 채썰어주세요.",
                        "두부를 먹기 좋은 크기로 깍둑썰어주세요.",
                        "채수에 된장을 으깨어 넣고 잘 녹이세요.",
                        "국간장과 소금을 넣어주세요.",
                        "무와 두부를 넣고 차례로 끓여주세요.",
                        "다진 마늘을 넣으세요.(선택)",
                        "냉이를 넣고 한소끔 끓여주세요.",
                        "마지막으로 볶은 콩가루를 뿌려주면 완성. (볶은 콩가루가 없다면 두유를 조금 넣어주세요.)"
                ],
                footerMessage: "Enjoy! 맛있게 드세요!"
        }
];
