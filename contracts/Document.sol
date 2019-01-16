pragma solidity >=0.4.22 <0.6.0;

contract Document {

    //0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79

    struct Transaction {
        uint id;
        address DRAddress;
        address CRAddress;
        uint amount;
        string document;
        string date;
        string description;
    }

    mapping(uint => Transaction) public transactions;
    uint public transactionCount;

    // voted event
    event SendTransactionEvent (
        uint indexed _transactionId
    );

    constructor () public {
        addTransaction(0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,0x0405bC3Da03730f78F568C8f9598e7263542ACa0,115,"Invoice 12","23/1/2019","Sale");
        addTransaction(0x0405bC3Da03730f78F568C8f9598e7263542ACa0,0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,230,"Invoice 32","16/4/2019","Purchase");
        addTransaction(0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,0x0405bC3Da03730f78F568C8f9598e7263542ACa0,31,"Pay Slip 8","16/1/2018","Employee");
        addTransaction(0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,0x0405bC3Da03730f78F568C8f9598e7263542ACa0,115,"Invoice 54","16/3/2019","Sale");
        addTransaction(0x0405bC3Da03730f78F568C8f9598e7263542ACa0,0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,230,"Invoice 34","16/2/2019","Purchase");
        addTransaction(0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,0x0405bC3Da03730f78F568C8f9598e7263542ACa0,31,"Pay Slip 88","30/5/2019","Employee");
        addTransaction(0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,0x0405bC3Da03730f78F568C8f9598e7263542ACa0,115,"Invoice 97","12/1/2019","Sale");
        addTransaction(0x0405bC3Da03730f78F568C8f9598e7263542ACa0,0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,230,"Invoice 89","21/1/2019","Purchase");
        addTransaction(0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,0x0405bC3Da03730f78F568C8f9598e7263542ACa0,31,"Pay Slip 75","4/1/2019","Employee");
        addTransaction(0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,0x0405bC3Da03730f78F568C8f9598e7263542ACa0,115,"Invoice 86 ","16/4/2019","Sale");
        addTransaction(0x0405bC3Da03730f78F568C8f9598e7263542ACa0,0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,230,"Invoice 24","16/6/2019","Purchase");
        addTransaction(0xD3dD78D4DD729B2bC9b6f9353a0BE48C9B470d79,0x0405bC3Da03730f78F568C8f9598e7263542ACa0,31,"Pay Slip 432","6/1/2019","Employee");
       
    }

    function addTransaction (address _DRAddress, address _CRAddress, uint _amount,  string memory _document,string memory _date, string memory _description) public {
        transactionCount ++;
        transactions[transactionCount] = Transaction(transactionCount,_DRAddress, _CRAddress, _amount,_document,_date,_description);
        emit SendTransactionEvent(transactionCount);
    }

   /* function vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }*/
}
