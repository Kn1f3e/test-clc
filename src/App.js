import React from "react";
import { connect } from "react-redux";
import { updateComponentPower, calculateTotalPower } from "./actions";

class App extends React.Component {
  handleComponentPowerChange = (event) => {
    const { name, value } = event.target;
    this.props.updateComponentPower(name, parseInt(value));
    this.props.calculateTotalPower();
  };

  render() {
    const { cpu, gpu, ram, storage } = this.props.components;
    const totalPower = this.props.totalPower;

    return (
      <div>
        <h1>Калькулятор мощности БП</h1>
        <div>
          <label>Мощность процессора:</label>
          <input
            type="number"
            name="cpu"
            value={cpu}
            onChange={this.handleComponentPowerChange}
          />
        </div>
        <div>
          <label>Мощность видеокарты:</label>
          <input
            type="number"
            name="gpu"
            value={gpu}
            onChange={this.handleComponentPowerChange}
          />
        </div>
        <div>
          <label>Мощность оперативной памяти:</label>
          <input
            type="number"
            name="ram"
            value={ram}
            onChange={this.handleComponentPowerChange}
          />
        </div>
        <div>
          <label>Мощность жёсткого диска:</label>
          <input
            type="number"
            name="storage"
            value={storage}
            onChange={this.handleComponentPowerChange}
          />
        </div>
        <div>
          <h2>Итоговая мощность: {totalPower}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  components: state.components,
  totalPower: state.totalPower
});

const mapDispatchToProps = {
  updateComponentPower,
  calculateTotalPower
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
