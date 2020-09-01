const html5QrCode = new Html5Qrcode("reader", true);

function startScan() {
    let cameras = Html5Qrcode.getCameras();
    cameras.then(devices => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        const cameraNum = devices.length - 1;
        console.log("Camera Number: " + cameraNum)
        if (devices && devices.length) {
            cameraId = devices[cameraNum].id;
            return scanning(cameraId);
        }
    }).catch(err => {
        console.log("GetCameras. Error: " + err);
    });
}

function scanning(cameraId) {
    html5QrCode.start(
        cameraId,
        {
            fps: 10 // Optional frame per seconds for qr code scanning
        },
        qrCodeMessage => {
            alert("Message: " + qrCodeMessage);
            stopScan();
            return qrCodeMessage;
        },
        errorMessage => {
            // console.log("Error: " + errorMessage)
        })
        .catch(err => {
            console.log("Start failed. Error: " + err);
        });
}

function stopScan() {
    html5QrCode.stop().then(ignore => {
        // QR Code scanning is stopped.
    }).catch(err => {
        // Stop failed, handle it.
    });
}