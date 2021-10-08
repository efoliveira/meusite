import React, { Component } from 'react';
class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: 'teste@teste.com',
            senha: ''
        }
        this.trocaEmail = this.trocaEmail.bind(this);
    } 

    render() {
        return( 
           <div>
                <h2>Login</h2>
               Email:
               <input Type="Email" name="email" value={this.state.email}
                      onChange={this.trocaEmaol}/> <br/>
               Senha:
               <input Type="password" name="senha" value={this.state.senha} />
            </div>
        );
    }
}

export default App;