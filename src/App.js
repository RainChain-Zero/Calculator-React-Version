import React from 'react';
import './App.css';

class App extends React.Component 
{
  constructor(props) 
  {
    super(props);
    
    this.state = 
    {
      numberCount: null,
      inputaValue:null,
      inputbValue:null,
      inputcValue:null,
      x1:null,
      x2:null,
      error:null
    };
  }

  render()
  {
    return(
    <div id="UI">
		  <h1>计算ax^2+bx+c=0</h1>
      <div class='UIForm'>
        <p>
          <label for="inputa" id='inputaLabel'>请输入a的值</label>
          <input type="text" name="a" id="inputa" class="input" value={this.state.inputaValue} 
          onChange={this.inputaChange.bind(this)} placeholder='Only real number supported'
          ref={(input)=>{this.inputA = input}}></input>
        

          <label for="inputb">请输入b的值</label>
          <input type="text" name="b" id="inputb" class="input" value={this.state.inputbValue} 
          onChange={this.inputbChange.bind(this)} placeholder='Only real number supported'
          ref={(input)=>{this.inputB = input}}></input>

          <label for="inputc">请输入c的值</label>
          <input type="text" name="b" id="inputb" class="input" value={this.state.inputcValue} 
          onChange={this.inputcChange.bind(this)} placeholder='Only real number supported'
          ref={(input)=>{this.inputC = input}}></input>
        </p>

        <p class="submit">
          <button type="submit" id="calculate" onClick=
          {()=>
            {
              const a=this.inputA.value;
              const b=this.inputB.value;
              const c=this.inputC.value;
              if(isNaN(a))
                alert("a必须为实数哦~");
              else if(isNaN(b))
                alert("b必须为实数哦~");
              else if(isNaN(c))
                alert("c必须为实数哦~");
              const deta=b*b-4*a*c;
              if(deta<0)
              {
                this.setState({x1:"无解"});
                this.setState({x2:"无解"});
              }
              else
              {
                this.setState({x1:(-b-Math.sqrt(deta))/2*a});
                this.setState({x2:(-b+Math.sqrt(deta))/2*a});
              }
            }
          }>计算</button>
        </p>

        <p>
          <label for="x1">x1</label>
          <input type="text" name="x1" id="x1" class="input" value={this.state.x1} 
          placeholder='Result x1' ref={(input)=>{this.X1 = input}}></input>

          <label for="x2">x2</label>
          <input type="text" name="x2" id="x2" class="input" value={this.state.x2} 
          placeholder='Result x2' ref={(input)=>{this.X2 = input}}></input>
        </p>
      </div>
    </div>
    )
  }

  inputaChange(val)
  {
    this.setState({inputaValue:val.target.value,x1:null,x2:null});
    this.X1.value=null;
    this.X2.value=null;
  }
  inputbChange(val)
  {
    this.setState({inputbValue:val.target.value,x1:null,x2:null});
    this.X1.value=null;
    this.X2.value=null;
  }
  inputcChange(val)
  {
    this.setState({inputcValue:val.target.value,x1:null,x2:null});
    this.X1.value=null;
    this.X2.value=null;
  }
}

export default App;
