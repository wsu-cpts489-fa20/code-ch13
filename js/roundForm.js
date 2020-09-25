class RoundForm extends React.Component {
  constructor(props) {
    super(props);
    //Create date object for today, taking time zone into consideration
    let today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
    //store date as ISO string
    this.state = {date:  today.toISOString().substr(0,10),
                  course: '',
                  type: "practice",
                  submitIcon: "fa fa-save",
                  submitLabel: "Log Round"
                  }; 
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmitCallback = () => {
    this.setState({submitIcon: "fa fa-save", submitLabel: "Save Data"});
    let data = this.state;
    delete data.submitIcon;
    delete data.submitLabel;
    localStorage.setItem("userData",JSON.stringify(this.state));
    alert("Local user data now contains " + localStorage.getItem("userData"));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({submitIcon: "fa fa-spin fa-spinner", submitLabel: "Saving..."});
    setTimeout(this.handleSubmitCallback,1000);
  }



  render() {
      return (
      <form onSubmit={this.handleSubmit}>
        <center>
        <label>
            Date:
            <input name="date" className="form-control form-center" 
              type="date" value={this.state.date} onChange={this.handleChange} />
          </label>
          <p></p>
          <label>
            Course:
            <input name="course" className="form-control form-center" type="text"
                  value={this.state.course} onChange={this.handleChange}
                  placeholder="Course played" size="50" maxLength="50" />
            </label>
            <p></p>
            <label>Type:
            <select name="type" value={this.state.type} 
              className="form-control form-center" onChange={this.handleChange}>
              <option value="practice">Practice</option>
              <option value="tournament">Tournament</option>
             </select> 
             </label>
             <p></p>
             <button type="submit" className="btn-submit btn btn-primary btn-color-theme">
                <span className={this.state.submitIcon}></span>
                &nbsp;{this.state.submitLabel}
              </button>
        </center>
      </form>
    );
  }
}

ReactDOM.render(
  <RoundForm />,
  document.getElementById('root')
);
