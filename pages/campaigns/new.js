import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

// for automatic routing.
import {Router} from '../../routes';

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false // for button.
    }

    onSubmit = async (event) => {
        // function on a contract is always async in nature, Hence used.
        event.preventDefault();

        this.setState({loading: true, errorMessage: ''});

        try{

            const accounts = await web3.eth.getAccounts();
            await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                // Metamask attempts to automatically calculates the gas when
                // invoking a send message from the browser.
                // so, we don't need to specify the gas amount here.
                from: accounts[0]
            });

            // Redirect to campaign index route.
            Router.pushRoute('/');

        } catch(err) {
            this.setState({errorMessage: err.message});
        }

        // reset state.
        this.setState({loading: false});
    };

    render() {
    // Set error to false in the Form tag below 
    // and it will not be initially displayed on screen.
    // we use the 2 !! marks there.
    // the inner one will flip into opposite of the existing value as
    // a boolean form.
    // the outer one will flip it back..
    // so !!"empty string" is false, since empty string is a false value.
        return (
            <Layout>
                <h3>New Campaign!! </h3> 

                <Form onSubmit= {this.onSubmit} error= {!!this.state.errorMessage}>
                    <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input 
                        label = "wei" 
                        labelPosition ="right"
                        value = {this.state.minimumContribution}
                        onChange = {event =>
                             this.setState({minimumContribution: event.target.value})}
                        /> 
                    </Form.Field>
                    <Message error header = "Oops!" content = {this.state.errorMessage}/>
                    <Button loading= {this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>);
    }
}

export default CampaignNew;