import React,{ Component } from 'react';
import ReactSelect from './reactSelect/app';

export default class R_Toobar extends Component{
	constructor(props) {
	   //super(props);
	   this.state = {platform: 'All'};
	}
	onLengthMenuChange(e){
		let platform = e.target.value;
		this.props.onLengthMenuChange(platform);
	}
	onFilterChange(e){
		let value = e.target.value;
		this.props.onFilterChange(value.trim());
	}
	render(){ 
		const accountData = [
			{id: "root" ,name: "root"},
			{id: "admini" ,name: "admini"},
			{id: "administrator" ,name: "administrator"},
			{id: "ubuntu" ,name: "ubuntu"},
			{id: "sa" ,name: "sa"},
		]
		return (
			<div className="form-inline">
				<div className="form-group">
					<label>显示行：</label>
					<select className="form-control" defaultValue="5" onChange={e => this.onLengthMenuChange(e)}>
						{
							['all',5,10,15,20,30,40].map((v,i)=>{
								return <option key={i} value={v}>{v}</option>
							})
						}
					</select>
				</div>

				<div className="form-group">
					<label>过滤：</label>
					<input type="text" className="form-control" placeholder="请输入过滤关键词" onChange = {e => this.onFilterChange(e)}/>
				</div>
			</div>
		)		
	}
}