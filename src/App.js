//https://github.com/rpulatov/react-ant-test
import React, { Component } from 'react';
//import Loader from './Loader/Loader';
import Table from './Table/Table';
import DetailRowView from './DetailRowView/DetailRowView';
import Edit from './Edit/Edit';
import Add from './Edit/Add';
import { Button } from 'react-bootstrap';
//import Data from 'json./Table/data.json';

import { addData, setStoreStatus } from './redux/fab2Slice';
import { connect } from 'react-redux'


class App extends React.Component {
  constructor (props){
    super (props);
    this.state ={
    test: 'hello',
    jsonStatus: false,
    isLoading: true,
    data: [
      //{
      //  "id":"001",
      //  "Date":" ",
      //  "Kiosk":" ",
      //  "Type":" ",
      //  "Status":" ",
      //  "Pay":" ",
      //  "Sum":" ",
      //  "Quantity":" ",
      //  "Goods":" "
      //},
      
    ],
    row: null,
    newrow: [{"id":"005"},{"id":"006"}], 
  }

  this.onAdd = this.onAdd.bind(this);
  this.onRowSelect = this.onRowSelect.bind(this);
  this.onDelRow = this.onDelRow.bind(this);
  this.onCleanRow = this.onCleanRow.bind(this);
  this.onJsonCreate = this.onJsonCreate.bind(this);
  this.onSetStatusJson = this.onSetStatusJson.bind(this);
  this.handleClickChangeStore = this.handleClickChangeStore.bind(this);
}

  
handleClickChangeStore() {
  //let a1 = this.props.getState()
  //console.log(a1)
  //let data1 = this.state.data
  //console.log(data1)
  this.props.dispatch(setStoreStatus())
  
}


onSetStatusJson (){

    this.setState({jsonStatus: true})
  }

  onRowSelect = row => (
    //console.log(row)
    this.setState({row})
  )

  onCleanRow (a) {
    console.log("row1:",this.state.row)
    this.setState({row: null})  
    console.log("row2:",this.state.row)
  }

  onAdd (a)  {
    console.log(a)
    //this.state.newrow.concat(a)
    let temp = this.state.data
    //console.log(temp)
    temp.push(a)
    //const temp1 = temp.map((_arrayElement) => Object.assign({}, _arrayElement))
    //console.log(temp)
    this.setState({data: temp.map((_arrayElement) => Object.assign({}, _arrayElement)) }) 
    console.log(this.state.data)
    this.props.dispatch(addData(temp))
    //temp = []
    //console.log(temp)

  }

  onDelRow (id){
    console.log(id)
    let temp = this.state.data
    let num = temp.findIndex(item => item.id == id)
    console.log("search position of id:", num)
    let removed = temp.splice(num,1)
    console.log("remove element:" ,removed)
    console.log("new massive:" ,temp)
    this.setState({data: temp.map((_arrayElement) => Object.assign({}, _arrayElement)) }) 
    console.log("new state.data:",this.state.data)
    this.props.dispatch(addData(temp))

  }
  

  onJsonCreate (a) {
    let type = ""
    let status = ""
    console.log ("test json:")
    let arr = require('./Table/data.json')
    console.log ("test json arr:", arr)
    let temp = this.state.data
    console.log(arr.data.cheques.length)
    for (var i = 0; i < arr.data.cheques.length; i++){
          let data = arr.data.cheques[i].dateReg
            data = String(data)
            let dataYear = data.slice(0,4)
            console.log("data:",dataYear)
            let dataMonth = data.slice(5,7)
            console.log("data:",dataMonth)
            let dataDay = data.slice(8,10)
            console.log("data:",dataDay)
            let dataHour = data.slice(11,13)
            console.log("data:",dataHour)
            let dataMinutes = data.slice(14,16)
            console.log("data:",dataMinutes)
            let dataSec = data.slice(17,19)
            console.log("data:",dataSec)
            data = dataDay+"."+dataMonth+"."+dataYear+", "+dataHour+":"+dataMinutes+":"+dataSec
            
          let kiosk = arr.data.cheques[i].kioskName
          let type_num = arr.data.cheques[i].chequeType
          type_num == 0 ?  type ="Продажа" :  type = "Возврат" 
          let status_num = arr.data.cheques[i].sum-arr.data.cheques[i].pays[0].sum
          status_num == 0 ? status = "Оплачено" : status_num > 0 ? status = "Недоплата" : status = "Нет оплаты"
          let pay1 = arr.data.cheques[i].pays[0].sum
          pay1 = String(pay1)
          pay1 = pay1.slice(0, -2)+"."+pay1.slice(-2)
          let sum = arr.data.cheques[i].sum
          sum = String(sum)
          sum = sum.slice(0, -2)+"."+sum.slice(-2)
          let qantity = arr.data.cheques[i].positions[0].quantity
          let goods = arr.data.cheques[i].positions[0].name
          console.log ("Дата:", data)
          console.log ("Киоск:", kiosk)
          console.log ("Тип:", type)
          console.log ("Статус оплаты:", status)
          console.log ("Оплата:", pay1)
          console.log ("Сумма:", sum)
          console.log ("Кол-во:", qantity)
          console.log ("Товары:", goods)
          let id = 1
          
          let addArr = {
              "id": i,
              "Date": data,
              "Kiosk": kiosk,
              "Type": type,
              "Status": status,
              "Pay": pay1,
              "Sum": sum,
              "Quantity": qantity,
              "Goods": goods
          }
          console.log ("addArr:", addArr)
          temp.push(addArr)
        }
    console.log ("temp", temp)
    this.setState({data: temp.map((_arrayElement) => Object.assign({}, _arrayElement)) })
    this.props.dispatch(addData(temp))
    
    this.onSetStatusJson()    

  }

  
  
  render() {
    return (
      <div >
        
      {!this.state.jsonStatus ? <Button onSetStatusJson={this.onSetStatusJson} onClick={this.onJsonCreate.bind(null, 'test')} >
                    Загрузить данные JSON</Button> : null
                    }

      {this.state.row ? <DetailRowView onDelRow={this.onDelRow} person={this.state.row} onCleanRow={this.onCleanRow}  /> : null} 
       <Table 
       //data={this.state.data}
       data={this.props.fab.data}
       onRowSelect={this.onRowSelect} 
       />
      <Edit onAdd={this.onAdd}/>
      {
      //<Button variant="primary" onClick={this.handleClickChangeStore} >button for redux</Button> 
      
      //{!this.props.fab.storeStatu ? <h1>yes</h1> : <h1>no</h1>}
      //{this.state.test}
      //{this.props.fab.test}
       
      }
      </div>
       
      
    );
  }
}

function mapStateToProps(state) {
  return { fab: state.fab }
}
  
export default connect (mapStateToProps)(App); 
