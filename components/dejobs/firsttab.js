import React from 'react';
import useSWR from 'swr'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function FirstTab() {
  const { data, error } = useSWR('/api/posts', fetcher)
  const [modalOpen, setModalOpen] = React.useState(false);
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="container">
      <div className='container'>
        {console.log(data)}
        {data.data.map((job, index) => {
          return (




            
            <div className="gallery">
            <div className='gallery-list' style={{
            display: "flex",
            justifyContent: "center",
          }}>
            
              {/* Insert Gallery of DB requests 3 per row (infinite columns) */}
              <div className="card" key={index}>
              
              <button  id ="btn" className='galleryButton'
        type="button"
        onClick={() => setModalOpen(!modalOpen)}>
          <div>

            

          
              <div>
              <h2 className="jobTitle">{job.title}</h2>
              </div>
              <div>
              <p className='jobtext'>{job.role}</p>
              </div>
              <div>
              <p className='jobtext'>{job.budget}</p>
              </div>
              </div>
              <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>

              
              
                       
                       </button>
                       
              <br></br>
              <hr className='linebreak'></hr>
              <br></br>
            </div>
  
            </div>
          {/* First tab content will go here */}
        </div>
            
          );
        })}

          <br></br>
          <hr></hr>
          <br></br>
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>

            
          <p>Coming soon 😉</p>
          </div>
          
      </div>
    </div>
  );
}

export default FirstTab