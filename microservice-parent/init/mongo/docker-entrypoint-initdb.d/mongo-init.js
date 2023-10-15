//log the start
print('start');


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
