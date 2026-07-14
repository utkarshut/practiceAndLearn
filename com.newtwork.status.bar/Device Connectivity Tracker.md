Device Connectivity Tracker

Devices send ONLINE/OFFLINE events.
Return currently active devices count.

- Functional
   device send online offline event 
   return active device count
   can have duplicate
   mark offline if device not update after 30 sec

- Non Functional
    device 20k


- Device
   deviceId
   deviceName
   deviceStatus
   lastLogTime

- DeviceTrackerService 
    getActiveDevices()
        ->  ConcurrentHashMap.keySet()
    getHeartBeat()
        | Initially loop over 10k fine for checking logtime 
        | add expiry in it whenever (deviceid expiryOrder) min heap
        | if 30 sec then will add 10 sec for scheduler
        | if same id then add new in same heap

- DeviceMetric 
    deviceId

- Flow
    Main 
       | loadDevices() -> HashMap() 
       |  -> <deviceId, deviceId>
       | setDeviceStatus(deviceId, deviceStatus(ONLINE/OFFLINE))
       |  -> setDeviceStatus()
       | getActiveDevices()
       |  ->  ConcurrentHashMap.keySet()
       | sheduleHeartbeatCheckJob()
       |  -> make job to check peek item from expirytime to current time 
       |  -> if same expiry in logtime then only delete 

  