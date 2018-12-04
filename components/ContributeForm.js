import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

// Contribute form needs to allow to contribute to the address
// that it is currently looking at(from the address bar, for Campaign Show)
// So, this must get that address to contribute to.
class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);

        // Set the spinning button.
        this.setState({loading: true, errorMessage: ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send ({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });

            // Refresh the same page once the transaction is success,
            // this will update various values on the page like:
            // No. of approvers, Campaign Balance
            Router.replaceRoute(`/campaigns/${this.props.address}`);

        } catch(err) {
            this.setState({errorMessage: err.message});
        }

        // Stop the spinning button and set value to empty.
        this.setState({loading: false, value: ''});
    };

    render() {
        return (
            <Form onSubmit = {this.onSubmit} error= {!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        value= {this.state.value}
                        onChange= {event => this.setState({value: event.target.value})}
                        label="ether"
                        labelPosition="right"/>
                </Form.Field>

                <Message error 
                         header="Oops" 
                         content = {this.state.errorMessage}
                />
                <Button primary loading={this.state.loading}>Contribute...
                </Button>
            </Form>
        );

    }
}


export default ContributeForm;