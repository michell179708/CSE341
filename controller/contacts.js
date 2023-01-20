const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};


//Explicacion de lo que hace las funciones 

// 1 odtiene o recive un Id y lo guarda en una variable 
//2 crea una conexion a la base de datos 
// 3 pide a la base de daros encontrar el user Id
//4 guarda el resultado de busqueda en la variable res

//funcion que crea un contacto 
//1
 const createContact = async (req, res, next ) => {
  const newcontact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
 //2 
 const response = await  mongodb
   .getDb()
    .db()
    .collection('contacts')
    .insertOne(newcontact);
    if (response.acknowledged) {
      res.status(201).json(response);
      console.log(' info saved');
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
      console.log('error');
    }
  };
  

  const updateContact = async (req, res) => {
    console.log('updateContact started');
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    console.log('info saved');
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: userId }, contact);
    console.log(response);
    console.log('conection done');
    if (response.modifiedCount > 0) {
      res.status(204).send();
      console.log('updateContact finished succesfully');
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
      console.log('updateContact FAILED');
    }
  };

  // const deleteContact = async (req, res) => {
  //   const userId = new ObjectId(req.params.id);
  //   const response = await mongodb.getDb().db().collection('contacts').remove({ _id: userId }, true);
  //   console.log(response);
  //   if (response.deletedCount > 0) {
  //     res.status(204).send();
  //   } else {
  //     res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  //   }
  // };

 
module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };