App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  
  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);

    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Document.json", function(Document) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Document = TruffleContract(Document);
      // Connect provider to interact with contract
      App.contracts.Document.setProvider(App.web3Provider);

      App.listenForEvents();

      return App.render();
    });
  },

  // Listen for events emitted from the contract
  listenForEvents: function() {
    App.contracts.Document.deployed().then(function(instance) {
      // Restart Chrome if you are unable to receive this event
      // This is a known issue with Metamask
      // https://github.com/MetaMask/metamask-extension/issues/2393
      instance.SendTransactionEvent({}, {
        fromBlock: 0,
        toBlock: 'latest'
      }).watch(function(error, event) {
        console.log("event triggered", event)
        // Reload when a new vote is recorded
        App.render();
      });
    });
  },

  render: function() {
    var DocumentInstance;
    var loader = $("#loader");
    var content = $("#loadin");
    var transactions;

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Document.deployed().then(function(instance) {
      DocumentInstance = instance;
      return DocumentInstance.transactionCount();
    }).then(function(transactionCount) {
      var transactionsResults = $("#transactionsResults");
      transactionsResults.empty();

      var transactionsSelect = $('#transactionsSelect');
      transactionsSelect.empty();

      for (var i = 1; i <= transactionCount; i++) {
        DocumentInstance.transactions(i).then(function(transaction) {
          var id = transaction[0];
          var DRAddress = transaction[1];
          var CRAddress = transaction[2];
          var amount = transaction[3];
          var documentUsed = transaction[4];
          var datePaid = transaction[5];
          var description = transaction[6];

        transactions  += ' <tr> '+
        '<td>'+id+'</td>'+
        '<td style="color: green;">'+DRAddress+'</td>'+
        '<td style="color: red;">'+CRAddress+' </td>'+
        '<td>'+amount+'</td>'+
        '<td>'+documentUsed+'</td>'+
        '<td>'+datePaid+'</td>'+
        '<td>'+description+'</td>'+
        '</tr>';
        $("#loadIn").html(transactions); 
         
        });
      }
    })
  },
  getSales: function() {
    var DocumentInstance;
    var loader = $("#loader");
    var content = $("#loadin");
    var transactions;

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Document.deployed().then(function(instance) {
      DocumentInstance = instance;
      return DocumentInstance.transactionCount();
    }).then(function(transactionCount) {
      var transactionsResults = $("#transactionsResults");
      transactionsResults.empty();

      var transactionsSelect = $('#transactionsSelect');
      transactionsSelect.empty();

      for (var i = 1; i <= transactionCount; i++) {
        DocumentInstance.transactions(i).then(function(transaction) {
          var id = transaction[0];
          var DRAddress = transaction[1];
          var CRAddress = transaction[2];
          var amount = transaction[3];
          var documentUsed = transaction[4];
          var datePaid = transaction[5];
          var description = transaction[6];

          if(description == "Sale"){
              transactions  += ' <tr> '+
                      '<td>'+id+'</td>'+
                      '<td style="color: green;">'+DRAddress+'</td>'+
                      '<td style="color: red;">'+CRAddress+' </td>'+
                      '<td>'+amount+'</td>'+
                      '<td>'+documentUsed+'</td>'+
                      '<td>'+datePaid+'</td>'+
                      '<td>'+description+'</td>'+
                      '</tr>';
          }

        
        $("#loadIn").html(transactions); 
         
        });
      }
    })
  },
  getPurchases: function() {
    var DocumentInstance;
    var loader = $("#loader");
    var content = $("#loadin");
    var transactions;

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Document.deployed().then(function(instance) {
      DocumentInstance = instance;
      return DocumentInstance.transactionCount();
    }).then(function(transactionCount) {
      var transactionsResults = $("#transactionsResults");
      transactionsResults.empty();

      var transactionsSelect = $('#transactionsSelect');
      transactionsSelect.empty();

      for (var i = 1; i <= transactionCount; i++) {
        DocumentInstance.transactions(i).then(function(transaction) {
          var id = transaction[0];
          var DRAddress = transaction[1];
          var CRAddress = transaction[2];
          var amount = transaction[3];
          var documentUsed = transaction[4];
          var datePaid = transaction[5];
          var description = transaction[6];

          if(description == "Purchase"){
              transactions  += ' <tr> '+
                      '<td>'+id+'</td>'+
                      '<td style="color: green;">'+DRAddress+'</td>'+
                      '<td style="color: red;">'+CRAddress+' </td>'+
                      '<td>'+amount+'</td>'+
                      '<td>'+documentUsed+'</td>'+
                      '<td>'+datePaid+'</td>'+
                      '<td>'+description+'</td>'+
                      '</tr>';
          }

        
        $("#loadIn").html(transactions); 
         
        });
      }
    })
  },
  getTaxes: function() {
    var DocumentInstance;
    var loader = $("#loader");
    var content = $("#loadin");
    var transactions;

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Document.deployed().then(function(instance) {
      DocumentInstance = instance;
      return DocumentInstance.transactionCount();
    }).then(function(transactionCount) {
      var transactionsResults = $("#transactionsResults");
      transactionsResults.empty();

      var transactionsSelect = $('#transactionsSelect');
      transactionsSelect.empty();

      for (var i = 1; i <= transactionCount; i++) {
        DocumentInstance.transactions(i).then(function(transaction) {
          var id = transaction[0];
          var DRAddress = transaction[1];
          var CRAddress = transaction[2];
          var amount = transaction[3];
          var documentUsed = transaction[4];
          var datePaid = transaction[5];
          var description = transaction[6];

          if(description == "Sale"){
              transactions  += ' <tr> '+
                      '<td>'+id+'</td>'+
                      '<td style="color: green;">'+DRAddress+'</td>'+
                      '<td style="color: red;" >'+CRAddress+' </td>'+
                      '<td>'+amount*0.15+'</td>'+
                      '<td>'+documentUsed+'</td>'+
                      '<td>'+datePaid+'</td>'+
                      '<td>'+description+' Vat Output</td>'+
                      '</tr>';
          }
           if(description == "Purchase"){
              transactions  += ' <tr> '+
                      '<td>'+id+'</td>'+
                      '<td style="color: green;">'+DRAddress+'</td>'+
                      '<td style="color: red;">'+CRAddress+' </td>'+
                      '<td>'+amount*0.15+'</td>'+
                      '<td>'+documentUsed+'</td>'+
                      '<td>'+datePaid+'</td>'+
                      '<td>'+description+' Vat Input</td>'+
                      '</tr>';
          }

        
        $("#loadIn").html(transactions); 
         
        });
      }
    })
  },
  getEmployees: function() {
    var DocumentInstance;
    var loader = $("#loader");
    var content = $("#loadin");
    var transactions;

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Document.deployed().then(function(instance) {
      DocumentInstance = instance;
      return DocumentInstance.transactionCount();
    }).then(function(transactionCount) {
      var transactionsResults = $("#transactionsResults");
      transactionsResults.empty();

      var transactionsSelect = $('#transactionsSelect');
      transactionsSelect.empty();

      for (var i = 1; i <= transactionCount; i++) {
        DocumentInstance.transactions(i).then(function(transaction) {
          var id = transaction[0];
          var DRAddress = transaction[1];
          var CRAddress = transaction[2];
          var amount = transaction[3];
          var documentUsed = transaction[4];
          var datePaid = transaction[5];
          var description = transaction[6];

          if(description == "Employee"){
              transactions  += ' <tr> '+
                      '<td>'+id+'</td>'+
                      '<td style="color: green;">'+DRAddress+'</td>'+
                      '<td style="color: red;">'+CRAddress+' </td>'+
                      '<td>'+amount+'</td>'+
                      '<td>'+documentUsed+'</td>'+
                      '<td>'+datePaid+'</td>'+
                      '<td>'+description+'</td>'+
                      '</tr>';
          }

        
        $("#loadIn").html(transactions); 
         
        });
      }
    })
  },
  castTransaction: function(amount) {
    App.contracts.Document.deployed().then(function(instance) {
      //0x228453300d0c9a0eb8b23efb66967952a90c3a8a
      alert("Our Amount:"+amount*(100/115));
      alert("SARS Amount:"+amount*(15/115));
      instance.sendEther.sendTransaction("0x5771Ee1647165Ae93B1490200245E96d12994C0c", { from: App.account, value: (amount*(100/115))*1000000000000000000 });
      instance.sendEther.sendTransaction("0xF8a278E1c1407D9C0926214eabD7fe6C197B08Cd", { from: App.account, value: (amount*(15/115))*1000000000000000000 });
     
      instance.addTransaction(App.account,"0xF8a278E1c1407D9C0926214eabD7fe6C197B08Cd",amount*(100/115),"Invoice 14","31/1/2018","Sale");
      return instance.addTransaction(App.account,"0x5771Ee1647165Ae93B1490200245E96d12994C0c",amount*(15/115),"Invoice 14","31/1/2018","Sale");
    }).then(function(result) {
      // Wait for votes to update
      App.render();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});