import React from 'react';
import {Button} from 'react-bootstrap';

import Add from './Add';

class Edit extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        show: false,
        newrow: "null in edit"
  
      };

      this.handleClick = this.handleClick.bind(this);
      
    }

    handleClick() {
        this.setState(prevState => ({
            show: !prevState.show
        }));
      }
    
      



    render () {
        return (
            <div>
                
                <Button onClick={this.handleClick} >
                    Добавить чек
                </Button>
                {this.state.show ? <Add onAdd={this.props.onAdd} /> : null}
                
            </div>

            )
}

}
export default Edit;