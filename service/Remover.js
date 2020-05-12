import firebaseClass from '../constants/database';
import constants from '../constants/constants';
import Getter from'./Getter';

class Remover{
    //if you are using this class pay attention at the user on which you are removing, i have setted it to 'testshopWriteTest' int the App.js row 60

    static removeProduct(productObj){
        if(dataObj.category&&dataObj.name) _remove(dataObj.category+productObj.name)
    }

    static removeCategory(categoryName,type,saltyOrSweet,fixedOrCombined){
        switch(type){
            case constants.foods:
                if(saltyOrSweet===constants.salty&&fixedOrCombined==constants.fixed)Remover.removeFixedSaltyFoodCategory(categoryName);
                if(saltyOrSweet===constants.salty&&fixedOrCombined==constants.combined)Remover.removeCombinedSaltyFoodCategory(categoryName);
                if(saltyOrSweet===constants.sweet&&fixedOrCombined==constants.fixed)Remover.removeFixedSweetFoodCategory(categoryName);
                if(saltyOrSweet===constants.sweet&&fixedOrCombined==constants.combined)Remover.removeCombinedSweetFoodCategory(categoryName);
                break;
            case constants.drinks:
                if(saltyOrSweet===constants.salty&&fixedOrCombined==constants.fixed)Remover.removeFixedSaltyDrinkCategory(categoryName);
                if(saltyOrSweet===constants.salty&&fixedOrCombined==constants.combined)Remover.removeCombinedSaltyDrinkCategory(categoryName);
                if(saltyOrSweet===constants.sweet&&fixedOrCombined==constants.fixed)Remover.removeFixedSweetDrinkCategory(categoryName);
                if(saltyOrSweet===constants.sweet&&fixedOrCombined==constants.combined)Remover.removeCombinedSweetDrinkCategory(categoryName);
                break;
            case constants.rawMaterials:
                Remover.removeRawMaterialCategory(categoryName);
            default: break;
        }
    }

    static removeCategoryByContext(categoryName,context){
        if(context?.type) var a = context?.type;
        if(context?.saltyOrSweet) var b = context?.saltyOrSweet;
        if(context?.fixedOrCombined) var c = context?.fixedOrCombined;
        Remover.removeCategory(categoryName,a,b,c);
    }

    static removeFixedSaltyFoodCategory(category){
        let basePath = constants.saltyFixedFoodsPath();
        _removeCategory(basePath,category);
    }

    static removeCombinedSaltyFoodCategory(category){
        let basePath = constants.saltyCombinedFoodsPath();
        _removeCategory(basePath,category);
    }

    static removeFixedSweetFoodCategory(category){
        let basePath = constants.sweetFixedFoodsPath();
        _removeCategory(basePath,category);

    }

    static removeCombinedSweetFoodCategory(category){
        let basePath = constants.saltyCombinedFoodsPath();
        _removeCategory(basePath,category);
    }

    static removeFixedSaltyDrinkCategory(category){
        let basePath = constants.saltyFixedDrinksPath();
        _removeCategory(basePath,category);
    }

    static removeCombinedSaltyDrinkCategory(category){
        let basePath = constants.saltyCombinedDrinksPath();
        _removeCategory(basePath,category);
    }

    static removeFixedSweetDrinkCategory(category){
        let basePath = constants.sweetFixedDrinksPath();
        _removeCategory(basePath,category);
    }

    static removeCombinedSweetDrinkCategory(category){
        let basePath = constants.sweetCombinedDrinksPath();
        _removeCategory(basePath,category);
    }

    static removeRawMaterialCategory(category){
        let basePath = constants.rawMaterialsPath();
        _removeCategory(basePath,category);
    }
}

function _remove(dataPath){
let ref = Getter.getDbRef(dataPath);
ref?.remove();
}

function _removeCategory(basePath,category){
    let commonIndex = basePath.indexOf(category);
    let path = undefined;
    if(commonIndex>-1) path = basePath.substring(0,commonIndex) + constants.pathOf(category);
    if(path) _remove(path);
}


export default Remover;