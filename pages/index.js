import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/layout';

class CampaignIndex extends Component {
    static async getInitialProps() {
        // next js requirement for effecient server side rendering easier.
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>, // lets keep empty.
                fluid: true //stract width to container.
            };
        });
        return <Card.Group items = {items} />
        
            /*{
              header: 'Project Report - April',
              description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
              meta: 'ROI: 30%',
            },*/

    }

    render() {
        // get the first address only.
        return (
        <Layout>
            <div>
            <h3> Open Campaigns</h3>
            <Button floated="right" content="Create Campaign" icon = "add circle" primary/>
            {this.renderCampaigns()}
            </div>
        </Layout>
        );
    }
}

// Export a component from this file.
export default CampaignIndex;