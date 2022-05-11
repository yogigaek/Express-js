const router = require(`express`).Router();
const controller = require(`./controller`);

router.get('/', controller.home);
router.get('/contact', controller.contact); 
router.get(`/contact/:id`, controller.getContactById);

module.exports = router;

