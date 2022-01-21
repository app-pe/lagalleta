var bodyID = document.getElementsByTagName("body")[0];
var headID = document.getElementsByTagName("head")[0];

var buttonAddCart = document.getElementsByClassName("product-buy-options")[0];
var btnBambUser = document.createElement('button');
btnBambUser.innerText = "CLICK BAMBUSER";
btnBambUser.id = "start-one-to-one";
buttonAddCart.appendChild(btnBambUser);

var product = __PRELOADED_STATE__.product.product;

function obtenerValorAtributo(nombre){
  var valor = '';
  try{
    $.each(product.attributes, function(k,i){
      if(i.name === nombre && valor === ""){
        valor = i.value;
      }
    });
  }catch(e){}
  return valor;
}

function obtenerDetalles(){
  /* obtiene los atributos del padre */
  var details = [];
  try{
    $.each(product.attributes, function(k,i){
      if(i.displayable){
        if(details.indexOf(i.name + ": " + i.value) === -1){
          details.push(i.name + ": " + i.value);
        }
      }
    });
  }catch(e){}
  return details;
}

function obtenerOpciones(){
  /* obtiene todos los atributos de los hijos */
  var options = [], dataName = [], data = [];
  try{
    $.each(product.SKUs, function(k,i){
      $.each(i.Attributes, function(kk,ii){
        if(ii.displayable !== true && ii.displayable !== false && ii.usage === "Defining"){
          data.push({
                    "value": ii.Values[0].values,
                    "name": ii.identifier
                    });
        }
      });
    });
    
    /* por diferentes atributos */
    $.each(data, function(k,i){
      if(dataName.indexOf(i.name) === -1){
        dataName.push(i.name);
      }
    });
    
    /* estructura de api */
    $.each(dataName, function(k,i){
      var obj = {};
      obj.name = i;
      obj.optionId = k;
      obj.values = [];
      $.each(data, function(kk,ii){
        if(i === ii.name && (obj.values).indexOf(ii.value) === -1){
          (obj.values).push(ii.value);
        }
      });
      options.push(obj);
    });
  }catch(e){}
  return options;
}


var dummyProductObject = {
      "productId": product.parentProductID,
      "title": product.name,
      "description": product.shortDescription,
      "brand": obtenerValorAtributo("Marca"),
      "price": product.prices.offerPrice,
      "details": obtenerDetalles(),
      "slug": "/" + product.parentProductID,
      "original_price": product.prices.listPrice,
      "options": obtenerOpciones()
  };



//======================================== Define your own helper methods ==============================================
  const storeApi = {};

  // Retrieve the product and return the details
  storeApi.getProduct = (productIdentifier) => {
      // TODO: Implement your logic for fetching your own product object
      // e.g. fetch('/products/[productIdentifier]', { method: 'GET' });

      return Promise.resolve(
          dummyProductObject
      );
  };


  // Add product to the native cart by SKU 
  // Return the result (success and reason in case of failure)
  storeApi.addToCart = (sku) => {
      // TODO: Implement your logic for adding a product variation to your native cart
      // e.g. fetch('/cart/add', { method: 'POST', body: JSON.stringify({ sku: sku, quantity: 1 }) });
      return Promise.resolve({
          success: true
      });
  };

  // Update the quantity of a product in the native cart by SKU 
  // Return the result (success and reason in case of failure)
  storeApi.updateItemInCart = (sku, quantity) => {
      // TODO: Implement your logic for updating your native cart
      // e.g. fetch('/cart/update', { method: 'POST', body: JSON.stringify({ sku: sku, quantity: quantity }) });
      return Promise.resolve({
          success: true
      });
  };

  // Remove the product from your native cart by SKU 
  // Return the result (success and reason in case of failure)
  storeApi.removeItemFromCart = (sku, quantity) => {

      // TODO: Implement your logic for removing the product from your native cart
      // e.g. fetch('/cart/remove', { method: 'POST', body: JSON.stringify({ sku: sku, quantity: 0 }) });
      return Promise.resolve({
          success: true
      });

  };


// funciones extra =======================================

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]${name}(=([^&#]*)|&|#|$)');
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getInfoProducts(sku){
var uri = "https://www.ripley.com.pe/wcs/resources/store/10651/productview/"+sku;
 
$.ajax({
    url : 'https://www.ripley.com.pe/wcs/resources/store/10651/productview/PMP00001178604',
    data : {},
    type : 'GET',
    dataType : 'json',
  	contentType: "application/x-www-form-urlencoded",
    success : function(json) {
        console.log(json)
        var opciones =[];
        for(var i=0;i<json.CatalogEntryView[0].Attributes.length;i++){
            opciones[i] = {
                        name: json.CatalogEntryView[0].Attributes[i].name,
                        optionId: json.CatalogEntryView[0].Attributes[i].uniqueID,
                        values: json.CatalogEntryView[0].Attributes[i].Values[0]            
                }        
        }

        var yourProduct = {
            "productId": json.CatalogEntryView[0].partNumber,
            "title": json.CatalogEntryView[0].name,
            "description": json.CatalogEntryView[0].longDescription,      
            "price": json.CatalogEntryView[0].Price[0].priceValue,
      
       }                
       console.log(yourProduct);

    },
    error : function(xhr, status) {
      console.log(xhr)
      console.log(status)
        alert('Disculpe, existió un problema');
    },
    complete : function(xhr, status) {
        //alert('Petición realizada');

                       

    } //cierro complete
});
    

}


//======================================== Bambuser onReady Handler ==============================================
  window.onBambuserOneToOneReady = function (BambuserOneToOneEmbed) {

      // This method will be invoked when embed.js has loaded and Bambuser
      // One-to-One API is available.
      // Creating an instance directly will allow to detect connect links 
      // that will automatically open the Live Meeting overlay on page load.
      let oneToOneEmbed = new BambuserOneToOneEmbed({
          orgId: 'bVFEAEHAhgJSskqvq52S', // REPLACE THIS WITH YOUR OWN ORG ID
          queue: getParameterByName('queue') || '',//if not specified, default queue configured from the dashboard will get applied

          // ACTIVATE OVERLAY WIDGET
          // The Overlay Widget (OLW) is an easy way to guide more visitors into the Call Widget.
          // By appearing automatically after configurable amount of seconds it guides visitors towards sales help at the right time.
          smartVariantOverride: 'Side dock', // force OLW variant 'Side dock'. Other option is 'Avatar'

          triggers: [
              'smart', // activate the overlay widget
              'connect-link' // activate the connect link - unrelated to OLW, yet mandatory
          ],
          popupTimeoutSeconds: '5', // after how many seconds OLW appears on the first time page load (default = 60)

          // PROVIDE CUSTOMER DATAâ€‹ 
          // Below information will be presented to the Agent during a call
          // You can either provide Build-in properties or custom properties
          // A full list of build in properties can be found on 
          // https://bambuser.com/docs/one-to-one/present-customer-data-to-agent/
        //   data: {
        //     firstName: "Joe", 
        //     lastName: "Doe",
        //     "Custom Field": "Test Ripley",
        //     "email": "jmillergomezs@gmail.com",
        //  },
        
         data: {
            firstName: "", 
            lastName: "",
            "SKU": __PRELOADED_STATE__.product.product.parentProductID,
         },
          // Bambuser follow  ISO 639-1 Code + "-" + ISO 3166-2 as standard locale format.
          // The value should be of type string
          locale: 'es-PE', // Call Widget language translation for the end user (default='en-US')
          allowFirstPartyCookies: false, // Configures if embed script is allowed to write first party cookies for tracking purposes (default=true)
          enableScanning: false, // Agent app will scan for barcodes and QR codes when adding product through scanning (default=false)
      });

      // Connect CTA button to open Bambuser One-to-One overlay.
      let button = document.querySelector('#start-one-to-one');
      button.addEventListener('click', () => {
          oneToOneEmbed.show();
      });


      // This is only for demonstration purposes
// Hardcoding products data is not recommended
oneToOneEmbed.on("provide-product-data", (event) => {
   event.products.forEach(async ({
       ref,
       type,
       id: bambuserId
   }) => {

       let sku;

    //    if (type === "url") {
    //        sku = yourMethodToTransformUrlToSku(ref)
    //    } else if (type === "scanned-code") {
    //        sku = yourMethodToTransformBarcodeToSku(ref)
    //    } else if (type === "product-reference") {
    //        sku = ref;
    //    }

       sku = ref;
       //const yourProduct = await yourGetProductMethod(sku);
       const yourProduct = await getInfoProducts(sku);
       console.log("entro...")

       oneToOneEmbed.updateProduct(bambuserId, (productFactory) => {
           return (
               productFactory
               .currency("USD")
               .locale("en-US")
               .product((detailFactory) =>
                   detailFactory
                   .name("Bambuser Hoodie")
                   .sku("1111")
                   .defaultVariationIndex(0)
                   .description("World's best hoodie")
                   .url("https://demo.bambuser.shop/product/14/bambuser-hoodie/")
                   .attributes((attribute) => [
                       attribute(1)
                       .name("Color")
                       .options((option) => [
                           option("Black").name("Black"),
                           option("White").name("White")
                       ]),
                       attribute(2)
                       .name("Size")
                       .options((option) => [
                           option("Small")
                           .name("Small")
                       ]),
                   ])
                   .variations((variationFactory) => [
                       variationFactory()
                       .name("Black Bambuser Hoodie")
                       .subtitle("Bambuser")
                       .sku("1111-black-small")
                       .inStock(true)
                       .imageUrls([
                           "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-front.png",
                           "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-right.jpeg",
                           "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-back.jpeg",
                           "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-left.jpeg"
                       ])
                       .price((priceFactory) =>
                           priceFactory
                           .original(150)
                           .current(100)
                       )
                       .attributes((attribute) => [
                           attribute(1, "Black"),
                           attribute(2, "Small"),
                       ])
                       .comparableAttributes((attribute) => [
                           attribute("Material", "100%")
                           .name("Cotton"),
                           attribute("Washing Instructions", "40 degrees")
                           .name("Washing Temperature")
                       ])
                       .relatedProducts((relatedProductFactory) => [
                           relatedProductFactory()
                           .title("Bambuser Cap")
                           .sku("2222")
                           .imageUrl("https://demo.bambuser.shop/wp-content/uploads/2021/09/cap_600x.jpeg")
                           .price(priceFactory =>
                               priceFactory
                               .current(30)),
                           relatedProductFactory()
                           .title("Bambuser Tote Bag")
                           .sku("3333")
                           .imageUrl("https://demo.bambuser.shop/wp-content/uploads/2020/09/bb-tote.png")
                           .price(priceFactory =>
                               priceFactory
                               .current(5))
                       ])
                       .details(detail => [
                           detail("BULLETS",
                               ["Loose fit",
                                   "Cropped length",
                                   "Functional fabric with soft-touch"
                               ])
                       ])
                       .rating(ratingFactory =>
                           ratingFactory
                           .maxValue(5)
                           .rating(4)
                           .numberOfRatings(23)
                       ),
                       variationFactory()
                       .name("White Bambuser Hoodie")
                       .subtitle("Bambuser")
                       .sku("2222-white-small")
                       .inStock(false)
                       .imageUrls([
                           "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-front.png",
                           "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-right.jpeg",
                           "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-back.jpeg",
                           "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-left.jpeg"
                       ])
                       .price((priceFactory) =>
                           priceFactory
                           .original(150)
                           .current(100)
                       )
                       .attributes((attribute) => [
                           attribute(1, "White"),
                           attribute(2, "Small"),
                       ])
                       .comparableAttributes((attribute) => [
                           attribute("Material", "100%")
                           .name("Cotton"),
                           attribute("Washing Instructions", "40 degrees")
                           .name("Washing Temperature")
                       ])
                       .relatedProducts((relatedProductFactory) => [
                           relatedProductFactory()
                           .title("Bambuser Cap")
                           .sku("2222")
                           .imageUrl("https://demo.bambuser.shop/wp-content/uploads/2021/09/cap_600x.jpeg")
                           .price(priceFactory =>
                               priceFactory
                               .current(30)),
                           relatedProductFactory()
                           .title("Bambuser Tote Bag")
                           .sku("3333")
                           .imageUrl("https://demo.bambuser.shop/wp-content/uploads/2020/09/bb-tote.png")
                           .price(priceFactory =>
                               priceFactory
                               .current(5))
                       ])
                       .details(detail => [
                           detail("BULLETS",
                               ["Loose fit",
                                   "Cropped length",
                                   "Functional fabric with soft-touch"
                               ])
                       ])
                       .rating(ratingFactory =>
                           ratingFactory
                           .maxValue(5)
                           .rating(4)
                           .numberOfRatings(23))
                   ])
               )
           );
       });
   });
});


      // The Call Widget triggeres 'should-add-item-to-cart' event when:
      // 1. When an agent clicks on Add to Cart button inside the agent tool
      oneToOneEmbed.on('should-add-item-to-cart', (addedItem, callback) => {

          storeApi.addToCart(addedItem.sku)
              .then(() => callback(true))
              .catch(error => {
                  if (error.message === yourOutOfStockErrorMessage) {
                      // Unsuccessful due to 'out of stock'!
                      callback({
                          success: false,
                          reason: "out-of-stock",
                      });
                  } else {
                      // Unsuccessful due to other problems
                      callback(false);
                  }
              });
      });

      // The Call Widget triggeres 'should-update-item-in-cart' event when:
      // 1. Whenever the agent modifies product quantity in the virtual cart inside Agent Tool
      // 2. Whenever the agent adds the same product to the cart that is already in the widget cart
      oneToOneEmbed.on('should-update-item-in-cart', (updatedItem, callback) => {

          if (updatedItem.quantity > 0) {
              storeApi.updateItemInCart({
                  sku: updatedItem.sku,
                  quantity: updatedItem.quantity,
              })
                  .then(() => {
                      // cart update was successful
                      callback(true);
                  })
                  .catch(error => {
                      if (error.message === yourOutOfStockErrorMessage) {
                          // Unsuccessful due to 'out of stock'!
                          callback({
                              success: false,
                              reason: "out-of-stock",
                          });
                      } else {
                          // Unsuccessful due to other problems
                          callback(false);
                      }
                  });
          }

          // user wants to remove the product from the cart
          if (updatedItem.quantity === 0) {
              storeApi.removeItemFromCart(updatedItem.sku)
                  .then(() => {
                      // successfully deleted item
                      callback(true);
                  })
                  .catch(() => {
                      // failed to delete item
                      callback(false);
                  });
          }
      });


      // The Call Widget triggeres 'goto-checkout' event when:
      // 1. When the customer clicks the Checkout button inside the Call Widget's virtual cart
      oneToOneEmbed.on('goto-checkout', (event) => {

          // You have two options to open the checkout page: 

          // OPTION 1:
          // Open checkout url in the same tab (enabled miniplayer)
          // The miniplayer player might not be compatible with all websites. Read more about how it works here:
          // https://bambuser.com/docs/one-to-one/floating-player
          oneToOneEmbed.floatAbove(window.location.origin + "/cart");

          // OPTION 2: 
          // Open checkout url in new tab and allow call to continue in current tab
          // window.open(window.top.location.origin + '/cart', '_blank');
      });
  }