const express = require("express");
const Department = require("../models/departmentModel");

class Departments {
  constructor() {
    this.app = express();

    this.app.post("/newDepartment", this.newDepartment)
    this.app.get("/departments", this.listDepartment)
    this.app.put("/changeDepartment", this.changeDepartment)
    this.app.delete("/deleteDepartment/:id", this.deleteDepartment)

  }

  newDepartment(req, res) {
    let departmentItem = new Department({
      codigo: req.body.codigo,
      departamento: req.body.departamento
    });
    departmentItem.save().then( doc => {
        res.json({
          ok: true
        })
      }, err => {
        res.status(500).json({
          error: "Error al crear el item"
        })
      })
  }

  listDepartment(req, res) {
    Department.find().then(
      (docs) => {
        res.json({
          Departamentos: docs,
        });
      },
      (err) => {
        res.status(500).json({
          error: "Error al cargar los departamentos",
        });
      }
    );
  }

  changeDepartment(req, res) {
      Department.updateOne({_id: req.body._id}, {
        codigo: req.body.codigo,
        departamento: req.body.departamento
      }).then( doc => {
          res.json({
              ok: true
          })
      }, err => {
          res.status(500).json({
              error: 'Error al cargar el nuevo departamento'
          })
      })
  }

  deleteDepartment(req, res) {
    Department.remove({_id: req.params.id}).then( doc => {
        res.json({
            ok: true
        })
    }, err => {
        res.status(500).json({
            error: 'Error al eliminar el departamento'
        })
    })
}
}

module.exports = new Departments().app;
