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
    self.inventory.push(iconTypes[index])
    // i have a differente way to call and update the array with push()
  }

}

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel(), knockoutApp);

//
