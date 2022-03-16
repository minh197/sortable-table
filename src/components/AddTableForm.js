import React from 'react'; 
class AddTableForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef(); 
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createRow = event =>{
        //1stop the form from submitting
        event.preventDefault();
        const row = {
            name: this.nameRef.current.value,
            price:parseFloat(this.priceRef.current.value),
            status:this.statusRef.current.value,
            desc:this.descRef.current.value,
            image:this.imageRef.current.value

        };
       this.props.addRow(row);
       //refresh the form 
       event.currentTarget.reset();
       
    };
    
    render(){
        return(
            <form className ="fish-edit" onSubmit={this.createRow}>
                <input ref={this.nameRef} name="name" type="text" placeholder='Name'/>
                <input ref={this.priceRef} name="value" type="text" placeholder='Price'/>
                <select name="status" ref={this.statusRef}  >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>

                </select>
                <textarea ref={this.descRef} name="desc" placeholder="Desc"/>
                <input ref={this.imageRef} name="image" type="text"  placeholder='Image'/>
                <button type="submit">Add New Row!</button>
            </form>
        )
    }
}
export default AddTableForm;