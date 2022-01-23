var bodyID = document.getElementsByTagName("body")[0];
var headID = document.getElementsByTagName("head")[0];

var buttonAddCart = document.getElementsByClassName("product-buy-options")[0];
var btnBambUser = document.createElement('button');
btnBambUser.innerText = "CLICK BAMBUSER";
btnBambUser.id = "start-one-to-one";
buttonAddCart.appendChild(btnBambUser);



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


//======================================= funciones extra =======================================
function obtenerInformacionProducto(sku){
  //var sku = 'PMP00001178604';
  var aRespuesta = null, oData = {}, dummyProductObject = {};
  var oOptions = {
    cUrl: "https://www.ripley.com.pe/wcs/resources/store/10651/productview/" + sku,
    oData: oData,
    bAsync: false,
    cType: "GET",
    fComplete: function (oResponse, data) {
      aRespuesta = (data);
    }
  };
  try{
    (getUrlData(oOptions));
    dummyProductObject = formatoObjetoProducto(JSON.parse(aRespuesta));
  }catch(e){};
  
  return dummyProductObject;
}

function getUrlData(oOptions){
  //ConfiguraciÃ³n por defecto
  oDefaultOpc = {
    cUrl: "controlador/usuario.controlador.php/index",
    oData: {}, //Tipo de bÃ¹squeda
    contentType: "application/x-www-form-urlencoded", //application/json; charset=utf-8",
    cDataType: "JSON",
    cType: "GET",
    bAsync: false,
    bProcessData: true,
    fSuccess: function () {
    },
    fComplete: function () {
    }
  };
  //Reemplaza los valores del objecto "options" en configuraciÃ³n por defecto 
  oOptions = $.extend({}, oDefaultOpc, oOptions);
  //Realiza la peticiÃ³n al servidor

  __ejecutarSolicitud = function(oOptions){
    $.ajax({
      beforeSend: function () {},
      type: oOptions.cType,
      url: oOptions.cUrl,
      data: (oOptions.contentType === "application/x-www-form-urlencoded" || oOptions.contentType === "text/html; charset=utf-8" || oOptions.contentType === false) ? oOptions.oData : JSON.stringify(oOptions.oData),
      contentType: oOptions.contentType,
      dataType: oOptions.cDataType,
      async: oOptions.bAsync,
      processData: oOptions.bProcessData,
      method: oOptions.cType,
      success: function (response) {
        oOptions.fSuccess(response);
      },
      complete: function (response) {
        var responseText = response.responseText;
        try {
          var oData = JSON.parse(responseText).d;
          if ($.type(oData) === 'object' || $.type(oData) === 'array') {
            oOptions.fComplete(response, oData);
          } else {
            oOptions.fComplete(response, JSON.parse(oData));
          }
          //must be valid JSON
        } catch (e) {
          oOptions.fComplete(responseText, responseText);
        }
      },
      statusCode: {
        404: function () {
          console.log("statusCode 404 : PÃ¡gina no encontrada");
        }
      },
      error : function(e){}
    });
  }
  __ejecutarSolicitud(oOptions);
  return;
}

function obtenerDetalles(product){
  /* obtiene los atributos del padre */
  var details = [];
  try{
    $.each(product.Attributes, function(k,i){
      if(i.displayable == "true"){
        if(details.indexOf(i.name + ": " + i.Values[0].values) === -1){
          details.push(i.name + ": " + i.Values[0].values);
        }
      }
    });
  }catch(e){}
  return details;
}

function obtenerOpciones(product){
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

// function obtenerValorAtributo(nombre){
//     var valor = '';
//     try{
//       $.each(product.attributes, function(k,i){
//         if(i.name === nombre && valor === ""){
//           valor = i.value;
//         }
//       });
//     }catch(e){}
//     return valor;
//   }

function obtenerVariaciones(product){
    /* obtiene todos los atributos de los hijos */
  var variaciones = [], dataName = [], data = [],dataprices = [];
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
      $.each(k.prices, function(m,n){
        dataprices.push({
            "listPrice":n.listPrice
        });
        }); 
    });
    console.log(data);
    console.log(dataprices);
    /* por diferentes atributos */
    $.each(data, function(k,i){
      if(dataName.indexOf(i.name) === -1){
        dataName.push(i.name);
      }
    });
    console.log(dataName);
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
      variaciones.push(obj);
    });
  }catch(e){}
  console.log(variaciones);
  return variaciones;
    // "variationId": "1111-black-small",       
    //     "title": "Variacion 1",
    //     "option1": "Black",
    //     "option2": "Small",
    //     "available": true,
    //     "price": 100,
    //     "original_price": 150,
    //     "images": []
}

function formatoObjetoProducto(data){
  var product = data.CatalogEntryView[0],
      obj = {},
      price = product.Price[0].priceValue;
  var variaciones = obtenerVariaciones(product);    
  try{
    obj = {
      "productId": (product.partNumber).toUpperCase(),
      "title": (product.name).toUpperCase(),
      "description": product.shortDescription,
      "brand": "P-brand" /*obtenerValorAtributo("Marca")*/,
      "price": parseFloat(price),
      "details": obtenerDetalles(product),
      "slug": "/" + (product.partNumber).toUpperCase(),
      "collection": "P-collection",
      "original_price": parseFloat(price),    
      "rating": {
          "averageRating": 4,
          "maxValue": 5,
          "numberOfRatings": 23
      },
      "comparableAttributes": [{
          "name": "Material",
          "value": "Cotton",
          "option": "100%"
      },
      {
          "name": "Washing Instructons",
          "value": "Washing Temperature",
          "option": "40 degrees"
      }],
      "relatedProducts": [{
          "title": "Bambuser Cap",
          "sku": "2222",
          "thumbnail": "https://demo.bambuser.shop/wp-content/uploads/2021/09/cap_600x.jpeg",
          "price": 30
      },
      {
          "title": "Bambuser Tote Bag",
          "sku": "3333",
          "thumbnail": "https://demo.bambuser.shop/wp-content/uploads/2020/09/bb-tote.png",
          "price": 5
      }
      ],
      "options": [{
          "name": "Color",
          "optionId": 1,
          "values": [
              "Black",
              "White"
          ]
      },
      {
          "name": "Size",
          "optionId": 2,
          "values": [
              "Small"
          ]
      }],
      "variants": variaciones
    //   "variants": [{
    //     "variationId": "1111-black-small",       
    //     "title": "Variacion 1",
    //     "option1": "Black",
    //     "option2": "Small",
    //     "available": true,
    //     "price": 100,
    //     "original_price": 150,
    //     "images": [
    //         "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-front.png",
    //         "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-right.jpeg",
    //         "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-back.jpeg",
    //         "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-left.jpeg"
    //     ]
    // },
    // {
    //     "variationId": "1111-white-small",
    //     "title": "Variacion 2",
    //     "option1": "White",
    //     "option2": "Small",
    //     "available": false,
    //     "price": 100,
    //     "original_price": 150,
    //     "images": [
    //         "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-front.png",
    //         "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-right.jpeg",
    //         "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-back.jpeg",
    //         "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-left.jpeg"
    //     ]
    // }]
  };
  }catch(e){console.log(e)}
  return obj;
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]${name}(=([^&#]*)|&|#|$)');
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
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


      
      // The Call Widget triggeres 'provide-product-data' event when:
      // 1. When an Agent enters a product identifier in the Agent Tool UI
      // 2. When an Agent clicks on the "Recent Product" in the Agent Tool UI
      // 3. When an Agent clicks on the "Related Product" in the Agent Tool UI
      oneToOneEmbed.on("provide-product-data", (event) => {
        event.products.forEach(async ({
            ref,
            type,
            id: bambuserId
        }) => {

            // Mandatory to handle at least URL and SKU
            // Use the references provided above to fetch your product object
            // Provide product data to the widget using the methods below.
            // type: "url" | "product-reference" | "scanned-code"
            let sku;
            if (type === "url") {
                sku = yourMethodToTransformUrlToSku(ref)
            } else if (type === "scanned-code") {
                sku = yourMethodToTransformBarcodeToSku(ref)
            } else if (type === "product-reference") {
                sku = ref;
            }

            // Fetch your product
            const yourProduct = await obtenerInformacionProducto(sku);
            console.log(yourProduct);

            oneToOneEmbed.updateProduct(bambuserId, (productFactory) => {

                return (
                    productFactory

                    // Mandatory
                    // currency of the product
                    .currency("PEN")

                    // Mandatory
                    // locale that product is localized to
                    // Bambuser follow  ISO 639-1 Code + "-" + ISO 3166-2 as standard locale format.
                    // The value should be of type string
                    .locale("es-PE")

                    // Mandatory
                    // The product method contains a new chain
                    // these are methods specific to this actual product
                    .product((detailFactory) =>
                        detailFactory

                        // Optional
                        // Localized name of the product
                        .name(yourProduct.title)

                        // Optional 
                        // Sku of your product
                        .sku(yourProduct.productId)

                        // Optional
                        // Define the index of specific variation
                        // which will be selected by default when
                        // agent fetches a product

                            // Example:
                            //.defaultVariationIndex(yourMethodToGetVariationIndex(ref, type))
                        .defaultVariationIndex(0)

                        // Mandatory
                        // localized description for the product
                        .description(yourProduct.description)

                        // Optional
                        // URL for product
                        .url(window.location.origin + yourProduct.slug)

                        // Mandatory
                        // The attributes method contains a new chain
                        // returned array defines any dimensions (e.g. color, size, ...) of your product
                        .attributes((attribute) => {
                            return yourProduct.options.map((attr) =>

                                // Mandatory if your products contain more than one variant
                                // Attribute identifier
                                attribute(attr.optionId)

                                // Optional - If not provided,above specifed attribute identifier will replace it
                                // Localized name of the attribute
                                // This will show as a dropdown label in agent tool
                                .name(attr.name)

                                //Mandatory
                                // The options method contains a new chain
                                // Returned array available options of the dimension
                                .options((option) =>
                                    attr.values.map((optionName) =>

                                        // Mandatory
                                        // Option identifier
                                        option(optionName)

                                        // Optional
                                        // If not provided, above specifed option identifier will replace it
                                        // Localized name of the option
                                        // This will show as an option inside a dropdown in agent tool
                                        .name(optionName)
                                    )
                                )
                            );
                        })

                        // Mandatory
                        // The variations method contains a new chain
                        // Returned array defines variants (e.g. colors) of your product
                        .variations((variationFactory) =>
                            yourProduct.variants.map((variation) =>

                                // Mandatory
                                // The variationFactory method contains a new chain
                                // These are methods specific to this actual product variation
                                variationFactory()

                                // Mandatory
                                // Name of the variation
                                .name(variation.title)

                                // Optional
                                // Displayed below the price of the product
                                .subtitle(yourProduct.brand)

                                // Mandatory
                                // sku (or any other identifier for your product)
                                // specific down to this variation
                                .sku(variation.variationId)

                                // Optional
                                // Set whether this variation is in stock
                                // if false, the product wont be able to get added to the cart
                                // and it will get "Sold out" label when shown in the call
                                .inStock(variation.available)

                                // Mandatory
                                // list of image urls for the variation
                                // ordered the same as you want it displayed
                                .imageUrls(variation.images)

                                // Mandatory 
                                // The price method contains a new chain
                                // Defines price for the specific variation
                                .price((priceFactory) =>
                                    priceFactory

                                    // Optional
                                    // original price (in case current is a sale price)
                                    .original(variation.original_price)

                                    // Mandatory
                                    // current price of the product
                                    .current(variation.price)
                                )

                                // Mandatory if your products contain more than one variant
                                // The attributes method contains a new chain
                                // Returned array defines attributes for the unique variation
                                .attributes((attribute) =>
                                    yourProduct.options.map((attr) =>

                                        // Mandatory
                                        // Attribute identifier and option identifier that identifies the variation
                                        attribute(
                                            attr.optionId,
                                            variation["option" + attr.optionId]
                                        )
                                    )
                                )

                                // Optional
                                // List of extra specifications to show when comparing products.
                                // These will show on top of already specified attributes above
                                .comparableAttributes((attribute) =>
                                    yourProduct.comparableAttributes.map((compAttr) =>

                                        // Mandatory inside comparableAttributes()
                                        // Attribute identifier and option identifier that identifies the variation
                                        attribute(compAttr.name, compAttr.option)


                                        // Optional
                                        // If not provided, above specifed attribute identifier will replace it
                                        // Localized name of the comparable attribute
                                        // This will show as an attribute when comparing products
                                        .name(compAttr.value)))

                                // Optional 
                                // List of related products 
                                // that will be shown in agent product information view
                                .relatedProducts((relatedProductFactory) =>
                                    yourProduct.relatedProducts.map((relatProd) =>

                                        // Mandatory inside relatedProducts()
                                        // The relatedProductFactory method contains a new chain
                                        // These are methods specific to this actual related product
                                        relatedProductFactory()

                                        // Mandatory inside relatedProductFactory()
                                        // Title of the related product
                                        .title(relatProd.title)

                                        // Mandatory inside relatedProductFactory()
                                        // SKU of the related product
                                        // If agent clicks on the related product, the "provide-product-data" event 
                                        // will get triggered and pass this specific SKU as a reference
                                        .sku(relatProd.sku)

                                        // Mandatory inside relatedProductFactory()
                                        // string of the thumbnail image url for the related product
                                        .imageUrl(relatProd.thumbnail)

                                        // Mandatory inside relatedProductFactory()
                                        // The price method contains a new chain
                                        // Defines price for the specific variation
                                        .price(priceFactory =>
                                            priceFactory
                                            // Mandatory inside priceFactory
                                            // current price of the product
                                            .current(relatProd.price))
                                    )
                                )

                                // Optional
                                // Unique selling points of the variant or product 
                                // displayed on the product display page 

                                // Options: 
                                //    BULLETS - expect an array
                                //    PARAGRAPH - expects a string
                                .details(detail => [
                                    detail("BULLETS", yourProduct.details.map(
                                        (details) => details))
                                ])

                                // Optional
                                // The rating method contains a new chain
                                // Defines rating for the specific variant or product
                                /// Rating are displayed as stars
                                .rating(ratingFactory =>
                                    ratingFactory

                                    // Mandatory inside ratingFactory
                                    // Specify number max value 
                                    // This equal to the amount of total stars
                                    // For best UI experience we do not recommend exceeding 10
                                    .maxValue(yourProduct.rating.maxValue)

                                    // Mandatory inside ratingFactory
                                    // Average rating of your product 
                                    // This equals to how many amount of total stars are filled
                                    // Should be equal or lower than the maxValue
                                    .rating(yourProduct.rating.averageRating)

                                    // Optional
                                    // Number rating of your variant or product
                                    // Displayed next to the star ratings                           
                                    .numberOfRatings(yourProduct.rating.numberOfRatings))
                            )
                        )
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
