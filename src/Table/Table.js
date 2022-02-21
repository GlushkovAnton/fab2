import React from 'react';

export default props => (
    <table className="table">
        <thead>
            <tr>
                <th>Номер</th>
                <th>Дата покупки</th>
                <th>Киоск</th>
                <th>Тип</th>
                <th>Статус оплаты</th>
                <th>Оплата</th>
                <th>Сумма</th>
                <th>Кол-во товара</th>
                <th>Товары</th>
                
            </tr>
        </thead>
        <tbody>
            { props.data.map(item =>(
                <tr key={item.id} onClick={props.onRowSelect.bind(null, item)}  >                  
                    <td>{item.id}</td>
                    <td>{item.Date}</td>
                    <td>{item.Kiosk}</td>
                    <td>{item.Type}</td>
                    <td>{item.Status}</td>
                    <td>{item.Pay}₽</td>
                    <td>{item.Sum}₽</td>
                    <td>{item.Quantity}</td>
                    <td>{item.Goods}</td>
                    
                </tr>
            ))}
        </tbody>
    </table>
)
