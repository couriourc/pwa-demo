// service-worker.js
// All it does is add a listener for the push event, create the payload variable consisting of the text taken from the data (or create a string to use if data is empty)
self.addEventListener("push", (event) => {
    const payload = event.data?.text() ?? "no payload";
    event.waitUntil(
        self.registration.showNotification("ServiceWorker Cookbook", {
            actions: [
                {
                    action: "view-content",
                    title: "Yes",
                },
                {
                    action: "go-home",
                    title: "No",
                },
            ],
            body: payload,
        }),
    );
});

self.addEventListener("fetch", (requestor) => {
    console.log(requestor.request.url, requestor.request.url.indexOf("get_notifications"))
    if (requestor.request.url, requestor.request.url.indexOf("get_notifications")) {
        console.log(requestor.request)
        var notifTitle = "Notification";
        var notifBody = "Created by  CouriourC";
        var notifImg = "icons/logo.jpg";
        var options = {
            body: notifBody,
            icon: notifImg,
            vibrate: [300, 100, 300],
            requireInteraction: true,
            actions: [
                {
                    action: "view-content",
                    title: "Yes",
                },
                {
                    action: "go-home",
                    title: "No",
                },
            ],
        };
        self.registration.showNotification(notifTitle, options);
    }
})

