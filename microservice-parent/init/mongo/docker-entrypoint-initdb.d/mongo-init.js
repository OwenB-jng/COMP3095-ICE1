//log the start
print('start');

//switch to product-service db/create it if doesn't exist
db = db.getSiblingDB('product-service');

db.createUser({
        user: 'mongoadmin',
        pwd: 'password',
        roles: [{role: 'readWrite', db: 'product-service'}],
    }
);

//create collection
db.createCollection('user');

//log end
print('end');