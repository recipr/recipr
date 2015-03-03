var base = "";
if (Meteor.isServer) {
  base = process.env.PWD;
}

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "./uploads"})]
});

Images.allow({
  insert: function () { return true; },
  update: function () { return true; },
  download: function () { return true; }
});