document.addEventListener("DOMContentLoaded", function(){


    loadComponent(
        "navbar",
        "components/navbar.html"
    );


    loadComponent(
        "sidebar",
        "components/sidebar.html"
    );


    loadComponent(
        "footer",
        "components/footer.html"
    );


});




function loadComponent(id, file){


    fetch(file)


    .then(response => {


        if(!response.ok){

            throw new Error(
                "File tidak ditemukan: " + file
            );

        }


        return response.text();


    })


    .then(data => {


        document.getElementById(id).innerHTML = data;


    })


    .catch(error => {


        console.error(error);


    });


}