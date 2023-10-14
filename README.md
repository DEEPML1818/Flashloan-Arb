# TEsting only on Localhost WITH the SCRIPTS file in the folder to test for mainnet plz fork the repo to remix.ethereum.org more instructions will be provided soon

1. You will need 3 terminals opened to run it on localhost
2. In the first terminal, use *yarn start* to start the local blockchain
3. In the second terminal use *yarn setup:1* to deploy the arb contract
4. Under ./scripts/deployments/avax.json replace the old arbitrage contract address with the new arbitrage contract address from step 3
5. In the second terminal use *yarn setup:2* to wrap some avax and send to the arbitrage contract
6. In the second terminal use *yarn monitor* to start monitoring the blockchain
7. In the third terminal use *yarn swap* to simulate a swap and create an arbitrage opportunity
8. Now in your second terminal you should see an arb trade get executed

## Disclaimer
Although it works in theory, running this on a live network will make you lose ALL your money.
