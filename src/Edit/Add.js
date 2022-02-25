import React, {useState, Component, useEffect} from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class Add extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      check : false,
      data : {
      id:"001",
      Date:"26.02.2020, 18:25:57",
      Kiosk:"Киоск № 11",
      Type:"Продажа",
      Status:"Оплачено",
      Pay:"90.50",
      Sum:"90.50",
      Quantity:"2",
      Goods:"Морс клюква из вологодской области5"},

    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeKiosk = this.handleChangeKiosk.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangePay = this.handleChangePay.bind(this);
    this.handleChangeSum = this.handleChangeSum.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeGoods = this.handleChangeGoods.bind(this);

    this.checkData = this.checkData.bind(this);
    
    
  } 

  

  handleClick() {
    this.setState(prevState => ({
        show: !prevState.show
    }));
  }

  handleChangeId(e){
    let temp = this.state.data
    temp.id = e.target.value
    console.log(temp)
    this.setState({data: temp})
    this.checkData()
  }

  handleChangeDate(e){
    let temp = this.state.data
    temp.Date = e.target.value
    console.log(temp)
    this.setState({data: temp})
    this.checkData()
  }

  handleChangeKiosk(e){
    let temp = this.state.data
    temp.Kiosk = e.target.value
    console.log(temp)
    this.setState({data: temp})
    this.checkData()
  }

  handleChangeType(e){
    let temp = this.state.data
    temp.Type = e.target.value
    console.log(temp)
    this.setState({data: temp})
    this.checkData()
  }

  handleChangeStatus(e){
    let temp = this.state.data
    temp.Status = e.target.value
    console.log(temp)
    this.setState({data: temp})
    this.checkData()
  }

  handleChangePay(e){
    let temp = this.state.data
    temp.Pay = e.target.value
    console.log(temp)
    this.setState({data: temp})
    this.checkData()
  }

  handleChangeSum(e){
    let temp = this.state.data
    temp.Sum = e.target.value
    console.log(temp)
    this.setState({data: temp})
    this.checkData()
  }

  handleChangeQuantity(e){
    let temp = this.state.data
    temp.Quantity = e.target.value
    console.log(temp)
    this.setState({data: temp})
    this.checkData()
  }

  handleChangeGoods(e){
    let temp = this.state.data
    temp.Goods = e.target.value
    console.log(temp)
    this.setState({data: temp})
    this.checkData()
  }
  
  checkData (){
    const reId = /^\d{1,}$/igm;
    const reData = /^\d\d[.]\d\d[.]\d\d\d\d[,]\W\d\d[:]\d\d[:]\d\d$/igm;
    const reKiosk = /Киоск\W[№]\W\d/igm;
    const reType = /Продажа$|Возврат$/igm;
    const reStatus = /Оплачено$|Недоплата$|Нет оплаты$/igm;
    const rePay = /^\d\d[.]\d\d$/igm;
    const reSum = /^\d\d[.]\d\d$/igm;
    const reQuantity = /^\d*$/igm;
    const reGoods = /^[А-ЯA-Z][А-Яа-яA-Za-z\d\W]*$/igm;
    

    (reId.test(this.state.data.id) 
    && reData.test(this.state.data.Date)
    && reKiosk.test(this.state.data.Kiosk)
    && reType.test(this.state.data.Type)
    && reStatus.test(this.state.data.Status)
    && rePay.test(this.state.data.Pay)
    && reSum.test(this.state.data.Sum)
    && reQuantity.test(this.state.data.Quantity)
    && reGoods.test(this.state.data.Goods)) ? this.setState({check: true}) :
    //this.state.data.Date === "002" ? this.setState({check: true}) :
    //this.state.data.Kiosk === "003" ? this.setState({check: true}) :
    //this.state.data.Type === "004" ? this.setState({check: true}) :
    //this.state.data.Status === "005" ? this.setState({check: true}) :
    //this.state.data.Pay === "006" ? this.setState({check: true}) :
    //this.state.data.Sum === "007" ? this.setState({check: true}) :
    //this.state.data.Quantity === "008" ? this.setState({check: true}) :
    //this.state.data.Goods === "009" ? this.setState({check: true}) :
        this.setState({check: false}) //this.props.onAdd.bind(null, this.state.data)
  }

  
render () {
  //const id = this.state.data.id;
return (
  
  <div>
  <Modal show={this.state.show} onHide={this.handleClick}>
  <Modal.Header closeButton>
    <Modal.Title>Добавить чек</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    
  <h1>Добавьте информацию о чеке</h1>
                <p>Номер: <input value={this.state.data.id} onChange={this.handleChangeId} ></input> </p>                
                <p>Дата покупки: <input value={this.state.data.Date} onChange={this.handleChangeDate} ></input> </p>
                <p>Киоск: <input value={this.state.data.Kiosk} onChange={this.handleChangeKiosk} ></input> </p>
                <p>Тип: <input value={this.state.data.Type} onChange={this.handleChangeType} ></input> </p>
                <p>Статус оплаты: <input value={this.state.data.Status} onChange={this.handleChangeStatus} ></input> </p>
                <p>Оплата: <input value={this.state.data.Pay} onChange={this.handleChangePay} ></input> </p>
                <p>Сумма: <input value={this.state.data.Sum} onChange={this.handleChangeSum} ></input> </p>
                <p>Кол-во товара: <input value={this.state.data.Quantity} onChange={this.handleChangeQuantity} ></input> </p>
                <p>Товары: <input value={this.state.data.Goods} onChange={this.handleChangeGoods} ></input> </p>
                

                <div>
                  { this.state.check ? "Для добавления нажмите Добавить"  : "Введеные данные не соответствуют формату" }
                </div>
                 



 
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={this.handleClick}>Close</Button>
    { this.state.check ? 
    <Button variant="primary"  onClick={this.props.onAdd.bind(null, this.state.data)} >Добавить</Button>  : 
    <Button variant="primary" disabled >Неверный формат данных</Button> }
    
  </Modal.Footer>

  
</Modal>


   
</div>

)
}

}
export default Add;

//value={id }