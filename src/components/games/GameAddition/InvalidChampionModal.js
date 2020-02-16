import {Button, Modal} from "react-bootstrap";
import React from "react";

const InvalidChampionModal = props => {

    return (
        <Modal animation={true} show={props.invalidChampion}>
            <Modal.Header closeButton>
                <Modal.Title>Invalid champions</Modal.Title>
            </Modal.Header>
            <Modal.Body>You entered an invalid champion: <strong>{props.champion}</strong></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.setInvalidChampion(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default InvalidChampionModal;