window.onload = function() {
    function getText() {

        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET','image.jpg');
            xhr.responseType = "blob";
            xhr.send();

            xhr.onload = function() {
                if (this.status == 200) {
                    var img = new Image();
                    img.src = window.URL.createObjectURL(xhr.response);
                    resolve(img);
                }
                else {
                    reject(new Error("Network Error"));
                }
            };

            xhr.onerror = function() {
                reject(new Error("Network Error"));
            };

        });
    }

    async function main() {
        var greeting = await getText();

        document.body.appendChild(greeting);

    }

    main();

}
