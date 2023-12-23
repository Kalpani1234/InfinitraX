import React, { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import { Navbar } from "react-bootstrap";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewInventoryModal from "../components/modals/ViewInventoryModal";
import EditInventoryModal from "../components/modals/EditInventoryModal";
import DeleteConfirmationModal from "../components/modals/confirmationmodal/DeleteConfirmationModal";


function Inventory() {
  const [showView, setShowView] = useState(false); 
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const InventoryTable = [
    {
      product: "monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "Monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "Monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "Monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
    {
      product: "Monitor",
      attribute: "Black -medium",
      price: "10000",
      sellingprice: "12000",
      inventory: "110",
    },
  ];
  
  const handleView = (inventory) => {
    setSelectedInventory(inventory);
    setShowView(true);
  };
  
  const handleEdit = (inventory) => {
    setSelectedInventory(inventory);
    setShowEdit(true);
  };
  const handleDelete = () => {
    console.log("Deleting inventory:", selectedInventory);
    setShowDeleteConfirmation(false);
  };


  return (
    <Sidebar>
      <div>
        <Navbar className="navbar mt-3 m-3 py-1 rounded">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <span className="navbar-brand mb-0 h1 text-white">
              Inventory Section
            </span>
          </div>
        </Navbar>
      </div>

      <div className="container mt-3">
        <Navbar className="navbar bg-white mb-3 mx-1 py-1 rounded">
          <div className=" row container-fluid">
            <div className="col">
              <p className="navbar-brand fw-bold">Inventory List</p>
            </div>
            <div className="col">
              <span className="fw-bold ">Filter by</span>

              <select id="selectFilterByAttribute" className="form-select">
                <option>Filter by Inventory</option>
              </select>
            </div>
          </div>
        </Navbar>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                No
              </th>

              <th scope="col" className="col-1">
                Product
              </th>
              <th scope="col" className="col-1">
                Attribute
              </th>
              <th scope="col" className="col-1">
                Price
              </th>
              <th scope="col" className="col-1">
                Selling Price
              </th>
              <th scope="col" className="col-1">
                Inventory
              </th>
              <th scope="col" className="col-1">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {InventoryTable.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                          <td>{data.product}</td>
                          <td>{data.attribute}</td>
                          <td>{data.price}</td>
                          <td>{data.sellingprice}</td>
                          <td>{data.inventory}</td>
                          
                <td>
                  <IconButton
                    aria-label="view"
                    className="viewbutt"
                    onClick={() => handleView(data)}
                  >
                    <VisibilityIcon className="text-" />
                  </IconButton>
                  <IconButton 
                  aria-label="edit" 
                  className="viewbutt"
                  onClick={() => handleEdit(data)}>
                    <EditIcon className="text-success" />
                  </IconButton>
                  <IconButton aria-label="delete" 
                  className="viewbutt"
                  onClick={() => setShowDeleteConfirmation(true)}>
                    <DeleteIcon className="text-danger" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ViewInventoryModal
        show={showView}
        onHide={() => setShowView(false)}
        inventoryDetails={selectedInventory}
      />
       <EditInventoryModal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        inventoryDetails={selectedInventory}
      />
       <DeleteConfirmationModal
        show={showDeleteConfirmation}
        onHide={() => setShowDeleteConfirmation(false)}
        onDelete={handleDelete}
      />
    </Sidebar>
  );
}

export default Inventory;
