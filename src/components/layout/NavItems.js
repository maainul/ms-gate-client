const navItems = [
  {
    title: "Vehicles",
    submenu: [
      {
        icon: require("../../car-solid.svg").default,
        label: "Add Vehicles",
        url: "/vehicle/create",
      },
      {
        icon: require("../../rectangle-list-regular.svg").default,
        label: "Vehicle List",
        url: "/vehicle/list",
      },
      {
        icon: require("../../chart-simple-solid.svg").default,
        label: "Visual Data",
        url: "/vehicle/analytics",
      }
    ]
  },
  {
    title: "Visitors",
    submenu: [
      {
        icon: require("../../users-solid.svg").default,
        label: "Add Visitors",
        url: "/visitor/create",
      },
      {
        icon: require("../../address-book-regular.svg").default,
        label: "Visitor List",
        url: "/visitor/list",
      },
      {
        icon: require("../../chart-simple-solid.svg").default,
        label: "Visual Data",
        url: "/visitor/analytics",
      }
    ]
  }
];

export default navItems;
