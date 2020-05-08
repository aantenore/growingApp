import firebaseClass from '../constants/database';
import constants from '../constants/constants';

class Getter{

    //this method return a snapshot of db given a path
    static getDbRef(path){
        return firebaseClass.db().ref(path);
    }
    //this method returns the list of categories child of ref
    static getChildren(ref){
        var categories = [];
        ref.on('value',snap =>{
            snap.forEach(category=>{
                if('/'+category.key!==constants.features) categories.push(category.key);
            });
        });
        return categories;  
    }
    //this method return a list of foods given a category
    static getFoods(category){
        let cat = category.indexOf('/')==0?category:('/'+category);
        return get(constants.foods+cat);
    }

     //this method return a list of drinks given a category
     static getDrinks(category){
        let cat = category.indexOf('/')==0?category:('/'+category);
        return get(constants.drinks+cat);
    }
    //this method return a list of foods
    static getFoods(){
        return get(constants.foods);
    }

    //this method return the list of drinks
    static getDrinks(){
        return get(constants.drinks);
    }

    //this method returns the list of rootChildren
    static getRootChildren(){
        return Getter.getChildren(Getter.getDbRef());  
    }

    //this method return a snapshot of db
    static getDbRef(){
        return Getter.getDbRef('/');
    }
}

//this method iteratively search for products
function get(category){
    global.counterLoop++;
    if(global.counterLoop>constants.counterLoop) return;
    var ref = getDbRef('/'+global.user+constants.products+category);
    let products = [];
    let numOfSubCategories = Getter.getDepthSubCategories(ref);
    if(numOfSubCategories==0){
        ref.on('value',snap=>{
            snap.forEach(product=>{
                let item = product.val();
                item.name = product.key;
                products.push(item);
            });
        });
        return products;
    }else{
        var categories = Getter.getChildren(ref);
        for(let i=0;i<categories.length;i++){
            let prods = get(category+'/'+categories[i]);
            global.counterLoop=0;
            products=products.concat(prods);
        }
        return products;
    }
}

//this method return the depth of subcategories of ref
function getDepthSubCategories(ref){
    var depth = 0;
    var categories = Getter.getChildren(ref);
    for(let i=0;i<categories.length;i++){
        let category = categories[i];
        if('/'+category===constants.description){
            return -1;
        }
    }
    if(categories.length>0) depth = getDepthSubCategories(ref.child(categories[0]));
    depth++;
    
    return depth;
}

export default Getter;