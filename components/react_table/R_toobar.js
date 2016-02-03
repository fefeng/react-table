import React,{ Component } from 'react';

export default class R_Toobar extends Component{
	constructor(props) {
	   super(props);
	   this.state = {platform: 'All'};	   	   
	}
	onPlatformChange(e){
		let platform = e.target.value;		
		this.props.onPlatformChange(platform);		
	}
	onLengthMenuChange(e){
		let platform = e.target.value;
		this.props.onLengthMenuChange(platform);	
	}
	render(){		
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
					<input type="text" className="form-control" placeholder="请输入过滤关键词" />
				</div>

				<div className="form-group">
					<label>平台名称：</label>
					<select className="form-control" defaultValue="All" onChange={e => this.onPlatformChange(e)}>
						<option value="all">全部</option>
						{	
							this.props.platform.map((v,i)=>{
								return <option key={i} value={v}>{v}</option>
							})
						}
					</select>
				</div>				
			</div>
		)
		
	}
}