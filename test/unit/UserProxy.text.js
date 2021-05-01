const hre = require('hardhat');
const { expect } = require('chai')

describe('UserProxy unit tests', () => {
  const ZERO_ADDRESS = '0x000000000000000000000000000000000000000000';
  const wallet = {};

  // Contract artifacts
  let UserProxyArtifact;

  // Contract instances
  let userProxy;

  before(async () => {
    // Set up test accounts
    const signers = await hre.ethers.getSigners();
    wallet.deployer = signers[0];

    // Set up contract artifacts
    UserProxyArtifact = await hre.artifacts.readArtifact(
      'UserProxy'
    );
  });

  beforeEach(async() => {
    userProxy = await hre.waffle.deployContract(
      wallet.deployer,
      UserProxyArtifact,
      [],
    );
  });

  it('should deploy', async () => {
    expect(userProxy.address.toString()).to.not.equal(ZERO_ADDRESS);
  });

  // it('should call external contract', async () => {
  // });
});
