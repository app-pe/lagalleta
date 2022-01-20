var sku = "2000388296420";
function getInfoProducts(){
    var sku = "2000388296420";
    $.ajax({
        //Propiedades de ajax
        method: "POST",
        url: "https://app-pe.github.io/lagalleta/exampleinfoskus.json",
        data: JSON.stringify(sku),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (info) {
        //Respuesta del servidor
        console.log(info);

        //valido que la data no sea nula
        if (info.d != null) {
            console.log("entro...");
            //initMap(info);
            // {
            //     "productId": "1111",
            //     "title": "Bambuser Hoodie",
            //     "description": "World's best hoodie",
            //     "brand": "Bambuser",
            //     "price": 100,
            //     "details": [
            //         "Loose fit",
            //         "Cropped length",
            //         "Functional fabric with soft-touch"
            //     ],
            //     "slug": "/product/14/bambuser-hoodie/",
            //     "collection": "Super soft series",
            //     "original_price": 150,
            //     "rating": {
            //         "averageRating": 4,
            //         "maxValue": 5,
            //         "numberOfRatings": 23
            //     },
            //     "comparableAttributes": [{
            //             "name": "Material",
            //             "value": "Cotton",
            //             "option": "100%"
            //         },
            //         {
            //             "name": "Washing Instructons",
            //             "value": "Washing Temperature",
            //             "option": "40 degrees"
            //         }
            //     ],
            //     "relatedProducts": [{
            //             "title": "Bambuser Cap",
            //             "sku": "2222",
            //             "thumbnail": "https://demo.bambuser.shop/wp-content/uploads/2021/09/cap_600x.jpeg",
            //             "price": 30
            //         },
            //         {
            //             "title": "Bambuser Tote Bag",
            //             "sku": "3333",
            //             "thumbnail": "https://demo.bambuser.shop/wp-content/uploads/2020/09/bb-tote.png",
            //             "price": 5
            //         }
            //     ],
            //     "options": [{
            //             "name": "Color",
            //             "optionId": 1,
            //             "values": [
            //                 "Black",
            //                 "White"
            //             ]
            //         },
            //         {
            //             "name": "Size",
            //             "optionId": 2,
            //             "values": [
            //                 "Small"
            //             ]
            //         }
            //     ],
            //     "variants": [{
            //             "variationId": "1111-black-small",
            //             "title": "Black Bambuser Hoodie",
            //             "option1": "Black",
            //             "option2": "Small",
            //             "available": true,
            //             "price": 100,
            //             "original_price": 150,
            //             "images": [
            //                 "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-front.png",
            //                 "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-right.jpeg",
            //                 "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-back.jpeg",
            //                 "https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-left.jpeg"
            //             ]
            //         },
            //         {
            //             "variationId": "1111-white-small",
            //             "title": "White Bambuser Hoodie",
            //             "option1": "White",
            //             "option2": "Small",
            //             "available": false,
            //             "price": 100,
            //             "original_price": 150,
            //             "images": [
            //                 "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-front.png",
            //                 "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-right.jpeg",
            //                 "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-back.jpeg",
            //                 "https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-left.jpeg"
            //             ]
            //         }
            //     ]
            // }                
        } else {                
            window.parent.location.href = "/Logout.aspx";                                
        }
        
    }) // cierro done
    

}