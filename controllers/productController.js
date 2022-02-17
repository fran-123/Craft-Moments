
module.exports = {

    productDetail : (req,res) =>{
        res.render("productDetail",{
           /*  title : "ProductDetail" */
        })
    },

    listProducts : (req,res) =>{
        res.render("productList",{
            title : "productsList"
        })
    }
}