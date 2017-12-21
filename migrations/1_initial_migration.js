var Migrations = artifacts.require("./Sellable.sol");

module.exports = function(deployer) {
  deployer.deploy(Sellable);
};
