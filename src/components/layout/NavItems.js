const navItems = [
  {
    title: "Vehicles",
    submenu: [
      {
        icon: require("../../img/car-solid.svg").default,
        label: "Add Vehicles",
        url: "/vehicle/create",
      },
      {
        icon: require("../../img/rectangle-list-regular.svg").default,
        label: "Vehicle List",
        url: "/vehicle/list",
      },
      {
        icon: require("../../img/chart-simple-solid.svg").default,
        label: "Visual Data",
        url: "/vehicle/analytics",
      }
    ]
  },
  {
    title: "Visitors",
    submenu: [
      {
        icon: require("../../img/users-solid.svg").default,
        label: "Add Visitors",
        url: "/visitor/create",
      },
      {
        icon: require("../../img/address-book-regular.svg").default,
        label: "Visitor List",
        url: "/visitor/list",
      },
      {
        icon: require("../../img/chart-simple-solid.svg").default,
        label: "Visual Data",
        url: "/visitor/analytics",
      }
    ]
  }
];

export default navItems;
