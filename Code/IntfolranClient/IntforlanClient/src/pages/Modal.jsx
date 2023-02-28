import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.nombre}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="flex">
        <div className="w-1/2 flex-none">
          <img src={props.imagen} alt={props.nombre} />
        </div>
        <div className="m-3 w-1/2 flex-none">
          <p>
            <br />
            <b>Peso: </b> {props.Peso}
            <br />
            <b>Memoria: </b> {props.Memoria}
            <br />
            <b>Almacenamiento: </b> {props.Almacenamiento}
            <br />
            <b>Ranura: </b> {props.Ranura}
            <br />
            <b>Pantalla: </b> {props.Pantalla}
            <br />
            <b>Resolucion: </b> {props.Resolucion}
            <br />
            <b>CamaraPrincipal: </b> {props.CamaraPrincipal}
            <br />
            <b>CamaraSecundaria: </b> {props.CamaraSecundaria}
            <br />
            <b>Sistema: </b> {props.Sistema}
            <br />
            <b>Bateria: </b> {props.Bateria}
            <br />
            <b>Color: </b> {props.Color}
            <br />
            <b className="text-green-600">precio: </b> {props.precio}
            {props.hasOwnProperty("valorOferta") ? (
              <p className="text-red-600">
                -{props.valorOferta}% paga:{" "}
                <b>
                  {props.precio - props.precio * (props.valorOferta / 100)}
                  $!!
                </b>
              </p>
            ) : null}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
