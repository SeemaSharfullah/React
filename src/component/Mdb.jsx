import React from 'react'

export default function Mdb() {
  return (
    <div>
        <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid"/>
    <a  href="#!">
      <div className="mask" style={{backgroundColor:' rgba(251, 251, 251, 0.15)'}}></div>
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" className="btn btn-primary">Button</a>
  </div>
        </div>

<h1>Example heading <span className="badge badge-primary">New</span></h1>
<h2>Example heading <span className="badge badge-primary">New</span></h2>
<h3>Example heading <span className="badge badge-primary">New</span></h3>
<h4>Example heading <span className="badge badge-primary">New</span></h4>
<h5>Example heading <span className="badge badge-primary">New</span></h5>
<h6>Example heading <span className="badge badge-primary">New</span></h6>

<table className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
      <th>Name</th>
      <th>Title</th>
      <th>Status</th>
      <th>Position</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width: '45px', height: '45px'}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
            <p className="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Software engineer</p>
        <p className="text-muted mb-0">IT department</p>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">Active</span>
      </td>
      <td>Senior</td>
      <td>
      <button type="button" className="btn btn-success">
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              className="rounded-circle"
              alt=""
              style={{width: '45px', height: '45px'}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
            <p className="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Consultant</p>
        <p className="text-muted mb-0">Finance</p>
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline"
              >Onboarding</span
          >
      </td>
      <td>Junior</td>
      <td>
      <button type="button" className="btn btn-danger">
          View
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              className="rounded-circle"
              alt=""
              style={{width: '45px',height:'45px'}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Designer</p>
        <p className="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
      </td>
      <td>Senior</td>
      <td>
      <button type="button" className="btn btn-warning">
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</table>

<table className="table">
  <thead>
    <tr>
      <th scope="col">ClassName</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Default</th>
      <td>
      <button type="button" className="btn btn-success">Edit</button>
<button type="button" className="btn btn-danger">View</button>
<button type="button" className="btn btn-warning">Delete</button>
</td>
      <td>Cell</td>
    </tr>

    <tr className="table-primary">
      <th scope="row">Primary</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr className="table-secondary">
      <th scope="row">Secondary</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr className="table-success">
      <th scope="row">Success</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr className="table-danger">
      <th scope="row">Danger</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr className="table-warning">
      <th scope="row">Warning</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr className="table-info">
      <th scope="row">Info</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr className="table-light">
      <th scope="row">Light</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr className="table-dark">
      <th scope="row">Dark</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
</div>
    
  )
}
