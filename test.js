
function getInfoProducts(){
    
  var data = {
        sku: "2025249660400",
        country: "pe",
        sessionkey: ""
    }

    $.ajax({
        //Propiedades de ajax
        method: "POST",
        url: "https://ripley-retail-com-prod.apigee.net/content-orchestrator/products/bysku",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (info) {
        //Respuesta del servidor
        console.log(info);

        //valido que la data no sea nula
        if (info.d != null) {
            console.log("entro...");
            
        } else {                
            console.log("no entro...");
            //window.parent.location.href = "/Logout.aspx";                                
        }
        
    }) // cierro done
    

}
