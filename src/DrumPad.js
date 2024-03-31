import { Component } from 'react';
import './App.css';


class DrumPad extends Component {
    constructor(props) {
        super(props)

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.onClickPlay = this.onClickPlay.bind(this);

        this.state = {
            boxShadow1: "5px 5px 10px 1px #000000",
            boxShadow2: "5px 5px 10px 1px #FFFFFF",
            isHit: false,
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(e) {
        if (e.repeat || e.key.toLowerCase() !== this.props.pad.id.toLowerCase()) return;

        this.onClickPlay();
    }

    onClickPlay() {
        new Audio(this.props.pad.src).play();
        this.props.updateCurrentPad(this.props.pad);
        this.setState({
            isHit: true
        });
        setTimeout(() => {
            this.setState({
                isHit: false
            });
        }, 100)
    }

    render() {
        return (
            <div className="drum-pad-container">
                <div
                    id={this.props.pad.name}
                    className="drum-pad"
                    style={{
                        boxShadow: this.state.isHit ? this.state.boxShadow2 : this.state.boxShadow1,
                    }}
                    onClick={this.onClickPlay.bind(this)}
                >
                    {this.props.pad.id}
                    <audio id={this.props.pad.id} src={this.props.pad.src} className="clip" />
                </div>
            </div>
        );
    }
}

export default DrumPad;
