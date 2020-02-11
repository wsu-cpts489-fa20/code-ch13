class RoundForm extends React.Component {
    constructor(props) {
      super(props);
      //Create date object for today, taking time zone into consideration
      let today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
      //store date as ISO string
      this.state = {date:  today.toISOString().substr(0,10)}; 
    }
  
    handleChange = (event) => {
      this.setState({date: event.target.value});
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
              <input id="roundDate" className="form-control form-center" 
                type="date" value={this.state.date} onChange={this.handleChange} />
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