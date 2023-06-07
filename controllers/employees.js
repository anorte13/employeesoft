import Employee from "../models/Employee.js";

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});

    //res.status(200).json({ employee });
    res.status(200).json({ employees, count: employees.length });
    ///res.send("Get all employees");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getEmployees = async (req, res) => {
  try {
    let { id: employeeID } = req.params;
    const employee = await Employee.findOne({ _id: employeeID });
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with ID ${employeeID} found.` });
    }
    res.status(200).json({ employee });
    //res.send("Get a single employee");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const updateEmployeeView = async (req, res) => {
  try {
    let { id: employeeID } = req.params;
    const employee = await Employee.findOne({ _id: employeeID });
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with ID ${employeeID} found.` });
    }
    res.render("update", {
      title: "Update Employee",
      employee,
      message: req.flash("message"),
    });
    //res.send("Get a single employee");
  } catch (err) {}
};
const updateEmployees = async (req, res) => {
  try {
    let { id: employeeID } = req.params;
    const employee = await Employee.findByIdAndUpdate(
      { _id: employeeID },
      req.body,
      {
        new: true, //update the document and also return the newly updated document to the collection
        runValidators: true, //run validators within the schema
      }
    );
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with id ${employeeID} found` });
    }
    res.status(200).json({ msg: "Successfully updated employee" });
    //res.send("Update an employee");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createEmployees = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({ employee });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createEmployeeView = async (req, res) => {
  res.render("add", { title: "Add Employee", message: req.flash("message") });
};
const deleteEmployee = async (req, res) => {
  try {
    let { id: employeeID } = req.params;
    const employee = await Employee.findOneAndDelete({ _id: employeeID });
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with ID ${employeeID} found.` });
    }
    res.status(200).json({ msg: "Employee successfully deleted" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export {
  getAllEmployees,
  getEmployees,
  updateEmployees,
  createEmployees,
  deleteEmployee,
  createEmployeeView,
  updateEmployeeView,
};
