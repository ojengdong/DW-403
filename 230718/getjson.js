$.getJSON("test_data.json", function(data) {
    for(var i = 0; i < data.info.length; i++){
        if(data.info[i].addr.indexOf("동구") != -1){
            $("#list").append(
                "<tr><td class=name>"+data.info[i].name+"</td><td class=age>"
                +data.info[i].age+"</td><td class=addr>"+data.info[i].addr+"</td>"
            ) 
        }
       
    }
    
  });