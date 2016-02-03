import React,{ Component } from 'react';

export default class R_tbody extends Component{
	constructor(props) {
	   super(props);
	   this.state = {data:[]};	   	   
	}
	render () {
		let operation = this.props.operation,
			len = 5,
			filterWord= null;
		let data = this.props.data;
		if(operation.length !== 0){
			len = operation.LENGHTMENU === undefined? 100 :operation.LENGHTMENU;			 
			len = len === "all"?this.props.data.length:len;
			filterWord = operation.FILTER;
		}
		if(filterWord && filterWord != "all"){
			data = data.filter((item,i)=>{				
				if(filterWord == item.platform){
					return item;
				}
			})			
		}else{
			data = this.props.data;
		}		
		return (
			<tbody>
				{
					data.map((item,i)=>{
						if(i < Number(len)){
							return (<tr key={item.id}>
								<td>{i+1}</td>
								<td>{item.id}</td>
								<td>{item.platform}</td>
								<td>{item.hostName}</td>
								<td>{item.os}</td>
								<td>{item.account}</td>
								<td>{item.password}</td>
								<td>{item.port}</td>
							</tr>	)												
						}
					})
				}				
			</tbody>
		)
	}
}