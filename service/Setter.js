import firebaseClass from '../constants/database';
import constants from '../constants/constants';
import Getter from'./Getter';

class Setter{

    static insertSweetFixedFood(productObj,categoryName){
        _insertFood(productObj,true,false,categoryName,false);
    }

    static static insertSweetCombinedFood(productObj,categoryName){
        _insertFood(productObj,false,false,categoryName,false);
    }

    static insertSaltyFixedFood(productObj,categoryName){
        _insertFood(productObj,true,true,categoryName,false);
    }

    static static insertSaltyCombinedFood(productObj,categoryName){
        _insertFood(productObj,false,true,categoryName,false);
    }

    static insertSweetFixedDrink(productObj,categoryName){
        _insertDrink(productObj,true,false,categoryName,false);
    }

    static static insertSweetCombinedDrink(productObj,categoryName){
        _insertDrink(productObj,false,false,categoryName,false);
    }

    static insertSaltyFixedDrink(productObj,categoryName){
        _insertDrink(productObj,true,true,categoryName,false);
    }

    static static insertSaltyCombinedDrink(productObj,categoryName){
        _insertDrink(productObj,false,true,categoryName,false);
    }

    static insertRawMaterial(productObj,categoryName){
        _insert(productFeature=productObj,type=constants.rawMaterials,categoryName=categoryName,categoryFlag=false);
    }

    static insertSweetFixedFoodCategory(categoryName,features){
        _insertFood(features,true,false,categoryName,true);
    }

    static static insertSweetCombinedFoodCategory(categoryName,features){
        _insertFood(features,false,false,categoryName,true);
    }

    static insertSaltyFixedFoodCategory(categoryName,features){
        _insertFood(features,true,true,categoryName,true);
    }

    static static insertSaltyCombinedFoodCategory(categoryName,features){
        _insertFood(features,false,true,categoryName,true);
    }

    static insertSweetFixedDrinkCategory(categoryName,features){
        _insertDrink(features,true,false,categoryName,true);
    }

    static static insertSweetCombinedDrinkCategory(categoryName,features){
        _insertDrink(features,false,false,categoryName,true);
    }

    static insertSaltyFixedDrinkCategory(categoryName,features){
        _insertDrink(features,true,true,categoryName,true);
    }

    static static insertSaltyCombinedDrinkCategory(categoryName,features){
        _insertDrink(features,false,true,categoryName,true);
    }

    static insertRawMaterialCategory(categoryName,features){
        _insert(productFeature=features,type=constants.rawMaterials,categoryName=categoryName,categoryFlag=true);
    }
}

function _create(obj,type){
    let result={};
    type=constants.nameOf(type);
    let rm = constants.nameOf(constants.rawMaterials);
    let pr = constants.nameOf(constants.products);
    Object.keys(obj).forEach(prop=>{
        if(feature!=='name'&&feature!=='category'){
            result[prop]=obj[prop];
        }
    });
    result[type===pr?obj[name]:type===rm?rm:''];
    return result;
}

function _createCategory(categoryFeature){
return _create(categoryFeature,constants.products);
}

function _createProduct(productFeature){
return _create(productFeature,constants.products);
}

function _push(elementToPost,path){
    let ref = Getter.getDbRef(path);
    ref.set(elementToPost);
}

function _insert(obj,fixedFlag=undefined,saltyFlag=undefined,type,categoryName,categoryFlag){
    let product = categoryFlag?_createCategory(obj):_createProduct(obj);
    let path = constants.productsPath()+constants.pathOf(type)+(fixedFlag!==undefined?fixedFlag?constants.fixed:constants.combined:'')+(saltyFlag!==undefined?saltyFlag?constants.salty:constants.sweet:'')+(categoryName?constants.pathOf(categoryName):'');
    _push(product,path);
}

function _insertFood(productObj,fixedFlag,saltyFlag,categoryName,categoryFlag){
    _insert(productObj,fixedFlag,saltyFlag,constants.foods,categoryName,categoryFlag);
}

function _insertDrink(productObj,fixedFlag,saltyFlag,categoryName){
    _insert(productObj,fixedFlag,saltyFlag,constants.drinks,categoryName,categoryFlag);
}

export default Setter;