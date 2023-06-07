import express from "express";
import {
  getAllEmployees,
  getEmployees,
  updateEmployees,
  deleteEmployee,
  createEmployees,
  createEmployeeView,
  updateEmployeeView,
} from "../controllers/employees.js";
const router = express.Router();

router.route("/api/employees").get(getAllEmployees).post(createEmployees);
router
  .route("/api/employees/:id")
  .get(getEmployees)
  .patch(updateEmployees)
  .delete(deleteEmployee);

export default router;
