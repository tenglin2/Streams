import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  
  renderActions() {
    return (
      <React.Fragment>
        <button onClick={} className='ui button negative'>DELETE</button>
        <Link to='/' className='ui button'>CANCEL</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return (
        'ARE YOU SURE YOU WANT TO DELETE THIS STREAM?'
      );
    }

    return `ARE YOU SURE YOU WANT TO DELETE THIS STREAM WITH TITLE: ${this.props.stream.title}`
  }

  render() {
    return (
      <div>
        <p>Stream DELTE block disply</p>
        <Modal
          title='DELETE STREAM?'
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
  
  
  
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return ({
    stream: state.streams[ownProps.match.params.id]
  });
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);