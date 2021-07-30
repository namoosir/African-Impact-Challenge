require("dotenv").config();
const multer = require("multer");

const uploadDocument = multer({ dest: "server/documents/" });
const uploadImage = multer({ dest: "server/images/" });

const userController = require("../controllers/profile");
const postController = require("../controllers/posts");
const eventController = require("../controllers/event")

const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/register");
const { loginUser1 } = require("../controllers/login");
const { loginUser2, updateUser } = require("../controllers/setting");
const { updateCurrentUser } = require("../controllers/user");


const moduleController = require("../controllers/modules");

const assignmentController = require("../controllers/assignments");


router.get("/profile/getUsers", userController.get_all_profiles);

router.get("/profile/getImage/:id", userController.get_image);

router.get("/profile/getDocument/:name", userController.get_document);

router.get("/getDocument/:name", userController.get_document);

router.get("/profile/:id", userController.user_details);

router.post("/register", registerUser);

router.post("/login", loginUser1);

router.post("/profile/auth", loginUser2);

router.put("/profile/update/settings", updateUser);

router.get("/user/update/:id", updateCurrentUser);

router.put("/post", postController.create_post);
router.put("/comment", postController.add_comment);
router.get("/getrec", postController.get_recent_posts);
router.put("/editpost", postController.edit_post);
router.put("/deletepost", postController.remove_post);


router.post("/createModule/:id", moduleController.create_module);
router.get("/getrecmodules", moduleController.get_recent_modules);
router.put("/deletemodule", moduleController.delete_module);
router.get("/getAssignment/:name", moduleController.get_assignment); //is this still in use?????
router.get("/getContent/:name", moduleController.get_content);
router.get("/getLecture/:name", moduleController.get_lecture);
router.get("/getModule/:id", moduleController.get_exact_module);
router.get("/modules/:id", moduleController.get_all_content);
router.get("/lectures/:id", moduleController.get_all_lectures);

router.put("/profile/edit/:id", userController.user_updates);

router.put("/editModule/:id", moduleController.edit_module);

router.post("/assignment/create", assignmentController.create_assignment);
router.get("/assignment/:id", assignmentController.get_assignment_model);
router.put("/assignment/edit/:id", assignmentController.edit_assignment);
router.get("/assignments/:id", assignmentController.get_all_assignments_instructor);

router.post("/event/add", eventController.create_event_module);
router.post("/event/addCompany", eventController.create_event_company)

router.get(
  "/assignment/entrepreneurs",
  assignmentController.get_all_entrepreneurs
);
router.get(
  "/assignment/assignments/:id",
  assignmentController.get_all_assignments
);
router.get(
  "/assignment/:id/:name",
  assignmentController.get_assignment_id_name
);

router.post(
  "/profile/editImage/:id",
  uploadImage.fields([{ name: "imageURL", maxCount: 1 }]),
  userController.save_image
);

router.post(
  "/profile/addDocuments/:id",
  uploadDocument.fields([{ name: "documents" }]),
  userController.save_documents
);

router.post(
  "/addAssignments/:id",
  uploadDocument.fields([{ name: "assignments" }]),
  moduleController.save_assignments
);

router.post(
  "/addContent/:id",
  uploadDocument.fields([{ name: "content" }]),
  moduleController.save_content
);

router.post(
  "/addLectures/:id",
  uploadDocument.fields([{ name: "lectures" }]),
  moduleController.save_lectures
);

router.post(
  "/assignment/submitted/:id",
  uploadDocument.fields([{ name: "SubmittedDocument" }]),
  assignmentController.save_submitted_document
);

router.post(
  "/assignment/marked/:id",
  uploadDocument.fields([{ name: "MarkedDocument" }]),
  assignmentController.save_marked_document
);


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use(
	'/api-docs',
	swaggerUi.serve, 
	swaggerUi.setup(swaggerDocument)
  );

module.exports = router;
