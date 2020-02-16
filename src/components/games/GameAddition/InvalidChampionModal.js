import {Button, Modal} from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";

/**
 * This component shows a modal when the user tries to add an invalid champion to the champion select.
 */
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

InvalidChampionModal.propTypes = {
    /**
     * A boolean whether to show or not the modal.
     */
    invalidChampion: PropTypes.bool.isRequired,
    /**
     * The champion name passed dynamically to an URL that will bring up the champion's picture.
     */
    champion: PropTypes.string.isRequired,
    /**
     * A useState function that allows the user to close the modal and enter a different (hopefully valid) name.
     */
    setInvalidChampion: PropTypes.func.isRequired
};