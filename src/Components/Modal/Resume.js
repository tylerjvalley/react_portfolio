import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Page1 from '../../Images/resumepage1.jpg';
import Page2 from '../../Images/resumepage2.jpg';

class ResumeModal extends Component {

    state = {
        open: false,
        page: 1
    }


    //toggle modal function
    toggleOpen = () => {
       if (this.state.open) {
           this.setState({ open: false })
       } else if (!this.state.open) {
           this.setState({ open: true })
       }
    }

    changePage = (num) => {
        this.setState({ page: num })
    }

    render() {

        let modal, image

        if (this.state.page === 1) {
            image = (<img className="resume-image" src={Page1} alt="resume"/>)
        } else if (this.state.page === 2) {
            image = (<img className="resume-image" src={Page2} alt="resume"/>)
        }

        if (this.state.open) {
            modal = (
                <Modal show={this.state.open} onHide={!this.state.open}>
                    <Modal.Body>
                        {image}
                    </Modal.Body>
                    <Modal.Footer className="res-modal-footer">
                        <div className="page-nums">
                            <i onClick={() => this.changePage(1)} className="fas fa-arrow-left"/>
                            &nbsp;Page {this.state.page} of 2&nbsp;
                            <i onClick={() => this.changePage(2)}className="fas fa-arrow-right" />
                        </div>
                        <Button variant="secondary" onClick={() => this.toggleOpen()}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )
        } else if (!this.state.open) {
            modal = null;
        }



        

        return (
            <>
                <Button className="main-button" variant="outline-light" size="lg" onClick={() => this.toggleOpen()}>See Resume</Button>
                {modal}
            </>
        );
    }
}


export default ResumeModal;