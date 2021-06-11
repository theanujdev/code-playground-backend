const terminal = (command: string): string => {
  let res = "";
  switch (command) {
    case "ping":
      res = "pong";
      break;
    case "ls":
      res = "index.html style.css app.js";
      break;
    case "cat":
      res =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec volutpat ante. Vivamus ut ullamcorper eros. Donec posuere euismod eros, eget laoreet tortor dictum id. Proin blandit nibh sollicitudin ornare varius. Integer eu leo vitae justo vestibulum aliquet. Suspendisse pulvinar egestas quam, in commodo nunc hendrerit ut.\r\nQuisque commodo, magna ut tempor pellentesque, dolor massa porta nunc, at varius diam odio in mauris. Cras convallis, turpis vitae convallis venenatis, magna libero fringilla justo, aliquam tristique turpis tortor ac purus. Donec sollicitudin elit sit amet libero pellentesque hendrerit. Ut nisi enim, suscipit sagittis eros vitae, ornare bibendum lacus.";
      break;
    case "whoami":
      res = "🔥";
      break;
    default:
      res = "Invalid command";
      break;
  }
  return res;
};

export default terminal;
