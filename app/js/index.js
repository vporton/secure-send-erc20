// const Web3 = require("web3");
// const Client = require("../anonymous.js/src/client.js");
// const ZSC = require("../contract-artifacts/artifacts/ZSC.json");
// const Deployer = require('./deployer.js');
// const Provider = require('./provider.js');
// const utils = require('../anonymous.js/src/utils/utils.js');

// import getWeb3 from "./getWeb3";

// getWeb3.then(({web3}) => {
//     alert(web3.eth)
    web3.eth.getAccounts((x,account) => {
        // const option = "<option>"+account[1]+"</option>";
        // $("#primaryAccount").append(option);
        // $("#secretAccount").append(option);
    });
// });

function showHideTabs() {
    web3.eth.getAccounts((x,account) => {
        if(account[0] == $('#secretAccount').val().toLowerCase()) {
            $('#startPayment').css('display', 'none');
            $('#finishPayments').css('display', 'block');
        } else {
            $('#startPayment').css('display', 'block');
            $('#finishPayments').css('display', 'none');
        }
    });
}

function startPayment() {
    
}

window.ethereum.on('accountsChanged', showHideTabs);

$(function() {
    $('#contract').val(localStorage.secureSendERC20_contractAddress);
    $('#secretAccount').val(localStorage.secureSendERC20_secretAccount);

    $('#secretAccount').change(showHideTabs);
    showHideTabs();
});
