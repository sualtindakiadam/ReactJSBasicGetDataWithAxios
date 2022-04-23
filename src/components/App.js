import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

class App extends React.Component{
    state = {images: []}

onSearchSubmit = async (entry) => {
    const response = await axios.get(`https://pixabay.com/api/?key=26959417-c956a99cd968794106e52ff63&q=${entry}&image_type=photo`)
    //ters tırnak ile dolar ve parantezle direkt olarak değişken kullanmamıza izin veriyor
    this.setState({images:response.data.hits})
}


    render(){
        return(
        <div className="ui container" style={{marginTop:"30px"}}>
            <SearchInput onSearchSubmit = {this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
    )
    }
}

export  default App