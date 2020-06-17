# secure-send-erc20

This is a proof of concept, not a ready product.

ERC-20 tokens could be sent without exposing the sender using modified
Anonymous Zether: https://github.com/vporton/anonymous-zether

The modification required is to add an additional `address recipient`
parameter to the function `burn()` in
https://github.com/jpmorganchase/anonymous-zether/blob/master/packages/protocol/contracts/ZSC.sol
and send to `recipient` instead of `msg.sender`.
This would allow to send to an arbitrary recipient.

Additionally, it is desirable to combine `fund()` and `transfer()` into one
function for atomic operations.

The main feature of my dApp is a combination of spartanity of requirements (works in any web3.js
browser) and maximal convenience of usage.

## Usage

* (Once) Change the current Web3 account to the secret account. (This updates the UI
  automatically, try it.) Enter the contract address and
  press the button "Make secret account" (currently missing in the interface).
  This button will store the secret account in browser local storage, register it,
  retrieve its public key and also store in in browser local storage.

* Switch to the primary account.

* Start the transfer by entering the recipient and amount and clicking
  "Start transfer" (this should transfer to the secret account in the modified Zether
  and store the transfer info in browser local storage, it uses the secret account
  and its public key from the browser local storage).

* Optionally repeat.

* Change the current Web3 account to the secret account. This automatically updates
  the UI to the second stage of the transfer.
  The second stage shows a table with started transfers (from the browser local storage).
  Each transfer has "Finish" button that withdraws to the final recipient and removes
  the transfer from local storage.
  (We could also add the button "Finish all" and optionally batch transfers in the contract
  to make this operation atomic. However, there is no known reason to require its
  atomicity.)

## Security consideratoins

If the browser local storage is lost or damaged, it is necessary to move money manually.
Need a special interface to transfer from the modified Zether to an Ethereum account to
recover the lost in the interim of an operation money.

It is easy to lose the contract address. It can be restored, but it's cumbersome.
See TODO.

## TODO

* Creating new modified Zether contracts and remembering which token they are associated
  with.

* Validating input (red-highlighting and making non-working buttons disabled).

* Actual start and finish transfer features.
