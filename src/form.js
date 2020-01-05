import React from 'react'; 

class Form extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          title: ' ',
          globalTitle: '',
       }
    }

    handleFormChange = e => {
       this.setState({title: e.target.value});
    }
    componentDidMount() {
        console.log('Rendered Form');
     }
    handleGlobalTitleChange = () => this.setState (
         { globalTitle: 'My form - '+ this.state.title, }
         );
    componentDidUpdate(prevProps) {
            if (this.state.globalTitle !== prevProps.globalTitle) {
               console.log('Title changed');
            }
         }
   render() {
      return (
         <div>
            <h1>title: {this.state.title}</h1>
            <h2>globalTile: {this.state.globalTitle}</h2>
            
            <label htmlFor='title'>
               <input 
                  id='title'
                  type='text'
                  value={this.state.title}
                  onChange={this.handleFormChange}
                  >
               </input>
               <br/>
               <button 
                  type="submit"
                  onClick={this.handleGlobalTitleChange}
                  > Validation
               </button>
            </label>
         </div>
      )
   }
};

export default Form; 