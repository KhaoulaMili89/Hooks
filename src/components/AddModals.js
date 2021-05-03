import React from 'react'
import { Button,Modal } from 'react-bootstrap'

class BootstrapModal extends React.Component{

    constructor(){
        super();
        this.state = {
            show : false
        }
    }

    handleModalShow() {
        this.setState({ show: !this.state.show })
    }
handleChange = (event) =>{
    this.setState({
        [event.target.name]:event.target.value,
    });
};

    render(){
        return(
            <div>
                <Button variant="primary" onClick={() => this.handleModalShow()}>
                    Add Movies
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShow()}>
                    <Modal.Title>Add new Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!
                    <div>
                        <Modal.Label className="input"> Title :</Modal.Label>
                        <Modal.input type="text" name="title" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <Modal.Label className="input"> Description :</Modal.Label>
                        <Modal.input type="text" name="desc" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <Modal.Label className="input"> Poster :</Modal.Label>
                        <Modal.input type="text" name="poster" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <Modal.Label className="input"> Rating :</Modal.Label>
                        <Modal.input type="text" name="rating" onChange={this.handleChange}/>
                    </div>

                    </Modal.Body>
                    <Modal.Footer> 
                    <Button variant="primary" onClick={() => this.handleModalShow()}>
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={() => this.handleModalShow()}>
                        Close
                    </Button>
                   
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

export default BootstrapModal;