import React from 'react'
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';


export default function New() {
  
  const Delete = (profileName) => {
    alert( ` "${profileName}"Account has been deleted `);
  };
    let array=[{
      Image:"https://mdbootstrap.com/img/new/avatars/6.jpg",
        Name: 'Sujani',
      Phone: '9955441225',
      Email: 'sujani@gmail.com',
      Address: 'Udupi',
      DoB: '10/07/2001'
    },
    {
      Image:"https://mdbootstrap.com/img/new/avatars/8.jpg",
    Name: 'Seema',
      Phone: '9148542075',
      Email: 'seema@gmail.com',
      Address: 'Udupi',
      DoB: '28/09/2001'
    

    }
];

  return (
    <div>
<table className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
        <th>sl.no</th>
        <th>Image</th>
      <th>Name</th>
      <th>Eamil</th>
      <th>Phone</th>
      <th>address</th>
      <th>DoB</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
   {array.map((item,index)=>{
   
return(

  
    <>
    <tr>
<td>{index+1}</td>
<td><img
              src={item.Image}
              alt=""
              style={{width:" 45px", height: "45px"}}
              class="rounded-circle"
              /></td>
<td>{item.Name}</td>
<td>{item.Phone}</td>
<td>{item.Email}</td>
<td>{item.Address}</td>
<td>{item.DoB}</td>
<td>
<Button class="btn btn-success m-2" data-bs-toggle="modal"startIcon={<VisibilityIcon />}  data-bs-target={`#exampleModal1${index}`}>VIEW </Button>
<Button class="btn btn-info m-2" data-bs-toggle="modal" data-bs-target={`#exampleModal2${index}`} startIcon={<EditIcon />}>UPDATE  </Button>
<Button class="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target={`#exampleModal3${index}`} startIcon={<DeleteIcon />}>DELETE  </Button>
</td>
    </tr>
   
    
    

    <div class="modal fade" id={`exampleModal1${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

          <img src={item.Image} style={{width:" 50px", height: "50px"}}
              class="rounded-circle"/>
              <p ><b>Name:</b> {item.Name}</p>
              <p ><b>Phone:</b> {item.Phone}</p>
              <p ><b>Email:</b> {item.Email}</p>
              <p ><b>Address:</b>{item.Address}</p>
              <p><b>DoB:{item.DoB}</b></p>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">OK</button>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade" id={`exampleModal2${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            
          <form>
          <div class="mb-3">
          <img src={item.Image} style={{width:" 50px", height: "50px"}}/></div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">Name:</label>
                  <input type="text" class="form-control" id="recipient-" value={item.Name} />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Phone:</label>
                  <input type="text" class="form-control" id="recipient-" value={item.Phone} />
                </div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">Email:</label>
                  <input type="text" class="form-control" id="recipient-" value={item.Email}/>
                </div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">Address:</label>
                  <input type="text" class="form-control" id="recipient-" value={item.Address}/>
                </div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">DOB:</label>
                  <input type="text" class="form-control" id="recipient-"value={item.DoB} />
                </div>
              </form> 


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>



    <div class="modal fade" id={`exampleModal3${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Delete</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            Are you sure you want to delete {item.Name}'s Account!
              


          </div>
          <div class="modal-footer">
            
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onClick={() => Delete(`${item.Name}`)}>Delete</button>
          </div>
        </div>
      </div>
    </div>

    
    



    </>
);
    })}
  </tbody>
</table>
    </div>
  )
}
