const express = require('express');
const router = express.Router();
//esta codigo llama nuestro controlador y hace un requiere de nuestro field
const contactsController = require('../controller/contacts');
//este codigo hace un get u otra  funcion a nuestra base de batos y tambien a nuestra ruta en el archivo
router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

//router.delete('/:id', contactsController.deleteContact);

module.exports = router;