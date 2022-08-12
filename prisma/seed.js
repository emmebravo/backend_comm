const showsObj = require('./shows.json');
const packagesObj = require('./packages.json');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // const networkList = [];

  // function createNetworkList(network) {
  //   if (!networkList.includes(network)) networkList.push(network);
  // }

  for (let show of showsObj) {
    // const { network } = show;
    // createNetworkList(network);

    await prisma.shows.create({
      // looping over each show and inserting into database
      data: show,
    });
  }

  for (let package of packagesObj) {
    // const { networks } = package;
    // for (let letters of networks) {
    //   createNetworkList(letters);
    // }

    await prisma.packages.create({
      data: package,
    });
  }

  // for (let network of networkList) {
  //   await prisma.all_networks_a.create({
  //     data: network,
  //   });
  // }
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
