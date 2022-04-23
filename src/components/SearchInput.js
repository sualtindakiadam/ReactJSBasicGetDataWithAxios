import React from "react";

class SearchInput extends React.Component{

    constructor(props){
        super(props)
        this.state = { entry: ""}

        this.onFormSubmit = this.onFormSubmit.bind(this); //onFormSubmit state e ulaşabilmesi için kullanılır
        // ama eğer onFormSubmit arrot func olarak tanımlanırsabuna gerek kalmaz onFormSubmit=(event)=>{}
    }

    onInputChange(event){
        console.log(event.target.value)
        this.setState({entry : event.target.value})
    }

    onFormSubmit = (event) =>{ // tüm sayfanın yenilenmemesi için
        event.preventDefault(); // sayfanın kendini yenilemesine neden olan default func önlenir
        this.props.onSearchSubmit(this.state.entry)

    }


    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form"> 
                    <div className="field">
                        <div className="ui massive icon input">

                        <input type = "text"
                        placeholder="Search..."
                        onChange={(event)=> this.setState({entry : event.target.value})}
                        value={this.state.entry}/>
                        
                        
                        <i className="search icon"></i>

                        </div>

                    </div>

                </form>
            </div>
        )
    }
}
export default SearchInput