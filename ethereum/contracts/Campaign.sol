pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint _minimumContribution) public {
        address newCampaign = new Campaign(_minimumContribution, msg.sender);
        deployedCampaigns.push(newCampaign);//, msg.sender);
        // msg.sender -the user who is creating this campaign.
        // Must be passed so that the campaign has a correct manager 
        // instead of the CampaignFactory.
    }
    
    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }
}

// The main Campaign implementation.
contract Campaign {
    
    // These all are storage variables.
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount; // no of yes votes received.
        mapping(address => bool) approvals; // no. of people who approved this req.
    }
    
    Request[] public requests;
    address public manager; // campaign creator.
    uint public minimumContribution;
    // who have donated money.
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    //function Campaign(uint minimumContrib) public {
    constructor(uint _minimumContrib, address _creater) public {
        // who attempted to create the contract.
        manager = _creater; 
        minimumContribution = _minimumContrib;
    }
    
    function contribute() public payable {
        // msg.value- is the amount in wei that is
        // passed in to this transaction.
        require (msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++; // increment the approvers. 
    }
    
    // By default parameters to a fn are passed by copy- a memory type. The
    // other option is storage keyword.
    function createRequest(string _description, uint _value, address _recipient)
     public restricted{
        // request is created in memory !!! So throws error and we need to specify
        // memory keyword in between Request and newRequest. 
        Request memory newRequest = Request({
            description: _description,
            value: _value,
            recipient: _recipient,
            complete: false,
            approvalCount: 0
        });
        // Alternate syntax-- but prefer the old one.
        // its trickier as it needs the order to be maintained properly.
        // and also the type, What if all are of same type!! 
        // So not recommended.
        // Request(_description, _value, _recipient, false);

        requests.push(newRequest);
    }
    
    // Approve request at a particular index in requests.
    function aqpproveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]); // has already donated to the contract.
        require(!request.approvals[msg.sender]); // has not already approved this request.
        
        // add to approvals 
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(!request.complete); //Its still not complete.
        
        // Let there be atleast 50% approvals be there to approve a request.
        require(request.approvalCount > (approversCount / 2));
        
        request.recipient.transfer(request.value);
        request.complete = true; // mark it complete.
    }
    
}