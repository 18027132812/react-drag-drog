import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData1: [
        {
          title: 'MacBook Pro 15'
        },
        {
          title: 'MacBook Pro 13'
        },
        {
          title: 'MacBook 13'
        },
        {
          title: 'MacBook 15'
        },
        {
          title: 'iphone Xs Max'
        },
        {
          title: 'iphone X'
        }
      ],
      treeData2: [
        // {
        //   id: 7,
        //   title: 'iphone 7'
        // }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="v-drag-wrap">
          <p>
            {this.state.treeData1.length ? '可以往右边移动' : '移动到这里'}
          </p>
          <Droppable
            types={['app']}
            onDrop={this.onDrop1.bind(this)}>
            <ul className="smoothie">
              {
                this.state.treeData1.map((item, index) => {
                  return <Draggable type="fruit" data={item.title} key={index}><li>{item.title}</li></Draggable>;
                })
              }
            </ul>
          </Droppable>
        </div>

        <div className="v-drop-wrap">
          <p>
            {this.state.treeData2.length ? '可以往左边移动' : '移动到这里'}
          </p>
          <div className="v-drop-content">
            <Droppable
              types={['fruit']}
              onDrop={this.onDrop2.bind(this)}>
              <ul className="smoothie">
                {
                  this.state.treeData2.map((item, index) => {
                    return <Draggable type="app" data={item.title} key={index}><li>{item.title}</li></Draggable>;
                  })
                }
              </ul>
            </Droppable>
          </div>
        </div>

      </div>
    );
  }

  onDrop1 (data) {
    let arr = this.state.treeData1;
    arr.push({
      title: data.app
    });
    let oldArr = [];
    this.state.treeData2.forEach((item) => {
      if (item.title !== data.app) {
        oldArr.push(item);
      }
    });
    this.setState({treeData1: arr, treeData2: oldArr});
  }

  onDrop2 (data) {
    let arr = this.state.treeData2;
    arr.push({
      title: data.fruit
    });
    let oldArr = [];
    this.state.treeData1.forEach((item) => {
      if (item.title !== data.fruit) {
        oldArr.push(item);
      }
    });
    this.setState({treeData2: arr, treeData1: oldArr});
  }
}

export default App;
