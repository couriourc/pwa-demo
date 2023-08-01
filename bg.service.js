// service-worker.js
// All it does is add a listener for the push event, create the payload variable consisting of the text taken from the data (or create a string to use if data is empty)
self.addEventListener("push", (event) => {
    const payload = event.data?.text() ?? "no payload";
    event.waitUntil(
        self.registration.showNotification("ServiceWorker Cookbook", {
            body: payload,
        }),
    );
});



