// const express= require("express");
// const usercontrolerkaitem = require("../controller/UserController");

// const Router = express.Router();


// Router.post("/create", usercontrolerkaitem.Createcrud )
// Router.get("/display", usercontrolerkaitem.displayData )
// Router.post("/update", usercontrolerkaitem.updateData )
// Router.get("/view", usercontrolerkaitem.viewData )






// module.exports = Router;





const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/UserController");

router.post("/create", userCtrl.createUser);
router.get("/display", userCtrl.getUsers);
router.get("/view", userCtrl.getUserById);
router.post("/update", userCtrl.updateUser);
router.delete("/delete", userCtrl.deleteUser);

module.exports = router;
