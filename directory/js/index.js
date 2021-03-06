const cam = document.getElementById('cam')

navigator.mediaDevices.enumerateDevices()
    .then(devices => {
       if (Array.isArray(devices)) {
           devices.forEach(device => {
               console.log(device)
               if(device.kind === 'videoinput'){
                    if(device.groupId.includes('419a41b02cb0c6fac23fa8fc3757eed3d5ce43da926f6519acbe4a7f256bebda')){
                        navigator.getUserMedia(
                            { video: {
                                deviceId: device.groupId
                            }},
                            stream => cam.srcObject = stream,
                            error => console.error(error)
                        )
                    }
               }
           })
       }
    })