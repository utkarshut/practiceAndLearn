Design a system that shows overall network health for devices.


functional requirement 
Device -> deviceId , status (UP/DOWN/DEGRADED), timestamp
Device Health Monitor -> HEALTHY, UNHEALTHY, OFFLINE
Frequent Alerts -> top K CPU_FAILURE , NETWORK_DOWN ,CPU_FAILURE ,MEMORY_HIGH
device Search System -> by status, by location 
Packet Prioritization -> HIGH, LOW
Log Analytic Dashboard -> most failed , error count , thread
Real-time Notification Engine -> Device DOWN > 3 mins
LRU Cache -> Cache frequently accessed device config.

Non functional
Scale to 1000+ devices
Near real-time updates(< 5 sec latency)
Highly available
Fault tolerant
Low memory footprint
Search should be fast



Entites

HealthMonitorManager 

Device
   deviceId
   status
   location
   lastHeartbeatTimestamp
   HealthMetric metric
   List<Alert> alerts
   DeviceConfig config

HealthMetric 
   cpuUsage
   memoryUsage
   networkLatency
   diskUsage
   threadCount
   
Alert
  alertId
  deviceId
  AlertType
  timestamp
  severity

DeviceConfig
   cpuThreshold
   memoryThreshold
   heartbeatInterval

Notification
  notificationId
  deviceId
  message
  NotificationType
  timestamp
  severity



Interface

HealthRule
CpuHealthRule
MemoryHealthRule
NetworkHealthRule


enum 

HealthStatus HEALTHY UNHEALTHY OFFLINE
DeviceStatus UP DOWN DEGRADED
PacketPriority HIGH LOW
AlertType  CPU_FAILURE,NETWORK_DOWN,MEMORY_HIGH
Severity   LOW,MEDIUM,HIGH,CRITICAL
NotificationType  EMAIL,SMS,SLACK

Service

FilterService
filter by status / location 

HealthMonitorService
calculateHealth(device)

AlertService
getTopKAlerts()
generateAlert()

NotificationService
notifyDownDevices()

DashboardService
getMostFailedDevices()
getErrorCount()

<!-- PacketService
addPacket()
processPacket() -->

CacheService
device config cache





DEVICE HEARTBEAT
        ↓
HealthMonitorManager
        ↓
HealthMonitorService
        ↓
HealthRules evaluate
(CPU/Memory/Network)
        ↓
HEALTHY / UNHEALTHY / OFFLINE
        ↓
AlertService
        ↓
NotificationService
(Device DOWN > 3 min)

DashboardService
        ↓
Analytics

FilterService
        ↓
Fast Search

CacheService
        ↓
Device Config