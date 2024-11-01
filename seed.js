const mongoose = require('mongoose');
const Meal = require('./models/meals');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mealdb', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log('Connected to the database');

    // Clear the database
    await Meal.deleteMany({});

    // Add initial data
    const meals = [
        {
            name: "Lemon Rice",
            area: "South Indian",
            instructions: `Cook rice with water ratio 1:2 for 3 whistles. After done, transfer to a broad bowl and add a teaspoon of oil and a teaspoon of salt and mix carefully once and keep aside.
    Squeeze lemon and collect the juice. Heat a kadai/ pan with oil, add mustard, once spluttered, add urad dal, channa dal, peanuts and redchilli. Fry till golden.
    Then add green chillies, curry leaves, asafoetida and turmeric. Give a quick stir and add the lemon juice. If you want you can add a tablespoon of water and switch off the stove. Add salt and mix well.
    Add it to the cooled rice and mix well. Adjust salt, sesame oil as desired.`,
            thumbnail: "https://media.istockphoto.com/id/609913058/photo/lemon-rice-south-indian-rice-dish-with-lemon.jpg?s=612x612&w=0&k=20&c=MvEGZIH9IJ15wKmSoMqrw6f0NlLhV1n-Oz55prJscFE=",
            video: "https://www.youtube.com/embed/mZkepzgzt4k"
        },
        {
            name: "Chicken Biryani",
            area: "South Indian",
            instructions: `Soak 300g basmati rice in warm water, then wash in cold until the water runs clear.
    Heat 25g butter in a saucepan and cook 1 finely sliced large onion with 1 bay leaf, 3 cardamom pods and 1 small cinnamon stick for 10 mins.
    Sprinkle in 1 tsp turmeric, then add 4 chicken breasts, cut into large chunks, and 4 tbsp curry paste. Cook until aromatic.
    Stir the rice into the pan with 85g raisins, then pour over 850ml chicken stock.
    Place a tight-fitting lid on the pan and bring to a hard boil, then lower the heat to a minimum and cook the rice for another 5 mins.
    Turn off the heat and leave for 10 mins. Stir well, mixing through 15g chopped coriander. To serve, scatter over the leaves of the remaining 15g coriander and 2 tbsp toasted almonds.`,
            thumbnail: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
            video: "https://www.youtube.com/watch?v=95BCU1n268w"
        },
        {
            name: "Sambar",
            area: "South Indian",
            instructions: `Pressure cook 1 cup toor dal with turmeric and water until soft. Mash it well.
    In a pot, add 1 tablespoon tamarind paste, 1 chopped onion, 1 chopped tomato, 1 chopped carrot, 1 drumstick cut into pieces, and 2 tablespoons sambar powder. Add water and cook until vegetables are tender.
    Add the cooked dal to the vegetables. Adjust consistency with water if needed. Bring to a boil and simmer for 10 minutes.
    Heat oil in a small pan, add 1 teaspoon mustard seeds, 1 teaspoon cumin seeds, 2 dried red chilies, 10-12 curry leaves, and a pinch of asafoetida. Pour this tempering over the sambar.
    Garnish with fresh coriander leaves and serve hot with rice or idli/dosa.`,
            thumbnail: "https://www.thespruceeats.com/thmb/RzNPTvYKJPewRncju_ya9kjUm8k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES--sambar-indian-vegetable-stew-1957984-158d4a9bb024472baf8c6519dc040785.jpg",
            video: "https://youtu.be/k1c4h0Caq9k"
        },
        {
            name: "Rasam",
            area: "South Indian",
            instructions: `Pressure cook 1/2 cup toor dal until soft. Mash it well.
    Grind 1 teaspoon cumin seeds, 1 teaspoon black pepper, and 4-5 garlic cloves into a coarse paste.
    In a pot, add 2 chopped tomatoes, tamarind water, turmeric, salt, and the ground paste. Add water and bring to a boil.
    Add the cooked dal to the boiling mixture. Adjust consistency with water if needed. Simmer for 10 minutes.
    Heat oil in a small pan, add 1 teaspoon mustard seeds, 2 dried red chilies, curry leaves, and a pinch of asafoetida. Pour this tempering over the rasam.
    Garnish with fresh coriander leaves and serve hot with rice.`,
            thumbnail: "https://www.cookclickndevour.com/wp-content/uploads/2017/01/pineapple-rasam-recipe-c.jpg",
            video: "https://youtu.be/d_xj9AHQvMQ"
        },
        {
            name: "Medu Vada",
            area: "South Indian",
            instructions: `Soak 1 cup urad dal for 4-5 hours.
    Grind the dal into a smooth thick batter, adding little water.
    Add 2 finely chopped green chilies, 1-inch grated ginger, a few chopped curry leaves, and salt to the batter. Mix well.
    Wet your hands and take a small portion of the batter. Shape into a round ball, make a hole in the center, and slide it into hot oil.
    Fry the vadas on medium heat until golden brown and crisp.
    Serve hot with coconut chutney and sambar.`,
            thumbnail: "https://static.toiimg.com/photo/97008744.cms",
            video: "https://youtu.be/qgYTSsxe7W4"
        },
        {
            name: "Masala Dosa",
            area: "South Indian",
            instructions: `Soak 1 cup rice and 1/2 cup urad dal separately for 6 hours. Grind them to a smooth batter and ferment overnight.
    Prepare the masala by frying 1 chopped onion, 2 chopped green chilies, 1 tsp mustard seeds, and curry leaves in oil. Add 2 boiled, mashed potatoes, 1/2 tsp turmeric, and salt. Mix well.
    Spread a ladle of batter on a hot tawa to form a thin dosa. Cook until golden and crispy.
    Place the potato masala in the center and fold the dosa. Serve hot with coconut chutney and sambar.`,
            thumbnail: "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800",
            video: "https://youtu.be/IDNtiYTd7_M"
        },
        {
            name: "Idli",
            area: "South Indian",
            instructions: `Soak 1 cup rice and 1/2 cup urad dal separately for 6 hours. Grind them to a smooth batter and ferment overnight.
    Pour the batter into idli molds and steam for 10-15 minutes.
    Serve hot with coconut chutney and sambar.`,
            thumbnail: "https://m.economictimes.com/thumb/msid-99118050,width-1200,height-900,resizemode-4,imgsize-64776/idli_istock.jpg",
            video: "https://youtu.be/Ayo80PIb-Qg"
        },
        {
            name: "Uttapam",
            area: "South Indian",
            instructions: `Prepare dosa batter as described in the Masala Dosa recipe.
    Spread a ladle of batter on a hot tawa to form a thick uttapam. Top with chopped onions, tomatoes, green chilies, and coriander leaves.
    Cook until golden and crispy on both sides.
    Serve hot with coconut chutney and sambar.`,
            thumbnail: "https://www.awesomecuisine.com/wp-content/uploads/2015/04/Tomato-Uttapam.jpg",
            video: "https://youtu.be/MW3JZwjn8gY"
        },
        {
            name: "Appam",
            area: "South Indian",
            instructions: `Soak 1 cup rice for 4-5 hours. Grind it with 1/2 cup grated coconut and 1/4 cup cooked rice to a smooth batter. Ferment overnight.
    Add salt and mix well. Heat an appam pan, pour a ladle of batter, and swirl to spread.
    Cover and cook until the edges are crispy and the center is soft.
    Serve hot with coconut milk or vegetable stew.`,
            thumbnail: "https://cdn.cdnparenting.com/articles/2020/04/08124906/Appam-Recipe.webp",
            video: "https://youtu.be/yRpYqehvZ9o"
        },
        {
            name: "Ven Pongal",
            area: "South Indian",
            instructions: `Dry roast 1 cup rice and 1/2 cup moong dal until fragrant. Cook with 4 cups water until soft.
    Heat ghee in a pan, add 1 tsp cumin seeds, 1 tsp black pepper, 1 tbsp grated ginger, 10-12 curry leaves, and cashews. Fry until golden.
    Add this tempering to the cooked rice and dal mixture. Add salt and mix well.
    Serve hot with coconut chutney and sambar.`,
            thumbnail: "https://i.pinimg.com/736x/38/90/7d/38907d97723bce44e0bbb4a6d5bd3e37.jpg",
            video: "https://www.youtube.com/watch?v=GJm77vP9MAE"
        },
        {
            name: "Payasam",
            area: "South Indian",
            instructions: `Boil 1 liter milk and add 1/2 cup washed rice. Cook until the rice is soft.
    Add 1/2 cup sugar and 1/4 tsp cardamom powder. Cook until the mixture thickens.
    Fry cashews and raisins in ghee and add to the payasam.
    Serve warm or chilled.`,
            thumbnail: "https://static.toiimg.com/thumb/52290082.cms?imgsize=443885&width=800&height=800",
            video: "https://youtu.be/twXXnefqCmw"
        },
        {
            name: "Chettinad Chicken",
            area: "South Indian",
            instructions: `Marinate 500g chicken with 1 tsp turmeric, 1 tsp red chili powder, and salt for 30 minutes.
    Grind 2 tbsp grated coconut, 1 tbsp poppy seeds, 1 tsp fennel seeds, 5 cloves, 1-inch cinnamon stick, 2 cardamom pods, and 5 dried red chilies into a paste.
    Heat oil in a pan, add 1 chopped onion, and fry until golden. Add 2 chopped tomatoes and cook until soft.
    Add the ground paste and cook for 5 minutes. Add the marinated chicken and cook until done.
    Garnish with fresh coriander leaves and serve hot with rice or roti.`,
            thumbnail: "https://butfirstchai.com/wp-content/uploads/2023/01/chicken-chettinad-curry-recipes.jpg",
            video: "https://youtu.be/4YyMKK0gdZk"
        },
        {
            name: "Kerala Fish Curry",
            area: "South Indian",
            instructions: `Marinate 500g fish with 1 tsp turmeric, 1 tsp red chili powder, and salt for 15 minutes.
    Grind 1 cup grated coconut, 1 tbsp coriander seeds, 5 dried red chilies, 1 tsp turmeric, and 1 tsp fenugreek seeds into a paste.
    Heat oil in a pan, add 1 chopped onion, 2 chopped tomatoes, and cook until soft. Add the ground paste and cook for 5 minutes.
    Add the marinated fish and cook until done. Add 1 tbsp tamarind paste and simmer for 5 minutes.
    Garnish with fresh curry leaves and serve hot with rice.`,
            thumbnail: "https://allwaysdelicious.com/wp-content/uploads/2022/03/kerala-fish-curry-overhead.jpg",
            video: "https://youtu.be/Qh8gdmQ3lvg"
        },
        {
            name: "Pesarattu",
            area: "South Indian",
            instructions: `Soak 1 cup green gram for 4-5 hours. Grind with 2 green chilies, 1-inch ginger, and salt into a smooth batter.
    Heat a tawa and spread a ladle of batter to form a thin dosa. Sprinkle chopped onions and green chilies on top.
    Cook until crispy and golden. Flip and cook the other side briefly.
    Serve hot with ginger chutney.`,
            thumbnail: "https://i.ytimg.com/vi/c0PQz7TF7RQ/maxresdefault.jpg",
            video: "https://youtu.be/CL2vf1h1LU4"
        },
        {
            name: "Adai",
            area: "South Indian",
            instructions: `Soak 1 cup rice, 1/2 cup chana dal, 1/2 cup toor dal, 1/2 cup urad dal, and 1/2 cup moong dal for 4-5 hours. Grind with 3-4 red chilies, 1-inch ginger, and salt into a coarse batter.
    Heat a tawa and spread a ladle of batter to form a thick dosa. Cook until golden and crispy on both sides.
    Serve hot with avial or chutney.`,
            thumbnail: "https://www.sharmispassions.com/wp-content/uploads/2023/01/test.jpg",
            video: "https://youtu.be/hnW5J3kX-nk"
        },
        {
            name: "Paruppu Sadam",
            area: "South Indian",
            instructions: `Wash and soak 1 cup of rice and 1/4 cup of toor dal for 15-20 minutes. Drain the water.
In a pressure cooker, heat 2 tbsp ghee or oil. Add mustard seeds, cumin seeds, dry red chilies, a pinch of hing (asafoetida), and curry leaves. Sauté until mustard seeds crackle.
Add chopped onions, green chilies, and garlic. Sauté until onions turn translucent.
Add chopped tomatoes, turmeric powder, and salt. Cook until tomatoes turn soft and mushy.
Add soaked rice and dal. Stir well.
Add 2 cups of water and mix.
Pressure cook for 3 whistles on medium flame.
Once the pressure releases naturally, open the cooker, and gently fluff up the rice.
Serve hot with pickle or papad.`,
            thumbnail: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAPwGbVkxYnnr5NrVx1T6VBRVGMqJdn-m-hlIjsqRAHuBEhGD9akqRCuTq_YJlboB9lZUx1eOXXE_JeFUTz38dU347Y-LudXhlAcM78IEnke0Yx78JZJN9EYKKizP0TOJ0YKnsx718sNM/s1600/DSC05087.JPG",
            video: "hhttps://youtu.be/z8Xsl1QDU1E"
        },
        {
            name: "Curd Rice",
            area: "South Indian",
            instructions: `Cook rice and allow it to cool to room temperature. Add fresh homemade curd or yogurt and mix well.
    In a pan, heat oil or ghee. Add mustard seeds, urad dal, chana dal, green chilies, ginger, and curry leaves. Sauté until dal turns golden brown.
    Add this tempering to the curd rice and mix well.
    Garnish with finely chopped coriander leaves and pomegranate seeds.
    Serve chilled or at room temperature.`,
            thumbnail: "https://www.chefkunalkapur.com/wp-content/uploads/2023/05/DSC09411-1300x731.jpg?v=1684031938",
            video: "https://youtu.be/xaPiRmxRSc8"
        },
        {
            name: "Paniyaram",
            area: "South Indian",
            instructions: `Soak 1 cup of idli rice and 1/4 cup urad dal for 4-5 hours.
    Grind to a smooth batter. Ferment overnight.
    To the batter, add finely chopped onions, green chilies, ginger, curry leaves, coriander leaves, salt, and a pinch of baking soda. Mix well.
    Heat a paniyaram pan, add a few drops of oil in each mold, and pour the batter.
    Cook until golden brown and crispy on both sides.
    Serve hot with chutney or sambar.`,
            thumbnail: "https://www.kannammacooks.com/wp-content/uploads/masala-muttai-paniyaram-recipe-1-4.jpg",
            video: "https://youtu.be/ieTVy703Dak"
        },
        {
            name: "Bisi Bele Bath",
            area: "South Indian",
            instructions: `Pressure cook 1/2 cup rice, 1/4 cup toor dal, and 1/4 cup moong dal with 2 1/2 cups water and a pinch of turmeric until soft.
    In a pan, heat ghee. Add mustard seeds, cumin seeds, dry red chilies, curry leaves, and cashews. Sauté until golden.
    Add chopped onions, vegetables, and sauté until soft.
    Add tamarind paste, sambar powder, jaggery, salt, and cooked rice-dal mixture. Mix well.
    Garnish with coriander leaves and serve hot.`,
            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/0/04/Bisi_Bele_Bath_%28Bisibelebath%29.JPG",
            video: "https://youtu.be/rNP83Cb5nzs"
        },
    ];


    await Meal.insertMany(meals);
    console.log('Database seeded!');
    mongoose.connection.close();
});
