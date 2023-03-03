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
  ]);

  self.addItem = function () {
    var index = Math.floor(Math.random() * iconTypes.length);
    console.log(index)
  }

}

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel(), knockoutApp);

//
