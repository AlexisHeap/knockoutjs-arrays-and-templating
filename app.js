function InventoryViewModel() {
  var self = this;

  var iconTypes = [
    {
      icon: "icon-bone",
      text: "Bone",
    },
    {
      icon: "icon-ball",
      text: "Ball",
    },
    {
      icon: "icon-circle",
      text: "Circle",
    },
    {
      icon: "icon-rabbit",
      text: "Rabbit",
    },
  ]; // data set

  self.inventory = ko.observableArray([
    iconTypes[1], //
    iconTypes[2], //
    iconTypes[3], //
  ]);
  // knockout has a kind of a built-in option on woe you should handle arrays and this is backed-up by some methods that are included on it and some performance improvements that you get by using it
}

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel(), knockoutApp);

//
