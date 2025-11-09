self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    let notificationData = {};
    try {
        notificationData = event.data.json();
    } catch (e) {
        notificationData = {
            title: 'Push Notification',
            body: event.data.text(),
        };
    }

    const title = notificationData.title || 'Device Notification';
    const options = { body: notificationData.body || 'An event occurred.' };
    event.waitUntil(self.registration.showNotification(title, options));
});
