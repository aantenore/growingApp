import firebaseClass from '../constants/database';
import constants from '../constants/constants';
import Getter from'./Getter';

class Setter{
    //if you are using this class pay attention at the user on which you are writing, i have setted it to 'testshopWriteTest' int the App.js row 60

    //these functions work also for update!

    static insertSweetFixedFood(productObj,categoryName){
        _insertFood(productObj,true,false,categoryName,false);
    }

    static insertSweetCombinedFood(productObj,categoryName){
        _insertFood(productObj,false,false,categoryName,false);
    }

    static insertSaltyFixedFood(productObj,categoryName){
        _insertFood(productObj,true,true,categoryName,false);
    }

    static insertSaltyCombinedFood(productObj,categoryName){
        _insertFood(productObj,false,true,categoryName,false);
    }

    static insertSweetFixedDrink(productObj,categoryName){
        _insertDrink(productObj,true,false,categoryName,false);
    }

    static insertSweetCombinedDrink(productObj,categoryName){
        _insertDrink(productObj,false,false,categoryName,false);
    }

    static insertSaltyFixedDrink(productObj,categoryName){
        _insertDrink(productObj,true,true,categoryName,false);
    }

    static insertSaltyCombinedDrink(productObj,categoryName){
        _insertDrink(productObj,false,true,categoryName,false);
    }

    static insertRawMaterial(productObj,categoryName){
        _insert(productObj,undefined,undefined,constants.rawMaterials,categoryName,false);
    }

    static insertSweetFixedFoodCategory(categoryName,features){
        _insertFood(features,true,false,categoryName,true);
    }

    static insertSweetCombinedFoodCategory(categoryName,features){
        _insertFood(features,false,false,categoryName,true);
    }

    static insertSaltyFixedFoodCategory(categoryName,features){
        _insertFood(features,true,true,categoryName,true);
    }

    static insertSaltyCombinedFoodCategory(categoryName,features){
        _insertFood(features,false,true,categoryName,true);
    }

    static insertSweetFixedDrinkCategory(categoryName,features){
        _insertDrink(features,true,false,categoryName,true);
    }

    static insertSweetCombinedDrinkCategory(categoryName,features){
        _insertDrink(features,false,false,categoryName,true);
    }

    static insertSaltyFixedDrinkCategory(categoryName,features){
        _insertDrink(features,true,true,categoryName,true);
    }

    static insertSaltyCombinedDrinkCategory(categoryName,features){
        _insertDrink(features,false,true,categoryName,true);
    }

    static insertRawMaterialCategory(categoryName,features){
        _insert(features,undefined,undefined,constants.rawMaterials,categoryName,true);
    }
}

function _create(obj,type){
    let tempResult={};
    let result = {};
    type=constants.nameOf(type);
    let ft = constants.nameOf(constants.features);
    let pr = constants.nameOf(constants.products);
    Object.keys(obj).forEach(prop=>{
        if(prop!=='name'&&prop!=='category'){
            tempResult[prop]=obj[prop];
        }
    });
    let key = type===pr?(obj['name']):(type===ft)?ft:'';
    if(tempResult) result[key] = tempResult;
    return result;
}

function _createCategory(categoryFeature){
return _create(categoryFeature,constants.features);
}

function _createProduct(productFeature){
return _create(productFeature,constants.products);
}

function _push(elementToPost,path){
    let ref = Getter.getDbRef(path);
    ref.update(elementToPost);
}

function _insert(obj,fixedFlag=undefined,saltyFlag=undefined,type,categoryName,categoryFlag){
    let product = categoryFlag?_createCategory(obj):_createProduct(obj);
    let path = constants.productsPath()+constants.pathOf(type)+(fixedFlag!==undefined?fixedFlag?constants.fixed:constants.combined:'')+(saltyFlag!==undefined?saltyFlag?constants.salty:constants.sweet:'')+(categoryName?constants.pathOf(categoryName):'');
    _push(product,path);
}

function _insertFood(productObj,fixedFlag,saltyFlag,categoryName,categoryFlag){
    _insert(productObj,fixedFlag,saltyFlag,constants.foods,categoryName,categoryFlag);
}

function _insertDrink(productObj,fixedFlag,saltyFlag,categoryName,categoryFlag){
    //for now there is no division salty sweat drinks --> if change, let substitute undefined with constants.sweat or constants.salty
    _insert(productObj,fixedFlag,undefined,constants.drinks,categoryName,categoryFlag);
}

export default Setter;