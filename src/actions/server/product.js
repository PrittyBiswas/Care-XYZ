import { ObjectId } from "mongodb";
import { dbConnect, collectionName } from "../../lib/dbConnect";


export const getProducts = async () => {
    const productsCollection = await dbConnect(collectionName.PRODUCTS);
    const products = await productsCollection.find({}).toArray();
    return products;
};


export const getSingleProduct = async (id) => {
    
    if (!id || id.length !== 24) {
        return null;
    }

    const productsCollection = await dbConnect(collectionName.PRODUCTS);

    const product = await productsCollection.findOne({
        _id: new ObjectId(id),
    });

    return product;
};
