Design Network Status Bar
- NEXT
  Performance for 100k router
  Message 
  UI if want to show router wise status dashboard

- Classes
    Router 
      routerId
      routerLocation
      routerStatus
      lastReportedTimestamp

    RouterReport
      routerId
      latency
      packetLoss
      cpu
      link
      priortiy
      timeStamp
    
    RouterService
      calculateRouterHealth()
      calculateOverallNetworkHealth()
      checkHeartbeat()
      processRouterReport()
        - will calculate the score 
          e.g GREEN 100 YELLOW 50 RED 200  

    RuleConfigService
       getRuleForGreenStatus()
       getRuleForYellowStatus()
       getRuleForRedStatus()
       getRouterPriority()
        GREEN
        - latency < 100ms
        - packet loss < 1%
        - cpu < 70%
        - link UP

        YELLOW
        - latency 100–300ms
        - packet loss 1–3%
        - cpu 70–90%

        RED
        - latency > 300ms
        - packet loss > 3%
        - cpu > 90%
        - link DOWN
          
    
    enums
      RouterStatus -> GREEN / YELLOW / RED / OFFLINE
      Link
      RouterPriority



      
    