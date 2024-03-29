
function buscarinfoskus(objprod){
var partnumber1 = objprod.sku;
for(var i=0;i<objprod.length;i++){
    if(objprod[i].partNumber == partnumber1){
        console.log(objprod[i]);
        return objprod[i];
    }
}
}


var objprod = [
    {
        "partNumber": "2000388296420",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "43",
                        "identifier": "43"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424313",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    },
    {
        "partNumber": "2000388296444",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "42",
                        "identifier": "42"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424315",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    },
    {
        "partNumber": "2000388296437",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "42.5",
                        "identifier": "42.5"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424314",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    },
    {
        "partNumber": "2000388296451",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "41.5",
                        "identifier": "41.5"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424316",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    },
    {
        "partNumber": "2000388296468",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "44",
                        "identifier": "44"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424317",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    },
    {
        "partNumber": "2000388296475",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "40.5",
                        "identifier": "40.5"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424318",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    },
    {
        "partNumber": "2000388296482",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "40",
                        "identifier": "40"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424319",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    },
    {
        "partNumber": "2000388296499",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "39.5",
                        "identifier": "39.5"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424320",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    },
    {
        "partNumber": "2000388296505",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "39",
                        "identifier": "39"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424321",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    },
    {
        "partNumber": "2000388296512",
        "stock": true,
        "ineligible": false,
        "is_published": true,
        "is_enabled": true,
        "Attributes": [
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Kaptir 2.0",
                        "identifier": "Kaptir 2.0"
                    }
                ],
                "identifier": "Modelo",
                "name": "Modelo",
                "displayable": true,
                "sequence": "2"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil",
                        "identifier": "Textil"
                    }
                ],
                "identifier": "material_forro",
                "name": "Material Forro",
                "displayable": true,
                "sequence": "8"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Textil / Sintético",
                        "identifier": "Textil / Sintético"
                    }
                ],
                "identifier": "material_plantilla_lov",
                "name": "Material Plantilla",
                "displayable": true,
                "sequence": "9"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "adidas_calzado_hombre",
                        "identifier": "adidas_calzado_hombre"
                    }
                ],
                "identifier": "tablas_tallas",
                "name": "Tablas de tallas",
                "displayable": false,
                "sequence": "19"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Hombre",
                        "identifier": "Hombre"
                    }
                ],
                "identifier": "genero_",
                "name": "Género",
                "displayable": true,
                "sequence": "4"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Zapatilla",
                        "identifier": "Zapatilla"
                    }
                ],
                "identifier": "estilo_zap",
                "name": "Estilo",
                "displayable": true,
                "sequence": "1"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Cordones",
                        "identifier": "Cordones"
                    }
                ],
                "identifier": "tipo_cierre",
                "name": "Tipo de cierre",
                "displayable": true,
                "sequence": "11"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Casual",
                        "identifier": "Casual"
                    }
                ],
                "identifier": "ocasion",
                "name": "Ocasión",
                "displayable": true,
                "sequence": "3"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Toda temporada",
                        "identifier": "Toda temporada"
                    }
                ],
                "identifier": "temporada",
                "name": "Temporada",
                "displayable": true,
                "sequence": "17"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Baja (1-2 cm)",
                        "identifier": "Baja (1-2 cm)"
                    }
                ],
                "identifier": "tipo_cana",
                "name": "Tipo de Caña",
                "displayable": true,
                "sequence": "15"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Sintético / Textil",
                        "identifier": "Sintético / Textil"
                    }
                ],
                "identifier": "material_zap",
                "name": "Material Zapato",
                "displayable": true,
                "sequence": "7"
            },
            {
                "usage": "Descriptive",
                "Values": [
                    {
                        "values": "Goma",
                        "identifier": "Goma"
                    }
                ],
                "identifier": "material_suela_lov",
                "name": "Material Suela",
                "displayable": true,
                "sequence": "10"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "Negro",
                        "identifier": "Negro"
                    }
                ],
                "identifier": "color_80",
                "name": "Color"
            },
            {
                "usage": "Defining",
                "Values": [
                    {
                        "values": "41",
                        "identifier": "41"
                    }
                ],
                "identifier": "talla_zapatos",
                "name": "Talla"
            }
        ],
        "SKUUniqueID": "38424322",
        "xCatEntryQuantity": 1,
        "images": [
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420_2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-1.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-2.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-3.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-4.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-5.jpg",
            "https://home.ripley.cl/store/Attachment/WOP/D317/2000388296420/2000388296420-6.jpg"
        ],
        "prices": {
            "formattedListPrice": "$59.990",
            "listPrice": 59990,
            "formattedOfferPrice": "$59.990",
            "offerPrice": 59990,
            "formattedDiscount": "$0",
            "discount": 0,
            "discountPercentage": 0,
            "ripleyPuntos": 480
        },
        "shipping": {
            "dDomicilio": true,
            "rTienda": true,
            "rCercano": false,
            "cashOnDelivery": false
        },
        "isMarketplaceProduct": false
    }
]