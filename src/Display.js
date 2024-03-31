import { Component } from 'react';
import DrumPad from './DrumPad';
import './App.css';


class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drumPads: [
                {
                    id: "Q",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
                    name: "Heater-1",
                },
                {
                    id: "W",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
                    name: "Heater-2",
                },
                {
                    id: "E",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
                    name: "Heater-3",
                },
                {
                    id: "A",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
                    name: "Heater-4",
                },
                {
                    id: "S",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
                    name: "Heater-6",
                },
                {
                    id: "D",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
                    name: "Dcs-oh",
                },
                {
                    id: "Z",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
                    name: "Kick-n-hat",
                },
                {
                    id: "X",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
                    name: "Kick",
                },
                {
                    id: "C",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
                    name: "Hi-hat",
                }
            ],
            currentPad: null,
        }
    }

    updateCurrentPad(drumPad) {
        this.setState({
            currentPad: drumPad
        });
    }

    render() {
        return (
            <div className="container">
                <div className="pads-container">
                    {this.state.drumPads.map((pad, index) => {
                        return <DrumPad pad={pad} key={index} updateCurrentPad={this.updateCurrentPad.bind(this)} />
                    })}
                </div>
                <div>
                    <div className="title">Pad name:</div>
                    <div id="display" className="display-text">{this.state.currentPad?.name || ""}</div>
                </div>
            </div>
        );
    }
}

export default Display;
