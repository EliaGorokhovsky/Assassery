import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth, game } from '../actions';
import KillFeed from '../components/KillFeed';
import Leaderboard from '../components/Leaderboard';
import '../assets/css/Dashboard.scss';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            killfeed: [], leaderboard: []
        };
    }

    componentDidMount() {
        this.props.loadUser();
        this.props.loadGame();
        this.props.loadDashboard();
    }

    render() {
        let top_players = this.props.game.leaderboard.slice(0, 5)
        let recent_kills = this.props.game.killfeed.slice(-6, -1)
        return (
            <div>
                {!this.props.game.inProgress &&
                    <h1 id="title">Last round's winner: {this.props.game.winner} <br></br>Stay tuned for the next reset!</h1>
                }
                <div class='flex-container'>
                    <div class='flex-element'>
                        <Leaderboard players={top_players} />
                    </div>
                    <div class='flex-element'>
                        <KillFeed kills={recent_kills} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            return dispatch(auth.loadUser());
        },
        loadGame: () => {
            return dispatch(game.loadGame());
        },
        loadDashboard: () => {
            return dispatch(game.loadDashboard());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
