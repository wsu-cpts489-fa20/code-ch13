class RoundForm extends React.Component {
    constructor(props) {
      super(props);
      //Create date object for today, taking time zone into consideration
      let today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
      //store date as ISO string
      this.state = {date:  today.toISOString().substr(0,10),
                    course: ''}; 
    }
  
    handleChange = (event) => {
      const name = event.target.name;
      this.setState({[name]: event.target.value});   
    }
  
    handleSubmit = (event) => {
      alert('The form was submitted!');
      event.preventDefault();
    }
  

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <center>
          <label>
              Date:
              <input className="form-control" 
                type="date" value={this.state.date} onChange={this.handleChange} />
            </label>
          <p></p>S
          <label>
          Course:
          <input className="form-control" type="text"
                        value={this.state.course} onChange={this.handleChange}
                        placeholder="Course played" size="50" maxLength="50" />
          </label>
          <p></p>
          <input type="submit" className="btn btn-primary" value="Submit" />
          </center>
        </form>
      );
    }
}

  ReactDOM.render(
    <RoundForm />,
    document.getElementById('root')
  );