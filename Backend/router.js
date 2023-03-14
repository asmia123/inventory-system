const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");
const brandRoute = require("./routes/brand");
const itemRoute = require("./routes/item");
module.exports = function(app){
    app.use("/auth", authRoute);
    app.use("/users", usersRoute);
    app.use("/category", categoryRoute);
    app.use("/product", productRoute);
    app.use("/brand", brandRoute);
    app.use("/item", itemRoute);
    

}