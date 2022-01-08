const companiesData = [
  {
    _id: 1,
    name: "Clearhaus",
    country: "Denmark",
    owners: [
      {
        _id: 2,
        name: "Klaus",
        socialNumber: "1111118889",
      },
      {
        _id: 1,
        name: "Gerth",
        socialNumber: "9999999999",
      },
    ],
  },
  {
    _id: 2,
    name: "AU",
    country: "Denmark",
    owners: [
      {
        _id: 3,
        name: "Gerth",
        socialNumber: "9999999999",
      },
    ],
  },
];

const ownerData = [
  {
    _id: 99,
    name: "Alex",
    socialNumber: "9999999999",
  },
  {
    name: "Claus",
    socialNumber: "9876541357",
    _id: 4,
  },
  {
    _id: 98,
    name: "Lasse1",
    socialNumber: "9999999998",
  },
  {
    _id: 97,
    name: "Lasse2",
    socialNumber: "9999999997",
  },
  {
    _id: 96,
    name: "Lasse3",
    socialNumber: "9999999996",
  },
  {
    _id: 95,
    name: "Lasse4",
    socialNumber: "9999999995",
  },
];

export { companiesData, ownerData };
