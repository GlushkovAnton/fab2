import React from 'react';
//import { Modal, Button } from 'react-bootstrap';

const DetailRowView = ({person}) => {
return (
   
  <div>
     <h1>DetailRowView</h1>
     <p>Выбран чек №: <b>{person.id}</b></p>
     <p>Дата покупки: <b>{person.Date}</b></p>
     <p>Киоск: <b>{person.Kiosk}</b></p>
     <p>Тип: <b>{person.Type}</b></p>
     <p>Статус оплаты: <b>{person.Status}</b></p>
     <p>Оплата: <b>{person.Pay}</b></p>
     <p>Сумма: <b>{person.Sum}</b></p>
     <p>Кол-во товара: <b>{person.Quantity}</b></p>
     
  </div> 
)

}
export default DetailRowView;