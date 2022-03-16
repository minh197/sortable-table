import React from 'react'; 
class CreateTable extends React.Component{
    myInput = React.createRef();
    goToTable = event =>{
        //stop the form from submitting
        event.preventDefault();
        //get the text from that input
       const userName = this.myInput.current.value;
        
        //change the page to /name/whatever-they-entered
        this.props.history.push(`/name/${userName}`)
    };
    render(){
        console.log(this);
        return(
           <form className="store-selector" onSubmit={this.goToTable}>
                <h2>Please Enter A Name</h2>
                <input ref={this.myInput}  type="text" required placeholder='Name'></input>
                <button type="submit">Create Table</button>
           </form>
        )
    }
}
export default CreateTable;