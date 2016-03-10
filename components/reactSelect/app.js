import React ,{ Component } from 'react';
import './app.scss';

export default class ReactSelect extends Component{
	constructor(props) {
	   super(props);
	   this.state = {'show_class':"none"};	   	   
	}
	searchInput (e) {
		if("focus" === e.type){
			this.setState({'show_class':"aa"});
		}else{
			this.setState({'show_class':"none"});
		}
	}
	onLiClick (e){
		console.log(e);
	}
	render () {
		return (
			<div className="rselect-container">
				<input
					onFocus={e => this.searchInput(e) }
					onBlur={e => this.searchInput(e) }
					className="form-control searchInput"></input>
				<span className="glyphicon glyphicon-search search-icon" aria-hidden="true"></span>
				<ul className={this.state.show_class}>
					{
						this.props.data.map((v,i)=>{
							return <li key={i}>{v.name}</li>
						})
					}
				</ul>
			</div>
		)
	}
}