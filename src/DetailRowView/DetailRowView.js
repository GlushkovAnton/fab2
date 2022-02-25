import React, {useState, Component, useEffect} from 'react';
import { Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class DetailRowView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,

    };

    this.handleClick = this.handleClick.bind(this);


  }
  
  handleClick() { 
    //this.props.show = false
    //console.log (this.props.show)
    this.setState(prevState => ({
        show: !prevState.show
    }));
    this.props.onCleanRow.bind(null, this.props.person.id)
  }


  //const [show, setShow] = useState(true);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true); 
  
  //useEffect( () => {
  //  setShow(true)
  //});

  
render () {
return (
  
  
  //<Modal.Dialog>
  <Modal show={this.state.show} onHide={this.props.onCleanRow.bind(null, this.props.person.id)}>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <h1>DetailRowView</h1>
     <p>Выбран чек №: <b>{this.props.person.id}</b></p>
     <p>Дата покупки: <b>{this.props.person.Date}</b></p>
     <p>Киоск: <b>{this.props.person.Kiosk}</b></p>
     <p>Тип: <b>{this.props.person.Type}</b></p>
     <p>Статус оплаты: <b>{this.props.person.Status}</b></p>
     <p>Оплата: <b>{this.props.person.Pay}</b></p>
     <p>Сумма: <b>{this.props.person.Sum}</b></p>
     <p>Кол-во товара: <b>{this.props.person.Quantity}</b></p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={this.props.onCleanRow.bind(null, this.props.person.id)}>Close</Button>
    <Button variant="primary" onClick={this.props.onDelRow.bind(null, this.props.person.id)}>Delete</Button>
    
  </Modal.Footer>
  </Modal>
//</Modal.Dialog>


)
}

}
export default DetailRowView;


