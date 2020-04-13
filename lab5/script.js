(function () {

    const imageWrapper = document.querySelector(".content-wrapper"),
        loaderDiv = document.querySelector(".loader"),
        apiUrl = "https://randomuser.me/api/";

    window.onload = () => {
        makeRequest(apiUrl, 50).then((httpRequest) => {
            renderContent(httpRequest);
        })
    };

    function makeRequest(url, peopleCount) {
        let httpRequest = false;
        return new Promise(function (resolve, reject) {
            if (window.XMLHttpRequest) { // Mozilla, Safari, ...
                httpRequest = new XMLHttpRequest();
                if (httpRequest.overrideMimeType) {
                    httpRequest.overrideMimeType('text/xml'); // For Mozila old versions
                }
            } else if (window.ActiveXObject) { // IE
                try {
                    httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    try {
                        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {
                        reject(e);
                    }
                }
            }

            httpRequest.onload = function () {
                resolve(httpRequest);
            };

            httpRequest.onerror = function (e) {
                reject(e);
            };

            httpRequest.open('GET', `${url}?results=${peopleCount || 1}`, true);
            httpRequest.send(null);

        });
    }

    function renderContent(httpRequest) {
        const results = JSON.parse(httpRequest.responseText).results;
        for (let res of results) {
            const newImg = document.createElement("img");
            newImg.setAttribute("src", res.picture.large);
            imageWrapper.appendChild(newImg);

        }
    }

    document.addEventListener("scroll", _.throttle((event) => {

        console.log(pageYOffset);
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            loaderDiv.style.display = "flex";
            loaderDiv.classList.add("show");
            makeRequest(apiUrl, 25).then((httpRequest) => {

                return renderContent(httpRequest);
            }).then(() => {

                setTimeout(() => {
                    loaderDiv.classList.remove("show");
                }, 1000);
            }).catch(e => {
                console.log(e);
            });

        }
    }, 500));
})()