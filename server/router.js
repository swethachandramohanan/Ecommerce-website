import { Router } from 'express';
import multer from 'multer';
import auth from './auth.js';
import * as fileHandler from './request-handler.js';

const storage = multer.diskStorage({
  destination: './files',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage }).fields([
  { name: 'image', maxCount: 1 },

]);

const storage1 = multer.diskStorage({
  destination: './profile',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload1 = multer({ storage: storage1 }).fields([
  { name: 'profile', maxCount: 1 },
]);

const router = Router();

router.route('/user').post(upload1, fileHandler.user);
router.route('/login').post(fileHandler.login);
router.route('/get-private-data').get(auth, fileHandler.getPrivateData);
router.route('/get-news-data').get(auth,fileHandler.getNewsData);
router.route('/Product1').post(upload, fileHandler.Product1);
router.route('/Product2').post(upload, fileHandler.Product2);
router.route('/Product3').post(upload, fileHandler.Product3);
router.route('/Product4').post(upload, fileHandler.Product4);
router.route('/Product5').post(upload, fileHandler.Product5);
router.route('/Product6').post(upload, fileHandler.Product6);
router.route('/Product7').post(upload, fileHandler.Product7);
router.route('/Product8').post(upload, fileHandler.Product8);
router.route('/moisturizer').get(fileHandler.moisturizer);
router.route('/sunscreen').get(fileHandler.sunscreen);
router.route('/concealer').get(fileHandler.concealer);
router.route('/compactpowder').get(fileHandler.compactpowder);
router.route('/foundation').get(fileHandler.foundation);
router.route('/primer').get(fileHandler.primer);
router.route('/nailpolish').get(fileHandler.nailpolish);
router.route('/eyeliner').get(fileHandler.eyeliner);
router.get('/api/get-user-products/:userId', fileHandler.getUserProducts);
// router.route('/cart').get(fileHandler.cart);

export default router;
