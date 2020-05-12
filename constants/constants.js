const constants = {
    defaultUser :"testshop",
    foods : "/mangiare",
    drinks : "/bere",
    fixed : "/fisso",
    categories: "/categories",
    combined : "/combinato",
    sweet : "/dolce",
    fixedSweet:"/fisso/dolce",
    combinedSweet:"/combinato/dolce",
    salty :"/salato",
    fixedSalty:"/fisso/salato",
    combinedSalty:"/combinato/salato",
    products : "/products",
    features : "/caratteristiche",
    description : "/descrizione",
    ingredients : "/ingredienti",
    rawMaterials : "/materie_prime",
    counterLoop: 10,
    nameOf: (nameWithSlash) => nameWithSlash?.indexOf('/')===0?nameWithSlash.slice(1):nameWithSlash,
    pathOf: (nameWithoutSlash) => nameWithoutSlash?.indexOf('/')===0?nameWithoutSlash:('/'+nameWithoutSlash),
    fixedPathOf : (path) => (path?.indexOf('/')===0?path:'/'+path)+constants.fixed,
    combinedPathOf : (path) => (path?.indexOf('/')===0?path:'/'+path)+constants.combined,
    productsPath: () => '/'+global.user+constants.products,
    foodsPath : () => constants.productsPath()+constants.foods,
    drinksPath : () => constants.productsPath()+constants.drinks,
    sweetFixedFoodsPath : () => constants.foodsPath()+constants.fixedSweet,
    sweetCombinedFoodsPath : () => constants.foodsPath()+constants.combinedSweet,
    saltyFixedFoodsPath : () => constants.foodsPath()+constants.fixedSalty,
    saltyCombinedFoodsPath : () => constants.foodsPath()+constants.combinedSalty,
    sweetFixedDrinksPath : () => constants.drinksPath()+constants.fixedSweet,
    sweetCombinedDrinksPath : () => constants.drinksPath()+constants.combinedSweet,
    saltyFixedDrinksPath : () => constants.drinksPath()+constants.fixedSalty,
    saltyCombinedDrinksPath : () => constants.drinksPath()+constants.combinedSalty,
    rawMaterialsPath: () => constants.productsPath()+constants.rawMaterials,
    fixedDrinksPath : () => constants.fixedPathOf(constants.drinksPath()),
    combinedDrinksPath : () => constants.combinedPathOf(constants.drinksPath()),
}

export default constants;