import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Links from '../Projects/Links/Links';

const ProjectModal = (props) => {

    //useState hook to toggle modal
    const [open, setOpen] = useState(false);

    //toggle modal function
    const toggle = () => {
        setOpen(!open)
    }


    let modal, projectLink, githubLink;

    switch(props.id) {
        case "1":
            projectLink = 'https://a-southern-market.herokuapp.com/';
            githubLink = 'https://github.com/tylerjvalley';
            break;
        case "2":
            projectLink = 'https://noojinlawfirm.herokuapp.com/';
            githubLink = 'https://github.com/tylerjvalley';
            break;
        case "3":
            projectLink = 'https://valley-book-finder.herokuapp.com/';
            githubLink = 'https://github.com/tylerjvalley/book-finder';
            break;
        case "4":
            projectLink = 'https://tylerjvalley.github.io/france-is-bacon/';
            githubLink = 'https://github.com/tylerjvalley/france-is-bacon';
            break;
        case "5":
            projectLink = 'https://valley-finance-tracker.herokuapp.com/';
            githubLink = 'https://github.com/tylerjvalley/finance_tracker';
            break;
        case "6":
            projectLink = 'https://ty-message.herokuapp.com/';
            githubLink = 'https://github.com/tylerjvalley/ty_message';
            break;
        case "7":
            projectLink = 'https://codepen.io/tylerjvalley/full/mYzrjo';
            githubLink = "https://github.com/tylerjvalley/budget-app";
            break;
        case "8":
            projectLink = 'https://codepen.io/tylerjvalley/full/pmxEpy';
            githubLink = 'https://github.com/tylerjvalley/pig-game-2';
            break;
        case "9":
            projectLink = 'https://codepen.io/tylerjvalley/full/bymwmd';
            githubLink = 'https://github.com/tylerjvalley/tip-calculatorjs';
            break;
        default:
            projectLink = null;
            githubLink = null;
    }

    if (open) {
        modal = (
            <Modal show={open} onHide={!open}>
                <Modal.Header>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.description}
                </Modal.Body>
                <Modal.Footer>
                    <Links 
                        project={projectLink}
                        code={githubLink}
                    />
                    <Button variant="secondary" onClick={() => toggle()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    } else if (!open) {
        modal = null;
    }



    
    
    return (
        <>
            <Button className="modal-button" onClick={() => toggle()}>View</Button>
            {modal}
        </>
    );
}


export default ProjectModal;