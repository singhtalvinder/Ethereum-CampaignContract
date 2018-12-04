import React, {Component} from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {

    // props here is different than the actual component props.
    static async getInitialProps(props) {
        // not part of actual instance.
        // actual address of the campign we
        // are trying to show to user.
        const campaign = Campaign(props.query.address);

        const summary = await  campaign.methods.getSummary().call();                                 
        console.log(summary);

        return {
            // so that it can be easy to access using: 
            // this.props. all the below ones seperately.
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestCount,
            approversCount
        } = this.props;


        const items = [
            {
                header:manager,
                meta: 'Address of Manager',
                description: 'The manager created this Campaign and \
                    can create requests to withdraw money',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                mata: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much \
                    wei to become an approver'
            },
            {
                header: requestCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract.\
                    Request must be approved by approvers.'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'A of people who have already donated to the campaign.'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.'
            }

        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
            <h3>Campaign Show</h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                        
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address = {this.props.address}></ContributeForm>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Link route = {`/campaigns/${this.props.address}/requests`}>
                        <a>
                        <Button primary>View Request</Button>
                        </a>
                    </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Layout>
        );
    }
}


export default CampaignShow;