package parking.model;

import parking.enums.VehicleType;

public class Vehicle {
    private Integer vehicleId;
    private VehicleType vehicleType;
    public Vehicle(Integer vehicleId,VehicleType vehicleType){
          this.vehicleId = vehicleId;
          this.vehicleType = vehicleType;
    }
    public Integer getVehicleId() {
        return vehicleId;
    }
    public void setVehicleId(Integer vehicleId) {
        this.vehicleId = vehicleId;
    }
    public VehicleType getVehicleType() {
        return vehicleType;
    }
    public void setVehicleType(VehicleType vehicleType) {
        this.vehicleType = vehicleType;
    }
}
