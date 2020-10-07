import React, {Component} from 'react';
import '../contact/contact.css';
import FormFields from './formfields';


class Contact extends Component {

    state = {
        formData:{
            name:{
                element:'input',
                value:'',
                label:true,
                labelText:'Name :',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true,
                    minLen:5
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            lastname:{
                element:'input',
                value:'',
                label:true,
                labelText:'Lastname :',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter your last name'
                },
                validation:{
                    required:true
                    
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            message:{
                element:'textarea',
                value:'',
                label:true,
                labelText:'Message :',
                config:{
                    name:'message_input',
                    rows:4,
                    cols:36
                },
                validation:{
                    required:false
                },
                valid:true 
            },
            age:{
                element:'select',
                value:'',
                label:true,
                labelText:'Age',
                config:{
                    name:'age',
                    options: [
                        {val : '1', text: '10-20'},
                        {val : '2', text: '20-30'},
                        {val : '3', text: '+30'},
                    ]
                   
                },
                validation:{
                    required:false
                },
                valid:true 
            }
        }
        
    }

    updateForm = (newState) => {
       this.setState({
           formData:newState
       })
    }

    submitForm = (event) => {
        
        event.preventDefault();
        let dataToSubmit={};
        let formIsvalid= true;

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;  

        }
        
        for(let key in this.state.formData){
            formIsvalid = this.state.formData[key].valid && formIsvalid;  

        }
        // if(formIsvalid){
        //     firebaseDB.ref('users').push(dataToSubmit)
        //     .then( () =>{
        //         console.log('newuser added')
        //     }).catch( e =>{
        //         console.log(e)
        //     })
        // }

    }



    render(){
        return(
            <div className="container-fluid" style={{marginBottom:'80%', backgroundColor:'grey'}}>
                
                <form onSubmit={this.submitForm}>
                         <FormFields
                        formData={this.state.formData}
                        onBlur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}
                      />

                <button type="submit">Submit</button>

                </form>
               
            </div>
        )
    }


}
export default Contact;