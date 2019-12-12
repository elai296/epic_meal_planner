-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 12, 2019 at 09:50 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `MealPlan`
--

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
CREATE TABLE `calendar` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `meal_time` enum('breakfast','lunch','dinner') COLLATE utf8_unicode_ci NOT NULL,
  `recipe_id` mediumint(9) UNSIGNED DEFAULT NULL,
  `recipe_label` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
CREATE TABLE `favorites` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `recipe_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
CREATE TABLE `recipe` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `directions_url` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `image_url` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `serving_size` tinyint(4) NOT NULL,
  `label` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `cooking_time` mediumint(9) NOT NULL,
  `categories` enum('favorites','gluten-free','vegan','keto','paleo','dairy-free') COLLATE utf8_unicode_ci DEFAULT NULL,
  `favorites` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`id`, `directions_url`, `image_url`, `serving_size`, `label`, `cooking_time`, `categories`, `favorites`) VALUES
(1, 'http://www.seriouseats.com/recipes/2014/04/vegan-chocolate-coffee-muffins.html', 'https://www.edamam.com/web-img/cd0/cd0f763c1566ec5a0f0ae099ecebc5a7.jpg', 12, 'Vegan Chocolate-Coffee Muffins', 35, 'vegan', 0),
(2, 'http://www.foodrepublic.com/recipes/classic-american-fare-now-in-vegan/', 'https://www.edamam.com/web-img/bee/beea3f58e66dbe7ab6e6923fdb4ba670', 4, 'Classic American Fare, Now In ', 30, 'vegan', 0),
(3, 'https://food52.com/recipes/10685-test', 'https://www.edamam.com/web-img/63b/63b0846892401dc1063102db7970fd9a.jpg', 12, 'Snickerdoodles (vegan)', 38, 'vegan', 0),
(4, 'http://honestcooking.com/dairy-free-vegan-nachos-recipe/', 'https://www.edamam.com/web-img/ed3/ed32750be9cc9b518e464a812c533f59.jpg', 4, 'Vegan Nachos', 15, 'vegan', 0),
(5, 'http://www.chowhound.com/recipes/vegan-chocolate-frosting-29437', 'https://www.edamam.com/web-img/837/837ded9f80eb5db293a414dd0f10d0d1', 6, 'Vegan Chocolate Frosting recip', 20, 'vegan', 0),
(6, 'http://pinchofyum.com/peanut-butter-honey-muffins', 'https://www.edamam.com/web-img/389/389330863fe0a761d97a1b138e00bb0d', 6, '{Vegan} Peanut Butter & Honey ', 25, 'vegan', 0),
(7, 'http://www.jamieoliver.com/recipes/fruit-recipes/vegan-toffee-apple-upside-down-cake/', 'https://www.edamam.com/web-img/3fd/3fdc78b639068ebbcf08f8cc564a1569.jpg', 9, 'Vegan toffee apple upside-down', 50, 'vegan', 0),
(8, 'http://thepioneerwoman.com/food-and-friends/peanut-butter-chocolate-chip-ice-cream/', 'https://www.edamam.com/web-img/436/436a1011971012df34b58ceb0aaffcf8', 6, 'No-churn Vegan Peanut Butter C', 13, 'vegan', 0),
(9, 'http://www.thekitchn.com/recipe-vegan-sourdough-portobello-mushroom-sandwich-227948', 'https://www.edamam.com/web-img/21f/21f6ef18488f0c1273f16842ae389f08', 1, 'Vegan Sourdough Portobello Mus', 20, 'vegan', 0),
(10, 'https://elanaspantry.com/keto-chocolate-smoothie/', 'https://www.edamam.com/web-img/083/0834f93ea42c9df7e2faf4125f2b13c1', 2, 'Keto Chocolate Smoothie recipe', 10, NULL, 0),
(11, 'http://www.ruled.me/keto-mixed-green-spring-salad/', 'https://www.edamam.com/web-img/332/332c010aad78689ef18d1d02b3b44127', 1, 'Keto Mixed Green Spring Salad ', 20, 'keto', 0),
(12, 'https://www.allrecipes.com/recipe/263875/keto-and-gluten-free-spinach-feta-and-tomato-wraps-for-two/', 'https://www.edamam.com/web-img/286/28635841b2d4c8c057dfa4191d322da1.png', 2, 'Keto and Gluten-Free Spinach, ', 25, 'keto', 0),
(13, 'http://www.ditchthecarbs.com/2016/01/25/keto-crepes/', 'https://www.edamam.com/web-img/835/835f91bc0dac7f322f75b85b2eba3ce6', 4, 'Keto Crepes recipes', 20, 'keto', 0),
(14, 'http://fluffychixcook.com/keto-chocolate-cake/', 'https://www.edamam.com/web-img/962/962c283e4a2201b4ec71a5b1b6971f3d', 12, 'Keto Chocolate Cake recipes', 2, 'keto', 0),
(15, 'http://ketodietapp.com/Blog/post/2015/05/21/vegetarian-keto-burgers', 'https://www.edamam.com/web-img/0ed/0ed68f9e847d4d48d81ad3b65dfd000b', 2, 'Vegetarian Keto Burgers recipe', 20, 'keto', 0),
(16, 'https://ifood.tv/ingredient/1030443-keto-friendly-bbq-sauce-low-carb-chicken-wing', 'https://www.edamam.com/web-img/366/366a6045c5310caae7501bcfd694845a.jpg', 4, 'Keto Friendly BBQ Sauce - Low ', 25, 'keto', 0),
(17, 'https://ketodietapp.com/Blog/post/2014/12/16/Ultimate-Keto-Burgers', 'https://www.edamam.com/web-img/b17/b179b60d9770583f1f16dfd8b6c406fd', 4, 'Ultimate Keto Burgers recipes', 15, 'keto', 0),
(18, 'http://fluffychixcook.com/keto-boboli-copykat-low-carb-keto-gluten-free/', 'https://www.edamam.com/web-img/d6c/d6c1286944e450cb82cc9337148c47e4', 2, 'Keto Boboli Copykat – Low Carb', 15, 'keto', 0),
(19, 'http://nomnompaleo.com/post/36060636540/paleo-sriracha', 'https://www.edamam.com/web-img/e50/e50584043c015a91a26a7a37f093d476', 2, 'Paleo Sriracha recipes', 20, 'paleo', 0),
(20, 'http://www.foodrepublic.com/recipes/holy-grail-status-perfect-paleo-pie-crust-recipe/', 'https://www.edamam.com/web-img/1ca/1cab9debb6ffa9230133b17eb123e210', 8, 'Perfect Paleo Pie Crust recipe', 15, 'paleo', 0),
(21, 'http://www.thekitchn.com/recipe-bacon-date-paleo-bites-232303', 'https://www.edamam.com/web-img/07b/07bf503e209ce697ff840e3c4d987349', 15, 'Bacon Date Paleo Bites recipes', 30, 'paleo', 0),
(22, 'http://www.chowhound.com/recipes/grain-free-cauliflower-fried-rice-31780', 'https://www.edamam.com/web-img/905/90574d5fb594e757bbefbff9b34a60b2', 4, 'Grain-Free Cauliflower Fried R', 45, 'paleo', 0),
(23, 'https://elanaspantry.com/turkey-sandwich/', 'https://www.edamam.com/web-img/7a9/7a94dfa88004e3c8fda2d05d5ca971e5', 4, 'Leftover Turkey Sandwich recip', 10, 'paleo', 0),
(24, 'http://nomnompaleo.com/2017/06/06/20170606bacon-deviled-egg-salad', 'https://www.edamam.com/web-img/8fa/8fa27e915bd4cbc7bb2d88b7515e0a29', 4, 'Paleo Recipes recipes', 60, 'paleo', 0),
(25, 'http://www.kitchendaily.com/recipe/vegan-green-bean-casserole', 'https://www.edamam.com/web-img/2c3/2c3ddcb338f552ec323a961b223587b8.jpg', 4, 'Vegan Green Bean Casserole', 40, 'paleo', 0),
(26, 'http://www.thekitchn.com/recipe-dairyfree-nutella-recipes-from-the-kitchn-213608', 'https://www.edamam.com/web-img/804/804e22679610454e527cac4fa8cdcc2d', 2, 'Dairy-Free Nutella recipes', 30, 'dairy-free', 0),
(27, 'http://honestcooking.com/dairy-free-apple-pancakes-recipe/', 'https://www.edamam.com/web-img/0c4/0c49694ee37c9ce486ed8465d1ee3664.jpg', 2, 'Dairy-free Apple Pancakes', 25, 'dairy-free', 0),
(28, 'http://www.jamieoliver.com/recipes/dessert-recipes/almond-honey-dairy-free-ice-cream/', 'https://www.edamam.com/web-img/433/4331578930944ea50d624ca3783b062d.jpg', 6, 'Almond & honey dairy-free ice ', 15, 'dairy-free', 0),
(29, 'http://www.seriouseats.com/recipes/2012/06/gluten-free-cream-cheese-pancakes-recipe.html', 'https://www.edamam.com/web-img/9a7/9a7c1f32d17f6c660d6508165b136de9.jpg', 4, 'Gluten-Free Cream Cheese Panca', 20, 'dairy-free', 0),
(30, 'https://www.marthastewart.com/1164898/dairy-free-smashed-potatoes', 'https://www.edamam.com/web-img/bfe/bfecdf0b1d3d2ca9f56c7a47e989d29b.jpg', 8, 'Dairy-Free Smashed Potatoes', 30, 'dairy-free', 0),
(31, 'http://www.biggirlssmallkitchen.com/2013/08/dairy-free-peach-crisp.html', 'https://www.edamam.com/web-img/a46/a46cbe8247345cad439518b7f82a7dd2', 4, 'Dairy-Free Peach Crisp recipes', 50, 'dairy-free', 0),
(32, 'http://www.bonappetit.com/recipe/neo-neapolitan-bombe', 'https://www.edamam.com/web-img/13d/13de8d72e4220ab2ec05ffdf19d54dd9', 18, 'Neo-Neapolitan Bombe recipes', 50, 'dairy-free', 0),
(33, 'https://food52.com/recipes/12485-gluten-free-sugar-free-dairy-free-brownies', 'https://www.edamam.com/web-img/e37/e37d7c629d652eed4f63d745c1b8e7e8.jpg', 12, 'Gluten-free, Sugar-free, Dairy', 41, 'dairy-free', 0),
(34, 'http://kitchenconfidante.com/peanut-butter-oatmeal-cookies-gluten-free-recipe', 'https://www.edamam.com/web-img/ee2/ee2bf9a2837e04f8620d5cfe4f7a2f03', 4, 'Almond Butter Oatmeal Cookies ', 45, 'dairy-free', 0),
(35, 'http://www.seriouseats.com/recipes/2011/11/gluten-free-tuesday-thanksgiving-stuffing.html', 'https://www.edamam.com/web-img/af4/af405d431723a6a5e400e05bcf353f33.jpg', 6, 'Gluten-Free Stuffing', 60, 'gluten-free', 0),
(36, 'http://honestcooking.com/gluten-free-mac-and-cheese/', 'https://www.edamam.com/web-img/789/78993859e05cf4e542720658ae78c80b.jpg', 14, 'Gluten-Free Mac and Cheese', 25, 'gluten-free', 0),
(37, 'http://www.jamieoliver.com/recipes/uncategorised-recipes/gluten-free-citrus-shortbread/', 'https://www.edamam.com/web-img/be9/be9a7ba855f40d1df3f76d18658b1136.jpg', 20, 'Gluten-free citrus shortbread', 30, 'gluten-free', 0),
(38, 'https://www.chowhound.com/recipes/gluten-free-almond-crinkle-cookies-31189', 'https://www.edamam.com/web-img/dfa/dfa0dd872fd439021b81f1a725adddb5.jpg', 16, 'Gluten-Free Almond Crinkle Coo', 40, 'gluten-free', 0),
(39, 'https://www.marthastewart.com/945295/gluten-free-oatmeal-cookies', 'https://www.edamam.com/web-img/573/573dfb503e70012138a4716f7bf74fc5.jpg', 36, 'Gluten-Free Oatmeal Cookies', 60, 'gluten-free', 0),
(40, 'https://glutenfreegirl.com/2009/07/gluten-free-cornbread/', 'https://www.edamam.com/web-img/ddf/ddf3eda9c7c56d2b90a10e95d63f3b8e', 4, 'Gluten-free Cornbread recipes', 50, 'gluten-free', 0),
(41, 'http://www.foodandwine.com/recipes/gluten-free-chicken-parmesan', 'https://www.edamam.com/web-img/079/07908243abc03f9f3ca1c07be9cf60d7', 4, 'Gluten-Free Chicken Parmesan r', 45, 'favorites', 0),
(42, 'https://food52.com/recipes/14809-gluten-free-scallion-pancakes', 'https://www.edamam.com/web-img/0e4/0e4d2ad0c556acbd202f05153e1303d6.jpg', 8, 'Gluten-free Scallion Pancakes', 41, 'gluten-free', 0),
(43, 'http://www.epicurious.com/recipes/food/views/Gluten-Free-Vegan-Oatmeal-Raisin-Cookies-51262680', 'https://www.edamam.com/web-img/c3f/c3f4a724a21a0881ee5bb940d6a2677b', 9, 'Gluten-Free Vegan Oatmeal Rais', 30, 'gluten-free', 0),
(44, 'https://smittenkitchen.com/2009/01/bittersweet-chocolate-and-pear-cake/#comment-231312', 'https://www.edamam.com/web-img/017/017c656833ea59ef2ceff0b6b92b0b17', 4, 'Al Di La’s Torta di Pere [Bitt', 55, 'favorites', 0),
(45, 'https://food52.com/recipes/1422-country-stuffing', 'https://www.edamam.com/web-img/22b/22bb093e1e45eaf2a57ae1af7fbfdd80.jpg', 12, 'Country Stuffing', 37, 'favorites', 0),
(46, 'http://www.foodrepublic.com/2016/02/03/vinho-verde-takes-on-south-korean-favorites-part-2/', 'https://www.edamam.com/web-img/464/464ccdcda015b12fef82c3d951be9b42', 2, 'Vinho Verde Takes on South Kor', 40, 'favorites', 0),
(47, 'http://www.101cookbooks.com/archives/favorite-egg-recipes-recipe.html', 'https://www.edamam.com/web-img/18d/18dcf27a67d4146704e1317f7cb7b3b4', 2, 'Favorite Egg Recipes recipes', 55, 'favorites', 0),
(48, 'http://ruhlman.com/2012/09/guest-post-rob-levitt/', 'https://www.edamam.com/web-img/f18/f18522e62a50c00c643a8cedd1c03ab9.jpg', 8, 'Recipe for the Perfect Start t', 3, 'favorites', 0),
(49, 'http://thepioneerwoman.com/cooking/pioneer_womans_favorite_sandwich/', 'https://www.edamam.com/web-img/b11/b11f269e9e9a0bff6685d13c9cbfafcc', 1, 'Pioneer Woman’s Favorite Sandw', 20, 'favorites', 0),
(50, 'http://www.sassyradish.com/2013/04/my-favorite-tuna-salad/', 'https://www.edamam.com/web-img/44f/44fe2367ad901fa3597830359420e195.jpg', 1, 'My favorite tuna salad', 8, 'favorites', 0),
(58, 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html', 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg', 4, 'Chicken Vesuvio', 60, 'favorites', 0),
(59, 'https://www.chowhound.com/recipes/creamed-chicken-18860', 'https://www.edamam.com/web-img/67d/67dfcb646ef76499afc7b89640868099', 5, 'Creamed Chicken recipes', 30, 'favorites', 0),
(60, 'https://www.tastingtable.com/entry_detail/chefs_recipes/10154/Matzo_balls_watch_your_back.htm', 'https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg', 8, 'Kreplach (Chicken Dumplings)', 10, 'favorites', 0),
(61, 'http://www.marthastewart.com/340994/chicken-parmigiana', 'https://www.edamam.com/web-img/f14/f14c9894afc5574d0e12cdb72f6062e0', 4, 'Chicken Parmigiana recipes', 35, 'favorites', 0),
(62, 'https://food52.com/recipes/14954-chicken-quinoa', 'https://www.edamam.com/web-img/560/5606f4fb972e0789464fecdc9ca595aa.JPG', 2, 'Chicken Quinoa', 29, 'favorites', 0),
(63, 'http://www.bbc.co.uk/food/recipes/chickenalocacciatore_70349', 'https://www.edamam.com/web-img/2ca/2ca946a40338e9b93c1d14dec518e1b8.jpg', 6, 'Chicken cacciatore', 60, 'favorites', 0),
(64, 'http://www.cookingchanneltv.com/recipes/chicken-saltimbocca.html', 'https://www.edamam.com/web-img/36f/36f50faee795ad7c689c16afb606465d.jpg', 6, 'Chicken Saltimbocca', 35, 'favorites', 0),
(65, 'http://www.jamieoliver.com/recipes/chicken-recipes/chicken-paella/', 'https://www.edamam.com/web-img/6b2/6b24bd420a1ddc88c0476c90919f2e2e.jpg', 10, 'Chicken ‘paella’', 60, 'favorites', 0),
(66, 'https://www.foodnetwork.com/recipes/sandra-lee/smothered-chicken-recipe-1950282', 'https://www.edamam.com/web-img/65a/65a7ad1b644869cd901aafd23aa3bf11.jpeg', 4, 'Smothered Chicken', 50, 'favorites', 0),
(67, 'https://food52.com/recipes/8807-salad-abc-apples-bacon-cumin-cheese', 'https://www.edamam.com/web-img/2bd/2bdd379ea57d5066c1b447cf0415f490.JPG', 4, 'Salad ABC - Apples, Bacon, Cum', 24, NULL, 0),
(68, 'http://www.seriouseats.com/recipes/2011/11/crab-toasts-with-sriracha-mayonnaise-recipe.html', 'https://www.edamam.com/web-img/d71/d71108e1d212d38b837d196850ed958e.jpg', 4, 'Crab Toasts with Sriracha Mayo', 15, NULL, 0),
(69, 'https://www.tastingtable.com/entry_detail/chefs_recipes/1944/Reimagining_the_caprese_salad.htm', 'https://www.edamam.com/web-img/7e1/7e1de6821a065ac1f1465a6d95705f1d.jpg', 4, 'Heirloom Tomato and Mozzarella', 9, NULL, 0),
(70, 'http://www.foodrepublic.com/recipes/summer-corn-with-lime-and-manchego-recipe/', 'https://www.edamam.com/web-img/fbf/fbf5e13efa74408d0a830a439e8d60d4.jpg', 6, 'Summer Corn With Lime And Manc', 35, NULL, 0),
(71, 'http://www.seriouseats.com/recipes/2013/02/singaporean-singapore-chili-crab-recipe.html', 'https://www.edamam.com/web-img/aa5/aa536f477527a67d6ccb82423c9e2fa5.jpg', 2, 'Singaporean Chili Crab Recipe', 15, NULL, 0),
(72, 'http://www.seriouseats.com/recipes/2011/11/carrot-and-avocado-salad-with-crunchy-seeds-recipe.html', 'https://www.edamam.com/web-img/3fb/3fbbda164dadd5d3ff370f54bb00bbdb.jpg', 4, 'Carrot and Avocado Salad with ', 60, NULL, 0),
(73, 'http://www.kraftrecipes.com/recipes/abc-soup-112359.aspx', 'https://www.edamam.com/web-img/860/860d6c3528160119f729337a32ad45e3.jpg', 6, '\"ABC\" Soup', 30, NULL, 0),
(74, 'http://www.seriouseats.com/recipes/2012/05/tender-grilled-short-ribs.html', 'https://www.edamam.com/web-img/4b2/4b2e7953ff6f99118bd1c418d249bc87.jpg', 4, 'Tender Grilled Short Ribs Reci', 30, NULL, 0),
(75, 'http://smittenkitchen.com/blog/2015/06/oven-ribs-even-better/', 'https://www.edamam.com/web-img/627/627a131e098b6a4b7230b801d7234708', 1, 'Oven Ribs, Even Better recipes', 50, NULL, 0),
(76, 'http://www.bbc.co.uk/food/recipes/jennysbarbecuesparer_70172', 'https://www.edamam.com/web-img/439/43935b922c6b19e33b0fcd353477c198.jpg', 6, 'Barbecue ribs', 60, NULL, 0),
(77, 'http://www.epicurious.com/recipes/food/views/Chinese-Barbecued-Baby-Back-Ribs-240581', 'https://www.edamam.com/web-img/323/323d188c71c9ee213fcea802c58a3d5b', 4, 'Chinese Barbecued Baby Back Ri', 60, NULL, 0),
(78, 'https://www.realsimple.com/food-recipes/browse-all-recipes/dry-rubbed-baby-back-ribs', 'https://www.edamam.com/web-img/c9d/c9de7422ba9110a76a9c1846f4985216.jpg', 4, 'Dry-Rubbed Baby-Back Ribs', 45, NULL, 0),
(79, 'http://www.delish.com/cooking/recipe-ideas/recipes/a20656/hoisin-glazed-ribs-recipe-fw0113/', 'https://www.edamam.com/web-img/a43/a43596f8273ee676321177faeddd35a0.jpg', 2, 'Hoisin-Glazed Ribs', 10, NULL, 0),
(81, 'http://www.foodrepublic.com/recipes/braised-beef-short-ribs-recipe/', 'https://www.edamam.com/web-img/d33/d33e1ec9380845a5123b3abe80581b6b', 4, 'Braised Beef Short Ribs recipe', 30, NULL, 0),
(82, 'http://www.goodhousekeeping.com/food-recipes/a6850/baby-back-ribs-4434/', 'https://www.edamam.com/web-img/be9/be9ed513925c1f42aba957549867876e.jpg', 6, 'Baby Back Ribs', 10, NULL, 0),
(83, 'http://notwithoutsalt.com/dinner-in-15-harissa-chickpeas-with-spinach/', 'https://www.edamam.com/web-img/4ba/4ba6be7df6b8926da66512bcf3e96fae', 4, 'Harissa Chickpeas with spinach', 30, NULL, 0),
(84, 'https://www.tastingtable.com/entry_detail/chefs_recipes/12903/Fried_Chickpeas.htm', 'https://www.edamam.com/web-img/2e3/2e34fa1199c12607497174cf6e8ad1c8.jpeg', 6, 'Fried Chickpeas', 2, NULL, 0),
(85, 'http://www.epicurious.com/recipes/food/views/crispy-curry-roasted-chickpeas-56389735', 'https://www.edamam.com/web-img/bc4/bc4fbfafa5efd3e3800ef0ba2d7656fd', 6, 'Crispy Curry-Roasted Chickpeas', 45, NULL, 0),
(86, 'https://www.marthastewart.com/341023/crunchy-paprika-chickpeas', 'https://www.edamam.com/web-img/68d/68d0fef45ba81558ea8a1fa607e952ee.jpg', 6, 'Crunchy Paprika Chickpeas', 45, NULL, 0),
(87, 'http://honestcooking.com/refreshing-chickpeas-salad-crispy-bread-fresh-vegetables-recipe/', 'https://www.edamam.com/web-img/24b/24bbb48acb6b497bdc9079171e191b0c.jpg', 3, 'Chickpeas Salad', 15, NULL, 0),
(88, 'https://www.realsimple.com/food-recipes/browse-all-recipes/soy-roasted-chickpeas', 'https://www.edamam.com/web-img/0a0/0a08a88ce8361d7c47d7cdf133f96fca.jpg', 4, 'Soy-Roasted Chickpeas', 20, NULL, 0),
(89, 'http://www.thekitchn.com/recipe-cheetos-style-chickpeas-227533', 'https://www.edamam.com/web-img/815/8159de3e2ce56bb199a189aeb4cf23a0', 2, 'Vegan Cheetos Chickpeas recipe', 45, NULL, 0),
(90, 'http://www.chowhound.com/recipes/fried-chickpeas-with-sage-11203', 'https://www.edamam.com/web-img/0c3/0c376ef65628a334720650c18e321a74', 7, 'Fried Chickpeas with Sage reci', 35, NULL, 0),
(91, 'http://www.kitchendaily.com/recipe/crispy-chickpeas', 'https://www.edamam.com/web-img/b0e/b0e2e2092f9436d74d8d59cb605785af.jpeg', 8, 'Crispy Chickpeas', 30, NULL, 0),
(101, 'http://www.marthastewart.com/340566/sauteed-spinach', 'https://www.edamam.com/web-img/caa/caa67c669b063cde086c711ea2d2ce62.jpg', 4, 'Sauteed Spinach', 15, NULL, 0),
(102, 'http://www.epicurious.com/recipes/food/views/Spinach-Gunge-365772', 'https://www.edamam.com/web-img/698/698124a525a8bd651784273fe77ca310.jpg', 4, 'Spinach Gunge', 17, NULL, 0),
(103, 'http://www.jamieoliver.com/recipes/pasta-recipes/spinach-lasagne/', 'https://www.edamam.com/web-img/ef9/ef96b1ac7cc124f7404ef245f5e8db2a.jpg', 6, 'Spinach lasagne', 50, NULL, 0),
(104, 'http://www.foodandwine.com/recipes/creamy-spinach', 'https://www.edamam.com/web-img/a90/a90908da3e7d9bc5c9ffdcbb3e3983e5.jpg', 4, 'Creamy Spinach', 20, NULL, 0),
(105, 'http://www.cookstr.com/recipes/creamed-spinach-3-hans-rueffert', 'https://www.edamam.com/web-img/21d/21dcc2e31bd4e6ac5b7f1589f0176e5b.jpg', 4, 'Creamed Spinach', 15, NULL, 0),
(106, 'http://www.eatingwell.com/recipe/250846/spinach-apple-juice', 'https://www.edamam.com/web-img/d4a/d4a3c86ae3a941c74df4b06348e12008.jpg', 2, 'Spinach-Apple Juice', 15, NULL, 0),
(107, 'http://www.delish.com/cooking/recipe-ideas/recipes/a25103/garlicky-spinach-1078/', 'https://www.edamam.com/web-img/44b/44b8dbddbd11aa4e9ab7f30c8e5d7029.jpg', 2, 'Garlicky Spinach', 10, NULL, 0),
(109, 'http://familyfoodie.com/shower-recipes-crustless-spinach-quiche-sundaysupper/', 'https://www.edamam.com/web-img/786/786e22eb33cb812e5040a62c19a1936a.jpg', 6, 'Crustless Spinach Quiche', 42, NULL, 0),
(119, 'http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html', 'https://www.edamam.com/web-img/c8c/c8ccf12e2aa2c78b94817f18cd4eaff2.jpg', 4, 'Deep Fried Fish Bones', 31, NULL, 0),
(120, 'http://www.marthastewart.com/314623/fish-bowl-gelatin', 'https://www.edamam.com/web-img/564/564624d44f3551c395d3a4fa2a52d727', 8, 'Fish Bowl Gelatin recipes', 30, NULL, 0),
(121, 'http://www.bbc.co.uk/food/recipes/homemade_fish_fingers_85938', 'https://www.edamam.com/web-img/798/79872b022c279ee76b9bee7421481e5f.jpg', 4, 'Homemade fish fingers', 60, NULL, 0),
(122, 'http://www.foodrepublic.com/2016/01/20/what-is-fish-sauce-caramel/', 'https://www.edamam.com/web-img/a52/a5245222016451d202b5414cd52d36e6', 4, 'Black Fish Sauce Caramel recip', 25, NULL, 0),
(123, 'https://food52.com/recipes/9522-valla-curry-mango-fish-curry', 'https://www.edamam.com/web-img/5c7/5c75f5407f856c60800da2928d994969.jpg', 4, 'Valla Curry (Mango Fish Curry ', 52, 'favorites', 0),
(124, 'http://honestcooking.com/indian-chinese-chilli-fish-recipe/', 'https://www.edamam.com/web-img/da5/da5feaede89663336c7b332d3140df23.jpg', 4, 'Indian Chinese Chilli Fish', 45, NULL, 0),
(125, 'http://www.cookstr.com/recipes/fish-stock-4', 'https://www.edamam.com/web-img/940/940d58603bdc4d0dff1122d127094b6a.jpg', 2, 'Fish Stock', 60, NULL, 0),
(126, 'http://www.eatingwell.com/recipe/248933/easy-sauteed-fish-fillets', 'https://www.edamam.com/web-img/5e8/5e86367b3d64dc7c222285ce9b233e93.jpg', 4, 'Easy Sautéed Fish Fillets', 30, NULL, 0),
(299, 'http://www.seriouseats.com/recipes/2013/05/mango-orange-bellini-sparkling-wine-brunch-cocktail-recipe.html', 'https://www.edamam.com/web-img/ff3/ff32b5a61e62da447197f926661f1198.jpg', 4, 'Mango-Orange Bellini Recipe', 5, NULL, 0),
(300, 'http://www.epicurious.com/recipes/food/views/Mango-Sake-363341', 'https://www.edamam.com/web-img/c42/c4219b4f96885ca291269c2a8fb4c66c', 12, 'Mango Sake recipes', 40, NULL, 0),
(301, 'https://food52.com/recipes/8982-mango-guacamole', 'https://www.edamam.com/web-img/393/3937aa456f4dcb364b211045422af2c6.jpg', 4, 'Mango guacamole', 15, NULL, 0),
(302, 'http://www.eatingwell.com/recipe/249385/broiled-mango', 'https://www.edamam.com/web-img/e76/e7663fc9a84fe4f249eea384c000f063.JPG', 2, 'Broiled Mango', 30, NULL, 0),
(303, 'https://www.marthastewart.com/1153932/mango-lassi-smoothie', 'https://www.edamam.com/web-img/4c6/4c6a8ca711199a5cf11d6c890dda9f36.jpg', 4, 'Mango Lassi Smoothie', 5, NULL, 0),
(304, 'https://www.realsimple.com/food-recipes/browse-all-recipes/mango-salsa', 'https://www.edamam.com/web-img/aa9/aa935237bc68af9b67be048ebf8d9d68.jpg', 6, 'Mango Salsa', 5, NULL, 0),
(305, 'http://www.cookstr.com/recipes/mango-lassi-sharon-herbst', 'https://www.edamam.com/web-img/250/25041aac0c1592e5ee4e17c26d19cd6c.jpg', 4, 'Mango Lassi', 30, NULL, 0),
(306, 'http://www.pbs.org/food/recipes/mango-infusion/', 'https://www.edamam.com/web-img/b0b/b0b039215897e20a8a19b90f673951fb.jpg', 2, 'Mango Infusion', 4, NULL, 0),
(307, 'http://www.cookingchanneltv.com/recipes/indian-ice-cream-mango-kulfi', 'https://www.edamam.com/web-img/aaf/aaf6760230202839170a2953d19e23a8', 4, 'Mango Kulfi recipes', 45, NULL, 0),
(335, 'http://www.marthastewart.com/314256/sweet-hibiscus-tea', 'https://www.edamam.com/web-img/b7a/b7aae515e6f8893b67dd537653eec917.jpg', 6, 'Sweet Hibiscus Tea', 38, 'favorites', 0),
(336, 'http://www.epicurious.com/recipes/food/views/Tipsy-Tea-with-Homemade-Sweet-Tea-359322', 'https://www.edamam.com/web-img/185/1858b75f79e7181df021df238e6119a6', 1, 'Tipsy Tea with Homemade Sweet ', 10, NULL, 0),
(337, 'https://food52.com/recipes/9175-chai-indian-tea', 'https://www.edamam.com/web-img/213/21307a6d26da86828e385c389a01e9b6.jpg', 4, 'Chai (Indian Tea)', 53, NULL, 0),
(338, 'http://www.saveur.com/article/Recipes/Spiced-Tea-Masala-Chai', 'https://www.edamam.com/web-img/a84/a846fa791b78f17ba3bb173fb0e14f85.jpg', 2, 'Spiced Tea (Masala Chai)', 23, NULL, 0),
(339, 'https://www.realsimple.com/food-recipes/browse-all-recipes/bourbon-mint-iced-tea', 'https://www.edamam.com/web-img/eb1/eb14a7566e5e2db818ef234e45bb5897.jpg', 4, 'Bourbon Mint Iced Tea', 30, NULL, 0),
(340, 'http://www.kitchendaily.com/recipe/backyard-tea', 'https://www.edamam.com/web-img/73d/73d0c57468919a8fa777563ec024a2fe.jpg', 1, 'Backyard Tea', 5, NULL, 0),
(341, 'http://www.foodandwine.com/recipes/mint-tea', 'https://www.edamam.com/web-img/4f5/4f56fb6583c26f1e922eb1dc74f4629b.jpg', 4, 'Mint Tea', 28, NULL, 0),
(342, 'http://www.latimes.com/food/la-fo-granitarec2-20110901-story.html', 'https://www.edamam.com/web-img/d7b/d7b4a9e788ea9d6eaae1cbf28148df20.jpg', 4, 'Green tea granita', 20, NULL, 0),
(343, 'http://www.thekitchn.com/recipe-chai-tea-cookies-recipes-from-the-kitchn-198045', 'https://www.edamam.com/web-img/36c/36ce5521cf1ae1f04f3fb9ed00746e33', 12, 'Chai Tea Cookies recipes', 50, NULL, 0),
(344, 'https://www.tastingtable.com/entry_detail/chefs_recipes/14009/Corn_off_the_cob_with_a_five_point_twist.htm', 'https://www.edamam.com/web-img/93d/93d0112cea5b5b212caf763956e4a37c.jpg', 4, 'Chipotle Buttered Corn', 30, NULL, 0),
(345, 'http://www.food.com/recipe/sophia-loren-s-tiramisu-294303', 'https://www.edamam.com/web-img/dc5/dc53d8605337cad1810a2b2485b31096.jpg', 8, 'Sophia Loren’s Tiramisu', 20, NULL, 0),
(346, 'http://recipes-plus.com/recipe/linguine-con-salsa-alla-sophia-loren-17275', 'https://www.edamam.com/web-img/3cf/3cf408545c8accb4e861eb0f4362f50b', 4, 'Linguine con salsa alla Sophia', 20, NULL, 0),
(347, 'https://ifood.tv/dish/1020608-southern-banana-cake', 'https://www.edamam.com/web-img/dde/dde4089e1e9fa8c5e6a30397998ae046.jpg', 6, 'Southern Banana Cake', 40, NULL, 0),
(348, 'http://www.marthastewart.com/336682/grape-gelatin', 'https://www.edamam.com/web-img/0f8/0f8cf4c9a238d5ff8d2e6fbb46fe0956', 6, 'Grape Gelatin recipes', 40, NULL, 0),
(349, 'http://www.epicurious.com/recipes/food/views/Grape-Tomato-Blossoms-108382', 'https://www.edamam.com/web-img/a84/a84fdac4a6a8019fba182c43659cbf7a', 18, 'Grape Tomato \"Blossoms\" recipe', 45, NULL, 0),
(350, 'http://www.pbs.org/food/fresh-tastes/vegan-grape-jelly/', 'https://www.edamam.com/web-img/4fa/4fa0da9e9cd9289558d7f67bb399b1c6', 4, 'Vegan Grape Jelly recipes', 15, NULL, 0),
(351, 'http://www.cookingchanneltv.com/recipes/quick-grape-spritzer.html', 'https://www.edamam.com/web-img/dc2/dc259544de51c0570725b447316c4ef0.jpg', 8, 'Quick Grape Spritzer', 5, NULL, 0),
(352, 'http://www.delish.com/cooking/recipe-ideas/recipes/a29391/great-grape-smoothie-ghk/', 'https://www.edamam.com/web-img/175/1751a942d67fc92310367332c7827875.jpg', 2, 'Great Grape Smoothie', 5, NULL, 0),
(353, 'https://www.foodnetwork.com/recipes/concord-grape-fizz-3363039', 'https://www.edamam.com/web-img/1f3/1f3cf9b3e964f3de8e683b28647d4d3a.jpeg', 4, 'Concord Grape Fizz', 10, NULL, 0),
(354, 'http://www.bonappetit.com/recipe/chicken-and-sausage-cacciatore-with-grape-tomatoes', 'https://www.edamam.com/web-img/0ce/0ce494cd4f4bddc37cd770cf10b5516f.jpg', 4, 'Chicken and Sausage Cacciatore', 45, NULL, 0),
(355, 'http://www.cookstr.com/recipes/grilled-whole-fish-in-grape-leaves', 'https://www.edamam.com/web-img/63c/63cecc1a81bea16ec3dc0e3a154f55a1.jpg', 6, 'Grilled Whole Fish in Grape Le', 60, NULL, 0),
(356, 'http://www.saveur.com/article/Recipes/Three-Cheese-Mixture', 'https://www.edamam.com/web-img/5b3/5b35a46cd5e761f093e382273f6cc68e.jpg', 4, 'Three-Cheese Mixture', 7, NULL, 0),
(357, 'https://www.marthastewart.com/345229/goat-cheese-frosting', 'https://www.edamam.com/web-img/967/967190a706932e29ea209d3d4b3fe20c.jpg', 10, 'Goat Cheese Frosting', 10, NULL, 0),
(358, 'http://www.epicurious.com/recipes/food/views/Cheese-Omelette-51262180', 'https://www.edamam.com/web-img/06c/06c806cbf05be094b085fa81e0620d2e', 1, 'Cheese Omelette recipes', 5, NULL, 0),
(359, 'http://www.jamieoliver.com/recipes/eggs-recipes/simple-cheese-omelette/', 'https://www.edamam.com/web-img/80f/80f11ea92070e2ccfc6d543862a4127f.jpg', 1, 'Simple cheese omelette', 10, NULL, 0),
(360, 'http://www.bbc.co.uk/food/recipes/cheesescones_1287', 'https://www.edamam.com/web-img/8b2/8b2f81156a3b26e898a595f4a4704749.jpg', 10, 'Cheese scones', 60, NULL, 0),
(361, 'http://thepioneerwoman.com/cooking/pimento-cheese/', 'https://www.edamam.com/web-img/c4c/c4c492f7b5540dc91032d63ac8f933bc', 12, 'Pimento Cheese recipes', 15, NULL, 0),
(362, 'http://www.foodrepublic.com/recipes/swiss-cheese-fondue-recipe/', 'https://www.edamam.com/web-img/eb3/eb3b7fcabff47bd8dfc422a8469374ea', 4, 'Swiss Cheese Fondue recipes', 40, NULL, 0),
(363, 'http://honestcooking.com/cheese-bites/', 'https://www.edamam.com/web-img/b08/b089e0b763881289ad320c2caaea7c30.jpg', 6, 'Cheese bites', 45, NULL, 0),
(364, 'https://www.foodnetwork.com/recipes/three-cheese-grilled-cheese-recipe-1973233', 'https://www.edamam.com/web-img/f2a/f2abf3d253f2142b5339de3465a022fc.jpeg', 16, 'Three-Cheese Grilled Cheese', 25, NULL, 0),
(365, 'http://www.seriouseats.com/recipes/2015/09/apple-sparkling-wine-sherry-cocktail-recipe.html', 'https://www.edamam.com/web-img/97c/97ca85ce05ff03fbe74abb1e4c7684d1.jpg', 1, 'Sparkling Apple Sherry Cocktai', 5, NULL, 0),
(366, 'http://www.marthastewart.com/354108/shaken-and-stirred-big-apple', 'https://www.edamam.com/web-img/ffe/ffec3dfe693bd7e995d3466543594a06', 4, 'The Big Apple recipes', 15, NULL, 0),
(367, 'http://www.chowhound.com/recipes/apple-ice-10561', 'https://www.edamam.com/web-img/52b/52b4fe1b30c50791dadd35824340eb7c.jpg', 8, 'Apple Ice Recipe', 15, NULL, 0),
(368, 'http://www.epicurious.com/recipes/food/views/sparkling-apple-cocktail-362470', 'https://www.edamam.com/web-img/112/112429f20a725ba2f2e8f3ab5a71b60f', 1, 'Sparkling Apple Cocktail recip', 10, NULL, 0),
(369, 'http://www.jamieoliver.com/recipes/fruit-recipes/grapefruit-carrot-apple-juice/', 'https://www.edamam.com/web-img/ba0/ba0a2fa6a0ca32b1012d576dda10479e.jpg', 2, 'Grapefruit, carrot & apple jui', 5, NULL, 0),
(370, 'https://food52.com/recipes/8730-apple-slaw', 'https://www.edamam.com/web-img/a3a/a3ad2b6121c0d0e0d750b3b3879e6a52.jpeg', 3, 'Apple Slaw', 16, NULL, 0),
(371, 'http://www.foodandwine.com/recipes/apple-bomb', 'https://www.edamam.com/web-img/4b9/4b9169a70befe46eec9ebf30e21e00e9.jpg', 1, 'Apple Bomb', 6, NULL, 0),
(372, 'https://www.foodnetwork.com/recipes/giada-de-laurentiis/apple-martini-with-sour-apple-hard-candy-recipe-1944771', 'https://www.edamam.com/web-img/b83/b8395a5dc2fa5d7af7399365418257f2.jpeg', 1, 'Apple Martini with Sour Apple ', 3, NULL, 0),
(373, 'http://www.myrecipes.com/recipe/apple-cider-syrup', 'https://www.edamam.com/web-img/9d6/9d6e0a01abe3f05f8c9449337ed110fc.jpg', 4, 'Apple Cider Syrup', 20, NULL, 0),
(410, 'http://www.foodrepublic.com/recipes/pasta-frittata-recipe/', 'https://www.edamam.com/web-img/918/91893c1b387c35e0c3c3937c3308a8c3', 4, 'Pasta Frittata recipes', 15, 'favorites', 0),
(411, 'http://www.marthastewart.com/349716/pinky-pasta', 'https://www.edamam.com/web-img/549/54968edfd2ec18438760ed27680a2dc7', 6, 'Pinky Pasta recipes', 30, NULL, 0),
(412, 'http://honestcooking.com/stove-top-mac-cheese-recipe/', 'https://www.edamam.com/web-img/c66/c661f2829c1c1454763501816b5895f7.jpg', 4, 'Creamy pasta', 15, NULL, 0),
(413, 'http://www.bonappetit.com/recipe/pasta-with-pancetta-and-miso', 'https://www.edamam.com/web-img/fb2/fb236074102bc19e60e975e0809f4deb', 2, 'Pasta with Pancetta and Miso r', 35, NULL, 0),
(414, 'http://www.seriouseats.com/recipes/2012/02/dinner-tonight-swiss-chard-and-pasta-soup.html', 'https://www.edamam.com/web-img/bf9/bf95103d6f82239d3d7fa4494d0beef5.jpg', 4, 'Swiss Chard and Pasta Soup Rec', 60, NULL, 0),
(415, 'https://food52.com/recipes/3898-avocado-pasta-salad', 'https://www.edamam.com/web-img/fa8/fa8d9e1d95ef29dc74813fbc9dc336ad.jpg', 4, 'Avocado Pasta Salad', 39, NULL, 0),
(417, 'http://www.epicurious.com/recipes/food/views/Scrambled-Egg-Pasta-352270', 'https://www.edamam.com/web-img/d60/d6071c0bb79febc3f853d8169e2bfb25', 4, 'Scrambled Egg Pasta recipes', 20, NULL, 0),
(418, 'http://www.delish.com/cooking/recipe-ideas/recipes/a18417/pasta-puttanesca-tuna-122173/', 'https://www.edamam.com/web-img/407/407dc7452b5a12641ecb4e6552713b95.jpg', 6, 'Pasta Puttanesca and Tuna', 25, NULL, 0),
(464, 'http://www.epicurious.com/recipes/food/views/zucchini-noodles-with-anchovy-butter-56389802', 'https://www.edamam.com/web-img/d05/d05bdc0d9cca48ff7cede2b8159e7ad8', 6, 'Zucchini Noodles with Anchovy ', 20, NULL, 0),
(465, 'http://www.delish.com/cooking/recipe-ideas/recipes/a32913/noodle-pancakes-120801/', 'https://www.edamam.com/web-img/920/9202daf12ac490bc0d6a12371ced0c82.jpg', 4, 'Noodle Pancakes', 22, NULL, 0),
(466, 'http://www.marthastewart.com/337178/asian-noodle-salad', 'https://www.edamam.com/web-img/e5b/e5bb9103fc2fa989d3af3174ec11868b.jpg', 2, 'Asian Noodle Salad', 15, NULL, 0),
(467, 'https://www.menshealth.com/recipes/chicken-noodle-soup', 'https://www.edamam.com/web-img/b14/b140daf0b4d0b3f111750c46f1f07501.jpg', 8, 'Chicken-Noodle Soup', 19, NULL, 0),
(468, 'https://food52.com/recipes/17766-korean-cold-noodle-salad', 'https://www.edamam.com/web-img/629/629ed6a2cfef5bc7fc99ed039f62fa24.JPG', 4, 'Korean cold noodle salad', 10, NULL, 0),
(469, 'http://www.jamieoliver.com/recipes/vegetables-recipes/pepper-noodle-salad/', 'https://www.edamam.com/web-img/9b3/9b3f8781553ef7943727c019089c490b.jpg', 4, 'Pepper & noodle salad', 30, NULL, 0),
(470, 'https://www.realsimple.com/food-recipes/browse-all-recipes/noodle-salad', 'https://www.edamam.com/web-img/9d3/9d33d463cd826fa78e44bb39457f4158.jpg', 4, 'Noodle Salad', 30, NULL, 0),
(471, 'http://www.goodhousekeeping.com/food-recipes/a5177/seafood-noodle-soup-supper-1391/', 'https://www.edamam.com/web-img/6e2/6e2c77a062df58f6ec339a284706e097.jpg', 3, 'Seafood Noodle-Soup Supper', 30, NULL, 0),
(472, 'http://www.cookingchanneltv.com/recipes/noodle-kugel.html', 'https://www.edamam.com/web-img/383/383fde345d21bf9b76f056093b259d5a.jpg', 6, 'Noodle Kugel', 50, NULL, 0),
(473, 'http://www.marthastewart.com/950845/perfect-white-rice-rice-cooker', 'https://www.edamam.com/web-img/61e/61e1dcab964820d42addb821223169c0.jpg', 4, 'Perfect White Rice in a Rice C', 17, NULL, 0),
(474, 'http://thepioneerwoman.com/cooking/perfect-sushi-rice/', 'https://www.edamam.com/web-img/a0d/a0d422e9f189fb72c3c73be07630f303', 4, 'Perfect Sushi Rice recipes', 50, NULL, 0),
(475, 'http://www.saveur.com/perfect-brown-rice-recipe', 'https://www.edamam.com/web-img/366/3662b94da8e7f6c0fdc51d5168beb9fc.jpg', 4, 'Perfect Brown Rice', 51, NULL, 0),
(476, 'http://www.thekitchn.com/how-to-make-rice-in-a-rice-cooker-226756', 'https://www.edamam.com/web-img/c0a/c0abc8cdde5ed0139ca6b51a8f09caea', 5, 'How To Make Rice in a Rice Coo', 45, NULL, 0),
(477, 'http://www.cookstr.com/recipes/jasmine-rice', 'https://www.edamam.com/web-img/b77/b77ee47ca0fef42ab0cbc36eb35601d6.jpg', 6, 'Jasmine Rice', 30, NULL, 0),
(478, 'http://www.epicurious.com/recipes/food/views/coriander-rice-109590', 'https://www.edamam.com/web-img/f6f/f6f54fe4464c56ac7483afe57caf7e2d', 16, 'Coriander Rice recipes', 60, NULL, 0),
(479, 'http://herbivoracious.com/2009/03/coconut-rice-recipe.html', 'https://www.edamam.com/web-img/6fe/6fe5d943de92d453937a95ff1c0e7d89.jpg', 4, 'Coconut Rice', 29, NULL, 0),
(480, 'http://www.cookingchanneltv.com/recipes/robert-irvine/rice-balls.html', 'https://www.edamam.com/web-img/960/960025afde06f1f61f8fa6059435cc91.jpg', 24, 'Rice Balls', 30, NULL, 0),
(481, 'https://www.realsimple.com/food-recipes/browse-all-recipes/easy-rice-pudding', 'https://www.edamam.com/web-img/326/326386749eaff18f5fa3914a95295acb.jpg', 6, 'Easy Rice Pudding', 15, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `recipe_ingredients`
--

DROP TABLE IF EXISTS `recipe_ingredients`;
CREATE TABLE `recipe_ingredients` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `recipe_id` mediumint(9) UNSIGNED NOT NULL,
  `ingredients_desc` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------

--
-- Table structure for table `shopping_list`
--

DROP TABLE IF EXISTS `shopping_list`;
CREATE TABLE `shopping_list` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `ingredients_id` mediumint(9) UNSIGNED DEFAULT NULL,
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  `ingredient_text` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipeId` (`recipe_id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipeId` (`recipe_id`);

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `label` (`label`);

--
-- Indexes for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipeId` (`recipe_id`);

--
-- Indexes for table `shopping_list`
--
ALTER TABLE `shopping_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ingredientsId` (`ingredients_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calendar`
--
ALTER TABLE `calendar`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=482;
--
-- AUTO_INCREMENT for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11910;
--
-- AUTO_INCREMENT for table `shopping_list`
--
ALTER TABLE `shopping_list`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=730;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `calendar`
--
ALTER TABLE `calendar`
  ADD CONSTRAINT `calendar_ibfk_1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD CONSTRAINT `recipe_ingredients_ibfk_1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `shopping_list`
--
ALTER TABLE `shopping_list`
  ADD CONSTRAINT `shopping_list_ibfk_1` FOREIGN KEY (`ingredients_id`) REFERENCES `recipe_ingredients` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
